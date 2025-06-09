import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "./blog/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Welcome to Golden Shoestrings{" "}
              <span className="text-gray-600">
                — the travel blog that compares unforgettable experiences for
                every budget
              </span>
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Whether you're looking to splurge or save, we bring you curated
              tips, hidden gems, and practical hacks to help pack your next
              adventure with amazing memories that will last a lifetime.
            </p>
            <Link
              href="/blog"
              className="inline-block bg-[#DBA858] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#c99747] transition-colors"
            >
              Read Now
            </Link>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={blogPosts[0].imageUrl}
              alt="Golden Shoestrings Travel"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Featured Article Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-[#DBA858]">
              Featured Article • 5 min read
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={blogPosts[0].imageUrl}
                alt={blogPosts[0].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <h1 className="absolute bottom-8 left-8 text-6xl font-bold text-white">
                BANGKOK
              </h1>
            </div>
            <div>
              <p className="text-gray-600 text-lg mb-6">
                {blogPosts[0].excerpt}
              </p>
              <Link
                href={`/blog/${blogPosts[0].slug}`}
                className="text-[#DBA858] font-medium hover:text-[#c99747] transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-[#FAF7F2] py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-medium text-center text-gray-800 mb-6">
              Join the newsletter to receive more travel tips and info!
            </h2>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#30B8B2]"
              />
              <button
                type="submit"
                className="bg-[#DBA858] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#c99747] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Recent Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[#DBA858] hover:text-[#30B8B2] transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[#DBA858] font-medium hover:text-[#c99747] transition-colors"
                >
                  Read More...
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-end mt-8 gap-4">
          <button className="text-gray-600 hover:text-gray-800">
            « Previous
          </button>
          <button className="text-[#DBA858] hover:text-[#c99747]">
            Next »
          </button>
        </div>
      </div>
    </main>
  );
}
