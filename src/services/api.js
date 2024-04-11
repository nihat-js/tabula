import axios from "axios"

const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
})

instance.interceptors.response.use((response) => {
  // Check if the response includes an Authorization header
  const authHeader = response.headers['authorization'];
  if (authHeader) {
    instance.defaults.headers.common['authorization'] = authHeader;
}

  return response;
}, (error) => {
  // Handle response errors
  return Promise.reject(error);
}
)

export default instance