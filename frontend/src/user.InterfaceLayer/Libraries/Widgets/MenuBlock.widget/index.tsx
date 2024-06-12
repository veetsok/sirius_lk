import React from "react";
import ImageAtom from "../../UI_KIT/Atoms/Image.Atom";
import ImageEnum from "../../UI_KIT/Atoms/Image.Atom/enum";
import LogoIcon from "@/user.InterfaceLayer/Libraries/shared/icons/logo.svg?react";
import { globalBgRadius } from "@/user.InterfaceLayer/constants/styles/CommonStyles";
import ButtonAtom from "../../UI_KIT/Atoms/Button.Atom";
import ButtonAtomEnum from "../../UI_KIT/Atoms/Button.Atom/enum";
import { menuElements } from "./const";
import TextAtom from "../../UI_KIT/Atoms/Text.Atom";
import TextAtomEnum from "../../UI_KIT/Atoms/Text.Atom/enum";
import GiftIcon from "@/user.InterfaceLayer/Libraries/shared/icons/gift.svg?react";

interface MenuBlockProps {
  onSectionChange: (section: string) => void;
  activeSection: string;
}

const MenuBlock: React.FC<MenuBlockProps> = ({
  onSectionChange,
  activeSection,
}) => {
  return (
    <div
      className={`${globalBgRadius} flex flex-col bg-bg_secondary mt-6 pt-[44px] pb-[22px] px-5 gap-10`}
    >
      <ImageAtom
        type={ImageEnum.enum_defaultSvg}
        icon={<LogoIcon />}
        className="ml-5"
      />
      <div className="flex flex-col ml-[-20px]">
        {menuElements.map((e, index) => (
          <ButtonAtom
            className="flex items-center gap-2 pl-[44px]"
            type={ButtonAtomEnum.enum_tabButton}
            key={index}
            isActive={activeSection === e.section}
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
      <div className="flex flex-col gap-[10px] w-[196px] mt-[10px] bg-bg_primary overflow-hidden relative px-4 pt-4 pb-[10px] rounded-[15px] text-bg_tertiary">
        <TextAtom type={TextAtomEnum.enum_h4}>Учитесь бесплатно</TextAtom>
        <TextAtom
          type={TextAtomEnum.enum_h6}
          className="max-w-[146px] leading-[120%]"
        >
          Приводите друзей с детьми заниматься в Sirius Future и получайте
          подарки!
        </TextAtom>
        <ImageAtom
          type={ImageEnum.enum_defaultSvg}
          icon={<GiftIcon />}
          className="w-[78px] h-[68px] absolute right-[-5px] bottom-[-10px]"
        />
        <button className="bg-[#d8ecff] py-2 px-4 text-[12px] w-fit rounded-[15px]">
          Узнать
        </button>
      </div>
    </div>
  );
};

export default React.memo(MenuBlock);
