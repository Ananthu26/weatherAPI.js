
        const getWeather = async (city) => {
            const apiKey = '3e9b6a717cf9d33ac0b1e8be45b01133';
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
            const data = await response.json();
            console.log(data);

            document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            document.getElementById('weather-city').innerText = data.name;
            document.getElementById('weather-description').innerText = data.weather[0].description;
            document.getElementById('weather-temp').innerText = `Temperature: ${data.main.temp} °C`;
            document.getElementById('weather-humidity').innerText = `Humidity: ${data.main.humidity}%`;
            document.getElementById('weather-wind').innerText = `Wind Speed: ${data.wind.speed} m/s`;

            const weatherCondition = data.weather[0].main.toLowerCase();
            let backgroundImage = '';

            switch (weatherCondition) {
                case 'clear':
                    backgroundImage = 'url(http://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg)';
                    break;
                case 'clouds':
                    backgroundImage = 'url(http://images.pexels.com/photos/414171/pexels-photo-414171.jpeg)';
                    break;
                case 'rain':
                    backgroundImage = 'url(http://images.pexels.com/photos/110874/pexels-photo-110874.jpeg)';
                    break;
                case 'snow':
                    backgroundImage = 'url(http://images.pexels.com/photos/60561/winter-snow-nature-60561.jpeg)';
                    break;
                case 'thunderstorm':
                    backgroundImage = 'url(http://images.pexels.com/photos/1118869/pexels-photo-1118869.jpeg)';
                    break;
                default:
                    backgroundImage = 'url(http://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg)';
                    break;
            }

            document.body.style.backgroundImage = backgroundImage;
        }

        const searchWeather = () => {
            const city = document.getElementById('city-input').value;
            getWeather(city);
        }

        window.onload = () => {
            getWeather('kochi');
            
        }


