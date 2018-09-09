<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">
        <b-form v-on:submit.prevent="addContact">
          <b-card>
            <div slot="header">
              <strong>Add</strong> New School
            </div>
            <!-- Bootstrap Vue has some problems with Inline forms that's why we use some standard bootstrap classes -->

              <label class="mr-sm-2" for="inlineInput1">Name: </label>
              <b-input md="12" id="inlineInput1" type="text" placeholder="Jane Doe" v-model="contact.name"></b-input>

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
  name: "add_newschool",
  data() {
    return {
      selected: [], // Must be an array reference!
      show: true,
      contact:{}
    };
  },
  methods: {
    click() {
      // do nothing
    },
    goBack() {
      this.$router.go(-1)
      // this.$router.replace({path: '/users'})
    },
    addContact() {
      this.$http.post('http://localhost:3003/api/name', this.contact, {
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                }).then((response) => {
                   this.$router.push({path: '/'})
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
