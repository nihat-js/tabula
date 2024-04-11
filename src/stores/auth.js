// store/auth.js
// import { server } from '@/main';
// import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


export const useAuthStore = defineStore('auth', () => {
  const router = useRouter();

  const user = ref({
    isLogged: false,
    "username": "nihat",
    "role": 'admin',
    "password": "nebilimne"
  })

  async function loginWithToken() {
    const response = await server.get("login-with-token", {
      withCredentials: true
    })
    if (response.status === 200) {
      user.email = response.data.email
      user.profileImage = response.data.profileImage
      user.isLogged = true
    }
  }

  async function login({ email, password }, router) {
    const response = await server.post("register", {
      email,
      password
    }, {
      withCredentials: true
    })
    if (response.status === 200) {
      router.push("/")
    }

  }

  async function register({ email, password }, router) {
    console.log("starting ", email, password)
    const response = await server.post("register", {
      email,
      password
    }, {
      withCredentials: true
    })
    if (response.status === 200) {
      router.push("/")
    }
  }

  function logout() {
    user.value = null;
    token.value = '';
  }

  return { user, login, register, logout, loginWithToken };
});
