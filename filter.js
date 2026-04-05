const productList = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    category: "Electronics"
  },
  {
    id: 2,
    name: "Mobile Phone",
    price: 25000,
    category: "Electronics"
  },
  {
    id: 3,
    name: "Headphones",
    price: 3000,
    category: "Accessories"
  },
  {
    id: 4,
    name: "USB Cable",
    price: 500,
    category: "Accessories"
  },
  {
    id: 5,
    name: "Monitor",
    price: 15000,
    category: "Electronics"
  },
  {
    id: 6,
    name: "Keyboard",
    price: 5000,
    category: "Peripherals"
  },
  {
    id: 7,
    name: "Mouse",
    price: 1500,
    category: "Peripherals"
  },
  {
    id: 8,
    name: "Webcam",
    price: 4000,
    category: "Accessories"
  }
];


// itrate over the array of objects
productList.map((callback))  
function callback(item,index,arr){
    console.log("item",item.name)
    console.log("price",item.price )
    console.log("category",item.category  )
    
    
   
}