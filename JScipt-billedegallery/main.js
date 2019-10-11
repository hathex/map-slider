// det store billede
let bigbillede = document.querySelector("#imgcontainer img");

// alle små billeder
let thumbbilleder = document.querySelectorAll("#imgmenu img");

//select pilene
let vpil = document.querySelector("#left");
let hpil = document.querySelector("#right")
let billedeconst = document.querySelector("#imgmenucontainer");


vpil.addEventListener("click", slideLeft);
hpil.addEventListener("click", slideRight);



// finder alle små billeder som der bliver "click på"
for(thumb of thumbbilleder) {

    thumb.addEventListener("click", function() {

        showImg(this.src);

    });
};



function slideLeft(){

    billedeconst.style.left = "-170px";
    vpil.style.display = "none";
    hpil.style.display = "inline";
};


function slideRight(){

    billedeconst.style.left = "0px";
    vpil.style.display = "inline";
    hpil.style.display = "none";
};


// function som udskifter det store billede src med det lille billede src "thumb replaces med big"
function showImg(thumbsrc) {

    bigbillede.src = thumbsrc.replace("Thumb", "Big");

};

