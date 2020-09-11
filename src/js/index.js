window.onload = () => {
  const widowWarp = document.getElementById("widow");
  const loginbtnF = document.getElementById("loginbtn");
  const returnArrow = document.getElementsByClassName("return");
  const signupbtnF = document.getElementById("signupbtn");
  const loginbtn = document.querySelectorAll(
    ".wrap__login__innerwrap__loginbtn"
  );
  const name = document.getElementsByClassName("name");
  const address = document.getElementsByClassName("address");
  const pass = document.getElementsByClassName("pass");
  const passConfirmation = document.getElementById("passConfirmation");
  let w = 0;

  loginbtnF.onclick = () => {
    w = w - 100;
    widowWarp.style.transform = " translateX(" + w + "vw)";
  };
  signupbtnF.onclick = () => {
    w = w - 200;
    widowWarp.style.transform = " translateX(" + w + "vw)";
  };
  for (let i = 0; i <= returnArrow.length - 1; i++) {
    returnArrow[i].onclick = () => {
      if (i === 0) {
        w = w + 100;
        widowWarp.style.transform = " translateX(" + w + "vw)";
      } else {
        w = w + 200;
        widowWarp.style.transform = " translateX(" + w + "vw)";
      }
    };
  }

  for(let f=0;f<=loginbtn.length-1;f++){
    loginbtn[f].onclick = () => {
      let regex=new RegExp(/.@/);
      let test =new RegExp(/[0-9]{11}/);
      if( name[f].value.length > 1 && pass[f].value.length >= 5 && test.test(address[f].value) || regex.test(address[f].value)){
        if(f = 1){
          if(pass[f].value === passConfirmation.value){
            
            window.location.href = "home.html";
          }
          else{
            console.log("aaaaa")
            window.location.href = "home.html";
          }
        }
      }else{
        alert("間違っています")
      }
     
    };
  }
   
 

  // })

  // });
};
