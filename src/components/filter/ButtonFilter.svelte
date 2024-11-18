<script>
import {
    ButtonGroup,
    Button
} from 'flowbite-svelte'
import {
    ListOutline,
    GridSolid
} from 'flowbite-svelte-icons'
export let viewMode = ''
</script>

<ButtonGroup class="dark:border dark:border-gray-600">
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
