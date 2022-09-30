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
interface BlogsTree {
  id: number;
  title: string;
  children: Array<Blogs> | null;
}
