<script>
export let pads = [];
import {
    LinkOutline
} from 'flowbite-svelte-icons';
import {
    Modal,
    Badge,
    Button
} from 'flowbite-svelte';

let selectedPad = null; // To track the pad for the modal
let showModal = false;
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
    {#each pads as pad}
    <div class="bg-white border border-gray-300 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-200">
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold text-gray-800">{pad?.full_name}</h3>
            <Badge class="text-xs px-2 py-1 rounded-full
                {pad.status === 'active' ? 'bg-green-100 text-green-800' :
                pad.status === 'retired' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}">
                {pad?.status}
            </Badge>
        </div>
        <p class="text-sm text-gray-600"><strong>Location Name:</strong> {pad?.location?.name}</p>
        <p class="text-sm text-gray-600"><strong>Region:</strong> {pad?.location?.region}</p>
        <p class="text-sm text-gray-600"><strong>Success Rate:</strong> {pad?.success_rate || 'N/A'}%</p>
        <p class="text-sm text-gray-600">
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
            class="mt-4 w-full bg-blue-500 text-white hover:bg-blue-600 text-sm py-2 rounded-md"
            >
            View Details
        </Button>
    </div>
    {/each}
</div>

<!-- Modal -->
{#if showModal}
<Modal
    title={selectedPad?.full_name}
    bind:open={showModal}
    outsideclose
    class="w-full sm:w-3/4 md:w-[640px]"
    classHeader="p-6 text-lg text-gray-900"
    classBackdrop="inset-0 z-40 bg-[rgba(0,0,0,0.5)]"
    >
    <p class="text-sm text-gray-500">{selectedPad?.details}</p>

</Modal>
{/if}
