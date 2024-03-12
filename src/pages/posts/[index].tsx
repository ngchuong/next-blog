import { useRouter } from "next/router";
import { useEffect } from "react";

const Post = () => {
  const router = useRouter();
  console.log(router.query.index);

  useEffect(() => {
    // TODO: call api get post
  }, []);
  
  return <div></div>;
};

export default Post;
