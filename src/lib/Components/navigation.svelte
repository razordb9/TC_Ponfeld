<script lang="ts">
  import { goto, invalidateAll } from '$app/navigation';
  import { authClient } from '$lib/auth-client';
  import { navigation } from '$lib/project.config';
  import type { ExtendedUser } from '../../app';
  
  let {
    user
  }: {user: ExtendedUser} = $props();

  var open = $state(false);
  const openBurgerMenue = (e:MouseEvent) => {
    console.log(e.target)
    console.log(open)
    open = !open;
  }

  console.log("get user: " + user);

  const signout = async ()=> {
    authClient.signOut({
      fetchOptions : {
        onSuccess: async () => {
          await invalidateAll();
          goto("/auth/login");
        }
      }
    })
  }

</script>


  

<div class="navbar">
  <div class="navbar-left">
    <a href="/">
      <img src="/logo_transparent_bg.png" alt="Thomas Hudson-Zaussnig" class="logo"> 
    </a>
  </div>
  <ul class="navbar-center">
    {#each navigation as route}
        <li class="nav-item"><a href="{route.url}">{route.name}</a></li>
    {/each}
  </ul>
  <ul class="navbar-right">
    {#if user}
      <li class="nav-item"><a href="/admin">Admin Page</a></li>
      <li class="nav-item"><a role="button" class="btn" onclick={signout} tabindex="1">Logout</a></li>
    {:else}
      <li class="nav-item"><a role="button" class="btn" href="/auth/login">Login</a></li>
    {/if}
  </ul>

  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="nav-burger-menu" onclick={openBurgerMenue}> 
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <ul class="nav-burger-menu-links" > class:mobile={open}
      {#if user}
      <li class="nav-item"><a href="/admin">Admin Page</a></li>
      <li class="nav-item"><button class="btn" onclick={signout}>Logout</button></li>
    {:else}
      {#each navigation as route}
        <li class="nav-item"><a href="{route.url}">{route.name}</a></li>
      {/each}
      <li class="nav-item"><a role="button" class="btn" href="/auth/login">Login</a></li>
    {/if}
    </ul> 
  </div>
</div>
