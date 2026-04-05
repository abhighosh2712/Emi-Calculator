
const p1=new Promise((resolve,rejected)=>{

setTimeout(()=>{
    person={name:"abhi"}
    rejected("Error: Something went wrong")
},3000)


})

p1.then(result=>{
    console.log("result",result)
}).catch(error=>{

    console.log("error",error)
})

