const App = require("./App")

App.createUser("leonardo@gmail.com", "Leonardo Kuster")
App.createUser("lucas@email.com", "Lucas Queiroga")
App.createUser("juliana@email.com", "Juliana Conde")

App.deposit("leonardo@gmail.com", 100)

App.transfer("leonardo@gmail.com", "lucas@email.com", 20)

App.changeLoanFee(10)
App.takeLoan("juliana@email.com", 2000, 24)

console.log(App.findUser("leonardo@gmail.com"))
console.log(App.findUser("leonardo@gmail.com").account)
console.log(App.findUser("lucas@email.com"))
console.log(App.findUser("lucas@email.com").account)
console.log(App.findUser("juliana@email.com"))
console.log(App.findUser("juliana@email.com").account)
console.log(App.findUser("juliana@email.com").account.loans[0].installments)