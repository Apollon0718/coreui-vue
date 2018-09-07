<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form v-on:submit.prevent="login">
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text>@</b-input-group-text></b-input-group-prepend>
                    <b-form-input type="email" class="form-control" placeholder="email" v-model="user.email" autocomplete="email" required/>
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="password" class="form-control" placeholder="Password" v-model="user.password" autocomplete="current-password" />
                  </b-input-group>
                  <b-row>
                    <b-col cols="6">
                      <b-button type="submit" variant="primary" class="px-4">Login</b-button>
                    </b-col>
                    <b-col cols="6" class="text-right">
                      <b-button variant="link" class="px-0">Forgot password?</b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
            <b-card no-body class="text-white bg-primary py-5 d-md-down-none" style="width:44%">
              <b-card-body class="text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <router-link :to="{ name: 'Register'}"><p style="color: white">Register Now!</p></router-link>
                  <!-- <b-button variant="primary" class="active mt-3"></b-button> -->
                </div>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
   data() {
    return {
      user:{}
    };
  },
  methods: {
    click() {
      // do nothing
    },
    login(){
      console.log(this.user)
      this.$http.post('http://localhost:3003/api/login', this.user, {
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                }).then((response) => {
                   localStorage.setItem('auth_user', JSON.stringify(response));
                   this.$router.push({path: '/'})
                })

    }
  }
}
</script>

