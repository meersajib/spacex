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

export let pads = [];
export let viewMode = 'table';
</script>

<div>
    <!-- Render Table or Grid View -->
    {#if viewMode === 'table'}
    <TableView pads={pads} />
    {:else}
    <GridView pads={pads} />
    {/if}
</div>
