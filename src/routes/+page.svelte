<script>
import logo from "$lib/assets/images/logo.png";
import {
    Navbar,
    NavBrand,
    ButtonGroup,
    Button,
    Dropdown,
    DropdownItem,
    Radio
} from "flowbite-svelte";
import {
    ListOutline,
    GridSolid,
    AdjustmentsVerticalSolid,
    ChevronDownOutline
} from 'flowbite-svelte-icons'
import LandingPadTable from "../components/LandingPadContainer.svelte";
import {
    landingPads,
    fetchLandingPads
} from '../stores/landpadStore';
import {
    onMount
} from 'svelte';
import ButtonFilter from "../components/filter/ButtonFilter.svelte";
import DropdownFilter from "../components/filter/DropdownFilter.svelte";
    import LandingPadContainer from "../components/LandingPadContainer.svelte";

let viewMode = 'table'
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

<div class="2xl-container">
    <Navbar class="h-20 shadow-[0px_1px_3px_0px_#0000001A] flex items-center justify-center p-0">
        <NavBrand href="/" class="flex items-center justify-center w-full">
            <img src={logo} class="h-[38px] mx-auto" alt="Spacex Logo" />
        </NavBrand>
    </Navbar>

    <section class="pt-[50px] px-[100px]">
      <LandingPadContainer bind:filter bind:viewMode pads={filteredPads} />
        
    </section>
</div>
