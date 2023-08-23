const Author = require("./Author");

const john = new Author("John Doe")

const post = john.writePost("Título do post", "Lorem ipsum dolar sic ..")

post.addComment("Leonardo Kuster", "Muito bom!")
post.addComment("Lucas Breno", "Achei interessante.")

console.log(john)
console.log(post)