import React from "react";
import Link from "next/link";
import ImageAtom from "@/user.InterfaceLayer/Libraries/UI_KIT/Atoms/Image.Atom";
import ImageEnum from "@/user.InterfaceLayer/Libraries/UI_KIT/Atoms/Image.Atom/enum";
import LogoIcon from "@/user.InterfaceLayer/Libraries/shared/icons/logo.svg?react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={`shadow-custom `}>
      <Link href={"/"} className="max-w-[180px] sm:max-w-[135px]">
        <ImageAtom
          className="w-[180px] sm:w-[135px]"
          type={ImageEnum.enum_defaultSvg}
          icon={<LogoIcon />}
        />
      </Link>
    </header>
  );
};
export default React.memo(Header);
