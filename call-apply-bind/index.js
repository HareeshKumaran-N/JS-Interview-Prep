const profile = {
    name: 'Praveen',
    location: 'Palladam',
}

const introMessage = function (emoji) {
    console.log(`Hi Im ${this.name}  from ${this.location}  ${emoji}`)
}

//function borrowing 
introMessage.call(profile,"💕"); //Hi Im Praveen  from Palladam  💕
introMessage.apply(profile,["😍"]); // Hi Im Praveen  from Palladam  😍


//Returns new function binding the function with the new obj 
const newFunction = introMessage.bind(profile,"🙋‍♂️")
newFunction();

