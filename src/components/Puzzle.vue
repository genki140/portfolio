

<template>

  <v-row no-gutters justify="center" align="center">

    <v-card elevation=4>
      <v-app-bar dark color="primary">
        <v-icon class="mr-7">mdi-contacts</v-icon>
        <v-toolbar-title class="mr-10">15パズル</v-toolbar-title>

        <div class="flex-grow-1"></div>
        <v-btn icon @click="shuffle" :disabled="shuffling"><v-icon>mdi-shuffle</v-icon></v-btn>
        <v-btn icon @click="reset" :disabled="completed"><v-icon>mdi-refresh</v-icon></v-btn>
      </v-app-bar>

      <v-responsive :aspect-ratio="1/1">
        <div class="puzzle_base">
          <img ref="p0" class="p11" src="../assets/puzzle/11.png" v-on:click="clickPiece( 0 ,0)"/> <!-- v-touch="{left:()=>clickPiece(0  ,1), right:()=>clickPiece(0  ,2), up:()=>clickPiece(0  ,3), down:()=>clickPiece(0  ,4)}"/> -->
          <img ref="p1" class="p21" src="../assets/puzzle/21.png" v-on:click="clickPiece( 1 ,0)"/> <!-- v-touch="{left:()=>clickPiece(1  ,1), right:()=>clickPiece(1  ,2), up:()=>clickPiece(1  ,3), down:()=>clickPiece(1  ,4)}"/> -->
          <img ref="p2" class="p31" src="../assets/puzzle/31.png" v-on:click="clickPiece( 2 ,0)"/> <!-- v-touch="{left:()=>clickPiece(2  ,1), right:()=>clickPiece(2  ,2), up:()=>clickPiece(2  ,3), down:()=>clickPiece(2  ,4)}"/> -->
          <img ref="p3" class="p41" src="../assets/puzzle/41.png" v-on:click="clickPiece( 3 ,0)"/> <!-- v-touch="{left:()=>clickPiece(3  ,1), right:()=>clickPiece(3  ,2), up:()=>clickPiece(3  ,3), down:()=>clickPiece(3  ,4)}"/> -->
          <img ref="p4" class="p12" src="../assets/puzzle/12.png" v-on:click="clickPiece( 4 ,0)"/> <!-- v-touch="{left:()=>clickPiece(4  ,1), right:()=>clickPiece(4  ,2), up:()=>clickPiece(4  ,3), down:()=>clickPiece(4  ,4)}"/> -->
          <img ref="p5" class="p22" src="../assets/puzzle/22.png" v-on:click="clickPiece( 5 ,0)"/> <!-- v-touch="{left:()=>clickPiece(5  ,1), right:()=>clickPiece(5  ,2), up:()=>clickPiece(5  ,3), down:()=>clickPiece(5  ,4)}"/> -->
          <img ref="p6" class="p32" src="../assets/puzzle/32.png" v-on:click="clickPiece( 6 ,0)"/> <!-- v-touch="{left:()=>clickPiece(6  ,1), right:()=>clickPiece(6  ,2), up:()=>clickPiece(6  ,3), down:()=>clickPiece(6  ,4)}"/> -->
          <img ref="p7" class="p42" src="../assets/puzzle/42.png" v-on:click="clickPiece( 7 ,0)"/> <!-- v-touch="{left:()=>clickPiece(7  ,1), right:()=>clickPiece(7  ,2), up:()=>clickPiece(7  ,3), down:()=>clickPiece(7  ,4)}"/> -->
          <img ref="p8" class="p13" src="../assets/puzzle/13.png" v-on:click="clickPiece( 8 ,0)"/> <!-- v-touch="{left:()=>clickPiece(8  ,1), right:()=>clickPiece(8  ,2), up:()=>clickPiece(8  ,3), down:()=>clickPiece(8  ,4)}"/> -->
          <img ref="p9" class="p23" src="../assets/puzzle/23.png" v-on:click="clickPiece( 9 ,0)"/> <!-- v-touch="{left:()=>clickPiece(9  ,1), right:()=>clickPiece(9  ,2), up:()=>clickPiece(9  ,3), down:()=>clickPiece(9  ,4)}"/> -->
          <img ref="p10" class="p33" src="../assets/puzzle/33.png" v-on:click="clickPiece(10,0)"/> <!-- v-touch="{left:()=>clickPiece(10 ,1), right:()=>clickPiece(10 ,2), up:()=>clickPiece(10 ,3), down:()=>clickPiece(10 ,4)}"/> -->
          <img ref="p11" class="p43" src="../assets/puzzle/43.png" v-on:click="clickPiece(11,0)"/> <!-- v-touch="{left:()=>clickPiece(11 ,1), right:()=>clickPiece(11 ,2), up:()=>clickPiece(11 ,3), down:()=>clickPiece(11 ,4)}"/> -->
          <img ref="p12" class="p14" src="../assets/puzzle/14.png" v-on:click="clickPiece(12,0)"/> <!-- v-touch="{left:()=>clickPiece(12 ,1), right:()=>clickPiece(12 ,2), up:()=>clickPiece(12 ,3), down:()=>clickPiece(12 ,4)}"/> -->
          <img ref="p13" class="p24" src="../assets/puzzle/24.png" v-on:click="clickPiece(13,0)"/> <!-- v-touch="{left:()=>clickPiece(13 ,1), right:()=>clickPiece(13 ,2), up:()=>clickPiece(13 ,3), down:()=>clickPiece(13 ,4)}"/> -->
          <img ref="p14" class="p34" src="../assets/puzzle/34.png" v-on:click="clickPiece(14,0)"/> <!-- v-touch="{left:()=>clickPiece(14 ,1), right:()=>clickPiece(14 ,2), up:()=>clickPiece(14 ,3), down:()=>clickPiece(14 ,4)}"/> -->
        </div>
      </v-responsive>

      <v-dialog v-model="dialog" width=250>
        <v-card>
          <v-card-title class="headline">クリア</v-card-title>
          <v-card-text>
            おめでとうございます！
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="dialog = false">閉じる</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

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
    
        while(counter < 300)
        {
          var random = Math.floor( Math.random() * (14 + 1) ); //0～14
          if( this.clickPiece(random,0) )
          {
            counter++;
            await sleep(1);
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

    clickPiece(i,dir) {
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
          if( dir==0 || dir==3 )
          {
            for(let y=this.spacey+1; y<=this.pieces[i].ny; y++)
            {
              let index = getPieceIndex(this.pieces[i].nx,y);
              this.pieces[index].ny--;
              imgs[index].className = `p${this.pieces[index].nx}${this.pieces[index].ny}`;
              moved = true;
            }
          }
        }
        else{
          //スペースが下にある
          if( dir==0 || dir==4 )
          {
            for(let y=this.spacey-1; y>=this.pieces[i].ny; y--)
            {
              let index = getPieceIndex(this.pieces[i].nx,y);
              this.pieces[index].ny++;
              imgs[index].className = `p${this.pieces[index].nx}${this.pieces[index].ny}`;
              moved = true;
            }
          }
        }
      }
      if( this.pieces[i].ny == this.spacey ) {
        if( this.pieces[i].nx > this.spacex ){
          //スペースが左にある
          if( dir==0 || dir==1 )
          {
            for(let x=this.spacex+1; x<=this.pieces[i].nx; x++)
            {
              let index = getPieceIndex(x,this.pieces[i].ny);
              this.pieces[index].nx--;
              imgs[index].className = `p${this.pieces[index].nx}${this.pieces[index].ny}`;
              moved = true;
            }
          }
        }
        else{
          //スペースが右にある
          if( dir==0 || dir==2 )
          {
            for(let x=this.spacex-1; x>=this.pieces[i].nx; x--)
            {
              let index = getPieceIndex(x,this.pieces[i].ny);
              this.pieces[index].nx++;
              imgs[index].className = `p${this.pieces[index].nx}${this.pieces[index].ny}`;
              moved = true;
            }
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
            this.dialog=true;
          })();

        }
      }

      return moved;
    },
  },

  data: () => ({

    dialog: false,

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




<style scoped>

.puzzle_base
{
  top:0px;
  left:0px;
  width:100%;
  height:100%;
  background-color:#555;
  position: relative;
}


.puzzle_base img
{
  width:25%;
  height:25%;
  position: absolute;
  transition: all 100ms 0s ease;
  -webkit-transition: all 100ms 0s ease;
}

.p11
{
  top:0%;
  left:0%;
}
.p21
{
  top:0%;
  left:25%;
}
.p31
{
  top:0%;
  left:50%;
}
.p41
{
  top:0%;
  left:75%;
}

.p12
{
  top:25%;
  left:0%;
}
.p22
{
  top:25%;
  left:25%;
}
.p32
{
  top:25%;
  left:50%;
}
.p42
{
  top:25%;
  left:75%;
}


.p13
{
  top:50%;
  left:0%;
}
.p23
{
  top:50%;
  left:25%;
}
.p33
{
  top:50%;
  left:50%;
}
.p43
{
  top:50%;
  left:75%;
}


.p14
{
  top:75%;
  left:0%;
}
.p24
{
  top:75%;
  left:25%;
}
.p34
{
  top:75%;
  left:50%;
}
.p44
{
  top:75%;
  left:75%;
}


</style>

