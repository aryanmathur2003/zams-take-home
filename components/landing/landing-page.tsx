// components/Landin gPage.tsx
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
        <h1 className="mt-4 text-left text-3xl font-sherpa font-bold leading-44px] tracking-[-0.25px]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#070608] to-[#B7549B]">Hey there,</span><br></br>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#070608] via-[#B7549B] via-60% to-[#5E49DB]">What’d you like to ask today?</span>
        </h1>

        <div className="relative w-full sm:w-[90%] md:w-[700px] lg:w-[800px] xl:w-[909px] mt-6"> 
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask whatever you want.."
          />
        </div>


        {/* Disclaimer */}

      </div>
      <p className="absolute bottom-2 left-0 right-0 mx-auto text-center text-sm text-gray-500">
        Your chats aren’t used to train our models. AI may make mistakes, so please double-check.
      </p>
    </div>

  )
}
