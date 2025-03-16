import React from "react";

export const getSinglePost = async (post_id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}`
  );
  const data = await res.json();
  return data;
};
export default async function SinglePage({ params }) {
  const p = await params;
  const post = await getSinglePost(p.id);
  return (
    <div>
      <p className="test-parpuse">SinglePost{JSON.stringify(post)}</p>
      <h1 className="text-3xl font-bold ">Title: {post.title}</h1>
      <p>Discription: {post.body}</p>
    </div>
  );
}
