<template>
  <v-container>
    <v-row  style="text-align: center">
      <v-card xs12 wrap
              style="text-align: center"
              class="pa-6">
        <h1>Wprowadź dane nowej osoby:</h1>
        <v-text-field
            v-model="person.firstName"
            :rules="[rules.minLength]"
            label="Podaj Imie"></v-text-field>
        <v-text-field
            v-model="person.lastName"
            :rules="[rules.minLength]"
            label="Podaj Nazwisko"></v-text-field>
        <v-text-field
            v-model="person.email"
            :rules="[rules.Email]"
            type="email"
            label="Podaj email"></v-text-field>
        <v-text-field
            v-model="person.phone"
            :rules="[rules.Phone]"
            label="Podaj telefon"></v-text-field>
        <v-text-field
            v-model="person.birthDate"
            type="date"
            label="Podaj date urodzenia"></v-text-field>
        <v-row justify="center">
          <v-btn
              @click="addNewPerson"
          >Dodaj Nowa osobe</v-btn>
        </v-row>
        <v-row v-if="message != ''">
          <pre>person: {{message}}</pre>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {addPerson} from "@/Api/api.service";

    @Component
    export default class PersonFormular extends Vue {
        message = "";
        person = {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          birthDate: "",
        };
        rules = {
            minLength: (value: string) => {
                return value.length > 4 ? true : (false || 'Min 5 liter' )
            },
            Email: (value: string) => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Invalid e-mail.'
            },
            Phone: (value:string) => {
                const pattern = /^\d{9}$/;
                return pattern.test(value) || 'Invalid phonenumber.'
            },
        };
        async addNewPerson() {
            this.message = JSON.stringify(this.person, null, '\n');
            await addPerson(this.$store.state.token, this.person);
        }

    }
</script>
<style scoped lang="scss">
</style>
