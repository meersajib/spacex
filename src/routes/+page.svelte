<script>
import logo from "$lib/assets/images/logo.png";
import {
    Navbar,
    NavBrand
} from "flowbite-svelte";
import LandingPadTable from "../components/LandingPad.svelte";
</script>

<div class="2xl-container">
    <Navbar class="h-20 shadow-[0px_1px_3px_0px_#0000001A] flex items-center justify-center p-0">
        <NavBrand href="/" class="flex items-center justify-center w-full">
            <img src={logo} class="h-[38px] mx-auto" alt="Spacex Logo" />
        </NavBrand>
    </Navbar>

    <section class="pt-[50px] px-[100px]">
        <div class="flex flex-wrap lg:flex-nowrap gap-[40px]">
            <div class="flex-1">
                <LandingPadTable />
            </div>
            <div class="w-full lg:w-[521px] bg-gray-200 p-4">
                <!-- Right column content -->
                <div class="flex flex-col gap-[26px]">
                    <div class="bg-gray-300 p-4">
                        <p>This is the first row inside the right column.</p>
                    </div>
                    <div class="bg-gray-400 p-4">
                        <p>This is the second row inside the right column.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
