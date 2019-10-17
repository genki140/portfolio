<template>
  <v-layout column>

    <v-card-title>
      <v-icon class="mr-2">mdi-home</v-icon>
      Introduce
    </v-card-title>
    <v-card-text>
      <div>
        最近のWebフロントエンド技術の勉強ついでに作成した、仕事用の自己紹介サイトです。
      </div>
      <div>
        開発環境にはVSCode+Node.js+Github、ライブラリにはVue.js+Vuetify.jsを使用し、GithubPagesで公開しています。
      </div>
    </v-card-text>

    <!--プロフィールカード-->
      <v-row no-gutters justify="center" align="center">
        <v-avatar size="300" class="ma-4">
          <v-img src="../assets/genki.png"></v-img>
        </v-avatar>
        <div>
          <v-card-text>
              <div>
              名前：石丸 元気
              </div>
              <div>
              住所：新潟県新潟市
              </div>
              <v-divider class="py-2"></v-divider>
              <div>
              学歴：埼玉県立久喜工業高等学校 情報科
              </div>
              <div>
              仕事：東京都中央区のシステム開発会社にて 11年間勤務
              </div>
              <div>
              活動：フリーランスSEとして独立
              </div>
              <v-divider class="py-2"></v-divider>
              <div>
              資格：基本情報技術者(高校３年に取得)
              </div>
              <div>
              資格：ソフトウェア開発技術者(卒業年に取得)
              </div>
              <v-divider class="py-2"></v-divider>
              <div>
              趣味：ピアノ、ギター、サッカー、バド、ボード、カメラ、旅行、英語
              </div>
          </v-card-text>
        </div>
      </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            開発実績
          </v-card-title>

          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>物理シミュレーションゲーム</v-list-item-title>
              <v-list-item-subtitle>C++、DirectX。3D物理計算やレンダリング計算の学習</v-list-item-subtitle>
              <v-btn @click="route('history')">
                <v-icon class="mr-2">mdi-archive</v-icon>Archive
              </v-btn>
            </v-list-item-content>
          </v-list-item>

          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>CTI/CRMパッケージ。社内業務ソフト。会社のHP</v-list-item-title>
              <v-list-item-subtitle>C++、C#、HTML、CSS、JavaScript、SQL Server</v-list-item-subtitle>
              <v-list-item-subtitle>CTI/CRMパッケージでは</v-list-item-subtitle>
              <v-btn href="https://www.succ.co.jp">
                <v-icon class="mr-2">mdi-open-in-new</v-icon>サクシード株式会社
              </v-btn>
            </v-list-item-content>
          </v-list-item>

          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title>Wordのアドイン</v-list-item-title>
              <v-list-item-subtitle>スタイル情報のCSV入出力</v-list-item-subtitle>
              <v-list-item-subtitle>C#、VSTO</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title>Portfolio Webサイト</v-list-item-title>
              <v-list-item-subtitle>Webフロントエンド学習</v-list-item-subtitle>
              <v-list-item-subtitle>JavaScript、Vue.js、Vuetify.js</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

        </v-card>
      </v-col>

      <v-col>
        <v-card>
          <v-card-title>Skill</v-card-title>
          <v-card-text>
            丸の中は大体の経験年数です。
          </v-card-text>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>言語</v-list-item-title>
              <div>
                <v-chip class="ma-1">C++<v-avatar right class="blue darken-2">10</v-avatar></v-chip>
                <v-chip class="ma-1">C#<v-avatar right class="blue darken-2">10</v-avatar></v-chip>
                <v-chip class="ma-1">HTML<v-avatar right class="blue darken-1">5</v-avatar></v-chip>
                <v-chip class="ma-1">CSS<v-avatar right class="blue darken-1">5</v-avatar></v-chip>
                <v-chip class="ma-1">JavaScript<v-avatar right class="blue">3</v-avatar></v-chip>
                <v-chip class="ma-1">VB / VBA<v-avatar right class="blue">3</v-avatar></v-chip>
                <v-chip class="ma-1">PHP<v-avatar right class="blue lighten-2">1</v-avatar></v-chip>
                <v-chip class="ma-1">Python<v-avatar right class="blue lighten-2">1</v-avatar></v-chip>
              </div>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>ライブラリ</v-list-item-title>
              <v-list-item-subtitle>C++</v-list-item-subtitle>
              <div>
                <v-chip class="ma-1">DirectX<v-avatar right class="blue darken-2">8</v-avatar></v-chip>
              </div>
              <v-list-item-subtitle>C#</v-list-item-subtitle>
              <div>
                <v-chip class="ma-1">WPF<v-avatar right class="blue">3</v-avatar></v-chip>
                <v-chip class="ma-1">Reactive<v-avatar right class="blue">3</v-avatar></v-chip>
                <v-chip class="ma-1">Entity Framework<v-avatar right class="blue">3</v-avatar></v-chip>
                <v-chip class="ma-1">Office Interop<v-avatar right class="blue lighten-1">2</v-avatar></v-chip>
              </div>
              <v-list-item-subtitle>Webフロントエンド</v-list-item-subtitle>
              <div>
                <v-chip class="ma-1">Vue.js<v-avatar right class="blue lighten-3">0.3</v-avatar></v-chip>
                <v-chip class="ma-1">Vuetify.js<v-avatar right class="blue lighten-3">0.2</v-avatar></v-chip>
                <v-chip class="ma-1">jQuery<v-avatar right class="blue lighten-3">0.1</v-avatar></v-chip>
                <v-chip class="ma-1">React.js<v-avatar right class="blue lighten-3">0.1</v-avatar></v-chip>
              </div>
              <v-list-item-subtitle>Webバックエンド</v-list-item-subtitle>
              <div>
                <v-chip class="ma-1">ASP.NET<v-avatar right class="blue lighten-3">0.1</v-avatar></v-chip>
                <v-chip class="ma-1">Laravel<v-avatar right class="blue lighten-5">0</v-avatar></v-chip>
              </div>
              <v-list-item-subtitle>その他</v-list-item-subtitle>
              <div>
                <v-chip class="ma-1">Open XML<v-avatar right class="blue lighten-3">0.2</v-avatar></v-chip>
              </div>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>DB系</v-list-item-title>
              <div>
                <v-chip class="ma-1">SQL Server<v-avatar right class="blue darken-1">5</v-avatar></v-chip>
                <v-chip class="ma-1">MS-Access<v-avatar right class="blue lighten-1">2</v-avatar></v-chip>
              </div>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>プラットフォーム / ソフト等</v-list-item-title>
              <div>
                <v-chip class="ma-1">Visual Studio<v-avatar right class="blue darken-2">10</v-avatar></v-chip>
                <v-chip class="ma-1">GitHub<v-avatar right class="blue darken-2">3</v-avatar></v-chip>
                <v-chip class="ma-1">VS Code<v-avatar right class="blue lighten-2">0.5</v-avatar></v-chip>
                <v-chip class="ma-1">Node.js<v-avatar right class="blue lighten-3">0.2</v-avatar></v-chip>
                <v-chip class="ma-1">Photoshop<v-avatar right class="blue darken-1">5</v-avatar></v-chip>
                <v-chip class="ma-1">Blender<v-avatar right class="blue">5</v-avatar></v-chip>
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>

    </v-row>

  </v-layout>
</template>

<script>
import router from "@/router.js";

export default {
  router: router,
  methods: {
    route(item) {
      router.push({
        name: item
      });
    }
  }
}
</script>
