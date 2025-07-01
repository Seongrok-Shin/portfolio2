import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {trackWebVitals, performanceMonitor} from './utils/performanceMonitor';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Initialize performance monitoring
performanceMonitor.trackBundleLoad();

// Set up periodic memory monitoring
if (process.env.NODE_ENV === 'development') {
    setInterval(() => {
        performanceMonitor.trackMemoryUsage();
    }, 30000); // Check every 30 seconds in development
}

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

// Enhanced web vitals tracking
trackWebVitals((metric) => {
    console.log('Web Vital:', metric);

    // Optional: Send to analytics service
    // analytics.track('web-vital', metric);
});

reportWebVitals();
