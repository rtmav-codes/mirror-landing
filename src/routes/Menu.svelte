<script>
// @ts-nocheck
    import { fly, scale } from 'svelte/transition';
    import { quadOut } from 'svelte/easing';

    let links = ["/#intro","/#team", "/#about", "/#services"];

    export let open;
</script>

{#if open}
    <div>
        {#each ['HOME', 'OUR TEAM', 'ABOUT US', 'SERVICES'] as link, i}
            <!-- svelte-ignore a11y-missing-attribute -->
            <a href="{links[i]}" style="text-decoration:none">
                <p transition:fly={{ y: -15, delay: 50 * i }}>
                    {link}
                </p>
            </a>
            
        {/each}
    </div>
    <div class="flex items-center">
        <a href="#contact" class="mx-1">
            <button class="btn btn-outline hover:bg-[#949ca6] rounded-full lg:w-60 w-52 h-14 font-bold text-xl text-gray-900 pl-3">
                Contact Us
            </button>
        </a>
    </div> 

    <hr transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
{/if}

<style>
    a{
        
    }
    :global(html) {
        background: #1d1d2f;
    }
    div {
        text-align: center;
        letter-spacing: 0.15em;
        padding: 1em;
        padding-top: 1rem;
        --tw-text-opacity: 1;
        color: rgb(17 24 39 / var(--tw-text-opacity));
    }
    p {
        font-weight: bold;
        font-size: 1.5em;
        cursor: pointer;
        width: max-content;
        margin: 1rem auto;
    }
    p:hover {
        text-decoration: underline;
    }
</style>
