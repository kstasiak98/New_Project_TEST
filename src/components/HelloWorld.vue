<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
      <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
      />
    </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Przykładowa aplikacja Client Deatails z użyciem TypeScriptu
        </h1>
        <p>View - jest to widok wszystkich pobranych osób z możliwością ich zmienienia i usunięcia</p>
        <p>SpecialView - widok według projektu</p>
        <p>Formularz - formularz dodania osoby</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'HelloWorld',

    data: () => ({

    }),
  })
</script>
