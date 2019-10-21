<template>
  <div>
    <contactDialog ref="contactDialog"></contactDialog>
    <confirmDialog ref="confirmDialog"></confirmDialog>

    <v-card>
      <v-app-bar dark color="primary">
        <v-icon class="mr-7">mdi-contacts</v-icon>
        <v-toolbar-title class="mr-10">連絡先管理アプリ</v-toolbar-title>
        <v-text-field
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Search"
          v-model="search"
        ></v-text-field>
      </v-app-bar>

      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="contacts"
        show-select
        :search="search"
        :footer-props="{
          'items-per-page-text': '表示件数',
        }"
      >
        <!--新規作成ボタンの定義-->
        <template v-slot:header.action="{ header }">
          <v-btn @click="addItem" color="primary" fab x-small class="ma-2">
            <v-icon small>mdi-plus</v-icon>
          </v-btn>
        </template>

        <!--編集・削除ボタンの定義-->
        <template v-slot:item.action="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
          <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
        </template>

        <div slot="no-results" :value="true">該当データがありません</div>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import contactDialog from "@/components/ContactDialog.vue";
import confirmDialog from "@/components/ConfirmDialog.vue";

export default {
  components: {
    contactDialog,
    confirmDialog
  },
  methods: {
    async addItem() {
      let c = await this.$refs.contactDialog.open("新しい連絡先の作成", null);
      if (c) {
        //追加処理をここに記述します。
        c.id = Math.max.apply(null,this.contacts.map(o=>o.id))+1;
        this.contacts.unshift(c);
      }
      // else {
      //}
    },

    async deleteItem(item) {
      if (this.selected.some(v => v === item) == false) {
        this.selected = [item];
      }

      //contactsに存在しないものは除外します。
      this.selected = this.selected.filter(v=>this.contacts.some(v2=>v == v2));

      if (
        await this.$refs.confirmDialog.open(
          "連絡先の削除",
          `${this.selected.length}件の連絡先を削除します。続行しますか？`
        )
      ) {
        this.contacts = this.contacts.filter(
          v => this.selected.some(v2 => v == v2) == false
        );
      }
    },
    async editItem(item) {
      let c = await this.$refs.contactDialog.open("連絡先の編集", item);
      if (c) {
        this.contacts.splice(this.contacts.indexOf(item),1,c);
      }
    }
  },

  //watch: {
  //  selected: function(newValue, oldValue) {
  //    //this.isSelected = this.selected.length >= 1;
  //  }
  //},

  data: () => ({
    search: "",
    selected: [],

    headers: [
      { text: "名前", value: "name" },
      { text: "電話番号", value: "tel" },
      { text: "メールアドレス", value: "mail" },
      { text: "メモ", value: "memo" },
      { text: "", value: "action", sortable: false }
    ],

    contacts: [
      {
        id: 0,
        name: "田中 一郎",
        tel: "090-0000-1111",
        mail: "t.tanaka@mail.com"
      },
      {
        id: 1,
        name: "鈴木 次郎",
        tel: "080-2222-3333",
        mail: "j.suzuki@mail.com"
      },
      {
        id: 2,
        name: "山田 三郎",
        tel: "070-4444-5555",
        mail: "s.yamada@mail.com",
        memo: "○月○日 名刺交換"
      },
      {
        id: 3,
        name: "中村 史郎",
        tel: "090-0000-0001",
        mail: "j.suzuki@mail.com"
      },
      {
        id: 4,
        name: "中田 吾郎",
        tel: "090-0000-0002",
        mail: "j.suzuki@mail.com"
      },
      {
        id: 5,
        name: "高橋 六郎",
        tel: "090-0000-0003",
        mail: "j.suzuki@mail.com"
      },
      {
        id: 6,
        name: "佐藤 七郎",
        tel: "090-0000-0004",
        mail: "j.suzuki@mail.com"
      },
      {
        id: 7,
        name: "伊藤 八郎",
        tel: "090-0000-0005",
        mail: "j.suzuki@mail.com"
      },
      {
        id: 8,
        name: "渡辺 九郎",
        tel: "090-0000-0006",
        mail: "j.suzuki@mail.com"
      },
      {
        id: 9,
        name: "五十嵐 十兵衛",
        tel: "090-0000-0007",
        mail: "j.suzuki@mail.com"
      },
      {
        id: 10,
        name: "小林 太郎",
        tel: "090-0000-0008",
        mail: "j.suzuki@mail.com"
      },
      {
        id: 11,
        name: "佐々木 大和",
        tel: "090-0000-0009",
        mail: "j.suzuki@mail.com"
      },
      {
        id: 12,
        name: "木村 達也",
        tel: "090-0000-0010",
        mail: "j.suzuki@mail.com"
      },
      {
        id: 13,
        name: "加藤 和也",
        tel: "090-0000-0011",
        mail: "j.suzuki@mail.com"
      }
    ]
  })
};
</script>
