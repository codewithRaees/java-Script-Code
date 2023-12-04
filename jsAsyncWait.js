let a = [
        "Initilizing Hack tool..........................................................",
        "Connecting to Facebook..........................................................",
        "Connecting to Server 1.......................................................... ",
        "Connection Failed. Retrying..........................................................",
        "Connecting to Server 2..........................................................",
        "Connected Successfully..........................................................",
        "Username raees..........................................................",
        "Trying to brutforce..........................................................",
        "200K password tried..........................................................",
        "Match not found..........................................................",
        "Another 200K password tried..........................................................",
        "Match found..........................................................",
        "Accessing Acount..........................................................",
        "Hack Successful"
        ]

        const sleep = async (seconds)=>{
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{ resolve(true)}, seconds * 1000)
            })

        }

const showHack = async (message)=>{
       await sleep(3)
        //console.log(message)
        hack.innerHTML = hack.innerHTML + message  + "<br>"
}

(async ()=>{
    for(let i = 0; i < a.length; i++)
    {
        await showHack(a[i])
    }
})()