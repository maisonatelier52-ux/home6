import { Metadata } from "next";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
    title: "408 Connection Timeout | The Quest for Profit",
    description: "The server timed out waiting for the request.",
};

export default function EditorialPolicyPage() {
    return (
        <div className="bg-white min-h-screen flex flex-col justify-between">
            <div>
                <Header />
                <Navbar />
                <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col items-center justify-center text-center">
                    <h1 className="text-8xl font-black text-gray-900 tracking-wider">408</h1>
                    <h2 className="text-2xl font-bold text-gray-800 mt-4 font-serif">Connection Timeout</h2>
                    <p className="text-gray-500 mt-2 max-w-md">
                        The server closed the connection because the request took too long. Please try again later.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
