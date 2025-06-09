import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "./blog/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-6 leading-snug">
              Welcome to Golden Shoestrings
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              Whether you're sipping champagne in the sky or scoring street food for $2 — this is your home for stylish, smart travel. Big budgets, small wallets, or a little bit of both? You’re in the right place.
            </p>
            <Link
              href="/blog"
              className="inline-block bg-[#DBA858] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#c99747] transition-colors"
            >
              Start Exploring
            </Link>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/split_images/GS_FeatureSplit_Bangkok.png"
              alt="Golden Shoestrings Travel"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Slim Banner Newsletter CTA */}
      <section className="bg-[#F0ECE6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-[100px] flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-gray-700 font-medium text-center sm:text-left">
            Join 500+ Golden Shoestring-ers<br></br> getting smart travel tips each month.
          </p>
          <form className="flex gap-3 w-full sm:w-auto justify-center sm:justify-end">
            <input
              type="email"
              placeholder="Your email"
              className="placeholder-gray-400 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#30B8B2] w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-[#DBA858] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#c99747] transition-colors"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>

      <section className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header aligned left inside container */}
    <h2 className="text-2xl font-bold text-gray-800 mb-8 border-b-2 border-[#DBA858] w-fit">
      Just Landed: The Secret to Bangkok
    </h2>

    {/* Grid with balanced margins */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      {/* Left Column - Intro with right padding */}
      <div className="max-w-[400px] pr-8">
        <p className="text-gray-600 text-lg">
          Luxe or low-cost, this city <em>slaps</em> either way. Check out our side-by-side Golden vs. Shoestring itinerary for Bangkok — spas, street food, hidden jazz bars, and one sneaky canal lizard.
        </p>
      </div>

      {/* Right Column - Image, excerpt, link with left padding */}
      <div className="max-w-[400px] pl-8 flex flex-col items-center text-center lg:text-left lg:items-start">
        <div className="relative w-full mb-6">
          <Image
            src={blogPosts[0].imageUrl}
            alt={blogPosts[0].title}
            width={400}
            height={300}
            className="object-contain"
          />
        </div>
        <p className="text-gray-600 text-lg mb-4">
          {blogPosts[0].excerpt}
        </p>
        <Link
          href={`/blog/${blogPosts[0].slug}`}
          className="text-[#DBA858] font-medium hover:text-[#c99747] transition-colors"
        >
          Let’s Go →
        </Link>
      </div>
    </div>
  </div>
</section>


      {/* Blog Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What’s New</h2>
          <p className="text-gray-600 text-lg">
            Use our insightful guides and smart ideas to inspire your next adventure!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Newsletter Card (Styled Like Blog Tile) */}
        <div className="bg-[#DBA858] rounded-lg shadow-sm overflow-hidden p-8 flex flex-col items-center justify-center text-center min-h-[320px]">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Travel smart. Stay inspired.
            </h3>
            <p className="text-gray-700 mb-6 max-w-sm">
              Get monthly gems straight to your inbox — destinations, tips, deals, and maybe a spicy story or two.
            </p>
            <form className="flex flex-col gap-3 w-full max-w-sm">
            <input
            type="email"
            placeholder="Your email"
            className="placeholder-gray-400 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2AA8A3] w-full"
          />

              <button
                type="submit"
                className="bg-[#DBA858] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#c99747] transition-colors w-full"
              >
                Join 500+ Goldenshoestring-ers Today
              </button>
            </form>
          </div>


          {/* Blog Posts */}
          {blogPosts.reverse().map((post) => (
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
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-end mt-12 gap-4">
          <button className="text-gray-600 hover:text-gray-800">
            « Previous
          </button>
          <button className="text-[#DBA858] hover:text-[#c99747]">
            Next »
          </button>
        </div>
      </section>
    </main>
  );
}
