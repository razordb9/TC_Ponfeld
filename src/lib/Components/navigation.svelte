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
<nav class="navbar">
  <a href="/" class="logo">
      <img src="/logo_transparent_bg.png" alt="Thomas Hudson-Zaussnig"> 
  </a>
  <ul class="nav-links">
    {#each navigation as route}
      <li class="nav-item"><a href="{route.url}">{route.name}</a></li>
    {/each}
    {#if user}
      <li class="nav-item"><a href="/admin">Admin Page</a></li>
      <li class="nav-item"><button class="btn" onclick={signout}>Logout</button></li>
    {:else}
      <li class="nav-item"><a role="button" class="btn" href="/auth/login">Login</a></li>
    {/if}
  </ul>
   <div class="nav-burger-menu" onclick={openBurgerMenue}> 
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <ul class="nav-burger-menu-links" class:mobile={open==true}>
      {#each navigation as route}
        <li class="nav-item"><a href="{route.url}">{route.name}</a></li>
      {/each}
    </ul> 
  </div>
</nav>
