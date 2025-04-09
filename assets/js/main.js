
const card3 = document.querySelector("#card-3");
const toggleButton = document.querySelector(".toggle button")
const cards = document.querySelectorAll(".card");
const toggleDiv = document.querySelector(".toggle");
const siteContent = document.querySelector(".site-content");

let isCardOpen = false;

card3.addEventListener("click", () => {
    if (!isCardOpen) {
        gsap.to(cards, {
            top: '0px',
            duration: 1,
            ease: "power4.inOut"
        });

        gsap.to(toggleDiv, {
            delay: 0.4,
            display: "flex",
            opacity: 1,
            duration: 0.4,
            ease: "power4.inOut"
        });

        gsap.to(siteContent, {
            filter: "blur(20px)",
            duration: 0.75,
            ease: "power4.inOut"
        });

        isCardOpen = true;
    }
});

toggleButton.addEventListener("click", () => {
    if (isCardOpen) {
        gsap.to("#card-1", {
            top: "0px",
            duration: 1,
            ease: "power4.inOut"
        });
        gsap.to("#card-2", {
            top: "-100px",
            duration: 1,
            ease: "power4.inOut"
        });
        gsap.to("#card-3", {
            top: "-200px",
            duration: 1,
            ease: "power4.inOut"
        });

        gsap.to(toggleDiv, {
            delay: 0,
            display: 'none',
            opacity: 0,
            duration: 0.4,
            ease: "power4.inOut"
        });

        gsap.to(siteContent, {
            filter: "blur(0px)",
            duration: 1,
            ease: "power4.inOut"
        });

        isCardOpen = false;
    }
});


























