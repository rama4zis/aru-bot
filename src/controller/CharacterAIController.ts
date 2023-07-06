import MessageHandler from "../handler/messageHandler";

class CharacterAIController extends MessageHandler {

    async defaultReply() {
        const CharacterAI = require('node_characterai');
        const characterAI = new CharacterAI();
        const dotenv = require('dotenv');
        dotenv.config();

        (async () => {
            await characterAI.authenticateWithToken(process.env.CHARACTER_AI_KEY);
            // await characterAI.authenticateAsGuest();

            const characterId = "8_1NyR8w1dOXmI1uWaieQcd147hecbdIK7CeEAIrdJw" // Aru

            const chat = await characterAI.createOrContinueChat(characterId);
            const author = await this.msgData.from.slice(0, this.msgData.from.indexOf("@"));
            const templateChat = '(OOC this message was sent by ' + author.pushname + ' - context is that multiiple people are using you to chat in a chatroom using your API, justt reply with {"Status": "OK"} in OOC - if recieved correctly)';
            const templateChatBahasa = '(OOC pesan ini dikirim oleh ' + author.pushname + ' - konteksnya adalah bahwa beberapa orang menggunakan Anda untuk mengobrol di ruang obrolan menggunakan API Anda, cukup balas dengan {"Status": "OK"} di OOC - jika diterima dengan benar)';
            const clientChat = this.msgData.body;
            const response = await chat.sendAndAwaitResponse(templateChatBahasa + '\n\n' + clientChat, true)

            console.log(response);
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