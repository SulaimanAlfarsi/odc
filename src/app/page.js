import Navbar from './commponent/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-sans">
              Welcome to Oman Developers Club
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-sans">
              Building the future of technology in Oman, one developer at a time.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
