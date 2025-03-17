"use client";
import { motion } from "framer-motion";
import { FaLightbulb, FaChartBar, FaRobot } from "react-icons/fa";

const features = [
  { 
    icon: <FaLightbulb size={40} />, 
    title: "AI-Driven Teaching Insights", 
    desc: "Get real-time feedback on student engagement, identify learning gaps, and enhance teaching effectiveness." 
  },
  { 
    icon: <FaChartBar size={40} />, 
    title: "Predictive Learning Analytics", 
    desc: "Track student progress, detect struggling learners early, and receive personalized intervention suggestions." 
  },
  { 
    icon: <FaRobot size={40} />, 
    title: "Automated Quiz & Lesson Generator", 
    desc: "AI-powered tools generate quizzes, adaptive lesson plans, and concept reinforcements to improve retention." 
  },
];

const Features = () => {
  return (
    <section id="features" className="pt-[80px] py-20 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-8">Empower Educators with AI</h2>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
        EdVisr transforms teaching with AI-driven insights, predictive analytics, 
        and automated content creation—helping educators make smarter, data-backed decisions.
      </p>
      <div className="grid md:grid-cols-3 gap-8 px-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-primary rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-accent">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mt-4">{feature.title}</h3>
            <p className="mt-2 text-gray-300">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
