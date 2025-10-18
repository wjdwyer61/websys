function getBackgroundColor(tempF) {
  if (tempF <= 32) return "#aec6cf";      // Pastel Dark Blue
  else if (tempF <= 50) return "#cfe7f0"; // Pastel Light Blue
  else if (tempF <= 65) return "#c2f0c2"; // Pastel Green
  else if (tempF <= 75) return "#fff5ba"; // Pastel Yellow
  else if (tempF <= 85) return "#ffd1b3"; // Pastel Orange
  else return "#ffb3ba";                  // Pastel Red
}



$(document).ready(function () {
  const weatherApiKey = "d7f4c2d3c3b422d0f07ca812f9dba9d8";
  const catApiUrl = "https://api.thecatapi.com/v1/images/search";

  // Fetch weather for Troy, NY
$.ajax({
  url: `https://api.openweathermap.org/data/2.5/weather?q=Troy,US&appid=${weatherApiKey}&units=imperial`,
  method: "GET",
  success: function (data, status, xhr) {
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const wind = data.wind.speed;

    $("#weather").html(`
      <strong>${description}</strong><br>
      Temperature: ${temp}°F<br>
      Humidity: ${humidity}%<br>
      Wind Speed: ${wind} mph
    `);

    // Set background color
    const bgColor = getBackgroundColor(temp);
    $("body").css("background-color", bgColor);

    // Show some response headers (meta)
    const headers = xhr.getAllResponseHeaders().split('\r\n');
    const usefulMeta = headers.filter(h => h.toLowerCase().includes('date') || h.toLowerCase().includes('content-type'));
    $("#weather-meta").text(`Response headers: ${usefulMeta.join(' | ')}`);
  },
  error: function (err) {
    $("#weather").text("Failed to load weather data.");
  }
});


  // Fetch random cat image
  $.ajax({
    url: catApiUrl,
    method: "GET",
    headers: {
      "x-api-key": "" // Optional: add your own free API key here
    },
    success: function (data, status, xhr) {
      const catUrl = data[0].url;
      $("#cat-img").attr("src", catUrl);

      // Show some response headers (meta)
      const headers = xhr.getAllResponseHeaders().split('\r\n');
      const usefulMeta = headers.filter(h => h.toLowerCase().includes('date') || h.toLowerCase().includes('content-type'));
      $("#cat-meta").text(`Response headers: ${usefulMeta.join(' | ')}`);
    },
    error: function () {
      $("#cat-img").attr("alt", "Failed to load cat image.");
    }
  });
});
