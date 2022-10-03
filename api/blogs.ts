//加载环境变量，地址
const __ENV__ = import.meta.env;
const ENV_VITE_URL = __ENV__.VITE_URL;

export const getBlogsTree = async () => {
  const { data } = await useAsyncData<BlogsTree[]>("blogsTree", () =>
    $fetch(ENV_VITE_URL + "blogs/getBlogsTree")
  );
  return data;
};

export const getBlogsContent = async (params: { title: string }) => {
  const { data } = await useAsyncData<BlogsTree[]>("blogsContent", () =>
    $fetch(ENV_VITE_URL + "blogs/getBlogsContent", {
      method: "POST",
      params: { ...params },
    })
  );
  return data;
};
