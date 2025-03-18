import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(req: NextRequest) {
  // Get user session
  const session = await getServerSession(authOptions);

  if (!session || !session.accessToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const response = await fetch("https://classroom.googleapis.com/v1/courses", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json({ error: "Failed to fetch courses" }, { status: 500 });
  }
}

// ✅ Updated POST function to create a new Google Classroom course
export async function POST(req: NextRequest) {
  // Get user session
  const session = await getServerSession(authOptions);

  if (!session || !session.accessToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Parse the request body
    const { name } = await req.json();
    if (!name) return NextResponse.json({ error: "Class name is required" }, { status: 400 });

    // Create a course with ownerId set to "me"
    const response = await fetch("https://classroom.googleapis.com/v1/courses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        ownerId: "me", // Ensures the authenticated user is the owner
        courseState: "ACTIVE",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error creating course:", errorData);
      throw new Error(`Error: ${response.status} - ${errorData.error.message}`);
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("Error creating course:", error);
    return NextResponse.json({ error: "Failed to create course" }, { status: 500 });
  }
}
