import Link from "next/link";
import style from "./post.module.css";
export const getPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

export default async function Posts() {
  const posts = await getPost();
  return (
    <div>
      {posts.map((post) => {
        return (
          <div className="p-4" key={post.id}>
            <h1 className="text-3xl font-bold"> {post.title}</h1>
            <p>{post.body}</p>
            <Link href={`/Posts/${post.id}`}>
              <p className={`${style["post-test"]}`}>Details</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
