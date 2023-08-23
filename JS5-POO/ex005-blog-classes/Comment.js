class Comment {
    constructor(username, content) {
        this.username = username
        this.content = content
        this.createdAt = new Date() //pega data atual
    }
}

module.exports = Comment