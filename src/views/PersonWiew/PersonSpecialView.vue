<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Wyświetlanie osób</h1>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col sm12 cols="12"
             v-for="person in NEWUSERS"
             :key = person.id
      >
        <PersonDetail v-bind:my-person="person"></PersonDetail>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import PersonDetail from "@/views/PersonWiew/PersonDetail.vue";
    import {getPersons} from "@/Api/api.service";

    @Component({
        components: {PersonDetail}
    })
    export default class PersonSpecialView extends Vue {
        mounted() {
            this.getNewUsers();
        }
        NEWUSERS= [];
        getNewUsers(){
            getPersons(this.$store.state.token)
                .then(data => {this.NEWUSERS = data});
        }

    }
</script>
<style scoped lang="scss">
</style>
