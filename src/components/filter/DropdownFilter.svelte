<script>
    import { FILTER_OPTIONS } from '$lib/utils/constants';
    import { Button, Dropdown, DropdownItem, Radio } from 'flowbite-svelte';
    import { AdjustmentsVerticalSolid, ChevronDownOutline } from 'flowbite-svelte-icons';
  
    export let filter = 0; // Externally controlled filter state
  </script>
  
  <div>
    <Button class="filter-btn">
      <AdjustmentsVerticalSolid class="icon" />
      <span class="filter-text">Filter By Status</span>
      <ChevronDownOutline class="icon-chevron" />
    </Button>
  
    <Dropdown class="dropdown">
      {#each FILTER_OPTIONS as { label, value }}
        <DropdownItem>
          <Radio name="filter" bind:group={filter} value={value}>
            {label}
          </Radio>
        </DropdownItem>
      {/each}
    </Dropdown>
  </div>
  
  <style>
    :global(.filter-btn) {
      @apply bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white w-full h-9 flex items-center gap-2 px-4 border border-gray-200 dark:border-gray-600 rounded-lg;
    }

    :global(.filter-text) {
      @apply text-gray-800 dark:text-white;
    }
  
    :global(.icon, .icon-chevron) {
      @apply w-5 h-5 text-gray-800 dark:text-white;
    }
  
    :global(.icon-chevron) {
      @apply ml-2 text-gray-800 dark:text-white;
    }
  
    :global(.dropdown) {
      @apply w-full mt-2 p-2 space-y-2 text-sm;
    }
  </style>
  