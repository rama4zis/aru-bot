import { Client, LocalAuth } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

const MessageHandler = require('./handler/messageHandler');

client.on('message', async message => {

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
    }

    let result = new MessageHandler(client, message);

    result.checkMessage();
});