import Image from "next/image";

export default function About() {
  return (
    <main className="bg-[#FAF7F2] text-gray-800">
      {/* Bio Section (Top) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Bio Text */}
        <div className="space-y-6 order-2 lg:order-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            From Hiroshima to Here
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            I was born in Hiroshima and took my first steps in an airport terminal. Since then, it’s been a life defined by motion, curiosity, and two (yes, two) mid-career retirements — all so I could chase what matters: connection, exploration, and unforgettable stories.
          </p>
          <p className="text-lg text-gray-700">
            I started <span className="text-[#DBA858] font-semibold">Golden Shoestrings</span> because I believe amazing travel experiences shouldn’t be limited by your wallet. Whether you’re toasting at the Mandarin Oriental or slurping noodles by the canal, I want you to know: there’s always a way to travel beautifully.
          </p>
          <p className="text-md text-gray-600 italic">
            This site is my open suitcase — packed with tips, stories, and inspiration to help you travel smart and live well.
          </p>
        </div>

        {/* Image Montage */}
        <div className="grid grid-cols-2 gap-4 h-[450px] order-1 lg:order-2">
          <div className="relative row-span-2 rounded-lg overflow-hidden shadow">
            <Image
              src="/images/me.jpg"
              alt="Me"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden shadow">
            <Image
              src="/images/blossoms.png"
              alt="Blossoms"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden shadow">
            <Image
              src="/images/sushi.jpg"
              alt="Sushi"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission + Signup Section (Bottom) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Centered Header */}
        <h2 className="text-3xl font-bold mb-10 text-center">
          What Golden Shoestrings Is All About
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image Column (Left) */}
          <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/about_image.JPEG"
              alt="View of Japan"
              fill
              className="object-cover"
            />
          </div>

          {/* Content + Newsletter (Right) */}
          <div className="flex flex-col justify-start h-full">
            {/* Philosophy Boxes */}
            <div className="flex flex-col gap-4 lg:flex-row mb-6">
              <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition w-full text-center">
                <h3 className="text-xl font-semibold text-[#DBA858] mb-1">Inspire</h3>
                <p className="text-gray-600 text-sm">
                  Real stories from real journeys. Big feels, small budgets, and everything in between.
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition w-full text-center">
                <h3 className="text-xl font-semibold text-[#DBA858] mb-1">Guide</h3>
                <p className="text-gray-600 text-sm">
                  No-fluff advice, destination breakdowns, and hacks to stretch your dollar — without cutting corners.
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition w-full text-center">
                <h3 className="text-xl font-semibold text-[#DBA858] mb-1">Celebrate</h3>
                <p className="text-gray-600 text-sm">
                  Luxe or low-cost, if it makes your heart skip — it belongs on the itinerary.
                </p>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-[#F3E9D2] w-full p-6 rounded-xl shadow-md text-center mt-0">
              <h3 className="text-xl font-semibold mb-2">Travel smart. Stay inspired.</h3>
              <p className="text-gray-700 mb-4 text-sm max-w-md mx-auto">
                Get monthly gems in your inbox — destinations, tips, deals, and maybe a spicy story 🌶️.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-lg border border-gray-300 flex-1 focus:outline-none focus:ring-2 focus:ring-[#30B8B2]"
                />
                <button
                  type="submit"
                  className="bg-[#DBA858] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#c99747] transition"
                >
                  Sign Me Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
