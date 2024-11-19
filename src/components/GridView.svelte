<script>
  import { LinkOutline } from "flowbite-svelte-icons";
  import { Badge, Button } from "flowbite-svelte";
  import PadDetailsModal from "./PadDetailsModal.svelte";
  import { getBadgeClass } from "$lib/utils";

  export let pads = [];
  let selectedPad = null;
  let showModal = false;
</script>

<div class="grid-container">
  {#each pads as pad}
    <div class="card">
      <div class="mb-4">
        <h3 class="pad-title">{pad?.full_name}</h3>
        <Badge
          class={`text-xs px-2 py-1 rounded-full
          ${getBadgeClass(pad?.status).bg} ${getBadgeClass(pad?.status).text}`}
        >
          {pad?.status}
        </Badge>
      </div>
      <p class="pad-text">
        <strong>Location Name:</strong>
        {pad?.location?.name}
      </p>
      <p class="pad-text"><strong>Region:</strong> {pad?.location?.region}</p>
      <p class="pad-text">
        <strong>Success Rate:</strong>
        {pad?.success_rate || "N/A"}%
      </p>
      <p class="pad-text">
        <strong>Wikipedia Link:</strong>
        <a href={pad?.wikipedia} target="_blank" rel="noopener noreferrer">
          <LinkOutline
            class="text-blue-500 hover:text-blue-700 h-5 w-5 inline"
          />
        </a>
      </p>
      <Button
        on:click={() => {
          selectedPad = pad;
          showModal = true;
        }}
        class="btn"
      >
        View Details
      </Button>
    </div>
  {/each}
</div>

<PadDetailsModal pad={selectedPad} bind:open={showModal} />

<style>
  .grid-container {
    @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6;
  }

  .card {
    @apply bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-200;
  }

  .pad-title {
    @apply text-lg font-semibold text-gray-800 dark:text-white;
  }

  .pad-text {
    @apply text-sm text-gray-600 dark:text-white;
  }

  :global(.btn) {
    @apply mt-4 w-full bg-blue-default dark:bg-gray-500 text-white hover:bg-blue-600 text-sm py-2 rounded-md;
  }
</style>
