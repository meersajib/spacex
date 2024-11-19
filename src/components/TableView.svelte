<script>
    import {
      Badge,
      Button,
      Progressbar,
      Table,
      TableHead,
      TableHeadCell,
      TableBody,
      TableBodyRow,
      TableBodyCell,
    } from 'flowbite-svelte';
    import { LinkOutline } from 'flowbite-svelte-icons';
    import { tableHeaders } from '$lib/utils/constants'; // Table header definitions
    import { getBadgeClass } from '$lib/utils'; // Utility for badge classes
    import PadDetailsModal from './PadDetailsModal.svelte'; // External modal component
  
    export let pads = []; // Pads data
  
    // Local state
    let selectedPad = null; // Currently selected pad for modal
    let showModal = false; // Modal visibility state
  </script>
  
  <div class="table-wrapper">
    <Table shadow>
      <!-- Table Header -->
      <TableHead class="table-head">
        {#each tableHeaders as head}
          <TableHeadCell class={`table-head-cell ${head.class}`}>{head.label}</TableHeadCell>
        {/each}
      </TableHead>
    
      <!-- Table Body -->
      <TableBody class="table-body">
        {#each pads as pad}
          <TableBodyRow>
            <!-- Full Name -->
            <TableBodyCell class="table-body-cell">{pad?.full_name}</TableBodyCell>
    
            <!-- Location Name -->
            <TableBodyCell class="table-body-cell">{pad?.location?.name}</TableBodyCell>
    
            <!-- Region -->
            <TableBodyCell class="table-body-cell">{pad?.location?.region}</TableBodyCell>
    
            <!-- Details -->
            <TableBodyCell class="table-body-cell">
              <Button on:click={() => { selectedPad = pad; showModal = true; }}>
                  <Badge class="badge-default">View Details</Badge>
              </Button>
            </TableBodyCell>
    
            <!-- Success Rate -->
            <TableBodyCell class="table-body-cell">
              {#if pad?.success_rate > 0}
                <div>
                  <Progressbar
                    progress={pad.success_rate}
                    size="h-1.5"
                    progressClass="progress-bar"
                  />
                  <div class="success-rate-text">{pad.success_rate}%</div>
                </div>
              {:else}
                N/A
              {/if}
            </TableBodyCell>
    
            <!-- Wikipedia Link -->
            <TableBodyCell class="table-body-cell">
              <a href={pad?.wikipedia} target="_blank" rel="noopener noreferrer">
                <LinkOutline class="link-icon" />
              </a>
            </TableBodyCell>
    
            <!-- Status -->
            <TableBodyCell class="table-body-cell">
              <Badge
                class={`${getBadgeClass(pad?.status).bg} ${getBadgeClass(pad?.status).text} capitalize`}
              >
                {pad?.status}
              </Badge>
            </TableBodyCell>
          </TableBodyRow>
        {/each}
      </TableBody>
    </Table>
  </div>

  <!-- Modal -->
  <PadDetailsModal pad={selectedPad} bind:open={showModal} />
  
  <style>
    :global(.table-wrapper .relative){
      @apply border border-gray-200 dark:border-gray-400  rounded-[12px];
    }
    :global(.table-container) {
      @apply w-full overflow-auto dark:border dark:border-gray-600;
    }
  
    :global(.table-head) {
      @apply bg-gray-50 h-[50px] text-gray-500 dark:bg-gray-600 dark:text-white text-left;
    }
  
    :global(.table-head-cell) {
      @apply px-4 text-[12px] font-bold leading-[18px] dark:text-white;
    }
    :global(.table-body-row) {
      @apply bg-blue-600;
    }
  
    :global(.table-body-cell) {
      @apply px-5 py-2.5 text-[12px] font-semibold text-gray-900 max-w-[167px] text-ellipsis overflow-hidden bg-white dark:bg-gray-600;
    }
  
    :global(.badge-default) {
      @apply bg-gray-100 text-gray-900 px-2.5 cursor-pointer;
    }
  
    :global(.progress-bar) {
      @apply bg-green-default;
    }
  
    :global(.success-rate-text) {
      @apply mb-1 text-base;
    }
  
    :global(.link-icon) {
      @apply text-blue-default dark:text-white h-4 w-4;
    }
  </style>
  