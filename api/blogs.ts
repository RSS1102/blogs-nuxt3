//加载环境变量，地址
const __ENV__ = import.meta.env;
const ENV_VITE_URL = __ENV__.VITE_URL;

export const getBlogsTree = async () => {
  const { data, pending, error, refresh } = await useAsyncData(
    "getBlogsTree",
    () => $fetch(ENV_VITE_URL + "blogs/getBlogsTree")
  );
  return { data, pending, error, refresh };
};
