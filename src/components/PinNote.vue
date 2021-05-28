<template>
  <v-container class="pinnote">
    <div class="">
      <CardTop :i="top" /></div
  ></v-container>
</template>

<script>
import CardTop from '@/components/CardTop'
import { mapState } from 'vuex'
export default {
  name: 'PinNote',
  components: {
    CardTop,
  },
  computed: {
    ...mapState({
      top: (state) => state.notes.topNote,
    }),
  },
}
</script>

<style lang="scss" scoped>
.pinnote {
  position: fixed;
  left: 30%;
}
</style>
