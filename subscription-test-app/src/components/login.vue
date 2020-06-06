<template>
  <v-row no-gutters class="app d-flex justify-center" :style="{'align-items': 'center'}">
    <v-col cols="4" sm="12" md="5" xs="12">
      <v-card class="ma-5 pa-7">
        <span class="title font-weight-bol">Login</span>
        <ValidationObserver ref="observer" v-slot="{ validate, reset }">
          <form>
            <ValidationProvider v-slot="{ errors, validate }" name="E-mail" rules="required|email">
              <v-text-field
                :value="user.email"
                :error-messages="errors"
                label="E-mail"
                @change="validate && updateForm('email', $event)"
                required
              ></v-text-field>
            </ValidationProvider>

            <ValidationProvider
              v-slot="{ errors, validate }"
              name="password"
              rules="required"
            >
              <v-text-field
                :value="user.password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                :error-messages="errors"
                name="input-10-1"
                label="Password"
                @click:append="showPassword = !showPassword"
                @change="validate && updateForm('password', $event)"
              ></v-text-field>
            </ValidationProvider>

            <v-btn class="mr-4" @click="submit">Login</v-btn>
            <v-btn @click="clear">Reset</v-btn>
          </form>
        </ValidationObserver>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
import { required, email, max, min } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty"
});
extend("email", {
  ...email,
  message: "Email must be valid"
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    showPassword: false
  }),
  computed: {
    ...mapState({
      user: state => state.Login.user
    })
  },
  methods: {
    ...mapMutations(["setuser", "resetUser"]),
    ...mapActions(["login"]),

    submit() {
        this.$refs.observer.validate().then(isValid => {
        if(isValid === true) {
          this.login(this.user);
        }
        this.$refs.observer.reset();
      });
    },
    clear() {
      this.resetUser();
      this.$refs.observer.reset();
    },
    updateForm(property, value) {
      this.setuser({ property, value });
    }
  }
};
</script>
<style scoped>
.app {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
}
</style>