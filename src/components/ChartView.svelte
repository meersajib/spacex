<script>
import {
    Chart,
    Card,
    A,
    Button,
    Dropdown,
    DropdownItem,
    Popover,
    Tooltip
} from 'flowbite-svelte';
import {
    InfoCircleSolid,
    ArrowDownToBracketOutline,
    ChevronDownOutline,
    ChevronRightOutline,
    PenSolid,
    DownloadSolid,
    ShareNodesSolid
} from 'flowbite-svelte-icons';

const {
    pads
} = $props()
console.log(
    'p',pads
)
let options = $derived({
    series: pads.map(pad => pad.rates),
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
                        formatter: function(w) {
                            const totalPads = w.globals.seriesTotals.length;
                            return totalPads;
                        }
                    },
                    value: {
                        show: true,
                        fontFamily: 'Inter, sans-serif',
                        offsetY: -20,
                        formatter: function(value) {
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
    labels: [...pads.map(pad => pad.name)],
    dataLabels: {
        enabled: false
    },
    legend: false,
    yaxis: {
        labels: {
            formatter: function(value) {
                return value + '%';
            }
        }
    },
});
</script>

<Chart {options} class="py-6" />
