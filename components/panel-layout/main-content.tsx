'use client'

interface MainContentProps {
  children: React.ReactNode
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <main className="ml-64 mt-16 p-6 bg-gray-50 min-h-screen">
      {children}
    </main>
  )
}