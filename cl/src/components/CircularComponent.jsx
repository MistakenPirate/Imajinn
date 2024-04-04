import React, { useState } from 'react';

const CircularComponent = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            setSelectedImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const resetImage = () => {
        setSelectedImage(null);
    };

    const [items, setItems] = useState([
        { id: 1, text: 'Item 1', isOpen: false },
    ]);

    const toggleItem = (id) => {
        setItems(
            items.map((item) =>
                item.id === id ? { ...item, isOpen: !item.isOpen } : item
            )
        );
    };

    return (
        <div className="flex items-start pt-2">
            <div className="relative w-52 h-52 rounded-full border-4 overflow-hidden border-gray-300 flex items-center justify-center">
                {selectedImage ? (
                    <img
                        src={selectedImage}
                        alt="Selected"
                        className="w-64 h-64 rounded-full object-cover"
                    />
                ) : (
                    <label
                        htmlFor="image-upload"
                        className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer"
                        onClick={resetImage}
                    >
                        <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        <input
                            id="image-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageUpload}
                        />
                    </label>
                )}
            </div>
            <div className="flex flex-col ml-4 ">
                <label
                    htmlFor="image-upload"
                    className="px-4 py-2 shadow-sm ml-4 w-40 border bg-slate-50 rounded-md cursor-pointer"
                    onClick={resetImage}
                >
                    Choose Image
                </label>
                <div className="flex-grow pt-2">
                    <div>
                        {items.map((item) => (
                            <div key={item.id} >
                                <button
                                    type="button"
                                    className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-900 "
                                    onClick={() => toggleItem(item.id)}
                                >
                                    <svg
                                        className={`w-5 h-5 transition-transform ${item.isOpen ? 'transform rotate-90' : ''
                                            }`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className='font-light'>Or choose one of our defaults</span>
                                </button>
                                {item.isOpen && (
                                    <div className="px-4 py-2 font-thin">
                                        default photos
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CircularComponent;