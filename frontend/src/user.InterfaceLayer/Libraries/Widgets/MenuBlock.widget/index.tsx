import React from "react";
import ImageAtom from "../../UI_KIT/Atoms/Image.Atom";
import ImageEnum from "../../UI_KIT/Atoms/Image.Atom/enum";
import LogoIcon from "@/user.InterfaceLayer/Libraries/shared/icons/logo.svg?react";
import { globalBgRadius } from "@/user.InterfaceLayer/constants/styles/CommonStyles";
import ButtonAtom from "../../UI_KIT/Atoms/Button.Atom";
import ButtonAtomEnum from "../../UI_KIT/Atoms/Button.Atom/enum";
import { menuElements } from "./const";

interface MenuBlockProps {
  onSectionChange: (section: string) => void;
}

const MenuBlock: React.FC<MenuBlockProps> = ({ onSectionChange }) => {
  return (
    <div
      className={`${globalBgRadius} flex flex-col bg-bg_secondary mt-6 pt-[44px] pb-[22px] px-5`}
    >
      <ImageAtom type={ImageEnum.enum_defaultSvg} icon={<LogoIcon />} />
      <div className="flex flex-col">
        {menuElements.map((e, index) => (
          <ButtonAtom
            className="flex items-center gap-2"
            type={ButtonAtomEnum.enum_tabButton}
            key={index}
            onClick={() => onSectionChange(e.section)}
          >
            <ImageAtom
              className="w-[18px] h-[18px] flex items-center justify-center"
              type={ImageEnum.enum_defaultSvg}
              icon={e.icon}
            />
            {e.title}
          </ButtonAtom>
        ))}
      </div>
    </div>
  );
};

export default React.memo(MenuBlock);
