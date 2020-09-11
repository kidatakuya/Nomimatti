window.onload = () => {
  //   const box = document.getElementById("box");
  //   const btn = document.getElementsByClassName("btn");
  //   const top = document.getElementsByClassName("top");
  //   const topLeft = document.getElementsByClassName("top_left");
  //   const left = document.getElementsByClassName("left");
  //   const leftBottom = document.getElementsByClassName("left_bottom");
  //   const bottom = document.getElementsByClassName("bottom");
  //   const rightBottom = document.getElementsByClassName("right_bottom");
  //   const right = document.getElementsByClassName("right");
  //   const topRight = document.getElementsByClassName("top_right");
  //   const center = document.getElementsByClassName("center");
  //   const innerbox = document.getElementsByClassName("innerbox");
  //   const navbox = document.getElementsByClassName("navbox");
  //   const nav = document.getElementsByClassName("nav");
  const widowWarp = document.getElementById("widow");
  const loginbtnF = document.getElementById("loginbtn");
  const returnArrow = document.getElementsByClassName("return");
  const signupbtnF = document.getElementById("signupbtn");
  const loginbtn = document.querySelectorAll(
    ".wrap__login__innerwrap__loginbtn"
  );
  //   let boxW = [0, -100, -200, 0, -100, -200, 0, -100, -200];
  //   let boxH = [0, 0, 0, -100, -100, -100, -200, -200, -200];
  let w = 0;

  // let div = document.createElement("div");
  // div.className="wall";
  // let i = 0;
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

  loginbtn.forEach((element) => {
    element.onclick = () => {
      window.location.href = "home.html";
    };
  });

  // })

  // });
};
