export default function copyClipboard(ev) {
    const button = ev.currentTarget
    if (button.innerText === 'Copy') {
        button.innerText = 'Coppied!'
        button.classList.add('success')
        navigator.clipboard.writeText(document.querySelector("#result").value)
    } else {
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
}