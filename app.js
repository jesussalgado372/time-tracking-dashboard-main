import data from "./data.json" with { type: "json" };

// Select buttons
const dailyBtn = document.getElementById("daily-Btn");
const weeklyBtn = document.getElementById("weekly-Btn");
const monthlyBtn = document.getElementById("monthly-Btn");
const buttons = document.querySelectorAll('button');

// Update UI function
function updateTimeframe(timeframe) {
  data.forEach(item => {
    const title = item.title.toLowerCase().replace(" ", "");

    // Elements for this card
    const currentData = document.getElementById(`${title}-current-Data`);
    const lastData = document.getElementById(`${title}-last-Data`);

    if (currentData && lastData) {
      const current = item.timeframes[timeframe].current;
      const previous = item.timeframes[timeframe].previous;

        const labels = {
        daily: "Yesterday",
        weekly: "Last Week",
        monthly: "Last Month"
        };

        const label = labels[timeframe];


      currentData.textContent = `${current}hrs`;
      lastData.textContent = `${label} - ${previous}hrs`;
    }
  });
}

// Event listeners for buttons
dailyBtn.addEventListener("click", function() {
  updateTimeframe("daily");
});

weeklyBtn.addEventListener("click", function() {
  updateTimeframe("weekly");
});

monthlyBtn.addEventListener("click", function() {
  updateTimeframe("monthly");
});

// Make Weekly the default
updateTimeframe("weekly");

// Loop through each button
for (let i = 0; i < buttons.length; i++) {

  buttons[i].addEventListener('click', function () {
    for (let j = 0; j < buttons.length; j++) {
      const linkInsideButton = buttons[j].querySelector('a');
      linkInsideButton.style.color = "";
    }
    const clickedLink = this.querySelector('a');
    clickedLink.style.color = "white";

  });
}