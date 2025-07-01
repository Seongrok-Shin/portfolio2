import React from "react";
import {useResponsive} from "../hooks/useResponsive";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

const Header = () => {
    const {isMobile} = useResponsive();

    // 모바일에서는 MobileHeader, 데스크톱&태블릿에서는 DesktopHeader 사용
    return isMobile ? <MobileHeader/> : <DesktopHeader/>;
};

export default Header;
