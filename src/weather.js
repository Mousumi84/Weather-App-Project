import { Component } from "react";
import "./weather.css";

let imageMapping={
    Clouds: "./cloudy.jpg",
    Clear: "./clear.jpg",
    Rainy: "./rainy.jpg",
    Snow: "./snow.jpg",
}

let apikey="e9adc129761bf4b4e1f425c3320dc874";

class WeatherApp extends Component {

    async fetchWeatherReport(lat,lng) {
       const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apikey}`);
       const data=await response.json();

        this.setState(data)
    }

    render() {

        const submit=(event) => {
            event.preventDefault();

            let lat=event.target["lat"].value;
            let lng=event.target["lng"].value;
            this.fetchWeatherReport(lat,lng);
    
        };

console.log(this.state);
let weatherType= this.state?.weather?.[0]?.main;
let tempKelvin= this.state?.main.temp;
let tempCelsius = (tempKelvin - 273.15).toFixed(2);

        return (
            <div className="container">
                <div>
                    <form onSubmit={submit}>
                        <input type="text" name="lat" placeholder="Enter Latitude" id="latitude"></input>
                        <input type="text" name="lng" placeholder="Enter Longitude" id="longitude"></input>
                        <button>Get Weather</button>
                    </form>

                    <div id="weather-container">
                        {  this.state &&
                            <>
                               <h1>Warther Report : </h1>
                               <div id="weatherdetails">
                                    <div id="left">
                                        <div id="alt">Latitude: <span>{this.state?.coord?.lat}   </span> Longitude: <span>{this.state?.coord?.lon}</span></div>
                                        <br />
                                        <span id="place">{this.state?.name}</span>
                                        <div>{weatherType}</div>
                                        <div>Temperature : <span>{tempCelsius}° C</span></div>
                                    </div>
                                    <div id="rigth">
                                        <img src={imageMapping[weatherType]} />
                                    </div>
                               </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        )
    }
}


export default WeatherApp;