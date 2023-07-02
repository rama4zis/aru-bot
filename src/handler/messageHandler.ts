import StickerController from "../controller/stickerController"

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
                new StickerController(this.client, this.msgData).stickerNormal()
                break;
        }

    }
}

export = MessageHandler;