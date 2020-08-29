// fetch("http://localhost:3000/weather?address=12what")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

const form = document.querySelector("#weather-form");
const input = document.querySelector("input");
const error = document.querySelector("#output-error");
const output_location = document.querySelector("#output-location");
const forecast = document.querySelector("#output-forecast");

form.addEventListener("submit", (event) => {
  error.textContent = "";
  event.preventDefault();
  address = undefined;
  address = input.value;
  if (!address) {
    return (error.textContent = "must submit an address");
  }
  url = "http://localhost:3000/weather?address=" + address;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (!data.forecast) {
        error.textContent = data.error;
      }
      output_location.textContent = data.location;
      forecast.textContent = data.forecast;

      return console.log(data);
    });
});
