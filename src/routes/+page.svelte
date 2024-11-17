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
// let pads = $state($landingPads)

// Filtering the landingPads
let filteredPads = $derived($landingPads.filter(pad => {
    if (filter === 0) return true;
    if (filter === 1) return pad.status === "active";
    if (filter === 2) return pad.status === "retired";
    if (filter === 3) return pad.status === "under construction";
}));

// Fetch data on mount
onMount(() => {
    fetchLandingPads();
});
</script>

<div class="flex flex-wrap lg:flex-nowrap gap-[40px]">
    <div class="flex-1">
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
    <div class="w-full lg:w-[521px]">
        <!-- Right column content -->
        <div class="flex flex-col gap-[26px]">
          <div class="shadow-[0px_4px_6px_-1px_#0000001A] border-1 border-gray-default">
            <p class="p-4  text-sm text-gray-900 font-semibold">Map View</p>
            {#if $landingPads?.length}
            <MapView pads={$landingPads?.map(pad => ({id: pad?.id,lat: pad?.location?.latitude, lon: pad?.location?.longitude, status: pad?.status}))} />
              {:else}
              <ImagePlaceholder imgOnly class="h-full" />
              {/if}
            </div>  
            <div class="shadow-[0px_4px_6px_-1px_#0000001A] border-1 border-gray-default">
              <p class="p-4  text-sm text-gray-900 font-semibold">Success Rate Chart</p>
              {#if $landingPads?.length}
              <ChartView 
              pads={
              $landingPads?.filter(pad => pad?.success_rate > 0)?.map(pad => ({id: pad?.id, name: pad?.location?.name, rates: pad?.success_rate, status: pad?.status}))
              } />
              {:else}
              <ImagePlaceholder imgOnly class="h-full" />
              {/if}
          </div>
            
        </div>
    </div>
</div>