// Custom entry point for Hostinger (Phusion Passenger)
// Passenger requires a server.js file as the startup entry.
// This uses Next.js standard production mode (not standalone).

const { createServer } = require("http");
const next = require("next");
const { parse } = require("url");

const app = next({ dev: false });
const handle = app.getRequestHandler();
const port = parseInt(process.env.PORT, 10) || 3000;

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res, parse(req.url, true));
  }).listen(port, "0.0.0.0", () => {
    console.log(`> Ready on http://0.0.0.0:${port}`);
  });
});
