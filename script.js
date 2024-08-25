const display=document.querySelector(".display");
const result=document.querySelector("#result");
const button=document.querySelectorAll(".active");
const clear=document.querySelector("#clear");
 

 //eventlistner works for single element not for array or nodelist like queryselectorall in this we use loop to iterate element one by one and appy evenet listner.

//  button.addEventListener("click",(event)=>{
//   display.value += event.target.textContent;
//   console.log(event);
  
//  })
for(let btn of button)
{
    btn.addEventListener("click",(event)=>{
        display.value += event.target.textContent;
    })
}

//to  clear display
//value property only uses with input form ot textarea.

clear.addEventListener("click",(event)=>{
    display.value="";
})

result.addEventListener("click",(event)=>{
    try{
        display.value=eval(display.value);
    }
    catch(e)
    {
        display.value="error";
        console.log(error);
        
    }
    
})