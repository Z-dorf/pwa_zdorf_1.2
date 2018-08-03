<template>
    <div id="projets">
        <div v-for="(projet, index) in projets" v-bind:key="index">
            <h2>{{projet.title}}</h2>
            <p>{{projet.description}}</p>
            <a :href="projet.github" target="_blank">Voir démo</a>
        </div>
    </div>
</template>

<script>

import {globalStore} from '../main.js'


export default {
  data () {
    return {
       projets : [
            {
                title: '',
                description: '',
                github: ''
            },
            {
                title: '',
                description: '',
                github: ''
            },
        ],
        baseUrl: globalStore.baseUrl
    }
        
  }
  ,
  methods: {
      fetchProjets () {
        var projetComponent = this; //J'enregistre le "this" actuel (qui correspond au component projets") dans une variable , car dans le .then le this ne correspondra plus à ce que je veux (undefined)
        fetch(this.baseUrl+'src/php/projets.php')
        .then(function(response) {
            return response.json();
        })
        
        .then(function(myJson) {
            projetComponent.projets = myJson;
        });
      }
  },
  created: function() {
      this.projets = this.fetchProjets()
  },
  
}

</script>