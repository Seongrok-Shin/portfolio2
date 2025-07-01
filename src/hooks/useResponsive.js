import {useState, useEffect, useCallback} from 'react';

// breakpoints
export const breakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
};

// custom hook for responsive
export const useResponsive = () => {
    const [screenSize, setScreenSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0
    });

    const updateScreenSize = useCallback(() => {
        setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        window.addEventListener('resize', updateScreenSize);
        return () => window.removeEventListener('resize', updateScreenSize);
    }, [updateScreenSize]);

    const isXs = useCallback(() => screenSize.width < breakpoints.sm, [screenSize.width]);
    const isSm = useCallback(() => screenSize.width >= breakpoints.sm && screenSize.width < breakpoints.md, [screenSize.width]);
    const isMd = useCallback(() => screenSize.width >= breakpoints.md && screenSize.width < breakpoints.lg, [screenSize.width]);
    const isLg = useCallback(() => screenSize.width >= breakpoints.lg && screenSize.width < breakpoints.xl, [screenSize.width]);
    const isXl = useCallback(() => screenSize.width >= breakpoints.xl && screenSize.width < breakpoints.xxl, [screenSize.width]);
    const isXxl = useCallback(() => screenSize.width >= breakpoints.xxl, [screenSize.width]);

    const isMobile = useCallback(() => screenSize.width < breakpoints.md, [screenSize.width]);
    const isTablet = useCallback(() => screenSize.width >= breakpoints.md && screenSize.width < breakpoints.lg, [screenSize.width]);
    const isDesktop = useCallback(() => screenSize.width >= breakpoints.lg, [screenSize.width]);

    const getResponsiveValue = useCallback((values) => {
        const {xs, sm, md, lg, xl, xxl} = values;

        if (screenSize.width >= breakpoints.xxl && xxl !== undefined) return xxl;
        if (screenSize.width >= breakpoints.xl && xl !== undefined) return xl;
        if (screenSize.width >= breakpoints.lg && lg !== undefined) return lg;
        if (screenSize.width >= breakpoints.md && md !== undefined) return md;
        if (screenSize.width >= breakpoints.sm && sm !== undefined) return sm;
        return xs;
    }, [screenSize.width]);

    return {
        screenSize,
        isXs: isXs(),
        isSm: isSm(),
        isMd: isMd(),
        isLg: isLg(),
        isXl: isXl(),
        isXxl: isXxl(),
        isMobile: isMobile(),
        isTablet: isTablet(),
        isDesktop: isDesktop(),
        getResponsiveValue,
        breakpoints
    };
};

export const useResponsiveFontSize = (sizeMap) => {
    const {getResponsiveValue} = useResponsive();
    return getResponsiveValue(sizeMap);
};

export const useResponsiveClassName = (classMap) => {
    const {getResponsiveValue} = useResponsive();
    return getResponsiveValue(classMap);
};

export const useResponsiveValue = (valueMap) => {
    const {getResponsiveValue} = useResponsive();
    return getResponsiveValue(valueMap);
};
