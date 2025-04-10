"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Sparkles, Loader2 } from "lucide-react"

export default function WhatIfGenerator() {
  const [topic, setTopic] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedQuestion, setGeneratedQuestion] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)
    setGeneratedQuestion("")

    try {
      const response = await fetch("https://edvisr-backend.onrender.com/generate-whatif", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ topic })
      })

      const data = await response.json()
      setGeneratedQuestion(data.what_if_question || "No question returned.")
    } catch (error) {
      console.error("Error generating question:", error)
      setGeneratedQuestion("Failed to generate question.")
    }

    setIsGenerating(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="bg-black/50 backdrop-blur-md border border-white/10 h-full">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-6 w-6 text-pink-500" />
            <CardTitle className="text-2xl text-white">&quot;What If?&quot; Generator</CardTitle>
          </div>
          <CardDescription className="text-gray-400">Generate thought-provoking hypothetical questions</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="topic" className="text-white">
                Topic
              </Label>
              <Input
                id="topic"
                placeholder="e.g., Gravity, Democracy, The Internet"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-stretch gap-4">
          <Button
            onClick={handleSubmit}
            disabled={isGenerating || !topic}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Question...
              </>
            ) : (
              "Generate 'What If?' Question"
            )}
          </Button>

          {generatedQuestion && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-pink-500/30"
            >
              <p className="text-white font-medium">{generatedQuestion}</p>
            </motion.div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}

