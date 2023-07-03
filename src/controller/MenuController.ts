import MessageHandler from "../handler/messageHandler";

class MenuController extends MessageHandler {
    
    async menu() {

        this.client.sendMessage(this.msgData.from, 
        "Menu: \n\n" +
        "1. Sticker: Kirim gambar dengan caption '.s' \n" +
        "2. Sticker Gif: Kirim video dengan caption '.sg'" +
        "3. Download Youtube Mp3: Kirim pesan dengan format '.ytmp3 <url>' \n" +
        "\n\nGunakan caption tanpa tanda kutip"
        )

    }

}

export = MenuController;