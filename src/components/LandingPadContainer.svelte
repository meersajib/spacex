<script>
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
    import ButtonFilter from './filter/ButtonFilter.svelte';
    import DropdownFilter from './filter/DropdownFilter.svelte';
    import MapView from './MapView.svelte';

export let pads = [];
export let viewMode = 'table';
export let filter = ''
</script>

<div>
    <div class="flex flex-wrap lg:flex-nowrap gap-[40px]">
        <div class="flex-1">
            <div class="flex items-start justify-between mb-[18px]">
                <!-- Button Filter -->
                <ButtonFilter bind:viewMode />

                <!-- Filter Dropdown -->
                <DropdownFilter bind:filter />
            </div>
            <!-- Render Table or Grid View -->
    {#if viewMode === 'table'}
    <TableView pads={pads} />
    {:else}
    <GridView pads={pads} />
    {/if}
        </div>
        <div class="w-full lg:w-[521px]">
            <!-- Right column content -->
            <div class="flex flex-col gap-[26px]">
                <MapView pads={pads?.map(pad => ({id: pad?.id,lat: pad?.location?.latitude, lon: pad?.location?.longitude, status: pad?.status}))} />
                <div class="bg-gray-400 p-4">
                    <p>This is the second row inside the right column.</p>
                </div>
            </div>
        </div>
    </div>
    
</div>
