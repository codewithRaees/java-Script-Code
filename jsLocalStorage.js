
let note = prompt("Enter your note : ")


localStorage.setItem("Note" , note)
alert("Note saved successfully.")

console.log(`The key is ${key} and the value is ${value} `)

if(key == 0)
{
    localStorage.clear()
}

localStorage.removeItem("Note")

//localStorage.length   // showing length of local storage,,,, means how many vlaues are stored
//localStorage.setItem("Name","Ahmad")
