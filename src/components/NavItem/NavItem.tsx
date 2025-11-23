import { useEffect, useState } from "react";
import { LabelStyle, ListElStyle, SubMenuStyle } from "./NavItem.style";

const NavItem = ({ label, children, customRef }: PropsType) => {
  const [dropdownActive, setDropdownActive] = useState(false);

  useEffect(() => {
    const handleMouseDownClick = (e: MouseEvent) => {
      if (
        customRef &&
        customRef.current &&
        !customRef.current.contains(e.target as HTMLElement)
      ) {
        setDropdownActive(false);
      }
    };
    document.addEventListener("mousedown", handleMouseDownClick);

    return () =>
      document.removeEventListener("mousedown", handleMouseDownClick);
  }, [customRef, setDropdownActive]);
  return (
    <>
      <ListElStyle>
        <LabelStyle
          isArrow={children ? true : false}
          ref={customRef}
          onClick={
            customRef ? () => setDropdownActive(!dropdownActive) : undefined
          }
          className={dropdownActive ? "active" : ""}
        >
          {label}
        </LabelStyle>
        {dropdownActive && <SubMenuStyle>{children}</SubMenuStyle>}
      </ListElStyle>
    </>
  );
};

export default NavItem;

type PropsType = {
  label: string;
  children?: React.ReactNode;
  customRef?: React.RefObject<HTMLInputElement | null>;
};
