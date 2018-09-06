<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">
        <b-form v-on:submit.prevent="editContact">
          <b-card>
            <div slot="header">
              <strong>Edit</strong>  SchoolData
            </div>
            <!-- Bootstrap Vue has some problems with Inline forms that's why we use some standard bootstrap classes -->

              <label class="mr-sm-2" for="inlineInput1">School Name: </label>
              <b-input md="12" id="schoolname" type="text" placeholder="" v-model="contact.schoolname"></b-input>

              <b-row class="form-group">
                <b-col md="4">
                  <!-- <label class="mr-sm-2" for="inlineInput1">year: </label>
                  <b-form-select id="year" :plain="true" :options="options"></b-form-select> -->
                  <label class="mr-sm-2" for="inlineInput1">Year: </label>
                  <b-input md="12" id="schoolname" type="text" placeholder="" v-model="contact.year"></b-input>
                </b-col>
                <b-col md="4">
                  <!-- <label class="mr-sm-2" for="inlineInput1">month: </label>
                  <b-form-select id="month" :plain="true" :options="options"></b-form-select> -->
                  <label class="mr-sm-2" for="inlineInput1">Month: </label>
                  <b-input md="12" id="schoolname" type="text" placeholder="" v-model="contact.month"></b-input>
                </b-col>
                <b-col md="4">
                  <!-- <label class="mr-sm-2" for="inlineInput1">week: </label>
                  <b-form-select id="week" :plain="true" :options="options"></b-form-select> -->
                  <label class="mr-sm-2" for="inlineInput1">Week: </label>
                  <b-input md="12" id="schoolname" type="text" placeholder="" v-model="contact.week"></b-input>
                </b-col>

              </b-row>

              <b-row>
                <b-col md="6">
                  <b-form-group>
                    <b-input-group>
                      <b-input-group-prepend><b-input-group-text>elect_eur</b-input-group-text></b-input-group-prepend>
                      <b-form-input type="text" v-model="contact.elect_eur" required></b-form-input>
                      <b-input-group-append><b-input-group-text><i class="fa fa-euro"></i></b-input-group-text></b-input-group-append>
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group>
                    <b-input-group>
                      <b-input-group-prepend><b-input-group-text>elect_kwh</b-input-group-text></b-input-group-prepend>
                      <b-form-input type="text" v-model="contact.elect_kwh" required></b-form-input>
                      <b-input-group-append><b-input-group-text><i class="fa fa-won"></i></b-input-group-text></b-input-group-append>
                    </b-input-group>
                  </b-form-group>
                </b-col>
              </b-row>

               <b-row>
                <b-col md="6">
                  <b-form-group>
                    <b-input-group>
                      <b-input-group-prepend><b-input-group-text>heating_eur</b-input-group-text></b-input-group-prepend>
                      <b-form-input type="text" v-model="contact.heating_eur" required></b-form-input>
                      <b-input-group-append><b-input-group-text><i class="fa fa-euro"></i></b-input-group-text></b-input-group-append>
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group>
                    <b-input-group>
                      <b-input-group-prepend><b-input-group-text>heating_kwh</b-input-group-text></b-input-group-prepend>
                      <b-form-input type="text" v-model="contact.heating_kwh" required></b-form-input>
                      <b-input-group-append><b-input-group-text><i class="fa fa-won"></i></b-input-group-text></b-input-group-append>
                    </b-input-group>
                  </b-form-group>
                </b-col>
              </b-row>

               <b-row>
                <b-col md="6">
                  <b-form-group>
                    <b-input-group>
                      <b-input-group-prepend><b-input-group-text>water_eur</b-input-group-text></b-input-group-prepend>
                      <b-form-input type="text" v-model="contact.water_eur" required></b-form-input>
                      <b-input-group-append><b-input-group-text><i class="fa fa-euro"></i></b-input-group-text></b-input-group-append>
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group>
                    <b-input-group>
                      <b-input-group-prepend><b-input-group-text>water_litres</b-input-group-text></b-input-group-prepend>
                      <b-form-input type="text" v-model="contact.water_litres" required></b-form-input>
                      <b-input-group-append><b-input-group-text><i class="fa fa-bitbucket"></i></b-input-group-text></b-input-group-append>
                    </b-input-group>
                  </b-form-group>
                </b-col>
              </b-row>

            <div slot="footer">
              <b-button class="mr-sm-2" type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Edit</b-button>
              <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
            </div>

          </b-card>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>



<script>
export default {
  name: "editschooldata",
   data(){
        return{
          contact:[],
          options: [1,2,3,4,5,6,7,8,9,10,11,12]
        }
   },
  created: function(){
    this.getContact();
    console.log(contact)
  },
  methods: {
    click() {
      // do nothing
    },
    getContact: function(){
      //console.log(this.$route.params.id)
      this.$http.get('http://localhost:3003/api/contact/' + this.$route.params.id).then((response) => {
          this.contact = response.body.data
          //  this.contact.schoolname = response.body.data.schoolname,
          //  this.contact.year = response.body.data.year
          console.log(this.contact)
      })
    },
        editContact: function(){
      var elect_eur = parseFloat(this.contact.elect_eur);
      var elect_kwh = parseFloat(this.contact.elect_kwh);
      var heatingt_eur = parseFloat(this.contact.heating_eur);
      var heating_kwh = parseFloat(this.contact.heating_kwh);
      var water_eur = parseFloat(this.contact.water_eur);
      var water_litres = parseFloat(this.contact.water_litres);
      if(isNaN(elect_eur)){
        alert('elect_eur is no number!!!')
      }
      if(isNaN(elect_kwh)){
        alert('elect_kwh is no number!!!')
      }
      if(isNaN(heatingt_eur)){
        alert('heating_eur is no number!!!')
      }
      if(isNaN(heating_kwh)){
        alert('heating_kwh is no number!!!')
      }
      if(isNaN(water_eur)){
        alert('water_eur is no number!!!')
      }
      if(isNaN(water_litres)){
        alert('water_litres is no number!!!')
      }
      this.$http.put('http://localhost:3003/api/contact/'+this.$route.params.id, this.contact, {
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                }).then((response) => {
                  this.$router.push({path: '/schooldata'})
                })
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>




