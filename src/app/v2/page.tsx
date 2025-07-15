import { NextPage } from 'next';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Alexy Cruz | Portfolio v2.0 - Under Construction',
  description: 'Portfolio v2.0 is currently under construction. Something amazing is coming!',
};

const PortfolioV2: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center px-4">
      <div className="text-center text-white max-w-2xl">
        {/* Animated construction emoji */}
        <div className="text-8xl mb-8 animate-bounce">
          🚧
        </div>
        
        {/* Main heading */}
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Portfolio v2.0
        </h1>
        
        {/* Funny subtitle */}
        <h2 className="text-2xl font-semibold mb-6 text-yellow-300">
          Currently Under Construction
        </h2>
        
        {/* Funny message */}
        <div className="space-y-4 mb-8 text-lg">
          <p className="text-gray-300">
            🔨 I'm busy crafting something <span className="text-yellow-400 font-semibold">EPIC</span> here!
          </p>
          <p className="text-gray-300">
            Think of it as my portfolio hitting the gym 💪<br/>
            Same great content, but with more <span className="text-pink-400 font-semibold">style</span> and <span className="text-green-400 font-semibold">superpowers</span>!
          </p>
          <p className="text-gray-300">
            ☕ Fueled by coffee, powered by <span className="text-blue-400 font-semibold">React</span>, and seasoned with a pinch of magic ✨
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <p className="text-sm text-gray-400 mb-2">Progress: Still loading coffee...</p>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full w-1/4 animate-pulse"></div>
          </div>
        </div>

        {/* Fun features coming */}
        <div className="mb-8 p-6 bg-black/30 rounded-lg backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-4 text-yellow-300">🎉 What's Coming:</h3>
          <ul className="text-left space-y-2 text-gray-300">
            <li>🎨 Sleeker design (because who doesn't love pretty things?)</li>
            <li>🚀 Better performance (faster than my morning coffee kick)</li>
            <li>📱 Enhanced mobile experience (thumb-friendly guaranteed)</li>
            <li>🎪 Cool animations (prepare to be dazzled)</li>
            <li>🎮 Maybe some Easter eggs (because why not?)</li>
          </ul>
        </div>

        {/* Call to action buttons */}
        <div className="text-center">
          <Link 
            href="/" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
          >
            🏠 Visit Current Portfolio
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-12 text-sm text-gray-400">
          <p>
            Meanwhile, enjoy some <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">elevator music</a> 🎵
          </p>
          <p className="mt-2">
            Expected completion: When it's ready (classic developer answer 😄)
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioV2; 