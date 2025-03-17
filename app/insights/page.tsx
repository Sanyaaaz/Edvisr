"use client";
import Link from 'next/link';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';

const data = [
  { topic: 'Algebra', weakStudents: 30 },
  { topic: 'Calculus', weakStudents: 20 },
  { topic: 'Geometry', weakStudents: 25 },
  { topic: 'Trigonometry', weakStudents: 18 },
  { topic: 'Probability', weakStudents: 15 },
  { topic: 'Statistics', weakStudents: 12 }
];

const improvementData = [
    { month: 'Jan', students: 25 },
    { month: 'Feb', students: 30 },
    { month: 'Mar', students: 35 },
    { month: 'Apr', students: 40 },
    { month: 'May', students: 45 },
    { month: 'Jun', students: 50 }
  ];
  

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function MathsDashboard() {
  return (
    <div className="flex h-screen bg-black">
      {/* Sidebar */}
      <div className="w-64 bg-purple-100 p-6 shadow-lg flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-primary">Edvisr</h2>
          <button className="w-full bg-accent text-white p-3 mt-6 rounded-lg shadow">
            + Create New Class
          </button>

          <ul className="mt-8 space-y-4">
            <li className="text-primary font-semibold cursor-pointer">Dashboard</li>
            <li className="text-gray-600 cursor-pointer hover:text-purple-400 transition">
              <Link href="/quiz">Quiz</Link>
            </li>
            <li className="text-gray-600 cursor-pointer hover:text-purple-400 transition">
              <Link href="/insights">Insights</Link>
            </li>
            <li className="text-gray-600 cursor-pointer hover:text-primary">Suggestions</li>
            <li className="text-gray-600 cursor-pointer hover:text-primary">Preview</li>
          </ul>
        </div>

        <div className="bg-gray-200 p-4 rounded-lg text-center shadow-lg">
          <p className="text-gray-700 text-sm">Upgrade to PRO for more features.</p>
          <Link href="/pricingpage" className="bg-accent text-white px-4 py-2 mt-2 rounded-lg inline-block">
            Upgrade
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold">Math Performance Dashboard</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-4 shadow rounded-lg text-center">
            <h3 className="text-2xl font-bold">Total Weak Students</h3>
            <p className="text-blue-500 text-4xl">24</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg text-center">
            <h3 className="text-2xl font-bold">Avg. Improvement</h3>
            <p className="text-green-500 text-4xl">75%</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg text-center">
            <h3 className="text-2xl font-bold">Overall Rating</h3>
            <p className="text-yellow-500 text-4xl">8.5</p>
          </div>
        </div>
        {/* Overview */}
        <div className="mt-6 flex space-x-4">
          <div className="bg-blue-50 text-black p-4 rounded-lg flex-1 text-center">
            <h3 className="text-2xl font-bold">83%</h3>
            <p>Response</p>
          </div>
          <div className="bg-cyan-50 text-black p-4 rounded-lg flex-1 text-center">
            <h3 className="text-2xl font-bold">77%</h3>
            <p>Syllabus Complete</p>
          </div>
          <div className="bg-indigo-50 text-black p-4 rounded-lg flex-1 text-center">
            <h3 className="text-2xl font-bold">51</h3>
            <p>Students</p>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-2 gap-6 mt-6">
          {/* Bar Chart */}
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-xl font-bold mb-4">Weak Students Per Topic</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <XAxis dataKey="topic" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="weakStudents" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Area Chart */}
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-xl font-bold mb-4">Improvement Over Time</h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={improvementData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="students" stroke="#82ca9d" fill="#82ca9d" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-white p-6 shadow rounded-lg flex justify-center col-span-2">
           <h2 className="text-xl font-bold mb-4">Error Distribution in Tests </h2>
            <PieChart width={300} height={300}>
              <Pie data={data} dataKey="weakStudents" nameKey="topic" cx="50%" cy="50%" outerRadius={100} label>
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
}
