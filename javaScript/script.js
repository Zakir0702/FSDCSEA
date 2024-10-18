// console.log("hello World");
// const d=(str="zakir")=>{
//   console.log("hello World"+str);
// }
// d();

// const sum=(a,b,c=12)=>{
//   return a+b+c
// }
// let total =sum(23,45);
// console.log(total);




// const selectLang=(lang)=>{
 
  
// const cCompiler=()=>{
//   return " c compiler selected"
// }
// const javaCompiler=()=>{
//   return " java selected"
// }

 
//   if(lang=="c"){
//     return cCompiler();
//   }
//   else{
//     return javaCompiler();
//   }
  
// }
// console.log(selectLang("z"));

// const div=document.getElementsByClassName("hi")
// console.log(div);
// div[0].innerText="ABES ENGINEERING COLLEGE";
// div[0].innerHTML="<h2 style=color:blue>ABES ENGINEERING COLLEGE GHAZIABAD</h2>";

// const h1=document.createElement("h1");
// h1.innerText="Element is created by DOM";
// div[0].appendChild(h1)
// h1.style.color="red"
// console.log(h1);

// const img=document.createElement("img");
// img.src="L.png";
// img.setAttribute("height","400px");
// div[0].appendChild(img);
// console.log(img);




// const button=document.querySelector("#btn");
// console.log(button);

// const disp=document.getElementById("disp");
// console.log(disp);

// const getData=()=>{
//   console.log("calling getData function");
//   disp.innerHTML="<h3>Welcome to CSE department</h3>"
  
// }
// button.addEventListener("click",getData)





// promises 

// const promise1 = new Promise(
//   (resolve, reject) => {
//     let a = Math.ceil(Math.random()*200);
//     if (a > 100&&a<200) {
//       resolve("Value of a is resolved");
//     } else {
//       reject("a is rejected");
//     }
//   }
// );

// promise1
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("All resources have been closed");
//   });


  // const promise2=new Promise(
  //   (resolve,reject)=>{
  //     resolve({name:"zakir",branch:"cse"});
  //   }
  // );
  // promise2.then((data)=>{console.log(data);
  // })
  // .catch((error)=>{console.log(error);})

  // const response=fetch("https://dummyjson.com/products");
  // response.then(data=>{
  //   console.log(data);
  //   data.json().then(res=>{console.log(res.products[0].id + " "+ res.products[0].title);
  //   })
  // })

  // Fetch the data from the API
const response = fetch("https://dummyjson.com/products");

response.then(data => {
  data.json().then(res => {
    const product = res.products[0];
    const productInfo = document.getElementById("product-info");

    // Create a string with the product id and title
    const productDetails = `Product ID: ${product.id}, Title: ${product.title}`;

    // Display the product details in the "product-info" div
    productInfo.innerHTML = productDetails;
  });
});


  