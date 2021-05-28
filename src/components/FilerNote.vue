<template>
  <div>
    <v-container class="">
      <h1>Filter Note</h1>
      <v-row>
        <v-col>
          <v-text-field
            v-model="search"
            label="Search by text task & Tag"
            hide-details="auto"
            @input="searchTask"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'FilterNote',
  data() {
    return {
      search: '',
    }
  },
  methods: {
    searchTask() {
      this.$store.commit('notes/FILTER_NOTE', this.search)
    },
  },
  computed: {
    ...mapState({
      notes: (state) => state.notes.notes,
    }),
    ...mapGetters({
      corrNotes: 'notes/cNotes',
    }),
  },
}
</script>

<style lang="scss" scoped></style>
