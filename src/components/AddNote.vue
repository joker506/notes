<template>
  <div class="hello">
    <v-container>
      <h1>Add Note</h1>
      <v-btn class="ma-2" elevation="2" color="primary" @click="showNoteInput">
        <v-icon color="" dark> mdi-plus</v-icon>
        Add New Note</v-btn
      >
      <CardNote v-if="show" />
    </v-container>
  </div>
</template>

<script>
import CardNote from '@/components/Card'
export default {
  name: 'AddNote',
  data() {
    return {
      show: false,
    }
  },
  methods: {
    showNoteInput() {
      this.show = !this.show
    },
  },
  props: {
    msg: String,
  },
  components: {
    CardNote,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
