<script>
import logo from "$lib/assets/images/logo.png";
import {
    Navbar,
    NavBrand,
    ButtonGroup,
    Button,
    Dropdown,
    DropdownItem,
    Radio,
    Skeleton,

    ImagePlaceholder

} from "flowbite-svelte";
import { DarkMode } from 'flowbite-svelte';
import {
    ListOutline,
    GridSolid,
    AdjustmentsVerticalSolid,
    ChevronDownOutline
} from 'flowbite-svelte-icons'
import {
    landingPads,
    fetchLandingPads
} from '../stores/landpadStore';
import {
    onMount
} from 'svelte';
import ButtonFilter from "../components/filter/ButtonFilter.svelte";
import DropdownFilter from "../components/filter/DropdownFilter.svelte";
import TableView from "../components/TableView.svelte";
import GridView from "../components/GridView.svelte";
import MapView from "../components/MapView.svelte";
import ChartView from "../components/ChartView.svelte";

let viewMode = $state('table')
let filter = $state(0);

onMount(() => {
    fetchLandingPads();
});

// Filtering the landingPads
let filteredPads = $derived($landingPads.filter(pad => {
    if (filter === 0) return true;
    if (filter === 1) return pad.status === "active";
    if (filter === 2) return pad.status === "retired";
    if (filter === 3) return pad.status === "under construction";
}));
</script>

<div class="xl:flex xl:gap-5 3xl:gap-10 justify-center">
    <div class="w-full xl:w-2/3">
        <div class="flex items-start justify-between mb-[18px]">
            <!-- Button Filter -->
            <ButtonFilter bind:viewMode />

            <!-- Filter Dropdown -->
            <DropdownFilter bind:filter />
        </div>
        <!-- Render Table or Grid View -->
        {#if filteredPads?.length}
        {#if viewMode === 'table'}
        <TableView pads={filteredPads} />
        {:else}
        <GridView pads={filteredPads} />
        {/if}
        {:else}
        <Skeleton size="xxl" />
        {/if}
    </div>
    <div class="w-full xl:w-1/3 2xl:w-[521px] gap-10">
        <!-- Right column content -->
        <div class="mt-10 xl:mt-0 flex flex-col sm:flex-row xl:flex-col gap-[26px]">
            <div style="box-shadow: 0px 2px 4px -2px rgba(0, 0, 0, 0.05), 0px 4px 6px -1px rgba(0, 0, 0, 0.10);"
                class="rounded-lg border border-gray-default dark:border-gray-600 w-full">
                <p class="p-4  text-sm text-gray-900 dark:text-white font-semibold">Map View</p>
                {#if filteredPads?.length}
                <MapView pads={filteredPads?.map(pad => ({id: pad?.id,lat: pad?.location?.latitude, lon: pad?.location?.longitude, status: pad?.status}))} />
                {:else}
                <ImagePlaceholder imgOnly class="h-full" />
                {/if}
            </div>
            <div style="box-shadow: 0px 2px 4px -2px rgba(0, 0, 0, 0.05), 0px 4px 6px -1px rgba(0, 0, 0, 0.10);"
                class="rounded-lg border border-gray-default dark:border-gray-600 w-full">
                <p class="p-4  text-sm text-gray-900 dark:text-white font-semibold border-b border-gray-default dark:border-gray-600">Success Rate Chart</p>
                {#if filteredPads?.length}
                <ChartView
                    pads={
                    filteredPads?.map(pad => ({id: pad?.id, name: pad?.location?.name, rates: pad?.success_rate, status: pad?.status}))
                    } />
                {:else}
                <ImagePlaceholder imgOnly class="h-full" />
                {/if}
            </div>
        </div>
    </div>
</div>
