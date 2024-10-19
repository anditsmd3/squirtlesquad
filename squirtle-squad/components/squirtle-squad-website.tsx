import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronRight, Play, Pause, SkipBack, SkipForward } from "lucide-react"

export default function SquirtleSquadWebsite() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentTrack, setCurrentTrack] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const tracks = [
    {
      title: "Pikachu Part 1",
      artist: "Dialect",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pikachu%20(Poke%CC%81mon)%20-%20Shellers%20%5BPart%201%5D%20_%20FITS%20%5B%20ezmp3.cc%20%5D-f9cOAy1eQqqlaUMpbLmb2d435RjFt3.mp3"
    },
    {
      title: "Pikachu Part 2",
      artist: "Dialect",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pikachu%20-%20Shellers%20%5BPart%202%5D%20_%20FITS%20%5B%20ezmp3.cc%20%5D-KWaOcvAVMdE5mFX3DRwZPLFbUzjoA2.mp3"
    },
    {
      title: "The Very Best",
      artist: "JME",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JME%20-%20THE%20VERY%20BEST%20%5B%20ezmp3.cc%20%5D-3MhWPQR8DDdsNBuCESKzMavOq2KqmH.mp3"
    },
    {
      title: "Pikachu",
      artist: "Scrufizzer",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Scrufizzer%20%20-%20Pikachu%20Prod%20By%20NibzMusic%20%5B%20ezmp3.cc%20%5D-XNYbMmX8rN1Y1LiQESaQYUaeGFOa8E.mp3"
    }
  ]

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = tracks[currentTrack].src
      if (isPlaying) {
        audioRef.current.play()
      }
    }
  }, [currentTrack])

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  const togglePlay = () => setIsPlaying(!isPlaying)

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length)
  }

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length)
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = section.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen bg-[#53ccf2]">
      <header className="bg-[#53ccf2] fixed top-0 left-0 right-0 z-50 border-b-4 border-[#f6f09f]">
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-6">
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-white hover:text-[#f6f09f]">About</a></li>
            <li><a href="#why-pulse" onClick={(e) => { e.preventDefault(); scrollToSection('why-pulse'); }} className="text-white hover:text-[#f6f09f]">Why Pulse</a></li>
            <li><a href="#our-vision" onClick={(e) => { e.preventDefault(); scrollToSection('our-vision'); }} className="text-white hover:text-[#f6f09f]">Our Vision</a></li>
            <li><a href="#pokenomics" onClick={(e) => { e.preventDefault(); scrollToSection('pokenomics'); }} className="text-white hover:text-[#f6f09f]">Pokénomics</a></li>
            <li><a href="#roadmap" onClick={(e) => { e.preventDefault(); scrollToSection('roadmap'); }} className="text-white hover:text-[#f6f09f]">Roadmap</a></li>
            <li><a href="#how-to-buy" onClick={(e) => { e.preventDefault(); scrollToSection('how-to-buy'); }} className="text-white hover:text-[#f6f09f]">How to Buy</a></li>
            <li><a href="#community" onClick={(e) => { e.preventDefault(); scrollToSection('community'); }} className="text-white hover:text-[#f6f09f]">Community</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8 mt-16">
        <div className="flex justify-center mb-8">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SSLOGO-Kfrn4MQIVOpwP4t9fgoR1ONafy6UB4.png"
            alt="Squirtle Squad Logo"
            className="w-64 h-64 object-contain"
          />
        </div>

        <section id="hero" className="mb-16 bg-[#53ccf2] border-4 border-[#f6f09f] rounded-lg p-6 section-hover">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Join the Squirtle Squad!
              </h1>
              <p className="text-lg text-[#f6f09f] mb-6">
                Inspired by the legendary Squirtle Squad, $SQUAD is leading the charge in the Pokéchain revolution on Pulse. Get ready to surf the waves of memecoin innovation, community spirit, and a dash of Squirtle style!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="default" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Join the Squad
                </Button>
                <Button variant="outline" size="lg" className="bg-white text-blue-600 hover:bg-blue-100">
                  Buy on PulseX
                </Button>
                <Button variant="ghost" size="lg" className="text-white hover:bg-blue-600">
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1tm3cw8krxb41-CC58TJ4ihXFQ4enWddpyDtc4ZNtGyu.jpg"
                alt="Squirtle Squad Hero"
                className="w-full h-auto object-cover"
                style={{ maxHeight: "25vh" }}
              />
            </div>
          </div>
        </section>

        <section id="about" className="mb-16 bg-black border-4 border-[#f6f09f] rounded-lg p-6 section-hover">
          <h2 className="text-3xl font-bold text-white mb-4">What is Squirtle Squad?</h2>
          <p className="text-[#f6f09f] mb-4">
            Squirtle Squad is more than just a memecoin—it's a tribute to one of the most iconic teams in the Pokémon world. But we're not just about nostalgia. Built on Pulse, $SQUAD is part of the groundbreaking Pokéchain ecosystem, designed for true crypto rebels, traders, and meme fans alike. By holding $SQUAD, you're joining a community that values fun, creativity, and financial innovation.
          </p>
          <p className="text-[#f6f09f] mb-4">
            In the world of memecoins, the Squirtle Squad stands alone—a crew bound by loyalty, brotherhood, and an unshakable belief that together, we can make waves in the crypto world. Just like the original Squirtle Squad, we are a rebellious group of misfits who banded together, not just to survive, but to thrive. We're not just a token, we're a movement. A movement of like-minded individuals who stand side-by-side, committed to taking $SQUAD from humble beginnings to the biggest and best coin on the Pokéchain. And we'll do it with style.
          </p>
          <p className="text-[#f6f09f] mb-4">
            When you join the Squirtle Squad, you're not just buying a token—you're pledging allegiance to a brotherhood. Each holder becomes a part of our cult-like squad, dedicated to seeing this memecoin rise to legendary status. We look out for each other, we hustle together, and we blast away any obstacles in our path, just like a team of Squirtles using Water Gun to take down our rivals. With the power of the Pulse blockchain behind us and our relentless, community-driven approach, there's nothing we can't achieve.
          </p>
          <p className="text-[#f6f09f]">
            Together, we are unstoppable. Every member of the Squirtle Squad brings something valuable to the table, whether it's spreading the meme, holding the line, or helping shape the future of the token. We're building something bigger than just a coin. This is a movement, a cult of dedicated water blasters who will ride the wave of success as one. With the Squirtle Squad, you're never alone. We've got your back, and we're on a mission to make $SQUAD the greatest memecoin the world has ever seen—and trust us, we never lose when we work together.
          </p>
        </section>

        <section id="why-pulse" className="mb-16 bg-[#53ccf2] border-4 border-[#f6f09f] rounded-lg p-6 section-hover">
          <h2 className="text-3xl font-bold text-white mb-4">Why Pulse?</h2>
          <p className="text-[#f6f09f]">
            Pulse is where the future of Pokéchain coins is being built. With low fees, fast transactions, and a growing community, it's the perfect home for $SQUAD to flourish. Whether you're a meme lover, a crypto enthusiast, or just a die-hard Squirtle fan, Pulse is where you want to be.
          </p>
        </section>

        <section id="our-vision" className="mb-16 bg-black border-4 border-[#f6f09f] rounded-lg p-6 section-hover">
          <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <p className="text-[#f6f09f]">
                The Squirtle Squad's mission is to lead the way in bringing fan-favorite Pokémon-inspired coins to life in the Pulse blockchain. We're here to revolutionize memecoins and bring real value to the community, while having fun every step of the way.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dbv7zcm-25a49c87-892f-445e-8866-bbf09f5d77e4-mPPISl7wOqMmb6tirkwVdiNVtq80gP.png"
                alt="Squirtle Squad Vision"
                className="w-full h-auto"
                style={{ maxWidth: "50%" }}
              />
            </div>
          </div>
        </section>

        <section id="pokenomics" className="mb-16 bg-[#53ccf2] border-4 border-[#f6f09f] rounded-lg p-6 section-hover">
          <h2 className="text-3xl font-bold text-white mb-4">Pokénomics</h2>
          <div className="grid  grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5807558493530604422%20(2)-sIOVynMHHLgzYHTn5HtGdW5P733upH.jpg" alt="Total Supply" className="w-48 h-48 object-cover rounded-full mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Total Supply</h3>
              <p className="text-[#f6f09f] text-center">4,206,942,069 $SQUAD</p>
              <p className="text-[#f6f09f] text-center text-sm mt-2">Because we know 69 and 420 are more than just numbers—they're a way  of life!</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5807558493530604419-RkqyqQMUsccEOJmIgygSZEXlXJJcuF.jpg" alt="TM 34 - SWAGGER" className="w-48 h-48 object-cover rounded-full mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Burned (50%)</h3>
              <p className="text-[#f6f09f] text-center">"Straight to the Shell!"</p>
              <p className="text-[#f6f09f] text-center text-sm mt-2">Half of the total supply has been sent to the burn address.</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5807558493530604425%20(1)-xZ2ph4BmM3OzXSE9a9vrQElbZvGGrz.jpg" alt="Liquidity Pool" className="w-48 h-48 object-cover rounded-full mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Liquidity Pool (40%)</h3>
              <p className="text-[#f6f09f] text-center">"Shell Shocked & Ready"</p>
              <p className="text-[#f6f09f] text-center text-sm mt-2">40% of the supply is locked into the Liquidity Pool.</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5807558493530604427%20(1)-22hs6W2sLSzqDXlHrgd13OggJPc5d6.jpg" alt="Community Fund" className="w-48 h-48 object-cover rounded-full mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Community Fund (10%)</h3>
              <p className="text-[#f6f09f] text-center">"Squad Goals Fund"</p>
              <p className="text-[#f6f09f] text-center text-sm mt-2">10% is set aside for our Squirtle Squad community.</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5807558493530604421-FMmjuek2LrJhgYKdj14NMsxZO0dvjm.jpg" alt="TM 34 - SWAGGER" className="w-48 h-48 object-cover rounded-full mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">TM 34 - SWAGGER</h3>
              <p className="text-[#f6f09f] text-center">"Deflationary Mechanism"</p>
              <p className="text-[#f6f09f] text-center text-sm mt-2">A second token with a tax to buy and burn SQUAD, making it deflationary and rewarding holders with SQUAD tokens.</p>
            </div>
          </div>
        </section>

        <section id="roadmap" className="mb-16 bg-black border-4 border-[#f6f09f] rounded-lg p-6 section-hover">
          <h2 className="text-3xl font-bold text-white mb-4">Squirtle Squad's Roadmap to the Pokémoon</h2>
          <p className="text-[#f6f09f] mb-4">
            The Squirtle Squad doesn't just settle for mediocrity. We've got bold plans, and we're inviting you to come along for the ride as we make waves on Pulse and beyond.
          </p>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#f6f09f]"></div>
            <div className="space-y-12">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#f6f09f] rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">1</span>
                </div>
                <div className="ml-8 bg-[#53ccf2] p-4 rounded-lg">
                  <h3 className="text-2xl font-semibold text-white mb-2">Phase 1: Assemble the Squad</h3>
                  <ul className="list-disc list-inside text-[#f6f09f]">
                    <li>Launch Website & Social Media</li>
                    <li>Smart Contract Deployment on Pulse</li>
                    <li>Release Whitepaper</li>
                    <li>Initial Marketing Blitz</li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#f6f09f] rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">2</span>
                </div>
                <div className="ml-8 bg-[#53ccf2] p-4 rounded-lg">
                  <h3 className="text-2xl font-semibold text-white mb-2">Phase 2: Making a Splash</h3>
                  <ul className="list-disc list-inside text-[#f6f09f]">
                    <li>$SQUAD Token Launch on PulseX</li>
                    <li>Community Challenges & Meme Contests</li>
                    <li>First 1,000 Holders</li>
                    <li>Listings on Pulse-based Platforms</li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#f6f09f] rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">3</span>
                </div>
                <div className="ml-8 bg-[#53ccf2] p-4 rounded-lg">
                  <h3 className="text-2xl font-semibold text-white mb-2">Phase 3: The Rise of Pokéchain</h3>
                  <ul className="list-disc list-inside text-[#f6f09f]">
                    <li>Pokéchain Coin Collaboration</li>
                    <li>NFT Launch: Exclusive Squirtle Squad-themed NFTs</li>
                    <li>Charity Partnerships with Animal Shelters</li>
                    <li>Squirtle Squad Merch Store Opening</li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#f6f09f] rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">4</span>
                </div>
                <div className="ml-8 bg-[#53ccf2] p-4 rounded-lg">
                  <h3 className="text-2xl font-semibold text-white mb-2">Phase 4: Full Pokéchain Integration</h3>
                  <ul className="list-disc list-inside text-[#f6f09f]">
                    <li>Metaverse Expansion</li>
                    <li>Pokéchain Ecosystem Partnership (featuring more Pokémon-inspired projects)</li>
                    <li>Play-to-Earn Game Featuring Squirtle Squad Characters</li>
                    <li>Global Meetups & Community Events</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-to-buy" className="mb-16 bg-[#53ccf2] border-4 border-[#f6f09f] rounded-lg p-6 section-hover">
          <h2 className="text-3xl font-bold text-white mb-4">Join the Squad in 3 Simple Steps!</h2>
          <ol className="list-decimal list-inside text-[#f6f09f] space-y-4">
            <li>
              <strong>Download Rabby to get instant access to Pulsechain</strong>
              <p className="ml-6">Download the Rabby wallet and connect it to Pulsechain.</p>
            </li>
            <li>
              <strong>Fund Your Wallet</strong>
              <p className="ml-6">Get some PLS (Pulse's native coin) and transfer it to your wallet. This will be used to swap for $SQUAD.</p>
            </li>
            <li>
              <strong>Buy $SQUAD on PulseX</strong>
              <p className="ml-6">Head over to PulseX, connect your wallet, and trade PLS for $SQUAD. Welcome to the Squad!</p>
            </li>
          </ol>
        </section>

        <section id="community" className="mb-16 bg-black border-4 border-[#f6f09f] rounded-lg p-6 section-hover">
          <h2 className="text-3xl font-bold text-white mb-4">A Global Pokéchain Community Awaits!</h2>
          <p className="text-[#f6f09f] mb-4">
            When you hold $SQUAD, you're part of a brotherhood that's rewriting the memecoin rules. But it's more than just a token—Squirtle Squad is about building a community that's vibrant, creative, and always up for some fun. Whether it's memes, trading tips, or just chatting about your favorite Pokémon, the Squad's got you covered.
          </p>
          <h3 className="text-2xl font-semibold text-white mb-2">Join the Discussion & Spread the Memes</h3>
          <div className="flex gap-4 mb-4">
            <Button variant="outline" size="lg" className="bg-white text-blue-600 hover:bg-blue-100">
              <a href="https://x.com/PokechainTeddi" target="_blank" rel="noopener noreferrer">Twitter</a>
            </Button>
            <Button variant="outline" size="lg" className="bg-white text-blue-600 hover:bg-blue-100">
              <a href="https://x.com/PokechainTeddi" target="_blank" rel="noopener noreferrer">Telegram</a>
            </Button>
          </div>
          <h3 className="text-2xl font-semibold text-white mb-2">Meme Contests, Giveaways & Challenges</h3>
          <p className="text-[#f6f09f]">
            We don't just talk the talk; we bring the fun! Look out for regular meme contests, Pokéchain-themed challenges, and giveaways where you can score $SQUAD, exclusive NFTs, and swag from our merch store.
          </p>
        </section>

        <section id="pokechain" className="mb-16 bg-[#53ccf2] border-4 border-[#f6f09f] rounded-lg p-6 section-hover">
          <h2 className="text-3xl font-bold text-white mb-4">What is Pokéchain?</h2>
          <p className="text-[#f6f09f]">
            Pokéchain is the home of Pokémon-inspired coins built on the Pulse blockchain. It's where fans, memers, and traders come together to innovate and have fun in the crypto space. With low fees and fast transaction speeds, Pulse is the perfect platform for building community-driven memecoins like $SQUAD. Stay tuned as we collaborate with other Pokéchain projects to create an interconnected ecosystem of Pokémon-inspired tokens!
          </p>
        </section>

        <section id="safety" className="mb-16 bg-black border-4 border-[#f6f09f] rounded-lg p-6 section-hover">
          <h2 className="text-3xl font-bold text-white mb-4">Safety First: The Squirtle Squad's Unbreakable Shell</h2>
          <p className="text-[#f6f09f] mb-4">
            At Squirtle Squad, we believe in creating a safe and secure environment for all our members. Just like a Squirtle's hard shell, our security measures are designed to be unbreakable:
          </p>
          <ul className="list-disc list-inside text-[#f6f09f] space-y-2">
            <li>
              <strong>Burned Liquidity Pools:</strong> Our liquidity pools will be burned, ensuring that they can never be removed or manipulated.
            </li>
            <li>
              <strong>Renounced Contract:</strong> The contract will be renounced, meaning no changes can be made to it after launch. This prevents any possibility of rugs or unexpected alterations.
            </li>
            <li>
              <strong>Immutable Security:</strong> With these measures in place, the Squirtle Squad becomes the safest place to be a member. Our hard shell cannot be broken, providing you with peace of mind as you join our community.
            </li>
          </ul>
          <p className="text-[#f6f09f] mt-4">
            Join the Squirtle Squad, where your investments are as secure as a Squirtle in its shell!
          </p>
        </section>

        <section id="faq" className="mb-16 bg-[#53ccf2] border-4 border-[#f6f09f] rounded-lg p-6 section-hover">
          <h2 className="text-3xl font-bold text-white mb-4">Got Questions? We've Got Answers!</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-semibold text-white">What is $SQUAD?</h3>
              <p className="text-[#f6f09f]">$SQUAD is a memecoin inspired by the legendary Squirtle Squad from Pokémon. It's built on the Pulse blockchain and part of the Pokéchain ecosystem.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">How can I buy $SQUAD?</h3>
              <p className="text-[#f6f09f]">You can buy $SQUAD using PLS on PulseX. Follow the steps in our "How to Buy" section to get started.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">Why is $SQUAD on Pulse and not Ethereum/BSC?</h3>
              <p className="text-[#f6f09f]">Pulse offers fast, low-fee transactions, which are ideal for memecoins like $SQUAD. Plus, Pulse is becoming the home of the Pokéchain ecosystem, where all Pokémon-inspired coins are coming together.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">What can I do with $SQUAD?</h3>
              <p className="text-[#f6f09f]">Besides joining an epic community, you can earn rewards, participate in contests, buy exclusive NFTs, and hold $SQUAD to help grow the memecoin on Pulse.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">
            Squirtle Squad – Built on Pulse, part of the Pokéchain universe. The future of memecoins is here!
          </p>
          <p className="text-sm">© 2024 Squirtle Squad. All rights reserved.</p>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 bg-[#53ccf2] border-t-4 border-[#f6f09f] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-[#f6f09f] font-bold">Hydro Pump Hits</div>
          <div className="flex items-center space-x-4">
            <button onClick={prevTrack} className="text-[#f6f09f] music-button">
              <SkipBack />
            </button>
            <button onClick={togglePlay} className="text-[#f6f09f] music-button">
              {isPlaying ? <Pause /> : <Play />}
            </button>
            <button onClick={nextTrack} className="text-[#f6f09f] music-button">
              <SkipForward />
            </button>
          </div>
          <div className="text-[#f6f09f]">
            {tracks[currentTrack].title} - {tracks[currentTrack].artist}
          </div>
        </div>
      </div>

      <audio ref={audioRef} src={tracks[currentTrack].src} autoPlay loop />
    </div>
  )
}