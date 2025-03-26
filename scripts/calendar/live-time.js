export function startLiveTime() {
    const liveDateTimeElement = document.getElementById("liveDateTime");

    function updateTime() {
        const now = new Date();

        const date = now.toLocaleDateString("en-US");
        const time = now.toLocaleTimeString("en-US", { hour12: false });

        liveDateTimeElement.textContent = `The date today is ${date} and the time is ${time}`;
    }

    updateTime(); // update immediately
    setInterval(updateTime, 1000); // update every second
}