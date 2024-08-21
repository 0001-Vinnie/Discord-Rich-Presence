const RPC = require('discord-rpc');
const clientId = '0000'; // Client ID you received from Discord Developer Portal

// Initialize Discord RPC
const rpc = new RPC.Client({ transport: 'ipc' });

rpc.on('ready', () => {
    rpc.setActivity({
        details: ' - ', //Your detail
        state: ' - ', //Your Status
        startTimestamp: new Date(),
        largeImageKey: ' - ', // Your Large image key
        largeImageText: ' - ', // Your Large image text
        smallImageKey: ' - ', // Your Small image key
        smallImageText: ' - ', // Your Small image text
        buttons: [
            { label: ' - ', url: ' - ' }, // Label = Button name // Url = Button purpose
            { label: ' - ', url: ' - ' }, // Label = Button name // Url = Button purpose
        ]
    });

    console.log('Rich Presence is now active!');
});

rpc.login({ clientId }).catch(console.error);
