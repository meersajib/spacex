<script>
  import { LinkOutline } from 'flowbite-svelte-icons';
  import { Badge, Button } from 'flowbite-svelte';
  import PadDetailsModal from './PadDetailsModal.svelte';

  export let pads = [];
  let selectedPad = null; // To track the pad for the modal
  let showModal = false; // Modal open state
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
  {#each pads as pad}
    <div class="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-200">
      <div class="mb-4">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">{pad?.full_name}</h3>
        <Badge
          class="text-xs px-2 py-1 rounded-full
            {pad.status === 'active' ? 'bg-green-100 text-green-800' :
            pad.status === 'retired' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}"
        >
          {pad?.status}
        </Badge>
      </div>
      <p class="text-sm text-gray-600 dark:text-white"><strong>Location Name:</strong> {pad?.location?.name}</p>
      <p class="text-sm text-gray-600 dark:text-white"><strong>Region:</strong> {pad?.location?.region}</p>
      <p class="text-sm text-gray-600 dark:text-white"><strong>Success Rate:</strong> {pad?.success_rate || 'N/A'}%</p>
      <p class="text-sm text-gray-600 dark:text-white">
        <strong>Wikipedia Link:</strong>
        <a href={pad?.wikipedia} target="_blank" rel="noopener noreferrer">
          <LinkOutline class="text-blue-500 hover:text-blue-700 h-5 w-5 inline" />
        </a>
      </p>
      <Button
        on:click={() => {
          selectedPad = pad;
          showModal = true;
        }}
        class="mt-4 w-full bg-blue-default dark:bg-gray-500 text-white hover:bg-blue-600 text-sm py-2 rounded-md"
      >
        View Details
      </Button>
    </div>
  {/each}
</div>

<PadDetailsModal pad={selectedPad} bind:open={showModal} />

  
  <style>
    :global(.card) {
      @apply bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-200;
    }
  
    :global(.header) {
      @apply mb-4;
    }
  
    :global(.title) {
      @apply text-lg font-semibold text-gray-800 dark:text-white;
    }
  
    :global(.badge) {
      @apply text-xs px-2 py-1 rounded-full;
    }
  
    :global(.details p) {
      @apply text-sm text-gray-600 dark:text-white mb-2;
    }
  
    :global(.link) {
      @apply text-blue-500 hover:text-blue-700;
    }
  
    :global(.link-icon) {
      @apply h-5 w-5 inline;
    }
  
    :global(.btn) {
      @apply mt-4 w-full bg-blue-default dark:bg-gray-500 text-white hover:bg-blue-600 text-sm py-2 rounded-md;
    }
  </style>
  

  