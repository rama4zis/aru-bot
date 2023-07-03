import { Client, LocalAuth } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import ffmpeg from '@ffmpeg-installer/ffmpeg'

import sleep = require('./helper/delay');

const chromium = require('chromium');


const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        executablePath: chromium.path,
        args: ['--no-sandbox'],
        ignoreHTTPSErrors: true
    },
    ffmpegPath: ffmpeg.path
});

import GetMsg = require('./events/GetMsg');

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

client.on('message', async message => {

    await sleep(2000);
    // console.log(message);
    if (message.body === '!ping') {

        // message.reply('pong'); // Reply to the user's message
        client.sendMessage(message.from, 'pong'); // Send a new message to the user
    }

    const chat = message.body.toLowerCase();

    if (chat === 'hi' || chat === 'halo' || chat === 'hai' || chat === 'hello') {
        const chat = await message.getChat();
        const contact = await message.getContact();

        await chat.sendMessage(`Hello @${contact.id.user}`, {
            mentions: [contact]
        });
        return;
    }

    let result = new GetMsg(client, message);

    result.checkMessage();
});