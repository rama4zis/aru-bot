class MessageHandler {
    msgData: any
    client: any
    constructor(client: any, msgData: any) {

        this.msgData = msgData
        this.client = client
    }
}

export = MessageHandler;