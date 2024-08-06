function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

let starCount = 0;

// function to generate a single star
function generateStar(container) {
    if (starCount >= 200) {
        // max number of stars allowed
        return;
    }
    const star = document.createElement("div");
    star.className = "star";

    const size = getRandomNumber(1, 4);
    star.style.width = size + "px";
    star.style.height = size + "px";

    const x = getRandomNumber(0, container.offsetWidth);
    const y = getRandomNumber(0, container.offsetHeight);

    star.style.left = x + "px";
    star.style.top = y + "px";

    // generate random duration for animation
    const duration = getRandomNumber(1, 3);
    star.style.animationDuration = duration + "s";

    container.appendChild(star);

    starCount++;
    // console.log('Number of stars generated: ', starCount);

    // interval to move the star upward
    setInterval(() => {
        const currentTop = parseFloat(star.style.top) || 0; // get the current position of the star
        const newTop = currentTop - 1; // calculate the new position of the star
        star.style.top = newTop + "px"; // update the top position of the star

        // Reset the star position when it goes beyond the top
        if (newTop < -parseInt(star.style.height)) {
            star.style.top = container.offsetHeight + "px";
        }
    }, 200); // speed of star movement animation
}

// function of manage generation of stars
function manageStars(container) {
    const intervalId = setInterval(() => {
        generateStar(container);
        if (starCount >= 200) {
            clearInterval(intervalId);
        }
    }, 200); // speed of star generation
}

manageStars(document.getElementById("starsContainer"));

// function to generate a shooting star
function generateShootingStar(container) {
    const shootingStar = document.createElement("div");
    shootingStar.className = "shooting-star";

    const startX = Math.random() * container.offsetWidth;
    const startY = Math.random() * container.offsetHeight;
    shootingStar.style.left = startX + "px";
    shootingStar.style.top = startY + "px";

    const endX = Math.random() * container.offsetWidth;
    const endY = Math.random() * container.offsetHeight;

    container.appendChild(shootingStar);

    setTimeout(() => {
        shootingStar.style.opacity = "1";
        shootingStar.style.transform = `translate(${endX}px, ${endY}px)`;

        setTimeout(() => {
            shootingStar.remove();
            const shootingStars = container.querySelectorAll(".shooting-star");
            if (shootingStars.length > 3) {
                shootingStars[0].remove();
            }
        }, 3000);
    }, 50);
}

// generating shooting stars after specific intervals
setTimeout(() => {
    generateShootingStar(document.getElementById("starsContainer"));
}, 5000);
setTimeout(() => {
    generateShootingStar(document.getElementById("starsContainer"));
}, 20000);
setTimeout(() => {
    generateShootingStar(document.getElementById("starsContainer"));
}, 30000);
