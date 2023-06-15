import React from "react";

import { GetStaticProps } from "next";
import { Post } from "@/lib/types";
import { getPosts } from "@/lib/fetchData";
import BlogList from "@/components/BlogList";
import { urlFor } from "@/lib/sanityClient";

type Props = {
  posts: Post[];
};

function index({ posts }: Props) {
  return (
    <div className="bg-primary p-2 justify-center items-center">
      <h1 className="text-4xl text-center font-heading text-white">Blog</h1>
      <BlogList posts={posts} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
};

export default index;
