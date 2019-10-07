<template>
  <div>
    <v-row>
      <v-col>

        <v-card
          class="mx-auto"
          max-width="434"
          tile
        >
          <v-img
            height="100%"
            src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
          >
            <v-row
              align="end"
              class="fill-height"
            >
              <v-col
                align-self="start"
                class="pa-0"
                cols="12"
              >
                <v-avatar
                  class="profile"
                  color="grey"
                  size="164"
                >
                  <v-img :src="require('../assets/genki.png')"></v-img>
                </v-avatar>
              </v-col>
              <v-col class="py-0">
                <v-list-item
                  color="rgba(0, 0, 0, .4)"
                  dark
                >
                  <v-list-item-content>
                    <v-list-item-title class="title">Marcus Obrien</v-list-item-title>
                    <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </v-img>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-text>

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

  <v-btn absolute>
    テスト
  </v-btn>

  </div>
</template>



<script>
//import HelloWorld from '../components/HelloWorld';

export default {
    data: () => ({
    skills: [
      { name: 'C#', value: 100 },
      { name: 'C++', value: 90 },
      { name: 'DirectX', value: 80 },
    ],
  }),
};
</script>


