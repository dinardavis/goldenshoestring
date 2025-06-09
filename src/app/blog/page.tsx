import Link from "next/link";
import Image from "next/image";

// This would typically come from a CMS or API
export const blogPosts = [
  {
    id: 1,
    title: "Issue #1: Bangkok - Golden Traveler vs. Travel Shoestringer",
    excerpt:
      "Welcome Golden Shoestringers! In this addition, we're going to explore one of my favorite cities in the world. It's a place that truly has something for everyone, and even after several visits, you may not have begun to scratch...",
    imageUrl: "/images/header_images/GS_CityHeader_Bangkok.png",
    slug: "bangkok-travel-guide",
  },
  {
    id: 2,
    title: "Issue #2: Paris - Golden Traveler vs. Travel Shoestringer",
    excerpt:
      "Welcome back, Golden Shoestringers! This week, we're exploring what many consider to be the most romantic city in the world. A place where art, history, and culture blend seamlessly with modern luxury and timeless...",
    imageUrl: "/images/header_images/GS_CityHeader_Paris.png",
    slug: "paris-travel-guide",
  },
  {
    id: 3,
    title: "Issue #3: Los Angeles - Golden Traveler vs. Travel Shoestringer",
    excerpt:
      "Welcome back, Golden Shoestringers! This week, we're diving into a city that's as diverse as its population - a sprawling metropolis where dreams are made and broken daily, where you can surf in the morning and ski...",
    imageUrl: "/images/header_images/GS_CityHeader_LosAngeles.png",
    slug: "los-angeles-travel-guide",
  },
  {
    id: 4,
    title:
      "Issue #4: Ho Chi Minh City - Golden Traveler vs. Travel Shoestringer",
    excerpt:
      "Welcome back, Golden Shoestringers! This week, we're diving into a city that never seems to sleep - a place where tradition meets modernity at every corner, where the smell of phở mingles with the aroma of fresh...",
    imageUrl: "/images/header_images/GS_CityHeader_HoChiMinhCity.png",
    slug: "ho-chi-minh-city-guide",
  },
  {
    id: 5,
    title: "Issue #5: Lisbon - Golden Traveler vs. Travel Shoestringer",
    excerpt:
      "Welcome back, Golden Shoestringers! For our final issue of the year, we're exploring a city that's captured my heart like few others. A place where ancient trams climb steep hills, where the smell of grilled...",
    imageUrl: "/images/header_images/GS_CityHeader_Lisbon.png",
    slug: "lisbon-travel-guide",
  },
];

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8 text-[#30B8B2]">Travel Stories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                className="text-[#DBA858] hover:text-[#c99747] transition-colors font-medium"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
