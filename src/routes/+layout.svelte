<script>
import "../app.css";
let { children } = $props();
import { Navbar, NavBrand } from 'flowbite-svelte'
import logo from '$lib/assets/images/logo.png'
</script>

<div class="2xl-container">
    <Navbar class="h-20 shadow-[0px_1px_3px_0px_#0000001A] flex items-center justify-center p-0">
        <NavBrand href="/" class="flex items-center justify-center w-full">
            <img src={logo} class="h-[38px] mx-auto" alt="Spacex Logo" />
        </NavBrand>
    </Navbar>

    <section class="pt-[50px] px-2.5 md:px-10 xl:px-[100px]">
        {@render children()}
    </section>
</div>
