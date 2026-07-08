const prom = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("arush")
        resolve();
    },1000)
    
})

prom.then(function(){
    console.log('promise consumed');
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("arush.new")
        resolve();
    },1000)
}).then(function(){
    console.log('promise consumed');
})

const promise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "chai" ,email: "chai@example.com"});
    },1000)
    
})

promise1.then(function(user){
    console.log(user);
})/

const promise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            reject('something went wrong')
        }
        else{
           resolve({username: "chai" ,email: "chai@example.com"});
        }
    },1000)
    
})

promise1.then(function(user){
    console.log(user);
    return user.username;
}).then( (username) => {
    console.log(username)
}).catch( (error) => {
    console.log(error)
}).finally(()=>{
    console.log("working")
})


const promise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            reject('something went wrong')
        }
        else{
           resolve({username: "chai" ,email: "chai@example.com"});
        }
    },1000)
    
});

async function consumePromise() {
    try{
        const response = await promise1
        console.log(response);
    }
    catch (error){
        console.log(error);
    }
};

consumePromise();
