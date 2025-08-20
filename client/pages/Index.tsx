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
      <div className="w-full max-w-[315px] sm:max-w-[340px] md:max-w-[360px] mx-auto">
        {/* Main Card */}
        <div className="bg-gray-50 border border-black/12 rounded-2xl shadow-[0_4px_32px_rgba(0,0,0,0.16)] overflow-hidden relative flex flex-col" style={{ width: '315px', height: '523px' }}>
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-4 py-2 h-14 flex items-center gap-3 flex-shrink-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/0a1d4a864dc6b222470eb78d972ae6fa7b757e08?width=80"
              alt="AI Term Highlighter App Icon"
              className="w-10 h-10 aspect-square object-cover"
            />
            <h1 className="text-gray-900 font-medium text-base flex-1">
              AI Term Highlighter
            </h1>
          </div>

          {/* Content */}
          <div className="px-4 pt-4 pb-[92px] space-y-4">
            {/* Info Banner */}
            <div className="bg-[#E7E6FA] border-2 border-[#D1CFF6] rounded-2xl py-3 px-4">
              <p className="text-[#552C9C] text-sm leading-5 font-normal">
                Highlight a word on any page and get instant AI powered definitions. You don't
                need to scan the page first.
              </p>
            </div>

            {/* Select Domain */}
            <div className="space-y-0">
              <div className="bg-white border border-[#E3E3E5] rounded-2xl py-3 pr-1 pl-4 flex flex-col gap-2.5">
                <div className="flex items-center w-full">
                  <div className="flex flex-col flex-1">
                    <span className="text-[#6C6D70] text-xs font-normal leading-4 overflow-hidden text-ellipsis whitespace-nowrap">
                      Select domain
                    </span>
                    <div className="flex items-center w-full">
                      <span className="text-[#222] text-base font-normal leading-6 tracking-[-0.32px] flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                        Marketing
                      </span>
                    </div>
                  </div>
                  <div className="p-2 flex items-start">
                    <ChevronDown className="w-6 h-6 text-[#8D8E91]" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
              <div className="pt-1.5 px-4">
                <p className="text-[#6C6D70] text-xs leading-4">
                  Pick a domain so we can focus on the right terminology
                </p>
              </div>
            </div>

            {/* Highlight Color */}
            <div className={`bg-white border border-[#E3E3E5] rounded-[20px] p-4 relative transition-opacity duration-200 ${!isToggleOn ? 'opacity-40' : ''}`}>
              <h3 className="text-[#222] font-medium text-sm mb-3.5 leading-5">
                Highlight color
              </h3>
              <div className="flex items-center gap-3">
                {highlightColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => isToggleOn && setSelectedColor(color.name)}
                    disabled={!isToggleOn}
                    className="relative w-8 h-8 rounded-full flex items-center justify-center cursor-pointer disabled:cursor-not-allowed"
                    style={{ backgroundColor: color.color }}
                  >
                    {selectedColor === color.name && (
                      <>
                        <div
                          className="absolute -inset-1 rounded-full border-2 flex-shrink-0"
                          style={{ borderColor: color.color }}
                        />
                        <svg
                          className="absolute left-1 top-1 w-6 h-6 flex-shrink-0"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2573 17.2929C9.86679 17.6834 9.23362 17.6834 8.8431 17.2929L4.56271 13.0125C4.1692 12.619 4.1692 11.981 4.56271 11.5875C4.95621 11.194 5.5942 11.194 5.98771 11.5875L9.55021 15.15L18.0127 6.68752C18.4062 6.29402 19.0442 6.29402 19.4377 6.68752C19.8312 7.08102 19.8312 7.71902 19.4377 8.11252L10.2573 17.2929Z"
                            fill="white"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Toggle Setting */}
            <div className={`bg-white border border-[#E3E3E5] rounded-[20px] relative ${isToggleOn ? 'h-[148px]' : 'h-[148px]'}`}>
              {/* Toggle Section */}
              <div className="p-4 flex items-center relative">
                <div className="w-[203px] h-10 flex items-center">
                  <span className="text-[#6C6D70] text-sm leading-5 font-normal">
                    Always highlight difficult terms while browsing
                  </span>
                </div>
                <button
                  onClick={() => setIsToggleOn(!isToggleOn)}
                  className="absolute right-4 top-6"
                >
                  <svg
                    width="40"
                    height="24"
                    viewBox="0 0 40 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-all duration-200"
                  >
                    <rect
                      width="40"
                      height="24"
                      rx="12"
                      fill={isToggleOn ? '#5046E4' : '#DCDCDC'}
                    />
                    <circle
                      cx={isToggleOn ? '28' : '12'}
                      cy="12"
                      r="9"
                      fill="white"
                      className="transition-all duration-200"
                    />
                  </svg>
                </button>
              </div>

              {/* Status Banner */}
              <div className="absolute left-3 top-[72px] w-[259px] h-16">
                {isToggleOn ? (
                  <div className="bg-[#E3F9E7] border-2 border-[#C1F4C4] rounded-2xl py-3 px-4 h-full flex items-center">
                    <span className="text-[#176724] text-sm leading-5 font-normal">
                      Scanner enabled. You can now scan pages and highlight terms.
                    </span>
                  </div>
                ) : (
                  <div className="bg-[#E8F6FB] border-2 border-[#C1ECF4] rounded-2xl py-3 px-4 h-full flex items-center">
                    <span className="text-[#175667] text-sm leading-5 font-normal">
                      Scanner disabled. No highlighting will occur.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Button */}
          <div className="bg-white border-t border-[#E3E3E5] p-4 h-[76px] flex items-center flex-shrink-0">
            <button
              disabled={!isToggleOn}
              className={`w-full h-12 bg-[#5046E4] text-white font-semibold text-base rounded-[60px] transition-all leading-6 ${!isToggleOn ? 'opacity-40 cursor-not-allowed' : 'hover:bg-[#5046E4]/90 cursor-pointer'}`}
            >
              Scan page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
