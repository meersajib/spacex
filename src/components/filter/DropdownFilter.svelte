<script>
import {
    Button,
    Dropdown,
    DropdownItem,
    Radio
} from 'flowbite-svelte'
import {
    AdjustmentsVerticalSolid,
    ChevronDownOutline
} from 'flowbite-svelte-icons'
export let filter = 0
</script>

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
