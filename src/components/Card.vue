<template>
  <v-container fluid>
    <div class="">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            class="mb-3"
            v-model.trim="tag"
            label="Input Tag"
            hide-details="auto"
          ></v-text-field>
          <v-textarea solo v-model.trim="note" label="Input Task"></v-textarea>
        </v-col>
      </v-row>
      <v-item-group tile group>
        <!-- <v-btn class="mr-3">
        Correct Note
      </v-btn> -->

        <v-btn
          class="mr-3"
          color="green"
          dark
          @click="sendNote"
          v-if="this.note"
        >
          Submit Note
        </v-btn>
      </v-item-group>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      note: null,
      tag: null,
      notes: [],
      id: 0,
    }
  },
  methods: {
    sendNote() {
      this.notes.push({ id: this.id++, text: this.note, tag: this.tag })
      this.$store.dispatch('notes/setNote', this.notes)
      this.note = ''
      this.tag = ''
    },
  },
}
</script>

<style lang="scss" scoped></style>
