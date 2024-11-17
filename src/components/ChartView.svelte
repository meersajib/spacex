<script>
  import { Chart, Card, A, Button, Dropdown, DropdownItem, Popover, Tooltip } from 'flowbite-svelte';
  import { InfoCircleSolid, ArrowDownToBracketOutline, ChevronDownOutline, ChevronRightOutline, PenSolid, DownloadSolid, ShareNodesSolid } from 'flowbite-svelte-icons';

  export let pads = []
  
  const options = {
    series: [...pads?.filter(pad => pad?.success_rate > 0)?.map(pad => pad?.success_rate)],
    colors: ['#1A56DB', '#16BDCA', '#FDBA8C', '#E74694', '#9B1C1C'],
    chart: {
      height: 220,
      width: '100%',
      type: 'donut'
    },
    stroke: {
      colors: ['transparent'],
      lineCap: ''
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontFamily: 'Inter, sans-serif',
              offsetY: 20,
            },
            total: {
              showAlways: true,
              show: true,
              label: 'Landing Pads',
              formatter: function (w) {
                const totalPads = w.globals.seriesTotals.length;
                return totalPads;
              }
            },
            value: {
              show: true,
              fontFamily: 'Inter, sans-serif',
              offsetY: -20,
              formatter: function (value) {
                return value + '%';
              }
            }
          },
          size: '80%'
        }
      }
    },
    grid: {
      padding: {
        top: -2
      }
    },
    labels: [...pads?.filter(pad => pad?.success_rate > 0)?.map(pad => pad?.location?.name)],
    dataLabels: {
      enabled: false
    },
    legend: false,
    yaxis: {
      labels: {
        formatter: function (value) {
          return value + '%';
        }
      }
    },
    // xaxis: {
    //   labels: {
    //     formatter: function (value) {
    //       return value + 'k';
    //     }
    //   },
    //   axisTicks: {
    //     show: false
    //   },
    //   axisBorder: {
    //     show: false
    //   }
    // }
  };
</script>

<div class="shadow-[0px_4px_6px_-1px_#0000001A] border-1 border-gray-default">
    <p class="p-4  text-sm text-gray-900 font-semibold">Success Rate Chart</p>
    <Chart {options} class="py-6" />
</div>