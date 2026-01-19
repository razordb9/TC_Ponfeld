<script lang="ts">
  import { goto, invalidateAll } from "$app/navigation";
  import { authClient } from "$lib/auth-client";
  import { navigation } from "$lib/project.config";
  import type { ExtendedUser } from "../../app";
  import { Menu, LucideX } from '@lucide/svelte';
  // import Aside from "./aside.svelte";

  export const ssr = false;

  let { user, scroll}: { user: ExtendedUser, scroll:boolean} = $props();

  var open = $state(false);
  
  const openBurgerMenue = (e: MouseEvent) => {
    console.log("e.target: ", e.target);
    console.log("open: ", open);
    open = !open;
  };

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
		console.log("scroll: ", scroll);
	}) ;


</script>


<!-- <Aside showMenu={open}/> -->
<nav class="aside" class:showMenu={open === true}>
    <div class="asideHeader">
      <img
        src="/logo_transparent_bg.png"
        alt="TC-Groessinghof Ponfeld"
        class="logo"
      />

      <button class="close menu" onclick={()=> {
          open = false;
      }}><LucideX/></button>
    </div>
    <ul>
        {#if user}
            {#each navigation as route}
              <li><a href={route.url} onclick={()=> {open = false;}}>{route.name}</a></li>
            {/each}
          <li><a href="https://groessinghof-ponfeld.tennisplatz.info/" target="_blank" onclick={()=> {open = false;}}>Platzreservierung</a></li>
          <li><a href="/admin" onclick={()=> {open = false;}}>Admin Page</a></li>
          <li><a href="/Blog" onclick={()=> {open = false;}}>Blog</a></li>
          <li><button onclick={signout}>Logout</button></li>
        {:else}    
          {#each navigation as route}
              <li><a href={route.url} onclick={()=> {open = false;}}>{route.name}</a></li>
          {/each}
          <li><a href="/auth/login" role="button" class="btn" onclick={()=> {open = false;}}>Login</a></li>
        {/if}
    </ul>
</nav>

<div class="navbar" class:scrolled={scroll === true} >
  <div class="navbar-left">
    <a href="/">
      <img
        src="/logo_transparent_bg.png"
        alt="TC-Groessinghof Ponfeld"
        class="logo"
      />
    </a>
  </div>
  <ul class="navbar-center">
    {#each navigation as route}
      <li class="nav-item"><a href={route.url}>{route.name}</a></li>
    {/each}
  </ul>
  <div class="navbar-right">
    <ul>
      <div class="menu" onclick={openBurgerMenue}>
        <Menu/>
      </div>  
    </ul>
  </div>
</div>


<style lang="scss">
  .scrolled {
    background-color: var(--third-color);
    transition: all 350ms ease-in-out;

    .nav-item {
      text-shadow: none;
    }
  }
  .aside {
    // width: 100vw;
    width: 30vw;
    top: 0;
    // left: 0;
    right: 0;
    // bottom: 0;
    z-index: 500;
    background-color: #000000;
    position: fixed;
    height: 50%;
    transform: translateX(100vw);
    transition: all 200ms ease-in-out;

    ul, li {
        width: 100%;
        height: 50px;
        text-align: center;
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
        align-items: center;
    }
    ul {
        margin-top: 7rem;
    }

    a {
      color: white;

    }
  .asideHeader {
    display: flex;
    justify-content: space-between;
    
    .logo {
      max-height: 90px;
      width: auto;
      object-fit: contain;
      border-radius: 50%;
      margin: 0.5rem;
      display: none;

    }
    .close {
        position: absolute;
        right: 0;
        margin: 2rem;
        display: flex;
        padding: 0;
    }
   
  }
}

.showMenu {
    transform: translateX(0);
    transition: all 200ms ease-in-out;
}

@media (width < 650px) {
  .aside {
    width: 100vw;
    height: 100%;
    left: 0;

    .asideHeader {
      height: 70px;
      .logo {
        margin: 0;
        margin-left: 1rem;
        display: flex;
      }
      .close {
        margin: 1rem;
      }
    }
  }
}
</style>