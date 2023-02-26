import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.scss";

import Axios from "axios";
import CurrentWeather from "@/components/CurrentWeather";
import WeatherChart from "@/components/WeatherChart";

export default function Home() {
  const [location, setLocation] = useState("jodhpur");
  const [currentWeather, setCurrentWeather] = useState("");
  const [chartData, setChartData] = useState("");

  useEffect(() => {
    fetchCurrentWeather();
    fetchHourlyWeather();
  }, []);

  const fetchCurrentWeather = async () => {
    try {
      const res = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=dffc80013cdd8f5a2a254437c49d3d63`
      );
      setCurrentWeather(res);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchHourlyWeather = async () => {
    try {
      const res = await Axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&cnt=10&appid=dffc80013cdd8f5a2a254437c49d3d63`
      );
      console.log(res);

      const chartD = {
        labels: res.data.list.map((data) => data.dt_txt),
        datasets: [
          {
            label: "Temperature",
            data: res.data.list.map((data) =>
              (data.main.temp - 272.15).toFixed(2)
            ),
            backgroundColor: ["#2a71d0"],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      };
      setChartData(chartD);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    if (location != "") {
      //Search location query
      fetchCurrentWeather();
      fetchHourlyWeather();
    }
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button onClick={handleClick} className={styles.button}>
              Search
            </button>
          </div>
          <div className={styles.widgetContainer}>
            <div className={styles.currentWeather}>
              {currentWeather.status == 200 && (
                <CurrentWeather currentWeather={currentWeather} />
              )}
            </div>
            <div className={styles.graphWidget}>
              <WeatherChart chartData={chartData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
