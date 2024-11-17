<script>
import {
    Chart
} from 'flowbite-svelte';

const {
    pads
} = $props();

// Reactive chart options
let options = $derived({
    series: pads.map((pad) => pad.rates),
    colors: ['#1A56DB', '#16BDCA', '#FDBA8C', '#E74694', '#91F652'],
    chart: {
        height: 220,
        width: '100%',
        type: 'donut',
    },
    stroke: {
        colors: ['#1A56DB', '#16BDCA', '#FDBA8C', '#E74694', '#91F652'],
        lineCap: 'round',
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
                            return `${totalPads}`;
                        },
                    },
                    value: {
                        show: true,
                        fontFamily: 'Inter, sans-serif',
                        offsetY: -20,
                        formatter: function(value) {
                            return `${value}%`;
                        },
                    },
                },
                size: '80%',
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
            formatter: function(value) {
                return `${value}%`;
            },
        },
    },
});
</script>

<Chart {options} class="py-6" />
