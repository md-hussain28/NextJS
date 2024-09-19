import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full h-screen bg-teal-800 flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl text-white font-bold mb-6">Welcome To My Blog Post</h1>
      
      <div className="flex flex-col space-y-4">
        <Link href="/register" className="bg-teal-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-teal-500 transition duration-300">
          Register
        </Link>
        <Link href="/login" className="bg-teal-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-teal-500 transition duration-300">
          Login
        </Link>
      </div>
    </div>
  );
}
