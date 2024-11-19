<script>
  import { Modal } from 'flowbite-svelte';
  export let pad = null; // Pad data to display
  export let open = false; // Modal open state
</script>

<Modal
  title={`Details - ${pad?.full_name}`}
  bind:open
  outsideclose
  class="w-full sm:w-3/4 md:w-[640px] min-h-[380px] text-base"
  classHeader="p-6 text-lg text-gray-900 dark:text-white"
  classBody="text-gray-500 dark:text-white"
  classBackdrop="inset-0 z-40 bg-[rgba(0,0,0,0.5)]"
>
  {pad?.details}
</Modal>
