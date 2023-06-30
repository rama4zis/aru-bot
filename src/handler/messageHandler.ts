class MessageHandler {
    msgData: any
    client: any
    constructor(client: any, msgData: any) {

        this.msgData = msgData
        this.client = client
    }

    async checkMessage() {

        const chat = this.msgData.body.toLowerCase();

        switch (true) {
            case chat === '.s':
                // check if msg has media 
                console.log('test media')
                if (this.msgData.hasMedia) {
                    const media = await this.msgData.downloadMedia(); // Download Image
                    this.client.sendMessage(this.msgData.from, media, {
                        sendMediaAsSticker: true,
                        stickerAuthor: '+62 895-4139-26068',
                        stickerName: 'Aru Chatbot'
                    })
                } else {
                    this.client.sendMessage(this.msgData.from, 'Please send a media file');
                }
                break;
        }

    }
}

export = MessageHandler;