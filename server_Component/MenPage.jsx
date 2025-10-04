// app/men/page.jsx
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const categories = [
    { label: "All", value: "all" },
    { label: "Jordan", value: "jordan" },
    { label: "Lifestyle", value: "lifestyle" },
    { label: "Running", value: "running" },
    { label: "Training & Gym", value: "training" },
];

// ✅ This is a **Server Component**
export default async function MenPage() {
    // Fetch product data on the server
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/products.json`, {
        cache: "no-store",
    });
    const data = await res.json();
    const menProducts = data.menProducts || [];

    return <MenClient menProducts={menProducts} />;
}

// ✅ This is a **Client Component** for filtering & UI interactions
"use client";

const MenClient = ({ menProducts }) => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [filteredProducts, setFilteredProducts] = useState(menProducts);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
    }, []);

    useEffect(() => {
        if (selectedCategory === "all") {
            setFilteredProducts(menProducts);
        } else {
            setFilteredProducts(menProducts.filter((p) => p.category === selectedCategory));
        }
    }, [selectedCategory, menProducts]);

    return (
        <div className="min-h-screen bg-gray-50 font-serif">
            <Navbar cartCount={cart.length} />
            <div className="container mx-auto py-12 px-4">
                <h1 className="text-4xl font-bold mb-4 text-blue-600">Men&apos;s Collection</h1>
                <p className="text-gray-600 mb-6 text-lg">
                    Explore the latest Nike shoes and apparel for men. Comfort, performance, and style—just for you.
                </p>

                {/* Category Buttons */}
                <div className="flex flex-wrap gap-3 mb-6">
                    {categories.map((cat) => (
                        <button
                            key={cat.value}
                            className={`px-4 py-2 rounded-lg border transition-all ${selectedCategory === cat.value
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "border-blue-600 text-blue-600 hover:bg-blue-100"
                                }`}
                            onClick={() => setSelectedCategory(cat.value)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col"
                        >
                            <img
                                src={product.img}
                                alt={product.name}
                                className="h-64 object-contain mb-4 cursor-pointer"
                            />
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="text-gray-500 text-sm mb-1">{product.color}</p>
                            <p className="font-bold text-gray-900 mb-3">{product.price}</p>
                            <Link
                                href={{
                                    pathname: `/product/${product.id}`,
                                    query: { from: "/men" },
                                }}
                                className="text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                            >
                                View Details
                            </Link>
                        </div>
                    ))}

                    {filteredProducts.length === 0 && (
                        <div className="col-span-full text-center text-gray-500 py-10">
                            No products found in this category.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};