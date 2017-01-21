export class WeatherAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('weather-app-app h1')).getText();
  }
}
