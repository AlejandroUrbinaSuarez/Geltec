// Custom entry point for Hostinger Node.js hosting
// This file bootstraps the Next.js standalone server
// and ensures static files are served correctly.

const path = require("path");
const fs = require("fs");

const standaloneDir = path.join(__dirname, ".next", "standalone");
const standaloneServer = path.join(standaloneDir, "server.js");

// Ensure static assets are in the right place for standalone server
const staticSrc = path.join(__dirname, ".next", "static");
const staticDest = path.join(standaloneDir, ".next", "static");
const publicSrc = path.join(__dirname, "public");
const publicDest = path.join(standaloneDir, "public");

function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Always copy fresh static files (removes stale hashes from previous builds)
if (fs.existsSync(staticSrc)) {
  if (fs.existsSync(staticDest)) {
    fs.rmSync(staticDest, { recursive: true });
  }
  console.log("Copying static assets to standalone directory...");
  copyDirSync(staticSrc, staticDest);
}
if (fs.existsSync(publicSrc)) {
  if (fs.existsSync(publicDest)) {
    fs.rmSync(publicDest, { recursive: true });
  }
  console.log("Copying public assets to standalone directory...");
  copyDirSync(publicSrc, publicDest);
}

// Set production environment
process.env.NODE_ENV = "production";

// Ensure the standalone server exists
if (!fs.existsSync(standaloneServer)) {
  console.error("Standalone server not found. Run 'npm run build' first.");
  process.exit(1);
}

// Change to standalone directory and start the server
process.chdir(standaloneDir);
require(standaloneServer);
