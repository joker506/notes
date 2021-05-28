<template>
  <div>
    <v-container>
      <v-card class="mx-3" max-width="544" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4"></div>
            <v-list-item-title class="headline mb-1" v-if="n.tag">
              Tag: {{ n.tag }}
            </v-list-item-title>
            <v-list-item-subtitle> Task: {{ n.text }} </v-list-item-subtitle>

            <v-col>
              <v-textarea
                solo
                v-if="corNote"
                v-model.trim="note"
                label="Input Task"
              ></v-textarea>
              <v-text-field
                solo
                v-if="tagNote"
                @keydown.enter="addTag"
                v-model.trim="tag"
                label="Input Tag"
              ></v-text-field>
            </v-col>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <v-btn
            outlined
            rounded
            text
            color="yellow darken-1"
            @click="correctNote"
          >
            Correct
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            outlined
            rounded
            text
            color="green darken-1"
            @click="correctSend"
          >
            Send
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            outlined
            rounded
            text
            color="deep-orange darken-1"
            @click="delNote"
          >
            Del
          </v-btn>
          <v-spacer></v-spacer>

          <v-btn class="mx-2" fab dark color="indigo" @click="addPinNote">
            <v-icon dark>
              mdi-plus
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Note',
  data() {
    return {
      note: '',
      corNote: false,
      tagNote: false,
      pinNote: false,
    }
  },
  components: {},
  props: {
    n: {
      type: Object,
    },
  },
  methods: {
    correctNote() {
      this.corNote = true
      this.note = this.n.text
      console.log(this.n.text)
    },
    delNote() {
      let _first = this.n
      this.notes.splice(this.notes.indexOf(_first), 1)
    },
    correctSend() {
      this.notes.forEach((e) => {
        if (e.id === this.n.id) {
          e.text = this.note
          this.$store.dispatch('notes/setNote', this.notes)
          this.corNote = false
        }
      })
    },
    addPinNote() {
      this.pinNote = !this.pinNote
      this.$store.dispatch('notes/topNote', this.n)
      //console.log(this.n.id)
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
