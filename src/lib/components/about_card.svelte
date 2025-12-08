<script lang="ts">
  let { boardmember } = $props();

//   console.log("AboutCard", boardmember)

//   const modal = document.getElementById("modal");
//   const open = document.getElementById("open-modal");
//   const close = document.getElementById("close-modal");
//   const modalImg = document.getElementById("modal-img");

//   open.onclick = () => {
//     modal.classList.add("show");
//     modalImg.src = open.src; // show the clicked image in the modal
//   };

//   close.onclick = () => {
//     modal.classList.remove("show");
//   };

//   // Close on background click
//   modal.onclick = (e) => {
//     if (e.target === modal) {
//       modal.classList.remove("show");
//     }
//   };
</script>

<div class="team-member-card">
  <img
    class="team-member-image"
    src={boardmember.picture}
    alt={boardmember.picture}
    loading="lazy"
    id="open-modal"
  />
  <!-- <div class="team-member-info">
            <h3>{boardmember.name}</h3>
            <h4>{boardmember.function}</h4>
            <p>{boardmember.description}</p>
    </div> -->
  <div class="modal" id="modal">
    <span class="close" id="close-modal">&times;</span>
    <img class="modal-content" id="modal-img" />
  </div>
</div>
