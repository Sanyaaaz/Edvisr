export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { topic, grade } = req.body;

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [
                        {
                            role: "user",
                            parts: [{ text: `Generate one creative "What If?" question based on the topic "${topic}" for grade ${grade}. The question should be engaging and challenge students to think about an alternate reality.` }]
                        }
                    ]
                }),
            }
        );

        const data = await response.json();

        // Extract the generated response properly
        const question = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No question generated.";

        res.status(200).json({ question });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Failed to fetch from Gemini API" });
    }
}
