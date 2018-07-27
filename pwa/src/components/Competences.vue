<template>
    <div id="competences">
        <div v-for="(competence, index) in competences" v-bind:key="index">
            <h2>{{competence.nom}}</h2>
            <p>{{competence.front}}</p>
            <p>{{competence.back}}</p>

        </div>
    </div>

</template>

<script>

  import {globalStore} from '../main.js'


  export default {
    data() {
      return {
        competences: [
          {
            nom: 'competences1',
            front: '',
            back: ''            
          },
          {
            nom: 'competences2',
            front: '',
            back: ''
          },
        ],
        baseUrl: globalStore.baseUrl
      }

    },
    methods: {
      fetchCompetences() {
        var competenceComponent = this; //J'enregistre le "this" actuel (qui correspond au component competencess") dans une variable , car dans le .then le this ne correspondra plus à ce que je veux (undefined)
        fetch(this.baseUrl + 'src/php/competences.php')
          .then(function (response) {
            return response.json();
          })

          .then(function (myJson) {
            competenceComponent.competences = myJson;
          });
      }
    },
    created: function () {
      this.competences = this.fetchCompetences()
    },

  }

</script>
