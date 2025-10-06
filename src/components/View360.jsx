import React, { useState, useRef } from "react";
import { RotateCcw } from "lucide-react";

export default function View360({ carId, framesCount = 36 }) {
  const [showViewer, setShowViewer] = useState(false);
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentIndex = useRef(0);

  // --- Drag Logic ---
  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX;
    currentIndex.current = index;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - startX.current;
    const frameShift = Math.floor(diff / 10); // slower drag
    setIndex((currentIndex.current - frameShift + framesCount) % framesCount);
  };

  const handleMouseUp = () => setIsDragging(false);

  // --- Manual Controls ---
  const nextFrame = () => setIndex((i) => (i + 1) % framesCount);
  const prevFrame = () => setIndex((i) => (i - 1 + framesCount) % framesCount);

  return (
    <div className="mt-6">
      {/* Title */}
      <h4 className="text-gray-900 dark:text-white font-semibold mb-2 flex items-center gap-2">
        <RotateCcw size={20} className="text-teal-400 animate-spin-slow" />
        360° View
      </h4>

      {/* Thumbnail Preview */}
      <div
        onClick={() => setShowViewer(true)}
        className="relative cursor-pointer rounded-xl overflow-hidden bg-gradient-to-b from-slate-800 to-black p-4 hover:scale-[1.02] transition-all"
      >
        <img
          src={`/car360/car-${carId}/frame-${index + 1}.jpg`}
          alt="Car 360 preview"
          className="w-full h-72 object-contain mx-auto select-none"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-all">
          <div className="flex items-center gap-2 text-white font-semibold text-lg">
            <RotateCcw size={24} className="animate-spin-slow" />
            <span>360° View</span>
          </div>
        </div>
      </div>

      {/* Fullscreen Viewer */}
      {showViewer && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setShowViewer(false)}
        >
          {/* Main Image */}
          <img
            src={`/car360/car-${carId}/frame-${index + 1}.jpg`}
            alt="360 view"
            className="w-full h-full object-contain select-none cursor-grab"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          />

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevFrame();
            }}
            className="absolute left-6 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
          >
            ◀
          </button>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextFrame();
            }}
            className="absolute right-6 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
          >
            ▶
          </button>

          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-teal-400 transition"
            onClick={() => setShowViewer(false)}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
