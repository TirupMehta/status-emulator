# Status Emulator: Static Discord Rich Presence

A clean and efficient Node.js script to simulate a customized Discord Rich Presence (RPC) session. Designed with simplicity and extensibility in mind, this tool enables developers to present a persistent, professional-looking presence within Discord.

---

## Overview

This utility allows users to set a static presence in Discord, complete with images, tooltips, and custom text. Ideal for showcasing a development-focused status, personal branding, or creating a polished profile impression during live streams, meetings, or day-to-day usage.

---

## Requirements

* Node.js installed on your system
* Discord Desktop Application running
* A registered Discord Developer Application with image assets configured

---

## Setup Instructions

### 1. Create a Discord Application

* Navigate to the [Discord Developer Portal](https://discord.com/developers/applications)
* Click on "New Application" and assign it a suitable name

### 2. Configure Rich Presence

* In the left-hand menu, select **Rich Presence** > **Art Assets**
* Upload two square image assets (recommended: 512x512 pixels)
* Note the names of the uploaded assets (do not use file names)

### 3. Customize the Script

Open the script file `fake-vscode.js` and modify the following fields:

* `clientId`: Replace with your actual Discord Application Client ID
* `largeImageKey` and `smallImageKey`: Use the names of your uploaded images
* `details`, `state`, `largeImageText`, and `smallImageText`: Customize as desired
* `startTimestamp`: Optional; use ISO 8601 format or omit if not required

### 4. Execution

Run the script via terminal:

```bash
node status-emulator.js
```

If configured properly, your customized status will appear instantly on your Discord profile.

---

## Example Configuration

```javascript
const clientId = '123456789012345678';
const largeImageKey = 'code-icon';
const smallImageKey = 'terminal';
const largeImageText = 'Working on something meaningful';
const smallImageText = 'Terminal interface';
const details = 'Developing high-quality software';
const state = 'Module: app.core.ts';
const startTimestamp = new Date('2020-01-01T00:00:00Z');
```

---

## Troubleshooting

* Ensure the Discord desktop app is active before running the script
* Verify that the Client ID and image keys are accurate
* Image assets must be fully processed and approved by Discord before being usable
* Make sure Node.js is correctly installed and accessible in your system path

---

## Author

Tirup Mehta

Crafted with attention to detail, this project reflects a refined approach to enhancing presence in digital spaces.

---

## License

This project is distributed under the MIT License. It is free for both personal and commercial use.
