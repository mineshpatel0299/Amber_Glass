"use client"

import React from "react"
import { useRef, useState, useEffect, Suspense } from "react"
import { Canvas, useFrame, useThree, ThreeElements } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment, Text, Html } from "@react-three/drei"
import { motion } from "framer-motion"
import * as THREE from "three"

interface FlipbookProps {
  images: string[]
}

interface BookProps {
  images: string[]
  isOpen: boolean
  currentPage: number
  onPageChange: (page: number) => void
}

const Book: React.FC<BookProps> = ({ images, isOpen, currentPage, onPageChange }) => {
  const bookRef = useRef<THREE.Group>(null)
  const pagesRef = useRef<THREE.Group[]>([])

  useFrame((state) => {
    if (bookRef.current) {
      // Gentle floating animation
      bookRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      bookRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05
    }
  })

  const handlePageClick = (pageIndex: number) => {
    onPageChange(pageIndex)
  }

  return (
    <group ref={bookRef} position={[0, 0, 0]}>
      {/* Book Cover */}
      <mesh position={[0, 0, 0.1]} rotation={[0, 0, 0]}>
        <boxGeometry args={[4, 5.5, 0.2]} />
        <meshStandardMaterial color="#8B4513" roughness={0.8} metalness={0.1} />
      </mesh>

      {/* Book Pages */}
      {images.map((image, index) => {
        const pageRotation = isOpen ? (index <= currentPage ? -Math.PI * 0.8 : 0) : 0
        const pagePosition: [number, number, number] = [
          isOpen ? (index <= currentPage ? -2 : 2) : 0,
          0,
          0.15 + index * 0.01,
        ]

        return (
          <group key={index} position={pagePosition}>
            <mesh
              rotation={[0, pageRotation, 0]}
              onClick={() => handlePageClick(index)}
              ref={(el) => {
                if (el) pagesRef.current[index] = el.parent as THREE.Group
              }}
            >
              <planeGeometry args={[3.8, 5.3]} />
              <meshStandardMaterial color="white" side={THREE.DoubleSide} roughness={0.9} metalness={0.0} />
            </mesh>

            {/* Page Content */}
            <Html
              position={[0, 0, 0.01]}
              transform
              occlude
              style={{
                width: "300px",
                height: "400px",
                pointerEvents: "none",
              }}
            >
              <div className="w-full h-full bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={image || `/placeholder.svg?height=400&width=300&query=Book page ${index + 1}`}
                  alt={`Page ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </Html>
          </group>
        )
      })}

      {/* Book Title */}
      <Text
        position={[0, 2, 0.3]}
        fontSize={0.3}
        color="#FFD700"
        anchorX="center"
        anchorY="middle"
        font="/helvetica-255/Helvetica-Bold.ttf"
      >
        Interactive Flipbook
      </Text>
    </group>
  )
}

const Scene: React.FC<{
  images: string[]
  isOpen: boolean
  currentPage: number
  onPageChange: (page: number) => void
}> = ({ images, isOpen, currentPage, onPageChange }) => {
  const { camera } = useThree()

  useEffect(() => {
    if (isOpen) {
      camera.position.set(0, 2, 8)
    } else {
      camera.position.set(0, 0, 6)
    }
  }, [isOpen, camera])

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        maxPolarAngle={Math.PI / 2}
        minDistance={4}
        maxDistance={12}
      />

      <ambientLight intensity={0.4} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-10, -10, -10]} intensity={0.3} />

      <Environment preset="studio" />

      <Book images={images} isOpen={isOpen} currentPage={currentPage} onPageChange={onPageChange} />

      {/* Floor reflection */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#f0f0f0" roughness={0.1} metalness={0.1} transparent opacity={0.3} />
      </mesh>
    </>
  )
}

const Flipbook3D: React.FC<FlipbookProps> = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)

  const handleBookClick = () => {
    setIsOpen(!isOpen)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const goToNextPage = () => {
    if (currentPage < images.length - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            animate={{
              x: [0, Math.random() * window.innerWidth],
              y: [0, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      {/* 3D Canvas */}
      <Canvas shadows className="w-full h-full cursor-pointer" onClick={handleBookClick}>
        <Suspense fallback={null}>
          <Scene images={images} isOpen={isOpen} currentPage={currentPage} onPageChange={handlePageChange} />
        </Suspense>
      </Canvas>

      {/* UI Controls */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-black/20 backdrop-blur-md rounded-full px-6 py-3"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 0}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>

        <div className="text-white text-sm font-medium min-w-[80px] text-center">
          {isOpen ? `${currentPage + 1} / ${images.length}` : "Click to Open"}
        </div>

        <button
          onClick={goToNextPage}
          disabled={currentPage === images.length - 1}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
          </svg>
        </button>
      </motion.div>

      {/* Instructions */}
      {!isOpen && (
        <motion.div
          className="absolute top-8 left-1/2 transform -translate-x-1/2 text-white text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h1 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            3D Interactive Flipbook
          </h1>
          <p className="text-lg opacity-80">Click the book to open • Drag to rotate • Scroll to zoom</p>
        </motion.div>
      )}

      {/* Page indicator */}
      {isOpen && (
        <motion.div
          className="absolute top-8 right-8 bg-black/20 backdrop-blur-md rounded-lg p-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="flex flex-col gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPage ? "bg-purple-400 scale-125" : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default Flipbook3D
