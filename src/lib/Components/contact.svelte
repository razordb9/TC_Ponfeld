<!-- <script lang="ts">

</script> -->
<div id="contact">
    <h1>Wie könnt ihr mit uns in Verbindung treten?</h1>
    <form method="POST">
        <label>Name (*)</label>
        <input type="text" name="name" required>

        <label>Email (*)</label>
        <input type="email" name="email" required>

        <label>Text(*)</label>
        <textarea id="message" name="message" rows="7"></textarea>
        <!-- <input type="text" name="message" required> -->

        <button type="submit">Absenden</button>
    </form>
</div>
<style lang="scss">
    #contact {
        // height: 600px;
        text-align: center;
        background-color: salmon;
    }

    form {
        max-width: 400px;
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
    }
  
//   input, textarea {
//     padding: 8px;
//   }
</style>
