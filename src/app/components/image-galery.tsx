"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { images } from "./image-data";

export { images };

export default function ImageGallery({ images: displayImages }: { images?: string[] }) {
    const imagesToDisplay = displayImages || images;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const openImageModal = (index: number) => {
        setCurrentIndex(index);
        setIsOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeImageModal = () => {
        setIsOpen(false);
        document.body.style.overflow = "";
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % imagesToDisplay.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + imagesToDisplay.length) % imagesToDisplay.length);
    };

    const selectImage = (index: number) => {
        setCurrentIndex(index);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;

            if (e.key === "Escape") closeImageModal();
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    return (
        <>
            {/* Gallery Preview */}
            <div className="flex gap-3 overflow-x-auto pb-2">
                {imagesToDisplay.map((img, index) => (
                    <div key={index} onClick={() => openImageModal(index)}>
                        <Image
                            src={img}
                            alt="Gallery"
                            width={500}
                            height={300}
                            className="cursor-pointer rounded-lg"
                        />
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black/80 flex flex-col items-center justify-center">
                    {/* Close */}
                    <button
                        onClick={closeImageModal}
                        className="absolute top-5 right-5 text-white text-2xl"
                    >
                        ✕
                    </button>

                    {/* Main Image */}
                    <Image
                        src={imagesToDisplay[currentIndex]}
                        alt="Preview"
                        width={800}
                        height={500}
                        className="rounded-lg"
                    />

                    {/* Counter */}
                    <p className="text-white mt-2">
                        {currentIndex + 1} / {imagesToDisplay.length}
                    </p>

                    {/* Navigation */}
                    <div className="flex gap-4 mt-4">
                        <button onClick={prevImage} className="text-white">
                            ⬅ Prev
                        </button>
                        <button onClick={nextImage} className="text-white">
                            Next ➡
                        </button>
                    </div>

                    {/* Thumbnails */}
                    <div className="flex gap-2 mt-4">
                        {imagesToDisplay.map((img, index) => (
                            <Image
                                key={index}
                                src={img}
                                alt="thumb"
                                width={80}
                                height={60}
                                onClick={() => selectImage(index)}
                                className={`cursor-pointer rounded border ${index === currentIndex
                                        ? "border-indigo-500 ring-2 ring-indigo-500/30"
                                        : "opacity-60"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}