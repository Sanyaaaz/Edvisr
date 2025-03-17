import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex min-h-screen bg-black ">
      {/* Sidebar */}
      <div className="w-64 bg-purple-900 p-6 shadow-lg flex flex-col">
        <h2 className="text-2xl font-bold text-white">Edvisr</h2>

        <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white p-3 mt-6 rounded-lg shadow">
          + Create New Class
        </button>

        {/* Sidebar Menu */}
        <ul className="mt-8 space-y-4 flex-grow">
          <li>
            <Link href="/dashboard" className="text-gray-400 hover:text-white transition">
              Dashboard
            </Link>
          </li>
          <li className="text-white font-semibold">Quiz</li>
          <li>
            <Link href="/insights" className="text-gray-400 hover:text-purple-300 transition">
              Insights
            </Link>
          </li>
          <li className="text-gray-400 hover:text-white transition">Suggestions</li>
          <li className="text-gray-400 hover:text-white transition">Preview</li>
        </ul>

        {/* Upgrade Section */}
        <div className="mt-auto p-4 bg-gray-800 rounded-lg text-center shadow-lg">
          <p className="text-gray-300 text-sm">Upgrade to PRO for more features.</p>
          <Link href="/pricingpage">
            <span className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 mt-2 rounded-lg inline-block cursor-pointer">
              Upgrade
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
