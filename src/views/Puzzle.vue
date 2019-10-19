<template>

  <v-layout column>

    <v-card-title>
      <v-icon class="mr-2">mdi-puzzle</v-icon>
      Css Puzzle
    </v-card-title>
    <v-card-text>
        JavaScriptとCSSでパズルを作成。
    </v-card-text>

    <puzzle></puzzle>

  </v-layout>
</template>

<script>
import puzzle from '@/components/Puzzle.vue'

export default {
  components:
  {
    puzzle,
  },
}
</script>

