


const profile = {
    name: 'Praveen',
    location: 'Palladam',
}

const introMessage = function (emoji) {
    console.log(`Hi Im ${this.name}  from ${this.location}  ${emoji}`)
    
}



//////////////////////polyfill using apply

const myBind  = function (context,param) {


    return ()=>{
        this.apply(context,[param]);
    }
}

Function.prototype.myBind = myBind

const myBindingFunction = introMessage.myBind(profile,':)')

myBindingFunction();