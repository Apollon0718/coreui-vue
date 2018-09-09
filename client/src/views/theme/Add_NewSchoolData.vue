<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">
        <b-form v-on:submit.prevent="add">
          <b-card>
            <div slot="header">
              <strong>Add</strong> New SchoolData
            </div>
            <!-- Bootstrap Vue has some problems with Inline forms that's why we use some standard bootstrap classes -->

              <label class="mr-sm-2" for="inlineInput1">School Name: </label>
              <!-- <b-input md="12" id="inlineInput1" type="text" placeholder="Jane Doe" v-model="contact.schoolname"></b-input> -->
              <b-form-select id="name"
                    :plain="true"
                    :options="selected"
                    v-model="contact.schoolname">
                  </b-form-select>

              <b-row class="form-group">
                <b-col md="4">
                  <label class="mr-sm-2" for="inlineInput1">year: </label>
                  <b-form-select id="year"
                    :plain="true"
                    :options="select_year"
                    v-model="contact.year">
                  </b-form-select>
                </b-col>
                <b-col md="4">
                  <label class="mr-sm-2" for="inlineInput1">month: </label>
                  <b-form-select id="month"
                    :plain="true"
                    :options="[1,2,3,4,5,6,7,8,9,10,11,12]"
                    v-model="contact.month">
                  </b-form-select>
                </b-col>
                <b-col md="4">
                  <label class="mr-sm-2" for="inlineInput1">week: </label>
                  <b-form-select id="week"
                    :plain="true"
                    :options="select_week"
                    v-model="contact.week">
                  </b-form-select>
                </b-col>

              </b-row>

              <b-row>
                <b-col md="6">
                  <b-form-group>
                    <b-input-group>
                      <b-input-group-prepend><b-input-group-text>elect_eur</b-input-group-text></b-input-group-prepend>
                      <b-form-input type="text" v-model="contact.elect_eur"></b-form-input>
                      <b-input-group-append><b-input-group-text><i class="fa fa-euro"></i></b-input-group-text></b-input-group-append>
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group>
                    <b-input-group>
                      <b-input-group-prepend><b-input-group-text>elect_kwh</b-input-group-text></b-input-group-prepend>
                      <b-form-input type="text" v-model="contact.elect_kwh"></b-form-input>
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
                      <b-form-input type="text" v-model="contact.heating_eur"></b-form-input>
                      <b-input-group-append><b-input-group-text><i class="fa fa-euro"></i></b-input-group-text></b-input-group-append>
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group>
                    <b-input-group>
                      <b-input-group-prepend><b-input-group-text>heating_kwh</b-input-group-text></b-input-group-prepend>
                      <b-form-input type="text" v-model="contact.heating_kwh"></b-form-input>
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
                      <b-form-input type="text" v-model="contact.water_eur"></b-form-input>
                      <b-input-group-append><b-input-group-text><i class="fa fa-euro"></i></b-input-group-text></b-input-group-append>
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group>
                    <b-input-group>
                      <b-input-group-prepend><b-input-group-text>water_litres</b-input-group-text></b-input-group-prepend>
                      <b-form-input type="text" v-model="contact.water_litres"></b-form-input>
                      <b-input-group-append><b-input-group-text><i class="fa fa-bitbucket"></i></b-input-group-text></b-input-group-append>
                    </b-input-group>
                  </b-form-group>
                </b-col>
              </b-row>

            <div slot="footer">
              <b-button class="mr-sm-2" type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Add</b-button>
              <b-button type="reset" size="sm" variant="danger" @click="goBack"><i class="fa fa-ban"></i> back</b-button>
            </div>

          </b-card>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "add_newschooldata",
  data() {
    return {
      contact: {}, // Must be an array reference!
      show: true,
      selected:[],
      select_year:[],
      select_week:[]
    };
  },
  created: function() {
    this.getname();
  },
  methods: {
    click() {
      // do nothing
    },
     goBack() {
      this.$router.go(-1)
      // this.$router.replace({path: '/users'})
    },
    getname(){
      this.$http.get("http://localhost:3003/api/names").then(response => {
        for (var i = 0; i <= response.body.length; i++) {
            this.selected.push(response.body[i]["name"]);

            }
          }
        // console.log(response.body)
      )

      for (var i = 2015; i <= 2050; i++){
        this.select_year.push(i);
      }

      for (var i = 1; i <= 53; i++){
        this.select_week.push(i);
      }

    },
    add(){
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
      console.log(this.contact)
      this.$http.post('http://localhost:3003/api/contact', this.contact, {
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
