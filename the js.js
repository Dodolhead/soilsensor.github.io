document.addEventListener('click', function (event) {
  var dropdowns = document.getElementsByClassName('dropdown-content');
  for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === 'block' && !event.target.closest('.dropdown')) {
          openDropdown.style.display = 'none';
      }
  }
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
      document.querySelector(".navbar").style.top = "0";
  } else {
      document.querySelector(".navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
};

var lastScrollTop = 0;
var heroSection = document.getElementById("heroSection");

window.addEventListener("scroll", function () {
  var st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
      // Scrolling down, hide the hero section
      heroSection.classList.add("hidden");
  } else {
      // Scrolling up, show the hero section
      heroSection.classList.remove("hidden");
  }
  lastScrollTop = st <= 0 ? 0 : st;
});

function toggleCollapsible() {
  var collapsibleContent = document.getElementById("collapsibleContent");
  collapsibleContent.style.display = (collapsibleContent.style.display === "none") ? "block" : "none";
}

document.addEventListener("DOMContentLoaded", function () {
  var accordionItems = document.querySelectorAll('.accordion li');

  accordionItems.forEach(function (item) {
      item.addEventListener('click', function () {
          var radioInput = item.querySelector('input[type="radio"]');
          radioInput.checked = !radioInput.checked;
      });
  });
  // Simulate DHT22 measurements
  function simulateDHT22Measurement() {
    const temperature = Math.random() * 30 + 20; // Simulate temperature between 20 and 50 degrees Celsius
    const humidity = Math.random() * 50 + 30; // Simulate humidity between 30% and 80%

    document.getElementById("temperature").innerText = `Temperature: ${temperature.toFixed(2)}°C`;
    document.getElementById("humidity").innerText = `Humidity: ${humidity.toFixed(2)}%`;
}

// Simulate soil moisture measurement
function simulateSoilMoistureMeasurement() {
    const soilMoisture = Math.random() * 100; // Simulate soil moisture between 0% and 100%

    document.getElementById("soilMoisture").innerText = `Soil Moisture: ${soilMoisture.toFixed(2)}%`;
}

// Update measurements every 5 seconds (5000 milliseconds)
setInterval(() => {
    simulateDHT22Measurement();
    simulateSoilMoistureMeasurement();
}, 5000);

// Initial update
simulateDHT22Measurement();
simulateSoilMoistureMeasurement();
});