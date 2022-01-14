import {
  Chart,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  LineController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
} from 'chart.js';

Chart.register(
  LineElement,
  BarElement,
  PointElement,
  BarController,
  LineController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
);

document.addEventListener("DOMContentLoaded", function(event) {
    const daily = [["2021-12-31", 123], ["2022-01-01", 18]];
    const dailyData = {
        labels: daily.map(function(x: [string, number]) { return x[0]; }),
        datasets: [{
            backgroundColor: "rgba(0, 255, 0, 0.5)",
            data: daily.map(function(x: [string, number]) { return x[1]; }),
        }]
    };
    const dailyCanvas = <HTMLCanvasElement>document.getElementById("daily");
    const dailyCtx = dailyCanvas.getContext("2d");
    new Chart(dailyCtx, {
        type: "bar",
        data: dailyData,
          options: {
              plugins: {
                  title: {
                      display: true,
                      text: "daily title",
                  },
                  tooltip: {
                      enabled: false,
                  },
                  legend: {
                      display: false,
                  }
              },
              scales: {
                x: {
                      suggestedMin: 0,
                      title: {
                          display: true,
                          text: "daily x axis",
                      },
                  },
                  y: {
                      title: {
                          display: true,
                          text: "daily y axis",
                      },
                  }
              },
          }
      });
});

// vim: shiftwidth=4 softtabstop=4 expandtab:
