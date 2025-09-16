import Flipbook from "../_components/Flipbook"
import { BookOpen, Sparkles, Eye, Layers } from "lucide-react"
import { Footerdemo } from "@/components/ui/footer-section"

const images = [
  "/flipbook/127.png",
  "/flipbook/128.png",
  "/flipbook/129.png",
  "/flipbook/130.png",
  "/flipbook/131.png",
  "/flipbook/132.png",
  "/flipbook/133.png",
  "/flipbook/134.png",
  "/flipbook/135.png",
  "/flipbook/136.png",
  "/flipbook/137.png",
  "/flipbook/138.png",
  "/flipbook/139.png",
  "/flipbook/140.png",
  "/flipbook/141.png",
  "/flipbook/142.png",
  "/flipbook/143.png",
  "/flipbook/144.png",
  "/flipbook/145.png",
]

const images2 = [
  "/flipbook2/107.png",
  "/flipbook2/108.png",
  "/flipbook2/109.png",
  "/flipbook2/110.png",
  "/flipbook2/111.png",
  "/flipbook2/113.png",
  "/flipbook2/114.png",
  "/flipbook2/115.png",
  "/flipbook2/116.png",
  "/flipbook2/117.png",
  "/flipbook2/119.png",
  "/flipbook2/120.png",
  "/flipbook2/121.png",
  "/flipbook2/122.png",
  "/flipbook2/123.png", 
  "/flipbook2/125.png",
]

const images3 = [
  "/flipbook3/79.png",
  "/flipbook3/80.png",
  "/flipbook3/81.png",
  "/flipbook3/82.png",
  "/flipbook3/83.png",
  "/flipbook3/84.png",
  "/flipbook3/85.png",
  "/flipbook3/86.png",
  "/flipbook3/87.png",
  "/flipbook3/88.png",
  "/flipbook3/89.png",
  "/flipbook3/90.png",
  "/flipbook3/91.png",
  "/flipbook3/92.png",
  "/flipbook3/93.png",
  "/flipbook3/94.png",
  "/flipbook3/95.png",
  "/flipbook3/96.png",
  "/flipbook3/97.png",
]

const images4 = [
  "/flipbook4/39.png",
  "/flipbook4/40.png",
  "/flipbook4/41.png",
  "/flipbook4/42.png",
  "/flipbook4/43.png",
  "/flipbook4/44.png",
  "/flipbook4/45.png",
  "/flipbook4/46.png",
  "/flipbook4/47.png",
  "/flipbook4/48.png",
  "/flipbook4/49.png",
  "/flipbook4/50.png",
  "/flipbook4/51.png",
  "/flipbook4/52.png",
  "/flipbook4/53.png",
  "/flipbook4/54.png",
  "/flipbook4/55.png",
  "/flipbook4/56.png",
  "/flipbook4/57.png",
]

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/10"></div>
        <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-5 bg-cover bg-center"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="animate-fade-in-up">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 text-center">
              <BookOpen className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-secondary animate-pulse-slow" />
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-balance mb-4 sm:mb-6 bg-gradient-to-r from-sky-800 to-sky-200 bg-clip-text text-transparent">
              Interactive Glass Catalog
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto px-2 text-balance leading-relaxed">
              Experience our premium glass film collection through immersive digital flipbooks with stunning visual
              clarity
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-8 sm:mt-12 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
              <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Interactive View</span>
            </div>
            <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
              <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>4 Collections</span>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 sm:py-20 bg-card pt-32 sm:pt-40">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#567387] font-bold mb-3 sm:mb-4 text-balance">Printed Films Collection</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2 text-balance">
              Discover our vibrant printed film designs that transform ordinary glass into artistic statements
            </p>
          </div>
          <div className="animate-slide-in-left">
            <Flipbook images={images2} />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#567387] font-bold mb-3 sm:mb-4 text-balance">Frosted Films Collection</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2 text-balance">
              Elegant frosted solutions that provide privacy while maintaining natural light flow
            </p>
          </div>
          <div className="animate-slide-in-right">
            <Flipbook images={images3} />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#567387] font-bold mb-3 sm:mb-4 text-balance">Transparent Films Collection</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2 text-balance">
              Crystal-clear protective films that enhance durability without compromising visibility
            </p>
          </div>
          <div className="animate-slide-in-left">
            <Flipbook images={images4} />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-3xl text-[#567387] sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance">Opaque Films Collection</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2 text-balance">
              Complete privacy solutions with sophisticated opaque finishes for modern spaces
            </p>
          </div>
          <div className="animate-slide-in-right">
            <Flipbook images={images} />
          </div>
        </div>
      </section>

      <Footerdemo />
    </div>
  )
}

export default ProductPage
