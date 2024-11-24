let gameseq = [];
let usrseq = [];
let btns = ["yellow", "red", "blue", "green"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (!started) {
        console.log("Game Started");
        started = true;
        levelup();
    }
});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("silver");
    setTimeout(function () {
        btn.classList.remove("silver");
    }, 250);
}

function levelup() {
    usrseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randidx = Math.floor(Math.random() * 4);
    let randcolor = btns[randidx];

    gameseq.push(randcolor);
    console.log(gameseq);

    let randbtn = document.querySelector(`.${randcolor}`);
    gameflash(randbtn);
}

function checkans(idx) {
    if (gameseq[idx] !== usrseq[idx]) {
        h2.innerHTML = `Game Over! Your Score is <b>${level}</b><br>Press any key to Start`;
        document.querySelector("body").style.backgroundColor = "red";

        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 500);

        reset();
    } else if (usrseq.length === gameseq.length) {
        setTimeout(levelup, 1000);
    }
}

function btnpress() {
    let btn = this;
    userflash(btn);

    let usercolor = btn.getAttribute("id");
    usrseq.push(usercolor);

    checkans(usrseq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnpress);
}

function reset() {
    started = false;
    gameseq = [];
    usrseq = [];
    level = 0;
}
