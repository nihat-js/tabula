// store/auth.js
import instance from "@/services/api";
import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";


export const useAuthStore = defineStore("auth", () => {

  const user = ref({
    // accessToken: null,
    email: null,
    // profileImage: null,
    // role: null,
    // username: null,
  })
  function isAuthenticated() {
    return user.email ? true : false
  }

  function setUser(data) {
    user.email = data.email
    user.profileImage = data.profileImage
  }

  async function refreshToken() {
    const response = await instance.post("auth/refresh-token", {
      token: true,
    },
      {
        withCredentials: true
      })
    if (response.status === 200) {
      setUser(response.data.data)
    }
  }


  async function login({ email, password }, router) {
    const response = await instance.post("auth/login", {
      email,
      password
    }, {
      withCredentials: true
    })
    if (response.status === 200) {
      setUser(response.data)
      router.push("/")
    }

  }

  async function register({ email, password }, router) {
    // console.log("starting ", email, password)
    const response = await instance.post("auth/register", {
      email,
      password
    }, {
      withCredentials: true
    })
    if (response.status === 201) {
      setUser(response.data.data)
      router.push("/")
    }
  }

  function logout() {
    setUser({})
  }

  return { user, login, register, logout, refreshToken, isAuthenticated };
});
