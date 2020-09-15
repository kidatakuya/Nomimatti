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
    // function send(){
      let regex=new RegExp(/.@/);
      let test =new RegExp(/[0-9]{11}/);
      let frm = document.signUp;
      if( frm.elements["name"].value.length > 1 && frm.elements["password"].value.length >= 5 && test.test(frm.elements["address"].value) || regex.test(frm.elements["address"].value)){
        if(f = 1){
          if(frm.elements["password"].value === passConfirmation.value){
            
            frm.action = "connect.php";
            return true;
          }
          else{
            alert("間違っています")
            return false;
          }
        }
      }else{
        alert("間違っています")
        return false;
      }
    }
      
     
    };
  // }
   
 

  // })

  // });
};
