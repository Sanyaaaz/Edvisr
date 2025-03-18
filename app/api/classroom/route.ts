import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(req: NextRequest) {
  // Get user session
  const session = await getServerSession(authOptions);

  console.log("🔍 Session Data:", session); // Debugging step

  if (!session || !session.accessToken) {
    console.error("❌ Unauthorized: No session or access token");
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
    console.error("⚠️ Error fetching courses:", error);
    return NextResponse.json({ error: "Failed to fetch courses" }, { status: 500 });
  }
}


export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session || !session.accessToken) {
    console.error("❌ Unauthorized request");
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    console.log("📩 Received Body:", body); // Log request data

    const { name } = body;
    if (!name) {
      console.error("❌ Missing class name in request");
      return NextResponse.json({ error: "Class name is required" }, { status: 400 });
    }

    const response = await fetch("https://classroom.googleapis.com/v1/courses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        ownerId: "me",
        courseState: "ACTIVE",
      }),
    });

    console.log("📡 Google Classroom API Response:", response.status);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("❌ Error creating course:", errorData);
      return NextResponse.json({ error: errorData }, { status: response.status });
    }

    const data = await response.json();
    console.log("✅ Successfully Created Course:", data);

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("❌ Unexpected Error:", error);
    return NextResponse.json({ error: "Failed to create course" }, { status: 500 });
  }
}

