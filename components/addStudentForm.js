"use client"; // ✅ Add this line at the top

import { useState } from "react";

export default function AddStudentForm() {
    const [name, setName] = useState("");

    return (
        <form>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter student name"
            />
            <button type="submit">Add Student</button>
        </form>
    );
}
