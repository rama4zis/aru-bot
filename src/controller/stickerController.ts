import MessageHandler from "../handler/messageHandler";


class StickerController extends MessageHandler {

    async stickerNormal() {
        if (this.msgData.hasMedia && this.msgData.type === 'image') {
            const media = await this.msgData.downloadMedia(); // Download Image
            this.client.sendMessage(this.msgData.from, media, {
                sendMediaAsSticker: true,
                stickerAuthor: '+62 895-4139-26068',
                stickerName: 'Arisu Chatbot'
            })
        } else {
            this.client.sendMessage(this.msgData.from, 'Kirim gambar dengan caption .s');
        }
    }

    async stickerGif() {
        if (this.msgData.hasMedia && this.msgData.type === 'video') {
            try {

                const media = await this.msgData.downloadMedia();
                this.client.sendMessage(this.msgData.from, media, {
                    sendMediaAsSticker: true,
                    stickerAuthor: '+62 895-4139-26068',
                    stickerName: 'Arisu Chatbot'
                })
            } catch (error) {
                console.log(error);
            }
        }
    }

}

export = StickerController;