<script>
    import { getChartOptions } from '$lib/utils';
  import { Chart } from 'flowbite-svelte';

  const { pads } = $props();

  // Reactive chart options based on pads data
  let options = $derived({
    series: pads.map((pad) => pad.rates),
    ...getChartOptions(pads),  // Spread chart options from the external file
  });
</script>

<Chart {options} class="py-6" />  <!-- Pass chart options to the Chart component -->

