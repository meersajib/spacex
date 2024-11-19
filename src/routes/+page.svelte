<script>
    import logo from "$lib/assets/images/logo.png";
    import {
        Navbar,
        NavBrand,
        Skeleton,
        ImagePlaceholder
    } from "flowbite-svelte";
    import { DarkMode } from 'flowbite-svelte';
    import {
        landingPads,
        fetchLandingPads
    } from '../stores/landpadStore';
    import { onMount } from 'svelte';
    import ButtonFilter from "../components/filter/ButtonFilter.svelte";
    import DropdownFilter from "../components/filter/DropdownFilter.svelte";
    import TableView from "../components/TableView.svelte";
    import GridView from "../components/GridView.svelte";
    import MapView from "../components/MapView.svelte";
    import ChartView from "../components/ChartView.svelte";
    
    let viewMode = $state('table');
    let filter = $state(0);
    
    onMount(() => {
        fetchLandingPads();
    });
    
    let filteredPads = $derived($landingPads.filter(pad => {
        if (filter === 0) return true;
        if (filter === 1) return pad.status === "active";
        if (filter === 2) return pad.status === "retired";
        if (filter === 3) return pad.status === "under construction";
    }));
    </script>
    
    <div class="layout-wrapper">
        <div class="main-content">
            <div class="filters-wrapper">
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
        <div class="sidebar-content">
            <!-- Map View -->
            <div class="card">
                <p class="card-title">Map View</p>
                {#if filteredPads?.length}
                    <MapView pads={filteredPads?.map(pad => ({
                        id: pad?.id,
                        lat: pad?.location?.latitude,
                        lon: pad?.location?.longitude,
                        status: pad?.status
                    }))} />
                {:else}
                    <ImagePlaceholder imgOnly class="h-full" />
                {/if}
            </div>
            <!-- Success Rate Chart -->
            <div class="card">
                <p class="card-title bordered">Success Rate Chart</p>
                {#if filteredPads?.length}
                    <ChartView
                        pads={filteredPads?.map(pad => ({
                            id: pad?.id,
                            name: pad?.location?.name,
                            rates: pad?.success_rate,
                            status: pad?.status
                        }))} />
                {:else}
                    <ImagePlaceholder imgOnly class="h-full" />
                {/if}
            </div>
        </div>
    </div>
    
    <style>
    /* Scoped styles without :global */
    .layout-wrapper {
        @apply overflow-hidden xl:flex xl:gap-5 justify-center;
    }
    .main-content {
        @apply w-full xl:w-2/3;
    }
    .filters-wrapper {
        @apply flex items-start justify-between mb-[18px];
    }
    .sidebar-content {
        @apply w-full flex flex-col xl:w-1/3 2xl:w-[521px] gap-[26px];
    }
    .card {
        @apply p-0 rounded-lg border border-gray-default dark:border-gray-600 w-full shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.05)_0px_4px_6px_-1px_rgba(0,0,0,0.10)];
    }
    .card-title {
        @apply p-4 text-sm text-gray-900 dark:text-white font-semibold;
    }
    .card-title.bordered {
        @apply border-b border-gray-default dark:border-gray-600;
    }
    </style>
    