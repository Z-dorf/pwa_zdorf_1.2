<template>
</template>


<script>
  import {
    globalStore
  } from '../main.js'


  export default {
    data() {
      return {
        competences: [{
            title: 'competences1',
            description: 'lorem lorem lorem',            
            github: 'https://github.com/Z-dorf/'
          },
          {
            title: 'competences2',
            description: 'lorem lorem lorem',
            github: 'https://github.com/Z-dorf/'
          },
        ],
        baseUrl: globalStore.baseUrl
      }

    },
    methods: {
      fetchCompetences() {
        var competencesComponent = this; //J'enregistre le "this" actuel (qui correspond au component competencess") dans une variable , car dans le .then le this ne correspondra plus à ce que je veux (undefined)
        fetch(this.baseUrl + 'src/php/Competences.php')
          .then(function (response) {
            return response.json();
          })

          .then(function (myJson) {
            competencesComponent.competencess = myJson;
          });
      }
    },
    created: function () {
      this.competencess = this.fetchCompetences()
    },

  }

</script>
