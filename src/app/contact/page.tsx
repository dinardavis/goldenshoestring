"use client";

import Image from "next/image";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="bg-[#FAF7F2] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Let's Chat ✈️
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Got questions, ideas, or want to collaborate? Whether you're planning your next escape or just want to say hey — we’re all ears (and inbox).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form & Info - now on the left */}
          <div className="bg-white p-8 rounded-2xl shadow-sm space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FaEnvelope className="text-[#DBA858] w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">hello@goldenshoestrings.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaPhone className="text-[#DBA858] w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-[#DBA858] w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Location</h3>
                  <p className="text-gray-600">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <form className="space-y-4 pt-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:ring-[#30B8B2] focus:border-[#30B8B2]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:ring-[#30B8B2] focus:border-[#30B8B2]"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:ring-[#30B8B2] focus:border-[#30B8B2]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:ring-[#30B8B2] focus:border-[#30B8B2]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#DBA858] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#c99747] transition-colors"
              >
                Drop a Line
              </button>
            </form>
          </div>

         {/* Image - right column */}
          <div className="flex justify-center items-start">
            <div className="relative w-full max-w-sm h-[500px] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/contact_image.JPG"
                alt="Heading to the airport"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
