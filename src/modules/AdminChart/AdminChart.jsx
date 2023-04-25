import React, { useState, useEffect } from "react";
import { Chart } from "chart.js/auto";
import "./AdminChart.css";
import instance from "../../utils/http.js";

const AdminChart = () => {
  const [data, setData] = useState([]);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    // axios
    instance.get('/get-data-chart')
      .then(res => {
        if (res && res.errCode == 0)
        {
          console.log(res)
          setData(res.data)
        }
    })
  }, []);

  useEffect(() => {
    // if (chartInstance) {
    //   chartInstance.destroy();
    // }
    // Destroy old chart, if it exists
    const oldChart = Chart.getChart(document.getElementById("booking-chart").getContext("2d"));
    if (oldChart) {
      oldChart.destroy();
    }
    const ctx = document.getElementById("booking-chart").getContext("2d");
    console.log(ctx);
    const labels = data.map((data) => data.name);
    const revenue = data.map((data) => parseFloat(data.total));
    // console.log(revenue);
    // const time_eat = data.map((data) => data.time_eat);
    // console.log(quantity);

    const newChartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "revenue",
            data: revenue,
            backgroundColor: "rgba(153, 102, 255, 0.2)",
            borderColor: "rgba(153, 102, 255, 0.2)",
            borderWidth: 1,
            yAxisID: "revenue-y-axis",
          }
          
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Revenue for each customer",
            font: {
              size: 18,
              weight: "bold",
            },
          },
        },
        scales: {
          "revenue-y-axis": {
            type: "linear",
            position: "left",
            ticks: {
              callback: function (value) {
                return value.toLocaleString("en-US", {
                  style: "currency",
                  currency: "VND",
                  minimumFractionDigits: 0,
                });
              },
            },
            scaleLabel: {
              display: true,
              labelString: "Revenue",
            },
          }
        },
      },
    });
    setChartInstance(newChartInstance);
  }, [data]);

  return (
    <div className="adminChart_page">
      <canvas id="booking-chart" width="400" height="400"></canvas>
    </div>
  );
};

export default AdminChart;
