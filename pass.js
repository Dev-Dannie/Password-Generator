const charRange = document.getElementById('charAmtRange')
const charNumber = document.getElementById('charNum')
const form = document.getElementById('pass')
const upperCase = document.getElementById('upperCase')
const symbols = document.getElementById('symbols')
const numbers = document.getElementById('numbers')
const passDisplay = document.querySelector('.password-display')

const upperCaseChar = arrayFromLowToHigh(65, 90)
const lowerCaseChar = arrayFromLowToHigh(97, 122)
const numberChar = arrayFromLowToHigh(48, 57)
const symbolArr = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))

charRange.addEventListener('input', synchAmt)
charNumber.addEventListener('input', synchAmt)

function synchAmt(e){
    const value = e.target.value
    charNumber.value = value
    charRange.value = value
}

form.addEventListener('submit', e => {
    e.preventDefault()
    const charAmt = charNumber.value
    const symbol = symbols.checked
    const UpperCase = upperCase.checked
    const number = numbers.checked

    const GeneratedPassword = passGeneration(charAmt,symbol,UpperCase,number)
    passDisplay.innerText = GeneratedPassword
})

function passGeneration(charAmt,symbol,UpperCase,number){
    let charCodes = lowerCaseChar
    if (symbol) charCodes = charCodes.concat(symbolArr)
    if (UpperCase) charCodes = charCodes.concat(upperCaseChar)
    if (number) charCodes = charCodes.concat(numberChar)

    const passwordCharacters =[]
    for (let i = 0; i < charAmt; i++){
        const char = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(char))
    }
    return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high){
    const array = []
    for (let i = low; i <= high; i++){
        array.push(i)
    }
    return array
}