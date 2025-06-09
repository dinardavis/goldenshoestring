import Link from "next/link";

export default function SignupCTA() {
  return (
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
  );
}
