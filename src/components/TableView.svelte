<script>
export let pads = [];
import {
    Badge,
    Button,
    Modal,
    Progressbar,
    Table,
    TableHead,
    TableHeadCell,
    TableBody,
    TableBodyRow,
    TableBodyCell
} from 'flowbite-svelte';
import {
    LinkOutline
} from 'flowbite-svelte-icons';

// Function to get badge class for background and text color
const getBadgeClass = (status) => {
    switch (status) {
        case 'active':
            return {
                bg: 'bg-green-100', text: 'text-green-800'
            };
        case 'retired':
            return {
                bg: 'bg-red-100', text: 'text-red-800'
            };
        default:
            return {
                bg: 'bg-primary-100', text: 'text-primary-800'
            };
    }
};

let selectedPad = null;
let showModal = false;
</script>

<Table shadow>
    <TableHead class="bg-gray-50 h-[50px]">
        <TableHeadCell class="text-gray-500 text-[12px] leading-[18px] px-4">Full Name</TableHeadCell>
        <TableHeadCell class="text-gray-500 text-[12px] leading-[18px] px-4">Location Name</TableHeadCell>
        <TableHeadCell class="text-gray-500 text-[12px] leading-[18px] px-4">Region</TableHeadCell>
        <TableHeadCell class="text-gray-500 text-[12px] leading-[18px] px-4">Details</TableHeadCell>
        <TableHeadCell class="text-gray-500 text-[12px] leading-[18px] px-4">Success Rate</TableHeadCell>
        <TableHeadCell class="text-gray-500 text-[12px] leading-[18px] px-4">Wikipedia Link</TableHeadCell>
        <TableHeadCell class="text-gray-500 text-[12px] leading-[18px] px-4">Status</TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
        {#each pads as pad}
        <TableBodyRow>
            <!-- Full Name -->
            <TableBodyCell class="px-5 py-2.5 text-sm font-semibold text-gray-900 max-w-[167px] text-ellipsis overflow-hidden">
                {pad?.full_name}
            </TableBodyCell>

            <!-- Location Name -->
            <TableBodyCell class="px-5 py-2.5 text-sm font-semibold text-gray-900 max-w-[167px] text-ellipsis overflow-hidden">
                {pad?.location?.name}
            </TableBodyCell>

            <!-- Region -->
            <TableBodyCell class="px-5 py-2.5 text-sm font-semibold text-gray-900 max-w-[167px] text-ellipsis overflow-hidden">
                {pad?.location?.region}
            </TableBodyCell>

            <!-- Details -->
            <TableBodyCell class="px-5 py-2.5 text-[12px] font-bold text-gray-900 max-w-[170px] text-ellipsis overflow-hidden">
                <Button on:click={() => { selectedPad = pad; showModal = true; }}>
                    <Badge class="bg-gray-100 text-gray-900 px-2.5 cursor-pointer">View Details</Badge>
                </Button>
            </TableBodyCell>

            <!-- Success Rate -->
            <TableBodyCell class="px-5 py-2.5 text-sm font-semibold text-gray-500 max-w-[150px]">
                {#if pad?.success_rate > 0}
                <div>
                    <Progressbar progress={pad?.success_rate} size="h-1.5" progressClass="bg-green-default" />
                    <div class="mb-1 text-base">{pad?.success_rate}%</div>
                </div>
                {:else}
                N/A
                {/if}
            </TableBodyCell>

            <!-- Wikipedia Link -->
            <TableBodyCell class="px-5 py-2.5 text-sm font-semibold text-gray-900 max-w-[167px] text-ellipsis overflow-hidden">
                <a href={pad?.wikipedia} target="_blank" rel="noopener noreferrer">
                    <LinkOutline class="text-blue-default h-4 w-4" />
                </a>
            </TableBodyCell>

            <!-- Status -->
            <TableBodyCell class="px-5 py-2.5 text-sm font-semibold text-gray-900 max-w-[167px] text-ellipsis overflow-hidden">
                <Badge
                    class="{`${getBadgeClass(pad?.status).bg} ${getBadgeClass(pad?.status).text} capitalize`}"
                    >
                    {pad?.status}
                </Badge>
            </TableBodyCell>
        </TableBodyRow>
        {/each}
    </TableBody>
</Table>

<!-- Modal -->
{#if showModal && selectedPad}
<Modal
    title={selectedPad?.full_name}
    bind:open={showModal}
    outsideclose
    class="w-full sm:min-h-[360px] sm:w-3/4 md:w-[640px]"
    classHeader="p-6 text-lg text-gray-900"
    classBackdrop="inset-0 z-40 bg-[rgba(0,0,0,0.5)]"
    >
    <p class="text-sm text-gray-500">{selectedPad?.details}</p>
</Modal>
{/if}
