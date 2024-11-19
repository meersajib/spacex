<script>
  import { getChartOptions } from "$lib/utils";
  import { Chart } from "flowbite-svelte";

  const { pads } = $props();

  let options = $derived({
    series: pads.map((pad) => pad.rates),
    ...getChartOptions(pads),
  });
</script>

<Chart {options} class="py-6" />
