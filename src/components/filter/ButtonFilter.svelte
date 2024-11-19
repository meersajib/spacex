<script>
  import { ButtonGroup, Button } from "flowbite-svelte";
  import { ListOutline, GridSolid } from "flowbite-svelte-icons";

  export let viewMode = "";

  $: getClass = (mode, rounded) =>
    `${viewMode === mode ? "bg-gray-200 dark:bg-gray-600 text-blue-default" : "bg-white"} ${rounded}`;
</script>

<ButtonGroup class="dark:border dark:border-gray-600">
  <Button
    class={getClass("table", "rounded-s-lg")}
    on:click={() => (viewMode = "table")}
  >
    <ListOutline class="w-5 h-5" />
  </Button>
  <Button
    class={getClass("grid", "rounded-e-lg")}
    on:click={() => (viewMode = "grid")}
  >
    <GridSolid class="w-5 h-5" />
  </Button>
</ButtonGroup>
