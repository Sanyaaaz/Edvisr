"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { BrainCircuit, Loader2 } from "lucide-react"

export default function QuizGenerator() {
  const [formData, setFormData] = useState({
    class: "",
    subject: "",
    topic: "",
    difficulty: "medium",
  })

  const [isGenerating, setIsGenerating] = useState(false)
  const [quizGenerated, setQuizGenerated] = useState<string | false>(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, difficulty: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)
    setQuizGenerated(false)

    try {
      const response = await fetch("https://edvisr-backend.onrender.com/generate-quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          grade: formData.class,
          topic: formData.topic,
          difficulty: formData.difficulty
        })
      })

      const data = await response.json()

      // Update UI with real quiz content
      setQuizGenerated(data.questions || "Quiz generated successfully.")
    } catch (error) {
      console.error("Error generating quiz:", error)
      setQuizGenerated("Failed to generate quiz.")
    }

    setIsGenerating(false)
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="bg-black/50 backdrop-blur-md border border-white/10 h-full">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <BrainCircuit className="h-6 w-6 text-purple-500" />
            <CardTitle className="text-2xl text-white">Quiz Generator</CardTitle>
          </div>
          <CardDescription className="text-gray-400">
            Generate custom quizzes tailored to your learning needs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="class" className="text-white">
                Class/Grade Level
              </Label>
              <Input
                id="class"
                name="class"
                placeholder="e.g., 10th Grade, College Freshman"
                value={formData.class}
                onChange={handleInputChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-white">
                Subject
              </Label>
              <Input
                id="subject"
                name="subject"
                placeholder="e.g., Biology, History, Mathematics"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="topic" className="text-white">
                Specific Topic
              </Label>
              <Input
                id="topic"
                name="topic"
                placeholder="e.g., Photosynthesis, World War II, Calculus"
                value={formData.topic}
                onChange={handleInputChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="difficulty" className="text-white">
                Difficulty Level
              </Label>
              <Select value={formData.difficulty} onValueChange={handleSelectChange}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-white/20 text-white">
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleSubmit}
            disabled={isGenerating || !formData.class || !formData.subject || !formData.topic}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Quiz...
              </>
            ) : (
              "Generate Quiz"
            )}
          </Button>
        </CardFooter>

        {quizGenerated && (
          <div className="px-6 pb-6">
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="p-4 rounded-lg bg-purple-500/20 border border-purple-500/30"
            >
              <p className="text-white text-sm whitespace-pre-wrap">{quizGenerated}</p>
            </motion.div>
          </div>
        )}
      </Card>
    </motion.div>
  )
}

