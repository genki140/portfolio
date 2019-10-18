<template>

  <v-layout column>

    <v-card-title>
      <v-icon class="mr-2">mdi-vuejs</v-icon>
      Vue Test
    </v-card-title>
    <v-card-text>
        Vue.js+Vuetify.jsで簡易的な連絡先管理のアプリを作成してみました。全ての動作はクライアントサイドで行われます。
    </v-card-text>

    <contactManage></contactManage>

  </v-layout>
</template>

<script>
import contactManage from '@/components/ContactManage.vue'

export default {
  components:
  {
    contactManage,
  },
}
</script>
