<template>
  <v-container>
    <v-row >
      <v-col cols="6">
        <v-card>
          <v-list rounded>
            <v-subheader>Lista osób</v-subheader>
            <v-list-item-group
            >
              <v-list-item
                  v-for="osoba in osoby"
                  :key="osoba.id"
                  @click="selectedPerson=osoba"
              >
                <v-list-item-content>
                  <v-list-item-title  >
                    {{personFullName(osoba)}}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col>
        <v-card v-if="selectedPerson.firstName!=''" class="SelectedCard">
          <v-text-field
              v-model="selectedPerson.firstName"
              :rules="[rules.minLength]"
              label="Podaj Imie"></v-text-field>
          <v-text-field
              v-model="selectedPerson.lastName"
              :rules="[rules.minLength]"
              label="Podaj Nazwisko"></v-text-field>
          <v-text-field
              v-model="selectedPerson.email"
              :rules="[rules.Email]"
              type="email"
              label="Podaj email"></v-text-field>
          <v-text-field
              v-model="selectedPerson.phone"
              :rules="[rules.Phone]"
              label="Podaj telefon"></v-text-field>
          <v-text-field
              v-model="selectedPerson.birthDate"

              label="Podaj date urodzenia"></v-text-field>
          <v-btn @click="deleteOnePerson(selectedPerson.id)">Usuń</v-btn>
          <v-divider vertical></v-divider>
          <v-btn @click="changeOnePerson(selectedPerson.id)">Zmień</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {Person} from "@/DATA/NewInterfaces";
    import PersonDetail from "@/views/PersonWiew/PersonDetail.vue";
    import {getPersons, changePerson, deletePerson} from "@/Api/api.service";

    @Component({
        components: {PersonDetail}
    })
    export default class PersonViewPage extends Vue {
        osoby = [];
        selectedPerson: Person = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            birthDate: "",
        };
        messages= '';
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

        async mounted() {
            await this.loadPersons();
            return 0;
        }
        async loadPersons() {
            this.osoby = [];
            this.messages = 'getting persons, please be patient';
            this.osoby = await getPersons(this.$store.state.token);
            this.messages = '';
            return;
        }
        async changeOnePerson(id:string) {
            console.log("this.selectedPerson:",this.selectedPerson);
            console.log("id: ",id);
            await changePerson(this.$store.state.token,id,this.selectedPerson);
        }
        async deleteOnePerson(id:string) {
            await deletePerson(this.$store.state.token,id);
            const response = await this.loadPersons();
            return response;
        }
        personFullName(osoba:Person):string {
            return `${osoba.firstName} ${osoba.lastName}`;
        }

    }
</script>
<style scoped lang="scss">
  .SelectedCard{
    text-align: center;
    padding: 5px;
  }
</style>
