const userInput=document.getElementById("user-input");
const results=document.getElementById("results-div");
const checkButton=document.getElementById("check-btn");
const clearButton=document.getElementById("clear-btn");


function checkPhoneNumber(input){
  const regex= /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  const trimedInput=input.trim();

  if(!trimedInput){
    alert("Please provide a phone number")
  }
  const result=document.createElement("p");
  const isValid=regex.test(trimedInput)

  result.textContent=isValid ? `Valid US number: ${input}` : `Invalid US number: ${input}`;

results.appendChild(result)/*
 if(isValid){
    result.textContent=`Valid US number: ${input}`;
  }
  else{
    result.textContent=`Invalid US number: ${input}`;
  }*/
  results.appendChild(result);

}


checkButton.addEventListener("click", ()=>{
  checkPhoneNumber(userInput.value);
  userInput.value="";

})

clearButton.addEventListener("click", ()=>{
  results.textContent=""
})