<script lang="ts">
  import { goto, invalidateAll } from "$app/navigation";
  import { authClient } from "$lib/auth-client";
  import { navigation } from "$lib/project.config";
  import type { ExtendedUser } from "../../app";
  import { Menu } from '@lucide/svelte';
  import Aside from "./aside.svelte";

  export const ssr = false;

  let { user, scroll}: { user: ExtendedUser, scroll:boolean} = $props();
  


  var open = $state(false);
  
  const openBurgerMenue = (e: MouseEvent) => {
    console.log(e.target);
    console.log(open);
    open = !open;
  };

  const openBurgerMenuIcon = (e: MouseEvent) => {
    if (open) {
      open = !open;
    }
  }

  console.log("get user: " + user);

  const signout = async () => {
    authClient.signOut({
      fetchOptions: {
        onSuccess: async () => {
          await invalidateAll();
          goto("/auth/login");
        },
      },
    });
  };

 

	$effect(() => {
		console.log("scroll: ", scroll)
	}) ;


</script>

<Aside showMenu={open}/>
<div class="navbar" class:scrolled={scroll === true} >
  <div class="navbar-left">
    <a href="/" onclick={openBurgerMenuIcon}>
      <img
        src="/logo_transparent_bg.png"
        alt="Thomas Hudson-Zaussnig"
        class="logo"
      />
    </a>
  </div>
  <ul class="navbar-center">
    {#each navigation as route}
      <li class="nav-item"><a href={route.url}>{route.name}</a></li>
    {/each}
  </ul>
  <ul class="navbar-right">
    {#if user}
      <div class="menu">
        <Menu/>
      </div>  
      <div class="dropdown-content">
        <a href="/admin">Admin Page</a>
        <a href="/Blog">Blog</a>
        <button onclick={signout}>Logout</button>
      </div>
    {:else}
      <li><a href="/auth/login" role="button" class="btn">Login</a></li>
    {/if}
  </ul>

  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="nav-burger-menu" onclick={openBurgerMenue}>
    <div class="menu">
      <Menu/>
    </div>
  </div>
</div>

<!-- <ul class="nav-burger-menu-links" class:mobile={open}>
  {#each navigation as route}
    <li class="nav-item"><a href={route.url} onclick={openBurgerMenue}>{route.name}</a></li>
  {/each}
  {#if user}
    <li class="nav-item"><a href="/admin" onclick={openBurgerMenue}>Admin Page</a></li>
    <li class="nav-item">
      <button class="btn" onclick={() => { openBurgerMenue; signout(); }}>Logout</button>
    </li>
  {:else}
    <li class="nav-item">
      <a role="button" class="btn" href="/auth/login" onclick={openBurgerMenue}>Login</a>
    </li>
  {/if}
</ul> -->

<style lang="scss">
  .scrolled {
    background-color: var(--third-color);
    transition: all 350ms ease-in-out;

    // transition: 0.5s ease-in-out;

    .nav-item {
      text-shadow: none;
    }
  }

</style>