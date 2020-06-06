<template>
  <v-row no-gutters class="app d-flex justify-center" :style="{'align-items': 'center'}">
    <v-col cols="4" sm="12" md="5" xs="12">
      <v-card class="ma-5 pa-7">
        <span class="title font-weight-bol">Sign Up</span>
        <ValidationObserver ref="observer" v-slot="{ validate, reset }">
          <form>
            <ValidationProvider v-slot="{ errors }" name="First Name" rules="required|max:20">
              <v-text-field
                :value="newUser.firstName"
                :counter="20"
                :error-messages="errors"
                label="First Name"
                required
                @change="validate && updateForm('firstName', $event)"
              ></v-text-field>
            </ValidationProvider>

            <v-text-field
              :value="newUser.lastName"
              :counter="20"
              label="Last Name"
              @change="updateForm('lastName', $event)"
            ></v-text-field>

            <ValidationProvider v-slot="{ errors, validate }" name="User Type" rules="required">
              <v-select
                :value="newUser.userType"
                :items="userTypes"
                item-text="title"
                item-value="value"
                :error-messages="errors"
                label="User Type"
                data-vv-name="select"
                @change="validate && updateForm('userType', $event)"
                required
              ></v-select>
            </ValidationProvider>

            <ValidationProvider v-slot="{ errors, validate }" name="E-mail" rules="required|email">
              <v-text-field
                :value="newUser.email"
                :error-messages="errors"
                label="E-mail"
                @change="validate && updateForm('email', $event)"
                required
              ></v-text-field>
            </ValidationProvider>

            <ValidationProvider
              v-slot="{ errors, validate }"
              name="password"
              rules="required|min:8"
            >
              <v-text-field
                :value="newUser.password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                :error-messages="errors"
                name="input-10-1"
                label="Password"
                hint="At least 8 characters"
                counter
                @click:append="showPassword = !showPassword"
                @change="validate && updateForm('password', $event)"
              ></v-text-field>
            </ValidationProvider>

            <v-btn class="mr-4" @click="submit">Create Account</v-btn>
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
extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters"
});
extend("min", {
  ...min,
  message: "{_field_} should be atlease 8 characters"
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
      newUser: state => state.Signup.newUser,
      userTypes: state => state.Signup.userTypes
    })
  },
  methods: {
    ...mapMutations(["setUserValue", "resetNewUserValues"]),
    ...mapActions(["createNewUser"]),
    submit() {
      this.$refs.observer.validate().then(isValid => {
        if (isValid === true) {
          this.createNewUser(this.newUser);
        }
        this.$refs.observer.reset();
      });
    },
    clear() {
      this.resetNewUserValues();
      this.$refs.observer.reset();
    },
    updateForm(property, value) {
      this.setUserValue({ property, value });
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