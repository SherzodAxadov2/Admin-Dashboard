const ctx = document.getElementById("myChart");
const chartBar = document.getElementById("chartBar");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "# of Votes",
        data: [0, 20, 20, 40, 20, 50, 30, 60],
        borderWidth: 3,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

new Chart(chartBar, {
  type: "bar",
  data: {
    labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "# of Votes",
        data: [13, 20, 25, 20, 30, 22, 17, 28],
        borderWidth: 2,
        backgroundColor: "#FB6340",
        barThickness: 10,
        borderRadius: 5,
        borderColor: "#FB6340",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
