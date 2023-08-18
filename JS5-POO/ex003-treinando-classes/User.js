class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password) {
        if(this.email === email && this.password === password) {
            console.log("Login efetuado com sucesso!")
        } else {
            console.log("Falha na autenticação.")
        }
    }
}

const leonardo = new User("Leonardo Cristiano Kuster", "l.kusterr@gmail.com", "12345")

console.log(leonardo)

leonardo.login("l.kusterr@gmail.com", "12345")
leonardo.login("l.kusterr@gmail.com", "12346")
