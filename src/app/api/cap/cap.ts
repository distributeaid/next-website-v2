import Cap from "@cap.js/server";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

declare global {
  var cap: Cap | undefined;
}

export default async () => {
  if (!globalThis.cap) {
    globalThis.cap = await initCap();
  }

  return globalThis.cap;
};

async function initCap() {
  const db = await open({
    filename: "/tmp/database.db",
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS challenges (
      token TEXT PRIMARY KEY,
      data JSON NOT NULL,
      expires BIGINT NOT NULL
    );
  `);

  await db.exec(`
    CREATE TABLE IF NOT EXISTS tokens (
      key TEXT PRIMARY KEY,
      expires BIGINT NOT NULL
    );
  `);

  let cap = new Cap({
    storage: {
      challenges: {
        store: async (token, challengeData) => {
          await db.run(
            `INSERT INTO challenges (token, data, expires)
             VALUES (?, ?, ?)
             ON CONFLICT (token)
             DO UPDATE SET data = excluded.data, expires = excluded.expires`,
            token,
            JSON.stringify(challengeData),
            challengeData.expires,
          );
        },
        read: async (token) => {
          const row = await db.get(
            `SELECT data, expires FROM challenges
             WHERE token = ? AND expires > ? LIMIT 1`,
            token,
            Date.now(),
          );
          return row
            ? { challenge: JSON.parse(row.data), expires: Number(row.expires) }
            : null;
        },
        delete: async (token) => {
          await db.run(`DELETE FROM challenges WHERE token = ?`, token);
        },
        deleteExpired: async () => {
          await db.run(`DELETE FROM challenges WHERE expires <= ?`, Date.now());
        },
      },
      tokens: {
        store: async (tokenKey, expires) => {
          await db.run(
            `INSERT INTO tokens (key, expires)
             VALUES (?, ?)
             ON CONFLICT (key)
             DO UPDATE SET expires = excluded.expires`,
            tokenKey,
            expires,
          );
        },
        get: async (tokenKey) => {
          const row = await db.get(
            `SELECT expires FROM tokens
             WHERE key = ? AND expires > ? LIMIT 1`,
            tokenKey,
            Date.now(),
          );
          return row ? Number(row.expires) : null;
        },
        delete: async (tokenKey) => {
          await db.run(`DELETE FROM tokens WHERE key = ?`, tokenKey);
        },
        deleteExpired: async () => {
          await db.run(`DELETE FROM tokens WHERE expires <= ?`, Date.now());
        },
      },
    },
  });

  return cap;
}
