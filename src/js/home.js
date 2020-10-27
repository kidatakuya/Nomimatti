window.onload = () => {
  const nav = document.getElementsByClassName("navMove");
  const window = document.getElementById("window");
  const headTitle = document.getElementById("headTitle");
  const head = document.getElementById("head");
  const editbtn = document.getElementById("editbtn");
  const profileEdit = document.getElementById("profile-edit");
  const profileEditDecision = document.getElementById("profile-edit-decision");
  const decisionText = document.getElementsByClassName("decision-text");
  const text = document.getElementsByClassName("text");
  const postBtn = document.getElementById("postbtn");
  const postText = document.getElementsByClassName("main__window__post__innerwrap__time postText")
  const board = document.getElementById("board");
  
  let move = [
    {
      title: "ホーム",
      move: 0,
    },
    {
      title: "QR決済",
      move: -100,
    },
    {
      title: "投稿",
      move: -200,
    },
    {
      title: "DM",
      move: -300,
    },
    {
      title: "プロフィール",
      move: -400,
    },
  ];

  // footer ページ移動
  for (let i = 0; i <= nav.length - 1; i++) {
    nav[i].addEventListener("click", () => {
      console.log(document.defaultView.getComputedStyle(profileEdit,null).right)
      if( document.defaultView.getComputedStyle(profileEdit,null).right == "0px"){
        profileEdit.style.right = "";
        console.log("test");
      }
      if (i === 4) {
        head.style.top = "-100%";
        window.style.transform = "translateX(" + move[i].move + "vw)";
      } else {
        head.style.top = "0";
        headTitle.innerText = move[i].title;
        console.log(move[i].title);
        window.style.transform = "translateX(" + move[i].move + "vw)";
      }
    });
  }
  // footer ページ移動END

  editbtn.onclick = () => {
    profileEdit.style.right = "0";
  };
  profileEditDecision.onclick = () => {
    for (let f = 0; f <= decisionText.length - 1; f++) {
      //   text[f].value =
      decisionText[f].innerText = text[f].value;
    }
    // console.log(text[0].value);
    profileEdit.style.right = "";
  }; //editbtn.onclick

  // postBtn.onclick=()=>{
  //   let section =  div = document.createElement('section');
  //   let boardBox = section.className("main__window__board__box");
  //   let 
  //   // board.section

  // }




}; //window.onload
