Web Profile

Nextjs13
Tailwind
Framer Motion

web yg perlu di bookmark:

1. https://react-svgr.com/playground/ -- buat bikin svg jadi component react
2. https://www.erase.bg/ -- remove background foto
3. https://www.canva.com/templates/?category=tACFajEYUAM&doctype=TABQqs5Kbyc -- canva istagrampost create template
4. https://convertio.co/png-svg/ -- convert image to svg

saran:

1. profile picture pake WPAP Generator

build & push image:

dari server / mesin amd64:

```
docker build -t registry.adefarhan.my.id/web-profile:latest .
docker push registry.adefarhan.my.id/web-profile:latest
```

dari Mac (Apple Silicon) — WAJIB pakai buildx:

```
docker buildx build --platform linux/amd64 \
  --provenance=false --sbom=false \
  -t registry.adefarhan.my.id/web-profile:latest \
  --push .
```

kenapa beda:

1. `--platform linux/amd64` — server-nya amd64, Mac-nya arm64. `docker build` biasa
   menghasilkan image arm64 yang ke-push dan ke-pull tanpa keluhan apa pun, lalu
   menolak jalan di server.
2. `--provenance=false --sbom=false` — tanpa ini buildx melampirkan attestation,
   jadi tag-nya berubah jadi index dengan entri `unknown/unknown`. `docker pull`
   mengabaikannya, tapi `docker compose pull` menelusuri seluruh index dan ikut
   mengambilnya — satu request registry ekstra untuk catatan build yang tidak ada
   yang baca.
3. buildx build sekaligus push (`--push`), jadi tidak ada `docker push` terpisah.

login dulu sekali: `docker login registry.adefarhan.my.id`
