
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
  transition: all 100ms 0s ease;
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

        <div class="flex-grow-1"></div>

        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on" @click="shuffle" :disabled="!completed || shuffling"><v-icon>mdi-shuffle</v-icon></v-btn>
          </template>
          <span>シャッフル</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on" @click="reset" :disabled="completed"><v-icon>mdi-refresh</v-icon></v-btn>
          </template>
          <span>リセット</span>
        </v-tooltip>

      </v-app-bar>

      <div class="puzzle_base">

        <img ref="p0" class="p11" src="../assets/puzzle/11.png" v-on:click="clickPiece(0)" />
        <img ref="p1" class="p21" src="../assets/puzzle/21.png" v-on:click="clickPiece(1)" />
        <img ref="p2" class="p31" src="../assets/puzzle/31.png" v-on:click="clickPiece(2)" />
        <img ref="p3" class="p41" src="../assets/puzzle/41.png" v-on:click="clickPiece(3)" />
        <img ref="p4" class="p12" src="../assets/puzzle/12.png" v-on:click="clickPiece(4)" />
        <img ref="p5" class="p22" src="../assets/puzzle/22.png" v-on:click="clickPiece(5)" />
        <img ref="p6" class="p32" src="../assets/puzzle/32.png" v-on:click="clickPiece(6)" />
        <img ref="p7" class="p42" src="../assets/puzzle/42.png" v-on:click="clickPiece(7)" />
        <img ref="p8" class="p13" src="../assets/puzzle/13.png" v-on:click="clickPiece(8)" />
        <img ref="p9" class="p23" src="../assets/puzzle/23.png" v-on:click="clickPiece(9)" />
        <img ref="p10" class="p33" src="../assets/puzzle/33.png" v-on:click="clickPiece(10)" />
        <img ref="p11" class="p43" src="../assets/puzzle/43.png" v-on:click="clickPiece(11)" />
        <img ref="p12" class="p14" src="../assets/puzzle/14.png" v-on:click="clickPiece(12)" />
        <img ref="p13" class="p24" src="../assets/puzzle/24.png" v-on:click="clickPiece(13)" />
        <img ref="p14" class="p34" src="../assets/puzzle/34.png" v-on:click="clickPiece(14)" />

      </div>

    </v-card>
  </v-row>
</template>



<script>

export default {
  components: {
  },
  methods: {

    shuffle(){

      const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

      (async()=>{

        let counter = 0;
        this.shuffling = true;
    
        while(counter < 200 && this.completed == true)
        {
          var random = Math.floor( Math.random() * (14 + 1) ); //0～14
          if( this.clickPiece(random) )
          {
            counter++;
            await sleep(10);
          }
        }
        
        this.completed = false;
        this.shuffling = false;
      })();
    },

    reset() {
      let imgs = [
        this.$refs.p0,
        this.$refs.p1,
        this.$refs.p2,
        this.$refs.p3,
        this.$refs.p4,
        this.$refs.p5,
        this.$refs.p6,
        this.$refs.p7,
        this.$refs.p8,
        this.$refs.p9,
        this.$refs.p10,
        this.$refs.p11,
        this.$refs.p12,
        this.$refs.p13,
        this.$refs.p14,
      ];


      for( let i=0; i < imgs.length; i++)
      {
        this.pieces[i].nx = this.pieces[i].sx;
        this.pieces[i].ny = this.pieces[i].sy;
        imgs[i].className = `p${this.pieces[i].nx}${this.pieces[i].ny}`;
      }

      this.spacex = 4;
      this.spacey = 4;

      this.completed = true;
    },

    clickPiece(i) {
      if( this.completed && this.shuffling == false ){return false;}

      let imgs = [
        this.$refs.p0,
        this.$refs.p1,
        this.$refs.p2,
        this.$refs.p3,
        this.$refs.p4,
        this.$refs.p5,
        this.$refs.p6,
        this.$refs.p7,
        this.$refs.p8,
        this.$refs.p9,
        this.$refs.p10,
        this.$refs.p11,
        this.$refs.p12,
        this.$refs.p13,
        this.$refs.p14,
      ];

      //nx,nyを変化させ、対応するスタイルを適用していきます。
      //クリックされた場所の上下をたどり、空きがあれば移動します。

      let getPieceIndex = (nx,ny) => this.pieces.findIndex(v=>v.nx == nx && v.ny == ny);
      let clickx = this.pieces[i].nx;
      let clicky = this.pieces[i].ny;
      let moved = false;

      if( this.pieces[i].nx == this.spacex ) {
        if( this.pieces[i].ny > this.spacey ){
          //スペースが上にある
          for(let y=this.spacey+1; y<=this.pieces[i].ny; y++)
          {
            let index = getPieceIndex(this.pieces[i].nx,y);
            this.pieces[index].ny--;
            imgs[index].className = `p${this.pieces[index].nx}${this.pieces[index].ny}`;
            moved = true;
          }
        }
        else{
          //スペースが下にある
          for(let y=this.spacey-1; y>=this.pieces[i].ny; y--)
          {
            let index = getPieceIndex(this.pieces[i].nx,y);
            this.pieces[index].ny++;
            imgs[index].className = `p${this.pieces[index].nx}${this.pieces[index].ny}`;
            moved = true;
          }
        }
      }
      if( this.pieces[i].ny == this.spacey ) {
        if( this.pieces[i].nx > this.spacex ){
          //スペースが左にある
          for(let x=this.spacex+1; x<=this.pieces[i].nx; x++)
          {
            let index = getPieceIndex(x,this.pieces[i].ny);
            this.pieces[index].nx--;
            imgs[index].className = `p${this.pieces[index].nx}${this.pieces[index].ny}`;
            moved = true;
          }
        }
        else{
          //スペースが右にある
          for(let x=this.spacex-1; x>=this.pieces[i].nx; x--)
          {
            let index = getPieceIndex(x,this.pieces[i].ny);
            this.pieces[index].nx++;
            imgs[index].className = `p${this.pieces[index].nx}${this.pieces[index].ny}`;
            moved = true;
          }
        }
      }

      if( moved == true )
      {
        this.spacex = clickx;
        this.spacey = clicky;

        //完了判定をします。
        if( this.shuffling == false && this.pieces.every(v=>v.sx == v.nx && v.sy == v.ny) )
        {
          this.completed = true;

          const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));
          (async()=>{
            sleep(100);
            
          })();

        }
      }

      return moved;
    },
  },

  data: () => ({

    completed: true,
    shuffling: false,

    spacex:4,
    spacey:4,
    pieces:[
      {sx:1,sy:1,nx:1,ny:1}, //start x, start y, now x, now y
      {sx:2,sy:1,nx:2,ny:1},
      {sx:3,sy:1,nx:3,ny:1},
      {sx:4,sy:1,nx:4,ny:1},
      {sx:1,sy:2,nx:1,ny:2},
      {sx:2,sy:2,nx:2,ny:2},
      {sx:3,sy:2,nx:3,ny:2},
      {sx:4,sy:2,nx:4,ny:2},
      {sx:1,sy:3,nx:1,ny:3},
      {sx:2,sy:3,nx:2,ny:3},
      {sx:3,sy:3,nx:3,ny:3},
      {sx:4,sy:3,nx:4,ny:3},
      {sx:1,sy:4,nx:1,ny:4},
      {sx:2,sy:4,nx:2,ny:4},
      {sx:3,sy:4,nx:3,ny:4},
    ],

  }),

};
</script>

