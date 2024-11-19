<script>
import "../app.css";
import { DarkMode, Navbar, NavBrand } from 'flowbite-svelte'
import logo from '$lib/assets/images/logo.png'
import darkLogo from '$lib/assets/images/white-logo.png'
import { onMount } from 'svelte';
import { browser } from '$app/environment';

let { children } = $props();
let isDarkMode = false;
let btnClass = 'text-gray-800 dark:text-white bg-white dark:bg-gray-600 text-xl p-2 absolute top-5 right-5';

function updateDarkMode() {
    if (!browser) return;
    const html = document.documentElement;
    if (isDarkMode) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
}

onMount(() => {
    isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
});
updateDarkMode();

</script>

<div class="body-wrapper 3xl:container">
    <Navbar class="nav-wrapper">
        <NavBrand href="/" class="nav-brand">
            <img src={logo} class="logo" alt="Spacex Logo" />
            <img src={darkLogo} class="dark-logo" alt="Spacex Dark mode Logo" />
        </NavBrand>

    </Navbar>
    <DarkMode {btnClass} />

    <section class="pt-[50px] px-2.5 md:px-5 3xl:px-[100px]">
        {@render children()}
    </section>
</div>

<style>
    .body-wrapper {
        @apply bg-white dark:bg-gray-700 h-full;
    }
    :global(.nav-wrapper) {
        @apply h-20 shadow-[0px_1px_3px_0px_#0000001A] dark:shadow-transparent dark:border-gray-600 bg-white relative flex dark:bg-gray-600 items-center justify-center p-0;
    }
    :global(.nav-brand) {
        @apply flex items-center justify-center w-full;
    }
   .logo {
        @apply h-[38px] mx-auto flex dark:hidden;
    }
    .dark-logo {
        @apply hidden dark:flex;
    }
</style>