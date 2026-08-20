# Application Portal

## What this does
A GitHub Pages application site with:
- Dev Apps
- Mod Apps
- Value List Apps
- Discord username at the top
- up to 150 questions per section
- automatic Discord embed splitting
- free serverless backend

## Easiest setup

### A. Discord
1. Open your target Discord channel.
2. Channel Settings -> Integrations -> Webhooks.
3. Create webhook.
4. Copy the webhook URL.
5. Keep it secret.

### B. Cloudflare Worker
1. Make a free Cloudflare account.
2. Workers & Pages -> Create application -> Worker.
3. Paste `worker/worker.js`.
4. Add an environment variable/secret named `DISCORD_WEBHOOK_URL`.
5. Paste the Discord webhook URL as its value.
6. Deploy.
7. Copy the Worker URL.

### C. GitHub
1. Create a GitHub repository.
2. Upload everything except nothing needs to be hidden: the webhook is NOT stored here.
3. Open `app.js`.
4. Replace `PASTE_YOUR_WORKER_URL_HERE` with your Worker URL.
5. Enable GitHub Pages from Settings -> Pages -> deploy from `main` / root.

### D. Questions
Edit `config/questions.js`.

Example:
["4"]:"What is your experience with moderation?"

You can have up to 150 questions in EACH section.

### Security
The Discord webhook never belongs in the GitHub Pages files. It stays as a Cloudflare Worker secret.

For a public production application system, add Cloudflare Turnstile/rate limiting and ideally Discord OAuth to prevent impersonation/spam.
