<template>
  <div id="home">
    <div>
    <h1>{{ msg }}</h1>
    <p>"Work in Progress..."</p>
  </div>
    <!-- <div>
      <figure>
        <router-link class="desc" to="/About"><img class="logo" src="static/media/male.png" alt="présentation"><figcaption>Présentation</figcaption></router-link>
      </figure>
      <figure>
          <router-link class="desc" to="/Realisations"><img class="logo" src="static/media/realisations.png" alt="réalisations"><figcaption>Réalisations</figcaption></router-link>
      </figure>
    </div> -->
  </div>
</template>
<script>


    export default {
  name: 'Home',
  data () {
    return {
      msg: 'Sebastian Zanon'
    }
  }
}
    </script>