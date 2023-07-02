import MessageHandler from "../handler/messageHandler";


class StickerController extends MessageHandler {

    async stickerNormal() {
        if (this.msgData.hasMedia) {
            const media = await this.msgData.downloadMedia(); // Download Image
            this.client.sendMessage(this.msgData.from, media, {
                sendMediaAsSticker: true,
                stickerAuthor: '+62 895-4139-26068',
                stickerName: 'Aru Chatbot'
            })
        } else {
            this.client.sendMessage(this.msgData.from, 'Kirim gambar dengan caption .s');
        }
    }

}

export = StickerController;