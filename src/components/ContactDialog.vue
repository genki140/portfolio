<template>
  <v-dialog v-model="dialog" :width="options.width" persistent>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-card>
        <v-card-title>
          <span class="headline">{{title}}</span>
        </v-card-title>
        <v-card-text>
          <v-divider></v-divider>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="名前*"
                  v-model.trim="contact.name"
                  required
                  :rules="[rules.required, rules.max10]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="電話番号" v-model.trim="contact.tel" :rules="[rules.max16, rules.tel]"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="住所" v-model.trim="contact.address" :rules="[rules.max100]"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="メールアドレス" v-model.trim="contact.mail" :rules="[rules.max256, rules.email]"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea label="メモ" v-model="contact.memo" :rules="[rules.max200]" counter=200></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="save" :disabled="!valid">保存</v-btn>
          <v-btn color="blue darken-1" text @click="cancel">キャンセル</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    contact: {
      name: "",
      tel: "",
      address: "",
      mail: "",
      memo: "",
    },

    valid: true,
    dialog: false,
    resolve: null,
    reject: null,
    //message: null,
    title: null,
    options: {
      color: "primary",
      width: 500
    },
    rules: {
      required: v => !!v || "必須項目です",
      max10: v => !v || v.length <= 10 || "10文字以内で入力してください",
      max16: v => !v || v.length <= 16 || "16文字以内で入力してください",
      max50: v => !v || v.length <= 50 || "50文字以内で入力してください",
      max100: v => !v || v.length <= 100 || "100文字以内で入力してください",
      max200: v => !v || v.length <= 200 || "200文字以内で入力してください",
      max256: v => !v || v.length <= 256 || "256文字以内で入力してください",
      email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return !value || pattern.test(value) || 'メールアドレスではありません';
      }, 
      tel: value => {
        if(!value){ return true; }
        let pattern;
        if (value.indexOf('-') ===  -1){
          // ハイフン無し
          pattern = /^\d{10}$|^\d{11}$/
        }else{
          // ハイフンあり
          pattern = /^\d{2,5}-\d{1,4}-\d{4}$/;
        }
        return pattern.test(value) || '電話番号ではありません';
      }      
    }
  }),

  methods: {
    open(title, item) {
      this.dialog = true;
      this.title = title;

      if (item == null) {
        //this.contact.name = "";
        //this.contact.tel = "";
        //this.contact.address = "";
        //this.contact.mail = "";
        //this.contact.memo = "";
      } else {
        this.contact = Object.assign({}, item);
      }

      //this.$refs.resetValidation();

      //this.message = message
      //this.options = Object.assign(this.options, options);
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },
    save() {
      if(this.$refs.form.validate()){
        this.resolve(Object.assign({},this.contact));
        this.dialog = false;
        this.$refs.form.reset();
      }
    },
    cancel() {
      this.resolve(null);
      this.dialog = false;
      this.$refs.form.reset();
    },
    clear() {
      this.$refs.form.reset();
    }
  },

/*  watch: {
    dialog: function (val) {
      if(v == true)
      {
        this.$refs.form.resetValidation();
      }
      else
      {
        this.$refs.form.reset();
      }
    },
  }
  */
};
</script>
