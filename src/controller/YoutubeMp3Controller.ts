import MessageHandler from "../handler/messageHandler";

class YoutubeMp3Controller extends MessageHandler {

    async youtubeMp3() {
        const { dlAudio } = require("youtube-exec");
        const { MessageMedia } = require('whatsapp-web.js');

        const msg = this.msgData.body;
        const userId = this.msgData.from.slice(0, this.msgData.from.indexOf("@"));
        const url = msg.slice(msg.indexOf(" ") + 1);

        this.msgData.reply("Mungkin akan memakan waktu sedikit lebih lama....\nDownloading...");

        try {
            await dlAudio({
                url: url,
                folder: "downloads",
                filename: userId,
                quality: "best"
            })

            const media = MessageMedia.fromFilePath(`downloads/${userId}.mp3`);
            this.client.sendMessage(this.msgData.from, "Download selesai, tunggu sebentar lagi ya...");
            this.client.sendMessage(this.msgData.from, media, {
                sendMediaAsDocument: true,
                caption: "Berikut hasilnya..."
            });

            // delete the file 
            const fs = require('fs');
            fs.unlink(`downloads/${userId}.mp3`, (err: any) => {
                if (err) {
                    console.error(err)
                    return
                }
            })
            
        } catch (error) {
            console.log("error: ", error);
        } 
    }

}

export = YoutubeMp3Controller;