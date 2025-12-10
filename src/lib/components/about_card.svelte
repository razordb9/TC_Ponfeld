<script lang="ts">
  let { boardmember } = $props();

  // console.log("AboutCard", boardmember)

</script>

<div class="team-member-card">
  <img
    class="team-member-image"
    src={boardmember.picture}
    alt={boardmember.picture}
    loading="lazy"
  />
  <!-- <div class="team-member-info">
            <h3>{boardmember.name}</h3>
            <h4>{boardmember.function}</h4>
            <p>{boardmember.description}</p>
    </div> -->
</div>
