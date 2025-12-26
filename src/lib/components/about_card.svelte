<script lang="ts">
  import Modal from '$lib/components/modal.svelte';

  let { boardmember } = $props();
  let showModal = $state(false);

  const openModal = (e: MouseEvent) => {
    showModal = true;
  }
</script>



<div class="team-member-card">
  <img
    class="team-member-image"
    src={boardmember.picture}
    alt={boardmember.picture}
    loading="lazy"
    onclick={openModal}
  />
  <Modal bind:showModal>
    {#snippet header()}
      <h1>{boardmember.name}</h1>
    {/snippet}

    <img src={boardmember.picture} alt={boardmember.name}>
    <p>Funktion: {boardmember.function}</p>
    <p>Beschreibung: {boardmember.description}</p>
  </Modal>
</div>
