<template>
  <v-container>
    <h1>Data Entry</h1>
    <v-card>
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="innovation.name"
                :rules="Rules"
                label="Name of innovation"
                required
              />
            </v-col>

            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="category"
                :rules="Rules"
                :counter="10"
                label="Last name"
                required
              />
            </v-col>

            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="email"
                label="E-mail"
                required
              />
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
const innovation = {
  name: ''
}

export default {
  data () {
    return {
      innovation,
      valid: false,
      innovationName: '',
      lastname: '',
      Rules: [
        v => !!v || 'Field is required',
        v => v.length <= 100 || 'Must be less than 100 characters'
      ],
      email: ''
    }
  },
  head () {
    return {
      title: 'Categories'
    }
  }
}
</script>
