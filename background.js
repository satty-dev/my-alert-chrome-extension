const API_KEY = "3315351b1694fa6809b52345095b8755";
const CITY = "Tokyo";
const UNITS = "metric";

chrome.action.onClicked.addListener(async (tab) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=${UNITS}`
    );
    const data = await response.json();
    const temp = data.main.temp;
    const description = data.weather[0].description;

    const message = `Today's weather in ${CITY}:\n${description}, ${temp}°C`;

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (msg) => alert(msg),
      args: [message],
    });
  } catch (error) {
    console.error("Weather fetch error:", error);
  }
});
