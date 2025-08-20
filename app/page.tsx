import Navbar from "@/components/navbar"

export default function HomePage() {
  return (
    <div
      className="min-h-screen relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-background.png')" }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content layer */}
      <div className="relative z-10">
        <Navbar />

        {/* Main content with top padding to account for fixed navbar */}
        <main className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Welcome to Amber Glass India</h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
                Premium glass solutions for modern architecture and design
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
