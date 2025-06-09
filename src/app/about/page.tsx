import Image from "next/image";
import SignupCTA from "@/components/SignupCTA";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about_image.JPG"
            alt="About Us Hero"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black opacity-40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Passionate travelers sharing stories and inspiring adventures
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            At Golden Shoestrings, we believe that travel has the power to
            transform lives, broaden perspectives, and create lasting
            connections. Our mission is to inspire and empower people to explore
            the world, embrace new cultures, and create unforgettable memories.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-3">Inspire</h3>
              <p className="text-gray-600">
                Share authentic travel stories and experiences that inspire
                others to explore
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Guide</h3>
              <p className="text-gray-600">
                Provide practical travel tips and destination guides for fellow
                adventurers
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Connect</h3>
              <p className="text-gray-600">
                Build a community of passionate travelers who share their
                stories and advice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <SignupCTA />
    </div>
  );
}
