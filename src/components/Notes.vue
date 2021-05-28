<template>
  <div v-if="this.notes">
    <div class="" v-for="(note, idx) in corrNotes" :key="idx">
      <Note class="" :n="note" />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Note from '@/components/Note'

export default {
  name: 'Notes',
  components: {
    Note,
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
