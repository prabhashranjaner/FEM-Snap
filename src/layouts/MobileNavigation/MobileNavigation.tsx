import type { Dispatch, SetStateAction } from "react";
import {
  CancleIconWrapperStyle,
  ListWrapperStyle,
  OverlayStyle,
  WrapperStyle,
} from "./MobileNavigation.style";
import NavList from "../../components/NavList/NavList";

const MobileNavigation = ({
  IsMobileMenuActive,
  setIsMobileMenuActive,
}: PropsType) => {
  return (
    <>
      <OverlayStyle
        className={IsMobileMenuActive ? "active" : ""}
        onClick={() => setIsMobileMenuActive(false)}
      />
      <WrapperStyle className={IsMobileMenuActive ? "active" : ""}>
        <CancleIconWrapperStyle>
          <img
            alt="close"
            src="/public/images/icon-close-menu.svg"
            onClick={() => setIsMobileMenuActive(false)}
          />
        </CancleIconWrapperStyle>
        <ListWrapperStyle>
          <NavList />
        </ListWrapperStyle>
      </WrapperStyle>
    </>
  );
};

export default MobileNavigation;

type PropsType = {
  IsMobileMenuActive: boolean;
  setIsMobileMenuActive: Dispatch<SetStateAction<boolean>>;
};
