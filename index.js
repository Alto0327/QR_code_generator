const qrcode = new QRCode(document.getElementById("qrcode-el"), {
    text: "A",
    width: 128,
    height: 128,
    correctLevel: QRCode.CorrectLevel.H 
})

const btn = document.getElementById("btn-el")
const input = document.getElementById("text-el")

input.addEventListener('keypress', (press) => 
    press.key === 'Enter' && btn.click())

btn.addEventListener('click', () => qrcode.makeCode(input.value))