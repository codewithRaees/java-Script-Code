
document.addEventListener('mousemove', function(e){

    console.clear()
    let x = e.x
    let y = e.y
    // ClientX and ClientY not working with sidebar Scrolling.
    // it taking the values from current view port
    console.log("Client X Value: " +x)
    console.log("Client Y Value: " +y)
})