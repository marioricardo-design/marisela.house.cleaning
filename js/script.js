```javascript
/* ====================================
   MARISELA CLEANING SERVICES
   MAIN SCRIPT
==================================== */

console.log("Marisela Cleaning Services Loaded");

/* ==========================
   CONTACT FORM
========================== */

const form = document.getElementById("estimateForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

const name =
document.getElementById("name").value;

const phone =
document.getElementById("phone").value;

const email =
document.getElementById("email").value;

const message =
document.getElementById("message").value;

if(
name === "" ||
phone === "" ||
email === "" ||
message === ""
){

alert("Please complete all fields.");

return;

}

alert(
"Thank you! Your estimate request has been received. We will contact you shortly."
);

form.reset();

});

}

/* ==========================
   COUNTERS
========================== */

const counters =
document.querySelectorAll("[data-counter]");

const startCounter = () => {

counters.forEach(counter => {

const target =
parseInt(counter.getAttribute("data-counter"));

let count = 0;

const increment =
target / 100;

const updateCounter = () => {

count += increment;

if(count < target){

counter.innerText =
Math.floor(count);

requestAnimationFrame(updateCounter);

}else{

counter.innerText = target;

}

};

updateCounter();

});

};

const statsSection =
document.getElementById("stats");

if(statsSection){

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

startCounter();

observer.disconnect();

}

});

}

);

observer.observe(statsSection);

}

/* ==========================
   SMOOTH MENU LINKS
========================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener(
"click",
function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});
```
