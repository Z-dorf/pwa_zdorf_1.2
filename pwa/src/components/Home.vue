<template>
  <div id="home">
    <div>
    <h1>{{ msg }}</h1>
    <p>"Work in Progress..."</p>
  </div>
    <!-- <div>
      <figure>
        <router-link class="desc" to="/About"><img class="logo" src="static/media/icon_bar/about.png" alt="About" ><figcaption>About</figcaption></router-link>
      </figure>
      <figure>
          <router-link class="desc" to="/Contact"><img class="logo" src="/static/media/icon_bar/contact.png" alt="Contact"><figcaption>Contact</figcaption></router-link>
      </figure>
      <figure>
          <router-link class="desc" to="/Experiences"><img class="logo" src="/static/media/icon_bar/projects.png" alt="Experiences"><figcaption>Experiences</figcaption></router-link>
      </figure>
      <figure>
          <router-link class="desc" to="/Home"><img class="logo" src="/static/media/icon_bar/home.png" alt="Home"><figcaption>Home</figcaption></router-link>
      </figure>
      <figure>
          <router-link class="desc" to="/MenuHeader"><img class="logo" src="/static/media/icon_bar/message.png" alt="Change"><figcaption>Change</figcaption></router-link>
      </figure>
      <figure>
          <router-link class="desc" to="/Projets"><img class="logo" src="/static/media/icon_bar/projects.png" alt="Projects"><figcaption>Projects</figcaption></router-link>
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