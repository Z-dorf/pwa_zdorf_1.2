<template>
    	<div id="contact-form" class="contact-form">
		<h1 class="contact-form_title">Contact Form</h1>
		<p> {{msg}} </p>
		<div class="separator"></div>

		<!-- <div v-if="isSending" class="loading">Sending...</div>
 -->
		<!-- <form class="form" @submit="onSubmit">
			<input required name="name" v-model='contact.name' placeholder="Name" type="text" autocomplete="off">
			<input required name="email" v-model="contact.email" placeholder="E-mail" type="email" autocomplete="off">
			<textarea name="message" v-model="contact.message" rows="4" placeholder="Message"></textarea>
		   <button class="button">Send</button>
		</form> -->
	</div>

	 <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.4.4/vue.js"></script>
	 <script src="https://cdn.jsdelivr.net/npm/vue-resource@1.3.4"></script>
	 <script src="app.js"></script> -->

</template>

<script>

export default {
    name:'Contact',
    data(){
        return {
			msg:'hello'
    }
  }
 
}
</script>