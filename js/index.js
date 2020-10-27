// Your code goes here

// 1 beforeunload event
window.addEventListener("beforeunload", (event) => {
    event.preventDefault();
    event.returnValue = "Are you sure you want to leave?";
  });

// 2 mouseenter event
let mainImg = document.querySelector("#mainImg");
mainImg.addEventListener("mouseenter", (event) => {
    mainImg.style.border = "5px dotted yellow";
});

// 3 mouseleave event
mainImg.addEventListener("mouseleave", (event) => {
    mainImg.style.border = "";
});

// 4 dblclick event
let destPic = document.querySelector("#destPic");
destPic.addEventListener("dblclick", (event) => {
    destPic.classList.toggle("dblClicked");
});

// 5 click event

