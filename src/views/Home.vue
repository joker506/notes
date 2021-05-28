<template>
  <div class="">
    <v-container class="">
      <v-row
        ><v-col cols="12" md="6">
          <FilerNote v-if="this.notes.length" />
        </v-col>
        <v-col cols="12" md="6">
          <PinNote />
        </v-col>
      </v-row>

      <AddNote />
      <Notes />
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AddNote from '@/components/AddNote'
import Notes from '@/components/Notes'
import FilerNote from '@/components/FilerNote'
import PinNote from '@/components/PinNote'

export default {
  name: 'Home',

  components: {
    AddNote,
    Notes,
    FilerNote,
    PinNote,
  },
  computed: {
    ...mapState({
      notes: (state) => state.notes.notes,
      top: (state) => state.notes.topNote,
    }),
  },
}
</script>
