import React from "react";
import { Post } from "@/lib/types";
import Image from "next/image";
import { urlFor } from "@/lib/sanityClient";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  console.log(posts);
  return (
    <div>
      <hr className="border-yellow mb-10" />

      <div>
        {posts.map((post) => (
          <div key={post._id} className="flex flex-col group">
            <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
              <Image
                className="object-cover object-left lg:object-center"
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
              />
              <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                <div>
                  <p className="font-heading">{post.title}</p>
                  <p>
                    {new Date(post._createdAt).toLocaleDateString("en-EU", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 item-center">
                  {post.categories.map((category) => (
                    <div className="bg-yellow text-center font-bebas text-black px-3 py-1 rounded-full text-sm">
                      <p>{category.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 flex-1">
              <p className="underline text-lg font-std font-bold text-white">
                {post.title}
              </p>
              <p className="line-clamp-2 text-gray-300">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
