const body = document.querySelector("body"),
 hourHand = document.querySelector(".hour"),
 minuteHand = document.querySelector(".minute"),
 secondHand = document.querySelector(".second"),
 modeSwitch = document.querySelector(".mode-switch");


// if(localStorage.getItem("mode") === "Dark Mode") {
//     body.classList.add("dark");
//     modeSwitch.inner = "Light Mode";
// }

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    const isDarkMode = body.classList.contains("dark");
    // console.log(isDarkMode);
    modeSwitch.innerHTML = isDarkMode ? "Light Mode" : "Dark Mode";

    localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
})


const updateTime = () => {
    let date = new Date(),
      secToDeg = (date.getSeconds() / 60) * 360,
      minToDeg = (date.getMinutes() / 60) * 360,
      hourToDeg = (date.getHours() / 12) * 360;
    // console.log(secToDeg);

    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hourToDeg}deg)`;
};

setInterval(updateTime, 1000);

