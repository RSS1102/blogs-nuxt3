interface Blogs {
  id: number;
  title: string;
}

interface MenuChild {
  key: string;
  label: string;
  children: Array<{
    key: string;
    label: string;
  }>;
}

// tree
interface BlogsTreeType {
  id: number;
  title: string;
  children: Array<Blogs> | null;
}

// BlogsContent
interface BlogsContentType {
  content: string;
  createTime: string;
  id: number;
  introduction: string;
  isShow: boolean;
  likedNum: number;
  parent: number;
  title: string;
  updateTime: string;
  visitedNum: number;
}
