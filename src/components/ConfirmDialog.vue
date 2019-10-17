<template>
  <v-dialog v-model="dialog" :max-width="options.width">
    <v-card>
      <v-card-title>
        <span class="headline">{{title}}</span>
      </v-card-title>
      <v-card-text v-show="!!message">{{ message }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click.native="ok">OK</v-btn>
        <v-btn color="blue darken-1" text @click.native="cancel">キャンセル</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    resolve: null,
    reject: null,
    message: null,
    title: null,
    options: {
      color: "primary",
      width: 300
    }
  }),
  methods: {
    open(title, message, options) {
      this.dialog = true;
      this.title = title;
      this.message = message
      this.options = Object.assign(this.options, options);
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },

    ok() {
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
