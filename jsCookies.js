console.log(document.cookie)
document.cookie = "User = Muhammad"
console.log(document.cookie)

let key = prompt("Enter your Key : ")
let value = prompt("Enter your value : ")
document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`;

console.log(document.cookie)

console.log(decodeURIComponent(document.cookie))