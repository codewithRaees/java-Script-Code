class railwayForm
{
    constructor(givenname,giventrainID){
        this.name= givenname
        this.trainID = giventrainID
    }

    submit(name , trainID){
        console.log(`From submitted by ${name} and ${trainID} successfully.`);
    }

    cancelForm(name, trainID){
        console.log(`From canccelled by ${name} and ${trainID} successfully.`);
    }

    fillform()
    {}

}

let objform = new railwayForm()
let objform1 = new railwayForm()

objform.submit("Rahul" , 12323232)
objform.submit("Zakir" , 9090909)
objform.cancelForm("Ali", 945948)