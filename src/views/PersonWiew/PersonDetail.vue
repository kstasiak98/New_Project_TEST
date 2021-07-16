<template>
  <v-content>
    <v-card class="pl-lg-16 MainCard"
            :min-width="minWidth"
            :max-width="maxWidth"
    >
        <v-col class="pl-sm-10 pt-sm-13 pl-md-16 pt-md-16 ml-lg-16 pl-lg-16 mt-lg-16 pt-lg-16 content"

        >
          <div class="ml-lg-8 avatar">
            <h2>{{inicjals()}}</h2>
          </div>
          <h1 class="ml-sm-6 ml-lg-16">{{fullname()}}</h1>

            <v-list class="ml-sm-6 ml-lg-16 pl-lg-16 data_content">
              <v-list-item class="list-items-class">
                <v-list-item-avatar class="list-items-avatar-class">
                  <img class="email" src="./assets/email.svg"/>
                </v-list-item-avatar>
                <v-list-item-content >
                  <p class="label">E-mail</p>
                  <p class="data">{{MyPerson.email}}</p>
                </v-list-item-content>
              </v-list-item>

              <v-list-item class="list-items-class">
                <v-list-item-avatar class="list-items-avatar-class">
                  <img class="phone" src="./assets/phone.svg"/>
                </v-list-item-avatar>
                <v-list-item-content>
                  <p class="label">Telefon</p>
                  <p class="data">{{MyPerson.phone}}</p>
                </v-list-item-content>
              </v-list-item>

              <v-list-item class="list-items-class">
                <v-list-item-avatar class="list-items-avatar-class">
                  <img class="cake" src="./assets/cake.svg"/>
                </v-list-item-avatar >
                <v-list-item-content>
                  <p class="label">Data urodzenia</p>
                  <p class="data">{{MyPerson.birthDate}}</p>
                </v-list-item-content>
              </v-list-item>
            </v-list>
        </v-col>
    </v-card>
  </v-content>
</template>
<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";
    import {Person} from "@/DATA/NewInterfaces";


    @Component
    export default class PersonDetail extends Vue {
        @Prop() readonly MyPerson:Person | undefined;

        fullname() {
            if(this.MyPerson)
            return `${this.MyPerson.firstName} ${this.MyPerson?.lastName}`
        }
        inicjals() {
            if(this.MyPerson)
            {
                const First = this.MyPerson.firstName[0].toUpperCase();
                const Second = this.MyPerson.lastName[0].toUpperCase();
                return First+Second;
            }

        }
        get maxWidth() {
            switch (this.$vuetify.breakpoint.name) {
                case 'sm': return 600
                case 'md': return 1239
                case 'lg': return 1239
                default: return 320
            }
        }
        get minWidth() {
            switch (this.$vuetify.breakpoint.name) {
                case 'sm': return 600
                case 'md': return 1239
                case 'lg': return 1239
                default: return 320
            }
        }

    }

</script>
<style scoped lang="scss">
  .MainCard {
    min-height: 640px;
    max-height: 640px;
    padding: 16px;
    left: 16px;
    top: 16px;
    border-radius: 0px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
  }
  .avatar {
    min-height: 80px;
    min-width: 80px;
    left: 0px;
    top: 0px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    background: #E5E5E5;
    margin-bottom: 16px;
  }
  h2 {
    font-family: Roboto Condensed;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 117%;
    letter-spacing: 0em;
  }
  h1 {
    //styleName: H1;
    font-family: Roboto Condensed;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;

  }
  .data_content {
    margin-top: 16px;
    margin-left: 2px;
    height: 152px;
    width: 288px;
    left: 0px;
    top: 150px;
    border-radius: 0px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
  }
  .data {
    //styleName: Body;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;

  }
  .label {
    //styleName: Label;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;

  }

  .email {
    height: 16px;
    width: 20px;
    left: 2px;
    top: 4px;
    border-radius: 0px;
    margin: 0px !important;

  }
  .phone {
    height: 18px;
    width: 18px;
    left: 3px;
    top: 3px;
    border-radius: 0px;
    margin: 0px !important;

  }
  .cake {
    height: 22px;
    width: 18px;
    left: 3px;
    top: 0px;
    border-radius: 0px;
    margin: 0px !important;
  }
  .list-items-class {
    padding: 0px !important;
    margin: 0px !important;
  }
  .list-items-avatar-class {
    margin-left: 0px !important;
    height: 25px !important;
    min-width: 25px !important;
    width: 25px !important;
    margin-right: 4px !important;
  }

</style>
