<template>
  <div>
    <v-card class="mx-auto" max-width="344">
      <v-card-text>
        <div>Top Note</div>
      </v-card-text>

      <v-expand-transition>
        <v-card>
          <v-card-text class="pb-0">
            <p class="display-1 text--primary">{{ i.tag }}</p>
          </v-card-text>
          <v-card-text class="pb-0">
            <p class="display-1 text--primary">
              {{ i.text }}
            </p>
            <p></p
          ></v-card-text>
        </v-card>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'CardTop',
  props: ['i'],
}
</script>

<style lang="scss" scoped></style>
