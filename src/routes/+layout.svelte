<script>
import "../app.css";
let {
    children
} = $props();
import {
    DarkMode,
    Navbar,
    NavBrand
} from 'flowbite-svelte'
import logo from '$lib/assets/images/logo.png'
import darkLogo from '$lib/assets/images/white-logo.png'
let btnClass = 'text-gray-800 dark:text-white bg-white dark:bg-gray-600 text-xl p-2 absolute top-5 right-5';
import { onMount } from 'svelte';
  let isDarkMode = false;

  onMount(() => {
    isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
</script>

<div class="3xl:container bg-white dark:bg-gray-700 h-screen">
        <Navbar class="h-20 shadow-[0px_1px_3px_0px_#0000001A] dark:shadow-transparent dark:border-gray-600 bg:white relative flex dark:bg-gray-600 items-center justify-center p-0">
            <NavBrand href="/" class="flex items-center justify-center w-full">
                <img src={logo} class="h-[38px] mx-auto block dark:hidden" alt="Spacex Logo" />
                <img src={darkLogo} class="h-[38px] mx-auto hidden dark:block" alt="Spacex Logo" />
            </NavBrand>
            
    
        </Navbar>
        <DarkMode {btnClass} />

    <section class="pt-[50px] px-2.5 md:px-5 3xl:px-[100px]">
        {@render children()}
    </section>
</div>
