import React from "react";

const NewsLetter: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto my-12 px-4">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* Left Image */}
        <div className="h-[500px] lg:h-auto">
          <img
            src="/rambagh.jpg" // Replace with your actual image path
            alt="Rambagh Mahal"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form */}
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Request Us A Callback
          </h2>

          <form className="space-y-5">
            {/* Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-darkGreen"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-darkGreen"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-darkGreen"
              />
            </div>

            {/* Services Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Services
              </label>
              <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-darkGreen">
                <option>Select Services</option>
                <option>Event Planning</option>
                <option>Venue Booking</option>
                <option>Catering</option>
                <option>Photography</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                placeholder="Enter Message"
                rows={4}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-darkGreen"
              />
            </div>

            {/* Submit Button */}
            <div className="text-right">
              <button
                type="submit"
                className="bg-darkGreen text-white px-6 py-2 rounded-md hover:bg-darkGreen shadow-md"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
