import { ref } from 'vue';
import instance from '@/services/api';

export default function useAxios() {
  const loading = ref(false);
  const error = ref(null);
  const data = ref(null);

  const exec = async (method, url) => {
    loading.value = true;
    try {
      const response = await instance[method](url);
      data.value = response.data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  }

  return { loading, error, data, exec };
}
