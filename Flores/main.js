onload = () =>{
    const loadScreen = document.getElementById("loadScreen");
    const startButton = document.getElementById("startButton");

    const magicButton = document.getElementById("magicButton");
    const magicText = document.getElementById("magicText");
    const phrases = [
        "Tu sonrisa me inspira cada día.",
        "Hoy quiero que sepas que eres mi lugar tranquilo.",
        "Cada detalle contigo es mi mejor momento.",
    ];
    let index = 0;

    if (magicButton && magicText) {
        magicButton.addEventListener("click", () => {
            index = (index + 1) % phrases.length;
            magicText.textContent = phrases[index];
            magicText.classList.add("show");
            setTimeout(() => magicText.classList.remove("show"), 260);
        });
    }

    if (startButton && loadScreen) {
        startButton.addEventListener("click", () => {
            loadScreen.classList.add("hidden");
            setTimeout(() => {
                document.body.classList.remove("container");
            }, 300);
        });
    } else {
        document.body.classList.remove("container");
    }
};