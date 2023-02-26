import { Line } from "react-chartjs-2";
import styles from './style.module.scss'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    );

const WeatherChart = ({chartData}) => {

  console.log('chartData', chartData);
  return (
    <div className={styles.graphContainer}>
      {chartData.labels?.length>0 && <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            title: {
              display: false,
            },
            legend: {
              display: false
            }
          }
        }}
      />}
       
    </div>
  )
}

export default WeatherChart