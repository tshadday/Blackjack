import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-green-600 via-green-500 to-green-600">
      <div>
        <h1>Blackjack</h1>
      </div>

      <div>
        <button>Play</button>
      </div>
    </main>
  )
}
