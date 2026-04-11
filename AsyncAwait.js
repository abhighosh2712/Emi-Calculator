  function getData() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      reject("Error");
    }, 2000);
  });
}

 async function showData() {
  let result = await getData();
  console.log(result);
}  




showData(); 

