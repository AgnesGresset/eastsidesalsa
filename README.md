# EastSideSalsa

## Local

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Checks

```bash
npm run lint
npm run format
npm run typecheck
npm test
```

## Docker

Copy `.env.example` to `.env`. Point the DNS A records for both hostnames at this server. Generate the stage password hash and put it in `STAGE_AUTH_HASH`:

```bash
docker run --rm caddy:2-alpine caddy hash-password --plaintext 'your-password'
```

```bash
docker compose up -d --build
```

Caddy listens on ports 80 and 443. The Next containers stay on the Docker network. `example.com` proxies to the prod image. `stage.example.com` asks for basic auth first, then proxies to the stage image, sends `X-Robots-Tag: noindex, nofollow`, and serves a robots.txt that disallows everything.

Prod and stage are separate image tags (`eastsidesalsa:prod` and `eastsidesalsa:stage`). Build the one you want to replace:

```bash
docker compose build web
docker compose build web-stage
```
