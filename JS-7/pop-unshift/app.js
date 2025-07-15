let output =[]

document.write("device: <br>")
output.unshift("keyboard")
output.unshift("mouse")
output.unshift("printer")
output.unshift("moniter")

document.write(`${output} <br>`)

let firstpush = output.shift()
let secondpush = output.shift()
let thirdpush = output.shift()
let fourthpush = output.shift()

document.write("out: <br>")
document.write(`${firstpush}<br>`)
document.write("out: <br>")
document.write(`${secondpush}<br>`)
document.write("out: <br>")
document.write(`${thirdpush}<br>`)
document.write("out: <br>")
document.write(`${fourthpush}<br>`)