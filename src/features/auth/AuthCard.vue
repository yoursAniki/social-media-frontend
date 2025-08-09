<template>
  <q-card class="auth-card">
    <q-card-section class="auth-inputs">
      <q-input
        v-model="email"
        :error="!!emailProps.error"
        :error-message="emailProps.error"
        label="Email"
        outlined
      />

      <div class="column">
        <q-input
          v-model="password"
          :error="!!passwordProps.error"
          :error-message="passwordProps.error"
          label="Password"
          outlined
        />
        <span v-if="!isRegister" class="forget-password">Forget Password?</span>
      </div>
    </q-card-section>

    <q-card-actions>
      <q-btn class="auth-button" color="black" :label="isRegister ? 'Register' : 'Login'" />
      <p class="account-exists">
        Don't have an account?
        <router-link :to="isRegister ? '/login' : '/register'">Sign up</router-link>
      </p>
    </q-card-actions>
  </q-card>
</template>

<script lang="ts" setup>
import { useForm } from 'vee-validate';
import { loginSchema } from './model/auth.schema';

defineProps<{
  isRegister: boolean;
}>();

const { defineField } = useForm({
  validationSchema: loginSchema,
});

const [email, emailProps] = defineField('email', {
  props: (state) => ({
    error: state.errors[0],
  }),
});

const [password, passwordProps] = defineField('password', {
  props: (state) => ({
    error: state.errors[0],
  }),
});
</script>

<style scoped lang="scss">
.auth-card {
  padding: 46px 26px;
}

.auth-inputs {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.forget-password {
  font-size: 13px;
  align-self: flex-end;
}

.auth-button {
  width: 100%;
}

.account-exists {
  padding-top: 14px;
  margin: 0 auto;

  a {
    text-decoration: none;
    color: initial;
  }
}
</style>
