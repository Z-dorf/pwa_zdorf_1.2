<template>
  <div id="contact-form" class="contact-form">
    <h1 class="contact-form_title">Contact Form</h1>
    <p> {{msg}} </p>
    <div class="separator"></div>

    <section class="container">
      <article class="row justify-content-center">
        <div class="col-12 col-sm-6 col-md-3">
          <a href="https://github.com/" target="_blank">
            <img class="contact_logo" src="/static/media/logo_contact/github_logo.svg" alt="GitHub"> Git Hub</a>
        </div>
        <div class="col-12 col-sm-6 col-md-3">
          <a href="https://github.com/" target="_blank">
            <img class="contact_logo" src="/static/media/logo_contact/linkedin_logo.svg" alt="LinkedIn"> LinkedIn</a>
        </div>

      </article>
      <hr>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Contact',
    data() {
      return {
        msg: 'hello'
      }
    }

  }

</script>
