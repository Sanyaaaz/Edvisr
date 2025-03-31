// components/Features.jsx
export default function Features() {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Why Choose <span className="text-purple-400">Edvisr</span>?
          </h2>
          <p className="text-lg text-gray-400">
            We make research easy, fast, and fun for everyone.
          </p>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="bg-white/5 p-8 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-shadow">
            <div className="mb-4">
              <svg
                className="h-10 w-10 text-purple-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2">AI-Powered Conversion</h3>
            <p className="text-gray-400">
              Convert complex research papers into simple, engaging content like
              slides and podcasts with one click.
            </p>
          </div>
  
          {/* Feature 2 */}
          <div className="bg-white/5 p-8 rounded-2xl shadow-lg hover:shadow-pink-500/30 transition-shadow">
            <div className="mb-4">
              <svg
                className="h-10 w-10 text-pink-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Multi-Format Output</h3>
            <p className="text-gray-400">
              Get your research presented as slides, summaries, infographics, or
              even podcasts!
            </p>
          </div>
  
          {/* Feature 3 */}
          <div className="bg-white/5 p-8 rounded-2xl shadow-lg hover:shadow-blue-500/30 transition-shadow">
            <div className="mb-4">
              <svg
                className="h-10 w-10 text-blue-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Save Time</h3>
            <p className="text-gray-400">
              No more hours of summarizing and formatting. Let Edvisr handle it
              while you focus on learning and discovery.
            </p>
          </div>
        </div>
      </div>
    );
  }
  