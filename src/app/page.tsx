export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-sm md:max-w-4xl bg-white rounded-xl shadow-lg p-6 md:p-12 text-center transition-all duration-300">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          준비 중...
        </h1>

        {/* Mobile View Indicator */}
        <div className="block md:hidden bg-blue-100 text-blue-800 p-4 rounded-lg font-medium shadow-inner">
          📱 스마트폰 접속 감지
        </div>

        {/* PC View Indicator */}
        <div className="hidden md:block bg-green-100 text-green-800 p-6 rounded-lg font-medium text-lg shadow-inner">
          💻 PC / 태블릿 접속 감지
        </div>

        <p className="mt-6 text-gray-500 text-sm md:text-base">
          현재 준비중입니다. 며칠만 기다려주세요.
        </p>
      </div>
    </main>
  );
}
