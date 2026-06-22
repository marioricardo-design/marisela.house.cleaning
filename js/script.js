/* ====================================
   MARISELA CLEANING SERVICES
   MAIN SCRIPT
==================================== */

console.log("Marisela Cleaning Services Loaded");

/* ==========================
   ANIMATED COUNTERS
========================== */

const counters = document.querySelectorAll("[data-counter]");

function startCounter() {

    counters.forEach(counter => {

        const target = parseInt(counter.getAttribute("data-counter"));
        let count = 0;
        const increment = target / 100;

        function updateCounter() {

            count += increment;

            if (count < target) {

                counter.innerText = Math.floor(count);
                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target;

            }

        }

        updateCounter();

    });

}

const statsSection = document.getElementById("stats");

if (statsSection) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounter();
                observer.disconnect();

            }

        });

    });

    observer.observe(statsSection);

}

/* ==========================
   SMOOTH SCROLL
========================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

/* ==========================
   SERVICE IMAGE SLIDER
========================== */

document.querySelectorAll('.service-slider').forEach(slider => {

const images = slider.querySelectorAll('img');

let current = 0;

if(images.length > 0){

images[0].classList.add('active');

setInterval(() => {

images[current].classList.remove('active');

current++;

if(current >= images.length){

current = 0;

}

images[current].classList.add('active');

}, 3000);

}

});
