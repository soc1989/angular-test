import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { WeatherAppAppComponent } from '../app/weather-app.component';

beforeEachProviders(() => [WeatherAppAppComponent]);

describe('App: WeatherApp', () => {
  it('should create the app',
      inject([WeatherAppAppComponent], (app: WeatherAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'weather-app works!\'',
      inject([WeatherAppAppComponent], (app: WeatherAppAppComponent) => {
    expect(app.title).toEqual('weather-app works!');
  }));
});
