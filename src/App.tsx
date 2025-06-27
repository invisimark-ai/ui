import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-[#E0D3D3] font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-[#444]">
        <div className="font-semibold text-lg">invisimark.ai</div>
        <Button variant="outline" className="border-[#444] text-[#E0D3D3] hover:bg-[#1E1E1E]">
          Join Waitlist
        </Button>
      </header>

      {/* Hero */}
      <main
  className="flex flex-col items-center justify-center flex-grow px-4 py-24 text-center bg-cover bg-center"
  style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight max-w-4xl mb-6">
          Invisible Watermarks for <br />
          Your Work — AI-Powered, <br />
          Undetectable, Yours Alone
        </h1>
        <p className="text-[#b3a6a6] text-base md:text-lg max-w-xl mb-10">
          Protect your images, videos, and audio with secure, unremovable watermarks — only visible to you.
        </p>

        {/* Email Input */}
        <form className="flex w-full max-w-md gap-2">
          <Input
            type="email"
            placeholder="Email"
            className="bg-[#1E1E1E] border border-[#444] text-[#E0D3D3] placeholder-[#888] rounded-md"
          />
          <Button type="submit" className="bg-[#1E1E1E] text-[#E0D3D3] border border-[#444] hover:bg-[#2a2a2a] rounded-md">
            Submit
          </Button>
        </form>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#444] py-6 px-6 text-sm flex flex-col md:flex-row justify-between items-center text-[#888]">
        <div>invisimark.ai</div>
        <div>© 2025 Invisimark.ai</div>
        <div className="flex space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#E0D3D3] transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#E0D3D3] transition"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  )
}