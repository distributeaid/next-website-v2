# Docker Development Setup

This project uses Docker Compose with the `watch` feature for an optimized development experience with hot-reloading capabilities.

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) or [Docker Engine](https://docs.docker.com/engine/install/ubuntu/)

## Quick Start

Start the development environment:

```bash
docker compose up --watch
```

Application will be available at http://localhost:3000.

## Architecture

### Dockerfile.dev

The development Dockerfile is optimized for local development:

- **Base Image**: `node:20.0.0-alpine` - Lightweight Alpine-based Node.js image
- **Working Directory**: `/app`
- **Dependency Installation**: Uses BuildKit cache mount for faster, cached yarn installations
- **Immutable Mode**: Dependencies are installed with `--immutable` flag for reproducible builds
- **Development Command**: Runs `yarn dev` to start the Next.js development server

### Docker Compose Configuration

The `docker-compose.yml` file defines a single service `frontend_dev` with the following features:

- **Image**: `frontend:dev` (built locally, never pulled from registry)
- **Container Name**: `frontend-dev`
- **Port Mapping**: `3000:3000` (host:container)
- **Environment File**: `.env.local`

## Docker Compose Watch

The setup uses Docker Compose watch for intelligent file synchronization and automatic rebuilds. Different file types trigger different actions:

### Source Code Changes (Hot Reload)

Files in `/src` and `/public` directories:

- **Action**: `sync`
- **Behavior**: Files are synced to the container without restart, changes are hot-reloaded

### Configuration Changes (Restart Required)

Configuration files:

- `next.config.ts`
- `tailwind.config.ts`
- `postcss.config.js`
- **Action**: `sync+restart`
- **Behavior**: Files are synced and the container is restarted to apply configuration changes

### Dependency Changes (Rebuild Required)

Dependency files:

- `package.json`
- `yarn.lock`
- `.yarnrc.yml`
- `.yarn/` directory
- **Action**: `rebuild`
- **Behavior**: The Docker image is rebuilt to install new/updated dependencies and the container is replaced with the new image

## Development Workflow

1. **Initial Setup**: Run `docker compose up --watch` to build and start the container
2. **Code Changes**: Edit files in `/src` or `/public` - changes sync automatically with hot-reload
3. **Config Changes**: Edit config files - container restarts automatically
4. **Dependency Changes**: Add/remove packages in `package.json` - image rebuilds automatically
5. **Stop**: Press `Ctrl+C` or run `docker compose down` (optionally, use `docker compose down --rmi all` to remove image)

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, modify the port mapping in `docker-compose.yml`:

```yaml
ports:
  - 3001:3000 # Use port 3001 on host
```

### Dependency Issues

If you encounter dependency-related errors, force a rebuild:

```bash
docker compose up --watch --force-recreate
```

### Stale Cache

To clear Docker cache and rebuild from scratch:

```bash
docker compose down
docker system prune -f
docker compose up --watch
```

### Watch Not Working

Ensure your Docker Compose version is `2.22.0` or higher:

```bash
docker compose version
```

## References

- [Docker Compose Watch](https://docs.docker.com/compose/file-watch/)
