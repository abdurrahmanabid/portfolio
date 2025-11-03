// @flow strict
import { personalData } from "@/utils/data/personal-data";
import { Metadata } from "next";

async function getBlog(slug) {
  const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();
  return data;
};

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const blog = await getBlog(slug);

  return {
    title: blog.title || "Blog Post",
    description: blog.description || blog.body_markdown?.substring(0, 160) || "Read this article by Abdur Rahman Abid",
    keywords: [
      ...blog.tag_list || [],
      "Abdur Rahman Abid",
      "Web Development",
      "MERN Stack",
      "Developer Blog"
    ],
    authors: [{ name: blog.user?.name || "Abdur Rahman Abid" }],
    openGraph: {
      title: blog.title || "Blog Post",
      description: blog.description || blog.body_markdown?.substring(0, 160) || "Read this article by Abdur Rahman Abid",
      type: "article",
      publishedTime: blog.published_at,
      authors: [blog.user?.name || "Abdur Rahman Abid"],
      tags: blog.tag_list || [],
      images: blog.cover_image ? [
        {
          url: blog.cover_image,
          width: 1200,
          height: 630,
          alt: blog.title || "Blog Post Image",
        }
      ] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title || "Blog Post",
      description: blog.description || blog.body_markdown?.substring(0, 160) || "Read this article by Abdur Rahman Abid",
      images: blog.cover_image ? [blog.cover_image] : [],
    },
    alternates: {
      canonical: blog.url || undefined,
    },
  };
}

async function BlogDetails({ params }) {
  const slug = params.slug;
  const blog = await getBlog(slug);

  return (
    <div>
      <article className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          {blog.description && (
            <p className="text-xl text-gray-300 mb-4">{blog.description}</p>
          )}
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tag_list?.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#1a1443] text-[#16f2b3] rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="text-sm text-gray-400">
            <time>{new Date(blog.published_at).toLocaleDateString()}</time>
            {" • "}
            <span>{blog.reading_time_minutes} min read</span>
          </div>
        </header>

        {blog.cover_image && (
          <div className="mb-8">
            <img
              src={blog.cover_image}
              alt={blog.title}
              className="w-full rounded-lg"
            />
          </div>
        )}

        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.body_html }}
        />
      </article>
    </div>
  );
};

export default BlogDetails;
