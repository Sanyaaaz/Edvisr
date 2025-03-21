import Hero from "./components/Hero";
import Features from "./components/Features";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import StudentList from "@/components/StudentList";
import AddStudentForm from "@/components/addStudentForm";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
      <AddStudentForm />
      <StudentList />
    </main>
  );
}