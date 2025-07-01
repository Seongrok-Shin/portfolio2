// Performance monitoring utility
export const performanceMonitor = {
    // Track component render times
    trackRenderTime: (componentName, startTime) => {
        const endTime = performance.now();
        const renderTime = endTime - startTime;

        if (renderTime > 16) { // Flag renders longer than 16ms (60fps threshold)
            console.warn(`Slow render detected in ${componentName}: ${renderTime.toFixed(2)}ms`);
        }

        return renderTime;
    },

    // Track image loading performance
    trackImageLoad: (imageSrc, startTime) => {
        const endTime = performance.now();
        const loadTime = endTime - startTime;

        console.log(`Image loaded: ${imageSrc} in ${loadTime.toFixed(2)}ms`);
        return loadTime;
    },

    // Monitor bundle size and loading performance
    trackBundleLoad: () => {
        if ('performance' in window) {
            const navigation = performance.getEntriesByType('navigation')[0];

            console.log('Performance Metrics:', {
                DOMContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
                LoadComplete: navigation.loadEventEnd - navigation.loadEventStart,
                FirstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 'N/A',
            });
        }
    },

    // Detect memory leaks
    trackMemoryUsage: () => {
        if ('memory' in performance) {
            const memInfo = performance.memory;

            if (memInfo.usedJSHeapSize / memInfo.totalJSHeapSize > 0.9) {
                console.warn('High memory usage detected:', {
                    used: `${(memInfo.usedJSHeapSize / 1048576).toFixed(2)}MB`,
                    total: `${(memInfo.totalJSHeapSize / 1048576).toFixed(2)}MB`,
                    limit: `${(memInfo.jsHeapSizeLimit / 1048576).toFixed(2)}MB`
                });
            }
        }
    }
};

// Web Vitals tracking
export const trackWebVitals = (onPerfEntry) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        import('web-vitals').then(({getCLS, getFID, getFCP, getLCP, getTTFB}) => {
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
        });
    }
};
