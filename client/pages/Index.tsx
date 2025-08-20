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
      <div className="w-full max-w-[315px] mx-auto">
        {/* Main Card */}
        <div className="bg-gray-50 border border-black/12 rounded-2xl shadow-[0_4px_32px_rgba(0,0,0,0.16)] overflow-hidden relative" style={{ width: '315px', minHeight: '523px' }}>
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-4 py-2 h-14 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-purple-600 rounded-xl flex items-center justify-center shadow-sm relative">
              <div className="w-4 h-4 bg-purple-600 rounded-sm absolute bottom-0.5 left-0.5" />
              <div className="w-6 h-6 bg-teal-400 rounded-lg" />
            </div>
            <h1 className="text-gray-900 font-medium text-base flex-1">
              AI Term Highlighter
            </h1>
          </div>

          {/* Content */}
          <div className="px-4 pt-[72px] pb-4 space-y-4 relative" style={{ top: '-58px' }}>
            {/* Info Banner */}
            <div className="bg-[#E7E6FA] border-2 border-[#D1CFF6] rounded-2xl px-4 py-3">
              <p className="text-[#552C9C] text-sm leading-5 font-normal">
                Highlight a word on any page and get instant AI powered definitions. You don't
                need to scan the page first.
              </p>
            </div>

            {/* Select Domain */}
            <div className="space-y-1.5">
              <div className="bg-white border border-[#E3E3E5] rounded-2xl p-3">
                <div className="flex items-center justify-between">
                  <span className="text-[#6C6D70] text-base font-normal leading-6 tracking-[-0.32px]">Select domain</span>
                  <div className="p-2">
                    <ChevronDown className="w-6 h-6 text-[#8D8E91]" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
              <p className="text-[#6C6D70] text-xs px-4 leading-4">
                Pick a domain so we can focus on the right terminology
              </p>
            </div>

            {/* Highlight Color */}
            <div className="bg-white border border-[#E3E3E5] rounded-[20px] p-4 relative">
              <h3 className="text-[#222] font-medium text-sm mb-3.5 leading-5">
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
                        <Check className="w-6 h-6 text-white" strokeWidth={2} />
                      </>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Toggle Setting */}
            <div className="bg-white border border-[#E3E3E5] rounded-[20px] p-4 flex items-center justify-between">
              <p className="text-[#6C6D70] text-sm leading-5 pr-4 flex-1">
                Always highlight difficult terms while browsing
              </p>
              <button
                onClick={() => setIsToggleOn(!isToggleOn)}
                className={`w-10 h-6 rounded-full transition-colors flex-shrink-0 ${
                  isToggleOn ? 'bg-ai-purple-500' : 'bg-[#DCDCDC]'
                }`}
              >
                <div
                  className={`w-[18px] h-[18px] bg-white rounded-full transition-transform ${
                    isToggleOn ? 'translate-x-[19px]' : 'translate-x-[3px]'
                  } mt-[3px]`}
                />
              </button>
            </div>
          </div>

          {/* Bottom Button */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#E3E3E5] p-4 h-[76px] flex items-center">
            <button className="w-full h-12 bg-[#5046E4] text-white font-semibold text-base rounded-[60px] hover:bg-[#5046E4]/90 transition-colors leading-6">
              Scan page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
