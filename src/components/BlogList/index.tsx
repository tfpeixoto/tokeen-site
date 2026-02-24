"use client";

import { client } from "@/sanity/client";
import Container from "../Container";
import CardPost from "../CardPost";
import { CardPostProps } from "../CardPost";
import Loading from "../Loading/Loading";
import { useEffect, useState } from "react";

export default function BlogList({
  initialPostsCount = 1,
}: {
  initialPostsCount?: number;
}) {
  const [posts, setPosts] = useState<CardPostProps[]>([]);
  const [visibleCount, setVisibleCount] = useState(initialPostsCount);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] | order(publishedAt desc){_id, title, slug, publishedAt, image {
        asset,
        hotspot,
        alt
      }}`,
      )
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section className="bloglist">
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.slice(0, visibleCount).map((post: CardPostProps) => (
                <CardPost key={post._id} {...post} />
              ))}
            </div>

            {visibleCount < posts.length && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={handleLoadMore}
                  className="px-6 py-3 bg-green text-white cursor-pointer rounded-lg hover:bg-green transition-colors"
                >
                  Carregar mais posts
                </button>
              </div>
            )}
          </>
        )}
      </Container>
    </section>
  );
}
