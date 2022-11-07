//加载环境变量，地址
const __ENV__ = import.meta.env;
const ENV_VITE_URL = __ENV__.VITE_URL;

export const getBlogsTree = async () => {
  const { data } = await useAsyncData<response<BlogsTreeType[]>>(
    "blogsTree",
    () => $fetch(ENV_VITE_URL + "blogs/getBlogsTree")
  );
  return data;
};
export const getBlogsContent = async (params: { title: string }) => {
  const { data, refresh } = await useAsyncData<response<BlogsContentType>>(
    "blogsContent" + params.title,
    () => $fetch(ENV_VITE_URL + "blogs/getBlogsContent", { params })
  );
  return { data, refresh };
};
