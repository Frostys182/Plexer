// Set the target date for the countdown (25th of September)
const targetDate = new Date("September 25, 2024 00:00:00").getTime();

const timerElement = document.getElementById("timer");

function updateTimer() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    timerElement.innerHTML = "Event has started!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timerElement.innerHTML = `${days}d / ${hours}h / ${minutes}m / ${seconds}s`;
}

setInterval(updateTimer, 1000);
