class MessageHandler {
    msgData: any
    client: any
    constructor(client: any, msgData: any) {

        this.msgData = msgData
        this.client = client
    }

    async checkMessage() {

        switch(true) {
            case this.msgData.body === '.s':
                // check if msg has media 
                console.log('test media')
                if(this.msgData.hasMedia){
                    const media = await this.msgData.downloadMedia(); // Download Image
                    this.client.sendMessage(this.msgData.from, media, {
                        sendMediaAsSticker: true,
                        stickerAuthor: '+62 895-4139-26068',
                        stickerName: 'Aru Chatbot'
                    })
                }else{
                    this.client.sendMessage(this.msgData.from, 'Please send a media file');
                }
        }

    }
}

export = MessageHandler;