<template>

  <v-container>
    <div class="text-center pa-15">

      <v-text-field v-model="text" label="Message Text" solo></v-text-field>
      <v-btn :loading="loading" :disabled="loading" color="info" @click="updateMessage">
        Update Message
      </v-btn>
      <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }" class="mx-auto mt-5" max-width="350">
        <v-card-title class="text-center">
          Message :
        </v-card-title>
        <v-card-text class="font-weight-medium text-left text-subtitle-1" :class="{ 'red--text' : !store.text }">
          {{ store.text || "No message available" }}
        </v-card-text>
      </v-card>

    </div>
  </v-container>

</template>

<script>
export default {
  data() {
    return {
      text: '',
      loading: false,
      store: {
        text: ''
      }
    }
  },

  async mounted() {
    this.$fire.firestore.collection('messages').doc('1').onSnapshot((doc) => {
      this.store.text = doc.data().text
    })
  },

  methods: {
    async updateMessage() {
      this.loading = true
      const response = await this.$axios.get(`http://127.0.0.1:5001/test-17cac/us-central1/createOrUpdateMessage?text=${this.text}`)
      this.text = ''
      this.loading = false
    },

    // async updateWithFirebase() {
    //   this.loading = true
    //   this.$fire.firestore.collection('messages').doc('1').update({
    //     text: this.text
    //   })
    //   this.text = ''
    //   this.loading = false
    // }
  },
}
</script>

<style>

</style>

