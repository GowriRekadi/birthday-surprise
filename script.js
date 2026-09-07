/* =========================
   MUSIC
========================= */

const music = document.getElementById("birthdayMusic");

let musicPlaying = false;


function toggleMusic() {

    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

    } else {

        music.play();

        musicPlaying = true;

    }

}



/* =========================
   SCROLL
========================= */

function scrollToSection(id) {

    document
        .getElementById(id)
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* =========================
   SURPRISE
========================= */

function openSurprise() {

    document
        .getElementById("surprisePopup")
        .classList
        .add("active");

    createConfetti();

}


function closeSurprise() {

    document
        .getElementById("surprisePopup")
        .classList
        .remove("active");

}



/* =========================
   HEARTS
========================= */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.bottom = "-50px";

    heart.style.fontSize =
        Math.random() * 20 + 10 + "px";

    heart.style.zIndex = "1";

    heart.style.pointerEvents = "none";

    heart.style.animation =
        `heartFloat ${Math.random() * 4 + 5}s linear`;

    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 9000);

}


setInterval(createHeart, 800);



/* =========================
   CONFETTI
========================= */

function createConfetti() {

    for (let i = 0; i < 120; i++) {

        const confetti =
            document.createElement("div");

        confetti.innerHTML =
            ["🎉", "✨", "❤️", "🎈", "⭐"]
            [Math.floor(Math.random() * 5)];

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top =
            Math.random() * 100 + "vh";

        confetti.style.fontSize =
            Math.random() * 25 + 10 + "px";

        confetti.style.zIndex = "1001";

        confetti.style.pointerEvents = "none";

        confetti.style.animation =
            `confettiFall ${Math.random() * 3 + 2}s linear`;

        document.body.appendChild(confetti);


        setTimeout(() => {

            confetti.remove();

        }, 5000);

    }

}



/* =========================
   ADD DYNAMIC ANIMATIONS
========================= */

const style =
    document.createElement("style");


style.innerHTML = `

@keyframes heartFloat {

    0% {
        transform:
            translateY(0)
            rotate(0deg);

        opacity: 0;
    }

    10% {
        opacity: 1;
    }

    100% {
        transform:
            translateY(-110vh)
            rotate(360deg);

        opacity: 0;
    }

}


@keyframes confettiFall {

    0% {
        transform:
            translateY(-100px)
            rotate(0deg);

        opacity: 1;
    }

    100% {
        transform:
            translateY(100vh)
            rotate(720deg);

        opacity: 0;
    }

}

`;


document.head.appendChild(style);