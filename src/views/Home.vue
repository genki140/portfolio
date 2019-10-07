<template>
  <div>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            このサイトについて
          </v-card-title>
          <v-card-text>
            <div>
              最近のWebフロントエンド技術の勉強ついでに作成した、仕事用の自己紹介サイトです。
            </div>
            <div>
              開発環境にはVSCode+Node.js+Github、ライブラリにはVue.js+Vuetify.jsを使用し、GithubPagesで公開しています。
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>


    <!--プロフィールカード-->
    <v-row>
      <v-col>
        <v-card>
          <!--
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
          >
          -->
            <v-row>
              <v-col class="px-10 py-6" cols=auto>
                <v-avatar size="300">
                  <v-img src="../assets/genki.png"></v-img>
                </v-avatar>
              </v-col>
              <v-col>
                <v-card-title>
                    自己紹介
                </v-card-title>

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
              </v-col>

            </v-row>

          </v-img>
        </v-card>
      </v-col>
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
              <v-list-item-subtitle>C++、DirectX</v-list-item-subtitle>
              <v-btn @click="route('history')">
                <v-icon>mdi-archive</v-icon>過去の作品
              </v-btn>
            </v-list-item-content>
          </v-list-item>

          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>CTI/CRMパッケージ製品。社内業務ソフト</v-list-item-title>
              <v-list-item-subtitle>C++、C#、Windows Server/Client、SQL Server</v-list-item-subtitle>
              <v-btn href="https://www.succ.co.jp">
                <v-icon>mdi-open-in-new</v-icon>サクシード株式会社
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
          あああ

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>C++系</v-list-item-title>
              <div>
                <v-chip class="ma-1">C++</v-chip>
                <v-chip class="ma-1">DirectX</v-chip>
              </div>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>C#系</v-list-item-title>
              <div>
                <v-chip class="ma-1">C#</v-chip>
                <v-chip class="ma-1">Reactive</v-chip>
                <v-chip class="ma-1">Entity Framework</v-chip>
                <v-chip class="ma-1">Office Interop</v-chip>
                <v-chip class="ma-1">WPF</v-chip>
              </div>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Web系</v-list-item-title>
              <div>
                <v-chip class="ma-1">HTML5</v-chip>
                <v-chip class="ma-1">CSS5</v-chip>
                <v-chip class="ma-1">JavaScript(ES6)</v-chip>
                <v-chip class="ma-1">php</v-chip>
                <v-chip class="ma-1">Python</v-chip>
                <v-chip class="ma-1">jQuery</v-chip>
                <v-chip class="ma-1">React.js</v-chip>
              </div>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>DB系</v-list-item-title>
              <div>
                <v-chip class="ma-1">SQL Server</v-chip>
                <v-chip class="ma-1">MS-Access</v-chip>
              </div>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>プラットフォーム系</v-list-item-title>
              <div>
              </div>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>その他</v-list-item-title>
              <div>
                <v-chip class="ma-1">Open XML</v-chip>
              </div>
            </v-list-item-content>
          </v-list-item>

        </v-card>
      </v-col>

    </v-row>

  </div>
</template>

<script>
import router from "@/router.js";

export default {
  router: router,
  name: 'Home',
  methods: {
    route(item) {
      router.push({
        name: item
      });
    }
  }
}
</script>
