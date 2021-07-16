<template>
  <v-row>
    <v-col align="center">
      <v-img class="ma-10" max-width="300" src="/logo-food-analytics.png" />
      <v-card max-width="600" class="ma-5 pa-10">
        <v-text-field
          id="email"
          v-model="email"
          label="User ID"
          name="email"
          type="text"
        />
        <v-text-field
          id="password"
          v-model="password"
          label="Password"
          name="password"
          type="password"
        />
        <v-btn class="login-btn" text @click="submit">
          Log in
        </v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Login',
  layout: 'empty',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submit () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: left;
  font: normal normal bold 58px/87px Poppins;
  color: #22254c;
  margin-bottom: 10px;
}

.label {
  display: block;
  text-align: left;
  font: normal normal normal 15px/18px Roboto;
  color: #22254c;
  margin: 10px;
}

.login-btn {
  display: block;
  background: green 0 0 no-repeat padding-box;
  box-shadow: 0 3px 6px #00000029;
  border-radius: 6px;
  text-align: center;
  font: normal normal bold 15px/18px Roboto;
  letter-spacing: 0;
  opacity: 0.9;
  color: white;
  text-transform: none;
}
</style>
