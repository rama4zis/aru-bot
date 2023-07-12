import MessageHandler from "../handler/messageHandler";

class CharacterAIController extends MessageHandler {

    async defaultReply(author: string) {
        const CharacterAI = require('node_characterai');
        const characterAI = new CharacterAI();
        const dotenv = require('dotenv');
        dotenv.config();

        (async () => {
            await characterAI.authenticateWithToken(process.env.CHARACTER_AI_KEY);
            // await characterAI.authenticateAsGuest();

            const characterId = "JTYgp4_uB1WOPttH8QRB94hJ1Y61KmEKcKnfmGPBIIc" // Aru

            const chat = await characterAI.createOrContinueChat(characterId);
            // const pushName = await this.msgData.getContact();
            // const author = pushName.pushname;
            const templateChat = '(OOC this message was sent by ' + author + ' - context is that multiiple people are using you to chat in a chatroom using your API, justt reply with {"Status": "OK"} in OOC - if recieved correctly)';
            const templateChatBahasa = 'Pesan ini dikirim oleh ' + author + ' - konteksnya adalah bahwa beberapa orang menggunakan Anda untuk mengobrol di ruang obrolan menggunakan API Anda)';
            const clientChat = this.msgData.body;
            const response = await chat.sendAndAwaitResponse(templateChatBahasa + '\n\n' + clientChat, true)

            console.log('Me: ' + templateChatBahasa + '\n\n' + clientChat);

            console.log('Bot: ' + response.text);
            // use response.text to use it in a string.

            try {
                const textResponse = response.text;
                const sendResponse = textResponse.slice(textResponse.indexOf('}') + 1);
                this.client.sendMessage(this.msgData.from, sendResponse)
            } catch (error) {
                console.log(error)
            }
        })();

    }

}

export = CharacterAIController;