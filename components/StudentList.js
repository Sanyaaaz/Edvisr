"use client"; // ✅ Add this line at the top

import { useEffect, useState } from "react";

export default function StudentList() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        // Fetch students from your API
        fetch("/api/students")
            .then((res) => res.json())
            .then((data) => setStudents(data))
            .catch((error) => console.error("Error fetching students:", error));
    }, []);

    return (
        <div>
            <h2>Student List</h2>
            <ul>
                {students.map((student) => (
                    <li key={student.id}>{student.name}</li>
                ))}
            </ul>
        </div>
    );
}