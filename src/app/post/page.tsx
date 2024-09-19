const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            {/* Header */}
            <div className="w-full bg-teal-600 text-white py-4 px-6 rounded-lg shadow-lg mb-8">
                <h1 className="text-3xl font-bold text-center">Simple Dashboard</h1>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                {/* Card 1 */}
                <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                    <h3 className="text-xl font-semibold text-teal-700">Total Users</h3>
                    <p className="text-3xl font-bold mt-2">1,245</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                    <h3 className="text-xl font-semibold text-teal-700">Sales</h3>
                    <p className="text-3xl font-bold mt-2">$25,430</p>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                    <h3 className="text-xl font-semibold text-teal-700">New Signups</h3>
                    <p className="text-3xl font-bold mt-2">432</p>
                </div>
            </div>

            {/* Charts Section */}
            <div className="mt-8 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Chart 1 Placeholder */}
                <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                    <h3 className="text-xl font-semibold text-teal-700">Revenue Growth</h3>
                    <div className="mt-4 h-48 bg-gray-200 rounded-lg"></div>
                </div>

                {/* Chart 2 Placeholder */}
                <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                    <h3 className="text-xl font-semibold text-teal-700">User Engagement</h3>
                    <div className="mt-4 h-48 bg-gray-200 rounded-lg"></div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
