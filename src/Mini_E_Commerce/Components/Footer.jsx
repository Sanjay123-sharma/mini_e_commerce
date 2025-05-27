import React from 'react'

export default function Footer() {
  return (
     <footer className="bg-gray-900 text-white py-6 static bottom-3">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-m text-gray-400 text-center">
          &copy; {new Date().getFullYear()} Made by{" "}
          <span className="text-white font-bold">Sanjay</span>
        </p>
      </div>
    </footer>
  )
}
