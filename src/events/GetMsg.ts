import CharacterAIController from "../controller/CharacterAIController"
import MenuController from "../controller/MenuController"
import StickersController from "../controller/StickersController"
import YoutubeMp3Controller from "../controller/YoutubeMp3Controller"

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
            case chat === '.s': // Sticker
                new StickersController(this.client, this.msgData).stickerNormal()
                break;
            case chat === '.sg': // Sticker Gif
                new StickersController(this.client, this.msgData).stickerGif()
                break;
            case chat.substring(0, chat.indexOf(' ')) === '.ytmp3': // Youtube Mp3
                new YoutubeMp3Controller(this.client, this.msgData).youtubeMp3()
                break;
            case chat === '.menu':
                new MenuController(this.client, this.msgData).menu()
                break;
            default:
                new CharacterAIController(this.client, this.msgData).defaultReply()
                break;
        }

    }
}

export = GetMsg;