<script lang="ts">
  import { navigation } from '$lib/project.config';
  

  var open = $state(false);
  const openBurgerMenue = (e:MouseEvent) => {
    console.log(e.target)
    console.log(open)
    open = !open;
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