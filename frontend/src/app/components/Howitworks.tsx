const HowItWorks = () => {
    return (
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            How It
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"> Works</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-xl font-bold">1</div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Upload Your Paper</h3>
              <p className="text-gray-400 text-center">Simply upload your research paper in PDF or Word format.</p>
            </div>
  
            {/* Step 2 */}
            <div className="relative">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-xl font-bold">2</div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">AI Processing</h3>
              <p className="text-gray-400 text-center">Our AI analyzes and extracts key information from your paper.</p>
            </div>
  
            {/* Step 3 */}
            <div className="relative">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-xl font-bold">3</div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Get Results</h3>
              <p className="text-gray-400 text-center">Download your presentations, podcasts, and visual content.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorks;
  