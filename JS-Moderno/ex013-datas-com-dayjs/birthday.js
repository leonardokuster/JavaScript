// Não esquecer de inicializar com 'npm init -y' e depois instalar a biblioteca que quero usar.

const dayjs = require('dayjs')

function birthday(date) {
    const birthday = dayjs(date)
    const today = dayjs()

    const ageInYears = today.diff(birthday, 'year')
    console.log(`Idade: ${ageInYears} anos`)

    const nextBirthday = birthday.add(ageInYears + 1, 'year')
    console.log(`Próximo aniversário: ${nextBirthday.format('DD/MM/YYYY')}`)

    const daysToNextBirthday = nextBirthday.diff(today, 'day') + 1 //Corrigir o próximo dia, porque ele mostra como se fosse zero
    console.log(`Dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday}`)
}

birthday('1995-10-20')