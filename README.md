# Weather App

![weather_app_screenshot](https://user-images.githubusercontent.com/24871480/130389162-5ae679bc-ee6d-425a-b928-6bacbd7ed3fb.png)

## API
Data is pulled from the OpenWeather API. Currently, the query is harded coded to get the current weather for Kyoto, Japan.

## Resources
App is using Bootstrap for CSS and the background gradient was obtained from https://webgradients.com. Sakura icons are from https://www.flaticon.com.

## Run
To run the app successfully, you'll need your own OpenWeather API key. It's free, just go to https://openweathermap.org to signup.

- Build the image
- Execute, docker run -d -p 3000:3000 -e REACT_APP_API_KEY=(your-api-key) (image-name)

