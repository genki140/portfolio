<template>
  <v-dialog v-model="dialog" :width="options.width" persistent>
    <v-card>
      <v-card-title>
        <span class="headline">{{title}}</span>
      </v-card-title>
      <v-card-text>
        <v-divider></v-divider>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-text-field label="名前*" v-model="contact.name" required :rules="[rules.required, rules.max16]"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field label="電話番号" v-model="contact.tel" hint></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="住所" v-model="contact.address"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="メールアドレス" v-model="contact.mail"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea label="メモ" v-model="contact.memo"></v-textarea>
            </v-col>
          </v-row>
        </v-container>
        <small>*は必須項目です</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click.native="save">保存</v-btn>
        <v-btn color="blue darken-1" text @click.native="cancel">キャンセル</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({

    contact:
    {
      name: "",
      tel:"",
      address:"",
      memo:"",
    },

    dialog: false,
    resolve: null,
    reject: null,
    //message: null,
    title: null,
    options: {
      color: "primary",
      width: 500
    },
    rules:{
      required: v=>!!v || '必須項目です',
      max16: v => v.length < 16 || '16文字以内で入力してください',
    },
  }),
  methods: {
    open(title, item) {
      this.dialog = true;
      this.title = title;

      if(item==null)
      {
        this.contact.name="";
        this.contact.tel="";
        this.contact.address="";
        this.contact.mail="";
        this.contact.memo="";
      }
      else
      {
        this.contact = Object.assign({},item);
      }
      
      //this.message = message
      //this.options = Object.assign(this.options, options);
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },

    save() {
      this.resolve(true);
      this.dialog = false;
    },
    cancel() {
      this.resolve(false);
      this.dialog = false;
    }
  }
};
</script>
