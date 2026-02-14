function startLove(){
    document.getElementById("mainPage").classList.add("hidden");
    document.getElementById("animationPage").classList.remove("hidden");

    // after animation open gifts
    setTimeout(()=>{
        document.getElementById("animationPage").classList.add("hidden");
        document.getElementById("giftPage").classList.remove("hidden");
    },4000);
}

function noClick(){
    alert("No press panna allowed illa 😏 Try YES");
}
function gift1(){
window.open("photos.html","_self");
}

function gift2(){
window.open("letter.html","_self");
}
function gift3(){
window.open("final.html","_self");
}

// background music start after first click
document.addEventListener("click", function(){
    document.getElementById("bgmusic").play();
},{ once: true });
