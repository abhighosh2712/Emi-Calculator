

// piza order with callback function
function orderPizza(pizzaName, callback){
  console.log("order received for",pizzaName)
  callback()
}
function pizzaReady(){
  console.log("pizza is ready")
  setTimeout(()=>{
    console.log("pizza is delivered")
  },5000)
}
orderPizza("margherita",pizzaReady)