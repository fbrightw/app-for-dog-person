import React from 'react'

export function App() {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="select">
                Select
            </label>
            <div className="relative">
                <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
            </div>
        </div>
    )
}