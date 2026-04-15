module.exports = {
  apps: [
    {
      name: "next-website-v2",
      cwd: "/home/deploy/next-website-v2",
      script: "yarn",
      args: "start",
      interpreter: "none",
      env_file: ".env",
      env: {
        NODE_ENV: "production",
        NODE_OPTIONS: "--max-old-space-size=2048",
      },
    },
  ],
};
