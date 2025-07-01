import {useMemo, useCallback, useRef, useEffect} from 'react';

// Custom hook for performance optimizations
export const usePerformance = () => {
    // Debounce function for performance optimization
    const useDebounce = (callback, delay) => {
        const timeoutRef = useRef(null);

        return useCallback((...args) => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => callback(...args), delay);
        }, [callback, delay]);
    };

    // Throttle function for scroll events
    const useThrottle = (callback, delay) => {
        const lastRun = useRef(Date.now());

        return useCallback((...args) => {
            if (Date.now() - lastRun.current >= delay) {
                callback(...args);
                lastRun.current = Date.now();
            }
        }, [callback, delay]);
    };

    // Intersection observer hook for lazy loading
    const useIntersectionObserver = (options = {}) => {
        const elementRef = useRef(null);
        const observerRef = useRef(null);

        const {threshold = 0.1, rootMargin = '50px'} = options;

        useEffect(() => {
            const element = elementRef.current;
            if (!element) return;

            observerRef.current = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('in-view');
                        }
                    });
                },
                {threshold, rootMargin}
            );

            observerRef.current.observe(element);

            return () => {
                if (observerRef.current) {
                    observerRef.current.disconnect();
                }
            };
        }, [threshold, rootMargin]);

        return elementRef;
    };

    // Memoized style calculator
    const useMemoizedStyles = (styleObject, dependencies = []) => {
        return useMemo(() => styleObject, dependencies);
    };

    return {
        useDebounce,
        useThrottle,
        useIntersectionObserver,
        useMemoizedStyles
    };
};

// Image preloader utility
export const preloadImage = (src) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
};

// Batch image preloader
export const preloadImages = async (imageSources) => {
    try {
        const promises = imageSources.map(src => preloadImage(src));
        return await Promise.all(promises);
    } catch (error) {
        console.warn('Some images failed to preload:', error);
        return [];
    }
};
