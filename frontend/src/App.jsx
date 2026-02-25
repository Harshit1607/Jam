import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-black bg-gradient-to-br from-white to-neutral-500 bg-clip-text text-transparent italic tracking-tighter">
          PROJECT JAM
        </h1>
        <p className="text-neutral-500 max-w-md mx-auto text-lg">
          A minimalist placeholder for something extraordinary.
        </p>
      </div>

      <Footer />
    </div>
  )
}

export default App
