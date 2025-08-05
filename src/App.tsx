import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TeamMemberCard from "@/components/ui/TeamMemberCard";

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollToHero = () => {
    if (heroRef.current) {
      const headerOffset = 80;
      const elementPosition = heroRef.current.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-black text-stone-200 font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 border-b border-gray-700 bg-black">
        <div className="font-semibold text-lg">invisimark.ai</div>
        <Button
          variant="outline"
          className="border-gray-700 bg-zinc-800 text-gray-300 hover:bg-zinc-900 hover:text-white"
          onClick={scrollToHero}
        >
          Join Waitlist
        </Button>
      </header>

      {/* Hero */}
      <main
        ref={heroRef}
        className="flex flex-col items-center justify-center flex-grow px-4 py-24 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/backgrounds/hero-bg.png')" }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight max-w-4xl mb-6">
          Invisible Watermarks for <br />
          Your Work, AI-Powered, <br />
          Undetectable, Yours Alone
        </h1>
        <p className="text-stone-400 text-base md:text-lg max-w-xl mb-10">
          Protect your images, videos, and audio with secure, unremovable
          watermarks, only visible to you.
        </p>

        {/* Email Input */}
        <form className="flex w-full max-w-md gap-2">
          <Input
            type="email"
            placeholder="Email"
            className="bg-zinc-900 border border-gray-700 text-stone-200 placeholder-gray-500 rounded-md"
          />
          <Button
            type="submit"
            className="bg-zinc-900 text-stone-200 border border-gray-700 hover:bg-zinc-800 rounded-md"
          >
            Submit
          </Button>
        </form>
      </main>

      {/* Our Story */}
      <section className="bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900 px-6 py-20 text-center text-stone-200">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 mt-4">Our story</h2>
        <p className="max-w-[700px] mx-auto text-stone-400 mb-4 text-base md:text-lg">
          Invisimark was born from a simple belief: everyone should have the
          power to protect what they create. As digital content becomes easier
          to share and reproduce, creators, individuals, and businesses are all
          searching for ways to keep their work truly theirs.
        </p>
        <p className="italic text-stone-300 mb-6 text-base md:text-lg font-medium">
          That’s where Invisimark comes in.
        </p>
        <p className="max-w-[700px] mx-auto text-stone-400 mb-4 text-base md:text-lg">
          We set out to build an AI-powered watermarking platform that
          discreetly tags audio, images, and video without changing how the
          world experiences them. Our mission is to empower users to safeguard
          their artistry, property, and ideas, giving them proof of ownership
          and peace of mind in a digital-first world.
        </p>
      </section>

      {/* Our Team */}
      <section className="relative px-6 py-20 text-center text-stone-200">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{ backgroundImage: "url('/backgrounds/team-bg.png')" }}
        ></div>

        {/* Foreground Content */}
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Our team, your future
          </h2>
          <div className="mx-auto grid grid-cols-3 gap-x-3 gap-y-15 max-w-[900px]">
            {[
              {
                name: "ABDUL HADI",
                role: "Project Lead",
                img: "/team/abdul.png",
                linkedin: "https://www.linkedin.com/in/abdul-h-12458425b/",
              },
              {
                name: "YUVRAJ PRUTHI",
                role: "Project Lead",
                img: "/team/yuvraj.png",
                linkedin: "https://www.linkedin.com/in/yuvrajpruthi/",
              },
              {
                name: "MANI KASI",
                role: "UI/UX Lead",
                img: "/team/mani.png",
                linkedin: "https://www.linkedin.com/in/mani-kasi-479291252/",
              },
              {
                name: "GURJAS CHALANA",
                role: "Server Lead",
                img: "/team/gurjas.png",
                linkedin: "https://www.linkedin.com/in/gurjas-chalana/",
              },
              {
                name: "PRANAV KHODHOT",
                role: "Cloud Lead",
                img: "/team/pranav.png",
                linkedin: "https://www.linkedin.com/in/pranavkhodhot/",
              },
              {
                name: "BRENDON LUU",
                role: "Front-end Developer",
                img: "/team/brendon.png",
                linkedin: "https://www.linkedin.com/in/brendonluu/",
              },
              {
                name: "ARJUN",
                role: "Back-end Developer",
                img: "/team/arjun.png",
                linkedin: "",
              },
              {
                name: "JONAS HALLGRIMSSON",
                role: "Developer",
                img: "/team/jonas.png",
                linkedin:
                  "https://www.linkedin.com/in/jonas-hallgrimsson-1339b522b/",
              },
              {
                name: "JAY",
                role: "Developer",
                img: "/team/jay.png",
                linkedin: "",
              },
            ].map((member) => (
              <TeamMemberCard
                key={member.name}
                name={member.name}
                role={member.role}
                imgSrc={member.img}
                linkedinUrl={member.linkedin}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-6 px-6 text-sm flex flex-col md:flex-row justify-between items-center text-gray-400">
        <div>invisimark.ai</div>
        <div>© 2025 Invisimark.ai</div>
        <div className="flex space-x-4">
          <a
            href="https://github.com/invisimark-ai"
            target="_blank"
            rel="noreferrer"
            className="hover:text-stone-200 transition"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-stone-200 transition"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
      </footer>
    </div>
  );
}
