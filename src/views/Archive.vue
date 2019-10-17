<template>
  <v-layout column>

    <v-card-title>
      <v-icon class="mr-2">mdi-archive</v-icon>
      Archives
    </v-card-title>
    <v-card-text>
      過去の作品たち
    </v-card-text>
    
    <v-row justify=center>

      <v-col xs=12 sm=12 md=6 lg=6 xl=6>
        <v-card>
          <v-img
            src="../assets/baller-mini.png"
            class="white--text"
            gradient="to bottom, rgba(0,0,0,.0), rgba(0,0,0,.0), rgba(0,0,0,.5)"
            max-height="300px"
          >
            <v-card-title class="fill-height align-end">ボウラーズ</v-card-title>
          </v-img>

          <v-card-text>
            <v-row no-gutters align="end">
              <v-col>
                <div>高校時代のプロコン最優秀賞作品。</div>
                <div>3D物理計算を書き始めたのがきっかけで、物理エンジン無しで作成。</div>
              </v-col>
              <v-col cols=auto>
                <v-btn icon @click="showballer = !showballer" align-self="end">
                  <v-icon>{{ showballer ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider v-if="showballer"></v-divider>
      
          <v-expand-transition>
            <div v-show="showballer">
              <v-card-text>

                <v-row no-gutters>
                  <div>Released: 2007</div>
                </v-row>

                <v-row>
                  <v-col></v-col>
                  <v-col cols=auto>
                    <v-btn href="https://forest.watch.impress.co.jp/article/2008/01/18/ballers.html">
                      <v-icon>mdi-open-in-new</v-icon>紹介サイト
                    </v-btn>
                  </v-col>
                  <v-col cols=auto>
                    <v-btn href="https://www.freem.ne.jp/win/game/1540">
                      <v-icon>mdi-download</v-icon>ダウンロード
                    </v-btn>
                  </v-col>
                </v-row>

                実況してくれてる人がいたので貼っておきます。
                <v-card color="primary lighten-3">
                  <v-tabs show-arrows background-color="transparent">
                    <v-tabs-slider color="primary darken-1"></v-tabs-slider>
                    <v-tab v-for="(ballervideo, i) in ballervideos" :key="i">Video {{i+1}}</v-tab>
                    <v-tab-item v-for="(ballervideo, i) in ballervideos" :key="i">
                      <v-card height="380" color="black">
                        <v-row no-gutters justify=center>
                          <script type="application/javascript" v-bind:src="`https://embed.nicovideo.jp/watch/` + ballervideo.vid + `/script?w=640&h=380`"></script>
                          <noscript><a v-bind:href="'https://www.nicovideo.jp/watch/' + ballervideo.vid">{{ballervideo.title}}</a></noscript>
                        </v-row>
                      </v-card>
                    </v-tab-item>
                  </v-tabs>
                </v-card>
              </v-card-text>
            </div>
          </v-expand-transition>
          

        </v-card>
      </v-col>





      <v-col xs=12 sm=12 md=6 lg=6 xl=6>
        <v-card>
          <v-img
            src="../assets/nobiru-mini.png"
            class="white--text"
            gradient="to bottom, rgba(0,0,0,.0), rgba(0,0,0,.0), rgba(0,0,0,.5)"
            max-height="300px"
          >
            <v-card-title class="fill-height align-end">伸びる棒</v-card-title>
          </v-img>

          <v-card-text>
            <v-row no-gutters align="end">
              <v-col>
                <div>高校時代の趣味作品。</div>
                <div>2次元の線分判定を書いていたら閃いたので作成。</div>
              </v-col>
              <v-col cols=auto>
                <v-btn icon @click="shownobiru = !shownobiru" align-self="end">
                  <v-icon>{{ shownobiru ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider v-if="shownobiru"></v-divider>
      
          <v-expand-transition>
            <div v-show="shownobiru">
              <v-card-text>

                <v-row no-gutters>
                  <div>Released: 2005</div>
                </v-row>

                <v-row>
                  <v-col></v-col>
                  <v-col cols=auto>
                    <v-btn href="https://www.freem.ne.jp/win/game/551">
                      <v-icon>mdi-download</v-icon>ダウンロード
                    </v-btn>
                  </v-col>
                </v-row>

                実況してくれてる人がいたので貼っておきます。
                <v-card color="primary lighten-3">
                  <v-tabs show-arrows background-color="transparent">
                    <v-tabs-slider color="primary darken-1"></v-tabs-slider>
                    <v-tab v-for="(nobiruvideo, i) in nobiruvideos" :key="i">Video {{i+1}}</v-tab>
                    <v-tab-item v-for="(nobiruvideo, i) in nobiruvideos" :key="i">
                      <v-card height="380" color="black">
                        <v-row no-gutters justify=center>
                          <script type="application/javascript" v-bind:src="`https://embed.nicovideo.jp/watch/` + nobiruvideo.vid + `/script?w=640&h=380`"></script>
                          <noscript><a v-bind:href="'https://www.nicovideo.jp/watch/' + nobiruvideo.vid">{{nobiruvideo.title}}</a></noscript>
                        </v-row>
                      </v-card>
                    </v-tab-item>
                  </v-tabs>
                </v-card>
              </v-card-text>
            </div>
          </v-expand-transition>

        </v-card>
      </v-col>

    </v-row>
    
  </v-layout>
</template>



<script>
export default {
    data: () => ({
    ballervideos: [
      { vid: 'sm10643556' },
      { vid: 'sm10696905' },
      { vid: 'sm10730867' },
      { vid: 'sm10772756' },
      { vid: 'sm10800658' },
      { vid: 'sm10854687' },
      { vid: 'sm10955561' },
      { vid: 'sm11095829' },
      { vid: 'sm11336413' },
      { vid: 'sm35260745' },
    ],
    nobiruvideos: [
      { vid: 'sm19659156' },
    ],
    showballer: false,
    shownobiru: false,
  }),
};
</script>
