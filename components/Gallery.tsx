import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from "framer-motion";
import { SocialIcon } from "react-social-icons";

interface InstagramPost {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  thumbnail_url: string;
  permalink: string;
  timestamp: string;
}

const Gallery = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [currentSet, setCurrentSet] = useState(0);
  const [postsPerSet, setPostsPerSet] = useState(6);

  useEffect(() => {
    async function fetchInstagramPosts() {
      try {
        // Replace YOUR_ACCESS_TOKEN with the access token you obtained in step 1
        const response = await axios.get(
          "https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=IGQVJYb0JDNC0teGRWVXY1bktncFJxOU0xeEphbWliSGlQM0J5ajVmOVVVLTVsZADlNQnVPY1ZA4YWxLSVNKN2xsQU5ZAQWFpOXJKNHFvb1YwdDdvQ1NGanRkTEtmQ0I3U3BUdWZAfcEhVeWpGd1RPRjdreAZDZD"
        );

        setPosts(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
      }
    }

    fetchInstagramPosts();
  }, []);

  useEffect(() => {
    const updatePostsPerSet = () => {
      if (window.innerWidth >= 1024) {
        setPostsPerSet(12);
      } else {
        setPostsPerSet(6);
      }
    };

    updatePostsPerSet();
    window.addEventListener("resize", updatePostsPerSet);

    return () => {
      window.removeEventListener("resize", updatePostsPerSet);
    };
  }, []);

  const handleNextSet = () => {
    setCurrentSet((prevSet) => prevSet + 1);
  };

  const handlePreviousSet = () => {
    setCurrentSet((prevSet) => prevSet - 1);
  };

  const hasNextSet = currentSet * postsPerSet + postsPerSet < posts.length;
  const hasPreviousSet = currentSet > 0;

  return (
    <div className="w-screen flex flex-col my-16 justify-center items-center bg-primary">
      <h1 className="text-6xl text-white my-2 mx-2 mb-10 font-heading md:text-7xl lg:text-8xl">
        GalLeRy
      </h1>
      <div className="w-screen p-4 flex flex-col justify-center items-center lg:p-6 relative">
        <div className="absolute w-full">
          {hasPreviousSet && (
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black rounded-r-full w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-end z-10 opacity-80 hover:opacity-100">
              <ArrowLeftIcon
                className="text-white h-10 w-10 cursor-pointer"
                onClick={handlePreviousSet}
              />
            </div>
          )}
          {hasNextSet && (
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black rounded-l-full w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-start z-10 opacity-80 hover:opacity-100">
              <ArrowRightIcon
                className="text-white h-10 w-10 cursor-pointer"
                onClick={handleNextSet}
              />
            </div>
          )}
        </div>

        <AnimatePresence>
          <motion.div
            key={currentSet}
            className="grid grid-cols-2 w-full lg:grid-cols-4 relative z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {posts
              .slice(
                currentSet * postsPerSet,
                currentSet * postsPerSet + postsPerSet
              )
              .map((post, key) => (
                <Link
                  href={post.permalink}
                  target="_blank"
                  rel="noreferrer"
                  key={key}
                >
                  <div className="relative w-full h-[220px] md:h-[250px] lg:h-[300px]">
                    <Image
                      src={
                        post.media_type === "VIDEO"
                          ? post.thumbnail_url
                          : post.media_url
                      }
                      alt={post.caption || "Instagram Post"}
                      fill
                    />
                  </div>
                </Link>
              ))}
          </motion.div>
        </AnimatePresence>
        <div className="custom-button rounded-full mt-10">
          <SocialIcon
            url="https://www.instagram.com/lionsheadrestaurantbrewery/"
            bgColor="transparent"
            fgColor="black"
            className="hover:fill-black h-20 w-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
