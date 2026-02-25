import React, { useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function Preloader({ onCapture }) {
    const [promptText, setPromptText] = useState("Point to this camera");
    const [isLoaded, setIsLoaded] = useState(false);

    const onLoad = (splineApp) => {
        setIsLoaded(true);
        console.log("Spline Scene Loaded!");

        // The user mentioned "point the camera to this" doesn't change text. 
        // We can listen for "lookAt", "mouseHover" or even generic interactions 
        // depending on what triggers in the Spline scene. Because we don't know the exact 
        // object name, we will try to make the hover broad, or use "lookAt" if the camera implements it.

        splineApp.addEventListener('lookAt', (e) => {
            setPromptText("Click the camera to enter the website");
        });

        // Fallback: If any object gets hovered, assume they found the camera lens.
        splineApp.addEventListener('mouseHover', (e) => {
            setPromptText("Click the camera to enter the website");
        });

        splineApp.addEventListener('mouseDown', (e) => {
            onCapture();
        });
    };

    return (
        <div className="absolute inset-0 w-full h-full z-0 flex flex-col items-center justify-center bg-black overflow-hidden relative">
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <div className="w-12 h-12 border-4 border-gray-600 border-t-white rounded-full animate-spin"></div>
                </div>
            )}

            {/* We use scale-25 to make the camera 25% of its original size. 
                We also ensure the container remains centered. */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-full h-full transform scale-[0.25] flex items-center justify-center">
                    <Spline
                        scene="https://prod.spline.design/SnlBqWghdXTax5r6/scene.splinecode"
                        onLoad={onLoad}
                    />
                </div>
            </div>

            <div className="absolute bottom-20 left-0 right-0 text-center pointer-events-none z-10 transition-all duration-300">
                <p className="text-white text-xl tracking-[0.2em] font-light drop-shadow-[0_2px_10px_rgba(0,0,0,1)] bg-black/30 backdrop-blur-md italic inline-block px-8 py-3 rounded-full border border-white/10">
                    {promptText}
                </p>
            </div>
        </div>
    );
}
