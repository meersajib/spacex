export const getBadgeClass = (status) => {
  const classes = {
    active: { bg: "bg-green-100", text: "text-green-800" },
    retired: { bg: "bg-red-100", text: "text-red-800" },
    default: { bg: "bg-primary-100", text: "text-primary-800" },
  };
  return classes[status] || classes.default;
};

export function getChartOptions(pads) {
  return {
    series: pads.map((pad) => pad.rates),
    colors: ["#1A56DB", "#16BDCA", "#FDBA8C", "#E74694", "#91F652"],
    chart: {
      height: 220,
      width: "100%",
      type: "donut",
    },
    stroke: {
      colors: ["#1A56DB", "#16BDCA", "#FDBA8C", "#E74694", "#91F652"],
      lineCap: "round",
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontFamily: "Inter, sans-serif",
              offsetY: 20,
            },
            total: {
              showAlways: true,
              show: true,
              label: "Landing Pads",
              formatter: (w) => `${w.globals.seriesTotals.length}`,
            },
            value: {
              show: true,
              fontFamily: "Inter, sans-serif",
              offsetY: -20,
              formatter: (value) => `${value}%`,
            },
          },
          size: "80%",
        },
      },
    },
    grid: {
      padding: {
        top: -2,
      },
    },
    labels: pads.map((pad) => pad.name),
    dataLabels: {
      enabled: false,
    },
    legend: false,
    yaxis: {
      labels: {
        formatter: (value) => `${value}%`,
      },
    },
  };
}

export function getStatusClass(status) {
  if (status === "active") return "bg-green-100 text-green-800";
  if (status === "retired") return "bg-red-100 text-red-800";
  return "bg-yellow-100 text-yellow-800";
}
