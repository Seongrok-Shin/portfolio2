import React from "react";
import {useResponsive} from "../hooks/useResponsive";
import MobileHeader from "./MobileHeader";
import TabletHeader from "./TabletHeader";
import DesktopHeader from "./DesktopHeader";

const Header = () => {
    const {isMobile, isTablet} = useResponsive();

    // 모바일에서는 MobileHeader, 태블릿에서는 TabletHeader, 데스크톱에서는 DesktopHeader 사용
    if (isMobile) {
        return <MobileHeader/>;
    } else if (isTablet) {
        return <TabletHeader/>;
    } else {
        return <DesktopHeader/>;
    }
};

export default Header;
