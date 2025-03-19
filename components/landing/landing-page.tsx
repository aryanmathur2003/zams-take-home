// components/LandingPage.tsx
'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import ZamsLogo from "./zams-logo"
import { useState } from "react"

export default function LandingPage() {
  const [input, setInput] = useState("")

  const handleSubmit = () => {
    console.log("Input Submitted:", input)
    // Handle submission logic here
  }

  return (
    <div className="place-content-center">
      <div className="text-center">
        {/* Header with Gradient */}
        <ZamsLogo></ZamsLogo>
        <h1 className="mt-4 text-left text-3xl font-semibold">
          Hey there, <br></br>
          What’d you like to{" "}ask today
        </h1>

        {/* Input Section */}
        <div className="mt-6 w-full max-w-xl space-y-4">
          <Input
            type="text"
            placeholder="Ask whatever you want..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="p-4 border border-gray-300 rounded-lg shadow-sm"
          />
          
          <div className="flex justify-between items-center">
            {/* Dropdown */}
            <select className="p-2 border border-gray-300 rounded-lg">
              <option>Response Type</option>
              <option>Quick</option>
              <option>Detailed</option>
            </select>

            {/* Submit Button */}
            <Button onClick={handleSubmit} className="bg-blue-500 text-white hover:bg-blue-600">
              Submit
            </Button>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-4 text-sm text-gray-500">
          Your chats aren’t used to train our models. AI may make mistakes, so please double-check.
        </p>
      </div>
    </div>
  )
}
