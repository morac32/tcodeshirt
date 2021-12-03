//Contact Form in PHP
const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");
form.onsubmit = (e)=>{
  e.preventDefault(); //prevent the form from submitting
  statusTxt.style.color = "#0D6EFD";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Sending your message...";
  form.classList.add("disabled");
  
  let xhr = new XMLHttpRequest(); //creating new xml object
  xhr.open("POST", "message.php", true);
  xhr.onload = ()=>{ //once ajax loaded
    //if ajax response status is 200 & ready status is 4 means there isn't an error
    if(xhr.readyState == 4 && xhr.status == 200){ 
      let response = xhr.response; //storing ajax response in a response variable
      //if response is an error like enter valid email address then we'll change status color to red
      if(response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1){
        statusTxt.style.color = "red";
      }else{
        form.reset();
        setTimeout(()=>{
          statusTxt.style.display = "none";
        }, 3000); //hide the statusTxt after 3 seconds if the msg is sent
      }
      statusTxt.innerText = response;
    }
  }
  let formData = new FormData(form); //creating new FormData obj. This is used to send form data
  xhr.send(formData); //sending form data
}