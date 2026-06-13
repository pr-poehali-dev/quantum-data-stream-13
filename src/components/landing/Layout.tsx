import { ReactNode } from 'react'
import { Squares } from "./squares-background"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden relative" style={{backgroundColor: '#0a0500'}}>
      <div className="absolute inset-0 z-10">
        <Squares
          direction="diagonal"
          speed={0.3}
          squareSize={48}
          borderColor="#2a1a0a"
          hoverFillColor="#3d1f06"
        />
      </div>
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}