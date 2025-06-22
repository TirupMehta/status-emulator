// status-emulator: Static Discord Rich Presence
// Author: Tirup Mehta
// ------------------------------------------------
// This script sets a fixed custom Discord presence.
// It uses the local Discord Rich Presence (RPC) connection.
//
// ✅ Requirements:
// 1. Node.js installed
// 2. Discord Desktop app running
// 3. A Discord Developer Application with images uploaded
//
// 🔧 Setup Instructions:
// 1. Go to https://discord.com/developers/applications
// 2. Create a new application (any name you want)
// 3. Copy the "Client ID" and paste it below
// 4. In the left menu, go to "Rich Presence" > "Art Assets"
// 5. Upload two square images (512x512 recommended)
//    → After uploading, note the names (NOT filenames)
// 6. Replace the image key strings below with your uploaded names
// 7. Customize the text and timestamp if needed
//
// ▶️ Run the script:
//    node fake-vscode.js
// -----------------------------------------------

const RPC = require('discord-rpc');

// 1. Your Application's Client ID (required)
const clientId = 'YOUR_CLIENT_ID_HERE'; // Example: '123456789012345678'

// 2. Image keys (must match uploaded image names in your Discord app)
const largeImageKey = 'your_large_image'; // e.g. 'code-icon'
const smallImageKey = 'your_small_image'; // e.g. 'terminal'

// 3. Optional tooltips when you hover on images
const largeImageText = 'Working on something cool';
const smallImageText = 'Terminal mode';

// 4. Custom status info
const details = 'Writing code like a pro';       // Top line
const state = 'editing: app.module.ts';          // Subtext line

// 5. Set start time (optional)
// You can use any ISO 8601 format date string
const startTimestamp = new Date('2020-01-01T00:00:00Z');

// ----------------------
// Do not edit below this line unless needed
// ----------------------

const client = new RPC.Client({ transport: 'ipc' });

client.on('ready', () => {
  client.setActivity({
    details,
    state,
    startTimestamp,
    largeImageKey,
    largeImageText,
    smallImageKey,
    smallImageText,
    instance: false
  });

  console.log('✔ Discord status is now active.');
});

client.login({ clientId }).catch(err => {
  console.error('❌ Failed to connect to Discord:', err.message);
});
