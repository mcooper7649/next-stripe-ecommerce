# Self-hosting

Live at **https://gorilla-ears.mycodedojo.com**, self-hosted on Michael's homelab (moved off Netlify/Vercel in October 2026).

It runs as a container in the `portfolio-projects` Docker Compose stack on the homelab (`~/portfolio-projects`, visible in Portainer), behind Caddy.

**Redeploy after pushing to `main`:**

```bash
ssh mcooper@192.168.68.75 '~/portfolio-projects/deploy.sh gorilla-ears'
```

**Run locally:**

```bash
docker build -t gorilla-ears .
docker run -p 3000:3000 gorilla-ears
```

## Configuration

- **Content:** Sanity project `dbb5uvgd` (public read; `NEXT_PUBLIC_SANITY_TOKEN` optional).
- **Checkout:** set `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` and `NEXT_PUBLIC_STRIPE_SECRET_KEY` for real Stripe checkout. Without them the cart shows a "Demo store" toast and takes no payment.
