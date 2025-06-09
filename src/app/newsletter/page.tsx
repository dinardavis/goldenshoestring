export default function Newsletter() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Join Our Newsletter</h1>
        <p className="text-xl text-gray-600">
          Get the latest travel tips, destination guides, and exclusive content
          delivered straight to your inbox.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Interests (Optional)
            </label>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="destinations"
                  name="interests"
                  value="destinations"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="destinations" className="ml-2 text-gray-700">
                  Destination Guides
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="tips"
                  name="interests"
                  value="tips"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="tips" className="ml-2 text-gray-700">
                  Travel Tips & Tricks
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="stories"
                  name="interests"
                  value="stories"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="stories" className="ml-2 text-gray-700">
                  Travel Stories
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="deals"
                  name="interests"
                  value="deals"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="deals" className="ml-2 text-gray-700">
                  Travel Deals & Discounts
                </label>
              </div>
            </div>
          </div>

          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                required
              />
              <span className="ml-2 text-sm text-gray-600">
                I agree to receive email newsletters from Golden Shoestrings.
                You can unsubscribe at any time.
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition-colors"
          >
            Subscribe to Newsletter
          </button>
        </form>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>
          We respect your privacy. Your information is safe and will never be
          shared with third parties.
        </p>
      </div>
    </div>
  );
}
