
<style scoped>

.puzzle_base
{
  top:0px;
  left:0px;
  width:400px;
  height:400px;
  background-color:#555;
  position: relative;
}


.puzzle_base img
{
  width:100px;
  height:100px;
  position: absolute;
  transition: all 200ms 0s ease;
}

.p11
{
  top:0px;
  left:0px;
}
.p21
{
  top:0px;
  left:100px;
}
.p31
{
  top:0px;
  left:200px;
}
.p41
{
  top:0px;
  left:300px;
}

.p12
{
  top:100px;
  left:0px;
}
.p22
{
  top:100px;
  left:100px;
}
.p32
{
  top:100px;
  left:200px;
}
.p42
{
  top:100px;
  left:300px;
}


.p13
{
  top:200px;
  left:0px;
}
.p23
{
  top:200px;
  left:100px;
}
.p33
{
  top:200px;
  left:200px;
}
.p43
{
  top:200px;
  left:300px;
}


.p14
{
  top:300px;
  left:0px;
}
.p24
{
  top:300px;
  left:100px;
}
.p34
{
  top:300px;
  left:200px;
}
.p44
{
  top:300px;
  left:300px;
}


</style>


<template>

  <v-row no-gutters justify="center" align="center">

    <v-card>
      <v-app-bar dark color="primary">
        <v-icon class="mr-7">mdi-contacts</v-icon>
        <v-toolbar-title class="mr-10">15パズル</v-toolbar-title>
      </v-app-bar>

      <div class="puzzle_base">

        <img ref="p11" class="p11" src="../assets/puzzle/11.png" v-on:click="clickPiece($refs.p11,1,1)" />
        <img ref="p21" class="p21" src="../assets/puzzle/21.png" v-on:click="clickPiece($refs.p21,2,1)" />
        <img ref="p31" class="p31" src="../assets/puzzle/31.png" v-on:click="clickPiece($refs.p31,3,1)" />
        <img ref="p41" class="p41" src="../assets/puzzle/41.png" v-on:click="clickPiece($refs.p41,4,1)" />

        <img ref="p12" class="p12" src="../assets/puzzle/12.png" v-on:click="clickPiece($refs.p12,1,2)" />
        <img ref="p22" class="p22" src="../assets/puzzle/22.png" v-on:click="clickPiece($refs.p22,2,2)" />
        <img ref="p32" class="p32" src="../assets/puzzle/32.png" v-on:click="clickPiece($refs.p32,3,2)" />
        <img ref="p42" class="p42" src="../assets/puzzle/42.png" v-on:click="clickPiece($refs.p42,4,2)" />

        <img ref="p13" class="p13" src="../assets/puzzle/13.png" v-on:click="clickPiece($refs.p13,1,3)" />
        <img ref="p23" class="p23" src="../assets/puzzle/23.png" v-on:click="clickPiece($refs.p23,2,3)" />
        <img ref="p33" class="p33" src="../assets/puzzle/33.png" v-on:click="clickPiece($refs.p33,3,3)" />
        <img ref="p43" class="p43" src="../assets/puzzle/43.png" v-on:click="clickPiece($refs.p43,4,3)" />

        <img ref="p14" class="p14" src="../assets/puzzle/14.png" v-on:click="clickPiece($refs.p14,1,4)" />
        <img ref="p24" class="p24" src="../assets/puzzle/24.png" v-on:click="clickPiece($refs.p24,2,4)" />
        <img ref="p34" class="p34" src="../assets/puzzle/34.png" v-on:click="clickPiece($refs.p34,3,4)" />

      </div>

      <v-btn @click="clickPiece">シャッフル</v-btn>

    </v-card>
  </v-row>
</template>



<script>

export default {
  components: {
  },
  methods: {
    clickPiece(item,x,y) {

      //x,yには、本来あるべき位置が格納されています。



      item.className="puzzle_piece p41";
    },
  },

  data: () => ({
  })
};
</script>

