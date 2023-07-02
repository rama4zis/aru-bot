import MenuController from "../controller/MenuController"
import StickerController from "../controller/StickerController"

class GetMsg {
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
            default:
                new MenuController(this.client, this.msgData).menu()
                break;
        }

    }
}

export = GetMsg;