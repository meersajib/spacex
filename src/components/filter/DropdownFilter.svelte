<script>
  import { FILTER_OPTIONS } from "$lib/utils/constants";
  import { Dropdown, DropdownItem, Radio } from "flowbite-svelte";
  import {
    AdjustmentsVerticalSolid,
    ChevronDownOutline,
  } from "flowbite-svelte-icons";

  export let filter = 0;
</script>

<div>
  <div class="filter-btn">
    <AdjustmentsVerticalSolid />
    <span class="filter-text">Filter By Status</span>
    <ChevronDownOutline class="w-5 h-5 text-gray-800 dark:text-white" />
  </div>

  <Dropdown class="dropdown">
    {#each FILTER_OPTIONS as { label, value }}
      <DropdownItem>
        <Radio name="filter" bind:group={filter} {value}>
          {label}
        </Radio>
      </DropdownItem>
    {/each}
  </Dropdown>
</div>

<style>
  .filter-btn {
    @apply cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white w-full h-9 flex items-center gap-2 px-4 border border-gray-200 dark:border-gray-600 rounded-lg;
  }

  .filter-text {
    @apply text-gray-800 dark:text-white;
  }
</style>
