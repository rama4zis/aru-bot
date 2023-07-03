import MessageHandler from "../handler/messageHandler";

class MenuController extends MessageHandler {
    
    async menu() {

        this.client.sendMessage(this.msgData.from, 
        "Menu: \n" +
        "1. Sticker: Kirim gambar dengan caption '.s' \n" +
        "2. Sticker Gif: Kirim video dengan caption '.sg'"
        )

    }

}

export = MenuController;