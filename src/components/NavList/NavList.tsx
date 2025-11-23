import { useRef } from "react";
import NavItem from "../NavItem/NavItem";
import CompanyList from "../SubMenu/CompanyList";
import FeatireList from "../SubMenu/FeatureList";
import { WrapperStyle } from "./NavList.style";

const NavList = () => {
  const featureRef = useRef<HTMLInputElement | null>(null);
  const compannyRef = useRef<HTMLInputElement | null>(null);

  return (
    <WrapperStyle>
      <NavItem label="Features" customRef={featureRef}>
        <FeatireList />
      </NavItem>
      <NavItem label="Company" customRef={compannyRef}>
        <CompanyList />
      </NavItem>
      <NavItem label="Careers"></NavItem>
      <NavItem label="About"></NavItem>
    </WrapperStyle>
  );
};

export default NavList;
