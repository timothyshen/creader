'use client'
import { ListCoverView } from '@/components/ListCoverView'
import React from 'react'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer'
import { useAutoConnect } from "@/hooks/useAutoConnect";

export default function Home() {
    useAutoConnect();
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center bg-white rounded-xl shadow-lg p-8">
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Welcome to Creader</h1>
                        <p className="text-xl text-gray-600 mb-8">Follow these steps to get started:</p>
                        <ol className="text-left space-y-4 max-w-md mx-auto">
                            {[
                                "Create an account",
                                'Create a Cover via "Create +"',
                                "Add books to the list",
                                "Start reading"
                            ].map((step, index) => (
                                <li key={index} className="flex items-center">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full mr-3">
                                        {index + 1}
                                    </span>
                                    <span className="text-gray-700">{step}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8 mx-auto">
                        <ListCoverView />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}