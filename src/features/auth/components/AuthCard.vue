<template>
  <q-card class="auth-card">
    <q-card-section>
      <h1 class="auth-title">{{ isRegister ? $t('auth.register') : $t('auth.login') }}</h1>

      <q-form class="auth-form">
        <q-input
          v-model="email"
          :error="!!emailProps.error"
          :error-message="emailProps.error"
          type="email"
          :label="$t('auth.email')"
          outlined
        />

        <q-input
          v-if="isRegister"
          v-model="name"
          :error="!!nameProps.error"
          :error-message="nameProps.error"
          type="text"
          :label="$t('auth.name')"
          outlined
        />

        <div class="column">
          <q-input
            v-model="password"
            :error="!!passwordProps.error"
            :error-message="passwordProps.error"
            type="password"
            :label="$t('auth.password')"
            outlined
          />
          <span v-if="!isRegister" class="forget-password">{{ $t('auth.forgetPassword') }}</span>
        </div>

        <q-input
          v-if="isRegister"
          v-model="confirmPassword"
          :error="!!confirmPasswordProps.error"
          :error-message="confirmPasswordProps.error"
          type="password"
          :label="$t('auth.confirmPassword')"
          outlined
        />

        <q-btn
          @click="onSubmit"
          :loading="authState.loading"
          class="auth-button"
          color="black"
          :label="isRegister ? $t('auth.register') : $t('auth.login')"
        />

        <p class="account-exists">
          {{ isRegister ? $t('auth.accountExists') : $t('auth.accountNotExists') }}
          <router-link :to="{ name: isRegister ? 'login' : 'register' }">{{
            isRegister ? $t('auth.login') : $t('auth.register')
          }}</router-link>
        </p>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useUserStore } from 'src/entities/user/model/userStore';
import { useForm } from 'vee-validate';
import { loginSchema, registerSchema } from '../model/auth.schema';
import { loginUser } from 'src/features/auth/login/model/login.api';
import { registerUser } from 'src/features/auth/register/model/register.api';
import type { IUser } from 'src/entities/user/model/user.types';
import { useRedirect } from 'src/shared/utils/redirect';
import { checkError } from 'src/shared/utils/errorCheck';
import { errorNotify, successNotify } from 'src/shared/config/notifyItems';
import { useI18n } from 'vue-i18n';
import { onKeyStroke } from '@vueuse/core';

const { redirectAfterAuth } = useRedirect();
const { t } = useI18n();
const userStore = useUserStore();

const props = defineProps<{
  isRegister: boolean;
}>();

const chooseSchema = () => {
  if (props.isRegister) {
    return registerSchema;
  }
  return loginSchema;
};

const { defineField, handleSubmit } = useForm({
  validationSchema: chooseSchema(),
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

const [confirmPassword, confirmPasswordProps] = defineField('confirmPassword', {
  props: (state) => ({
    error: state.errors[0],
  }),
});

const [name, nameProps] = defineField('name', {
  props: (state) => ({
    error: state.errors[0],
  }),
});

const authState = reactive({
  loading: false,
  error: null as string | null,
});

const onLogin = async () => {
  try {
    authState.loading = true;
    authState.error = null;

    const response = await loginUser({
      email: email.value,
      password: password.value,
    });

    const user: IUser = {
      displayName: response.data.user.displayName,
      isTwoFactorEnabled: response.data.user.isTwoFactorEnabled,
      email: response.data.user.email,
    };

    userStore.setUser(user);

    await redirectAfterAuth();

    console.log(response);
  } catch (error) {
    console.log(error);

    const resultError = checkError(error);

    errorNotify(resultError);
  } finally {
    authState.loading = false;
  }
};

const onRegister = async () => {
  try {
    authState.loading = true;
    authState.error = null;

    const response = await registerUser({
      email: email.value,
      name: name.value,
      password: password.value,
      passwordRepeat: confirmPassword.value,
    });

    console.log(response);

    successNotify(t('auth.mailWasSent'));
  } catch (error) {
    console.log(error);
    const resultError = checkError(error);

    errorNotify(resultError);
  } finally {
    authState.loading = false;
  }
};

const onSubmit = handleSubmit(async () => {
  if (props.isRegister) {
    await onRegister();
  } else {
    await onLogin();
  }
});

onKeyStroke('Enter', () => {
  console.log('dfdf');
  void onSubmit();
});
</script>

<style scoped lang="scss">
.auth-card {
  padding: 26px 36px;
  width: 450px;

  @media (max-width: 768px) {
    width: 85%;
  }

  @media (max-width: 425px) {
    width: 100%;
    height: 100vh;

    padding: 16px 16px;
  }
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.auth-title {
  font-size: 30px;
  font-weight: 500;
  margin: 0;
  padding-bottom: 20px;
  line-height: 50px;
  text-align: center;
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
  color: $grey-7;

  a {
    text-decoration: none;
    color: $black;
  }
}
</style>
