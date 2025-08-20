import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

export default function Index() {
  const [selectedColor, setSelectedColor] = useState("purple");
  const [isToggleOn, setIsToggleOn] = useState(false);

  const highlightColors = [
    { name: "yellow", color: "#FBBE25" },
    { name: "orange", color: "#FB933E" },
    { name: "blue", color: "#3C81F6" },
    { name: "green", color: "#13B981" },
    { name: "pink", color: "#EE4799" },
    { name: "purple", color: "#905FFC" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-sm mx-auto">
        {/* Main Card */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl shadow-[0_4px_32px_rgba(0,0,0,0.16)] overflow-hidden">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-sm">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
              </svg>
            </div>
            <h1 className="text-gray-900 font-medium text-base flex-1">
              AI Term Highlighter
            </h1>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4">
            {/* Info Banner */}
            <div className="bg-ai-purple-100 border-2 border-ai-purple-200 rounded-2xl p-3">
              <p className="text-ai-purple-600 text-sm leading-5">
                Highlight a word on any page and get instant AI powered definitions. You don't 
                need to scan the page first.
              </p>
            </div>

            {/* Select Domain */}
            <div className="space-y-1">
              <div className="bg-white border border-gray-200 rounded-2xl p-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-base">Select domain</span>
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                </div>
              </div>
              <p className="text-gray-500 text-xs px-4">
                Pick a domain so we can focus on the right terminology
              </p>
            </div>

            {/* Highlight Color */}
            <div className="bg-white border border-gray-200 rounded-[20px] p-4">
              <h3 className="text-gray-900 font-medium text-sm mb-3.5">
                Highlight color
              </h3>
              <div className="flex items-center gap-3">
                {highlightColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className="relative w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: color.color }}
                  >
                    {selectedColor === color.name && (
                      <>
                        <div 
                          className="absolute -inset-1 rounded-full border-2"
                          style={{ borderColor: color.color }}
                        />
                        <Check className="w-6 h-6 text-white" strokeWidth={2.5} />
                      </>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Toggle Setting */}
            <div className="bg-white border border-gray-200 rounded-[20px] p-4 flex items-center justify-between">
              <p className="text-gray-500 text-sm leading-5 pr-4">
                Always highlight difficult terms while browsing
              </p>
              <button
                onClick={() => setIsToggleOn(!isToggleOn)}
                className={`w-10 h-6 rounded-full transition-colors ${
                  isToggleOn ? 'bg-ai-purple-500' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    isToggleOn ? 'translate-x-5' : 'translate-x-1'
                  } mt-1`}
                />
              </button>
            </div>
          </div>

          {/* Bottom Button */}
          <div className="bg-white border-t border-gray-200 p-4">
            <button className="w-full h-12 bg-ai-purple-700 text-white font-semibold text-base rounded-[60px] hover:bg-ai-purple-700/90 transition-colors">
              Scan page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
