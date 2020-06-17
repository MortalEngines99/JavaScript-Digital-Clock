const hour = document.getElementById("hour");
const dots = document.getElementById("dots");
const minutes = document.getElementById("minutes");

setInterval(() => {
    hour.innerText = new Date().getHours();
    minutes.innerText = new Date().getMinutes();
},1000)

anime({
    targets : dots,
    opacity:0,
    duration:700,
    delay:100,
    endDelay:100,
    easing:"linear",
    direction:"alternate",
    loop:true
});