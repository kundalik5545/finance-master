export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
      <div className="container mx-auto px-5 md:px-10 lg:px-20">
        {/* Hero Section */}
        <header className="flex flex-col items-center justify-center py-16 md:py-24 border-b border-gray-200 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Finance Master
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-6">
            Take control of your finances with an all-in-one platform that helps
            you track income, manage expenses, set budgets, and analyze trends.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full mb-10">
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Track Everything
              </h3>
              <p className="text-gray-600">
                Monitor your daily, weekly, monthly, and yearly transactions
                with advanced filters and breakdowns.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-purple-600 mb-2">
                Smart Dashboards
              </h3>
              <p className="text-gray-600">
                Visualize income vs. expenses, top categories, and financial
                trends using interactive charts and summaries.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                Multiple Accounts
              </h3>
              <p className="text-gray-600">
                Add and manage multiple bank accounts, view balances, deposits,
                and withdrawals all in one place.
              </p>
            </div>
          </div>

          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg transition-colors duration-300">
            Get Started For Free
          </button>
        </header>
      </div>
    </div>
  );
}
