import React, {Suspense, useEffect} from "react";
import "./App.css";
import loadable from '@loadable/component';
import {initializeImagePreloading} from './utils/imagePreloader';

// Code splitting with loadable components for better performance
const Home = loadable(() => import('./section/Home'), {
    fallback: <div className="loading-spinner">Loading...</div>
});

function App() {
    // Initialize image preloading on app mount
    useEffect(() => {
        // Preload critical images for better performance
        initializeImagePreloading();
    }, []);

    return (
        <div className="App optimize-text preload-fonts">
            <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
                <Home/>
            </Suspense>
        </div>
    );
}

export default App;
