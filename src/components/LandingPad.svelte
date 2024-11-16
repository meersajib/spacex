<script>
import {
    landingPads,
    fetchLandingPads
} from '../stores/landpadStore';
import {
    onMount
} from 'svelte';
import TableView from './TableView.svelte';
import GridView from './GridView.svelte';
import {
    ButtonGroup,
    Button,
    Dropdown,
    DropdownItem,
    Radio
} from 'flowbite-svelte';
import {
    ListOutline,
    GridSolid,
    AdjustmentsVerticalSolid,
    ChevronDownOutline
} from 'flowbite-svelte-icons';

let viewMode = 'table';
let filter = 0;

// Filtering the landingPads
$: filteredPads = $landingPads.filter(pad => {
    if (filter === 0) return true;
    if (filter === 1) return pad.status === "active";
    if (filter === 2) return pad.status === "retired";
    if (filter === 3) return pad.status === "under construction";
});

// Fetch data on mount
onMount(() => {
    fetchLandingPads();
});
</script>

<div>
    <!-- View Mode Toggle -->
    <div class="flex items-start justify-between mb-[18px]">
        <ButtonGroup>
            <Button
                class={viewMode === "table" ? "bg-gray-200 text-blue-default rounded-s-[6px]" : "bg-white rounded-s-[6px]"}
                on:click={() => viewMode = 'table'}>
                <ListOutline class="w-5 h-5" />
            </Button>
            <Button
                class={viewMode === "grid" ? "bg-gray-200 text-blue-default rounded-e-[6px]" : "bg-white rounded-e-[6px]"}
                on:click={() => viewMode = 'grid'}>
                <GridSolid class="w-5 h-5" />
            </Button>
        </ButtonGroup>

        <!-- Filter Dropdown -->
        <div>
            <Button class="bg-gray-200 text-gray-800 w-[186px] h-9 flex gap-2 px-0 border-1 border-[gray-200] rounded-lg">
                <AdjustmentsVerticalSolid class="w-5 h-5" />
                <span>Filter By Status</span>
                <ChevronDownOutline class="w-6 h-6 ms-2 text-gray-800" />
            </Button>
            <Dropdown class="w-full p-3 space-y-3 text-sm">
                <DropdownItem>
                    <Radio name="filter" bind:group={filter} value={0}>All</Radio>
                </DropdownItem>
                <DropdownItem>
                    <Radio name="filter" bind:group={filter} value={1}>Active</Radio>
                </DropdownItem>
                <DropdownItem>
                    <Radio name="filter" bind:group={filter} value={2}>Retired</Radio>
                </DropdownItem>
                <DropdownItem>
                    <Radio name="filter" bind:group={filter} value={3}>Under Construction</Radio>
                </DropdownItem>
            </Dropdown>
        </div>
    </div>

    <!-- Render Table or Grid View -->
    {#if viewMode === 'table'}
    <TableView pads={filteredPads} />
    {:else}
    <GridView pads={filteredPads} />
    {/if}
</div>
