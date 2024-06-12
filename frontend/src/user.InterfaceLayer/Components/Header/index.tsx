import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import ImageAtom from "@/user.InterfaceLayer/Libraries/UI_KIT/Atoms/Image.Atom";
import ImageEnum from "@/user.InterfaceLayer/Libraries/UI_KIT/Atoms/Image.Atom/enum";
import TextAtom from "@/user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.Atom";
import TextAtomEnum from "@/user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.Atom/enum";
import MessageIcon from "@/user.InterfaceLayer/Libraries/shared/icons/message.svg?react";
import ProfileIcon from "@/user.InterfaceLayer/Libraries/shared/icons/header.svg?react";
import AnnaIcon from "@/user.InterfaceLayer/Libraries/shared/icons/anna.svg?react";
import ArrowIcon from "@/user.InterfaceLayer/Libraries/shared/icons/arrow-down.svg?react";
import LeaveIcon from "@/user.InterfaceLayer/Libraries/shared/icons/leave.svg?react";
import PolygonIcon from "@/user.InterfaceLayer/Libraries/shared/icons/polygon.svg?react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdown = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  const handleClickOutsideMenu = useCallback(
    (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    },
    [setIsOpen]
  );

  const handleMenuClick = useCallback((event: React.MouseEvent) => {
    event.stopPropagation(); // Stop propagation to prevent closing the menu
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, [handleClickOutsideMenu]);

  return (
    <header
      className={`shadow-custom rounded-[0_0_20px_20px] py-3 pl-8 flex pr-[58px] justify-between items-center`}
    >
      <TextAtom type={TextAtomEnum.enum_h3}>
        Добро пожаловать, <span className="text-[#7362bc]">Михаил!</span>
      </TextAtom>
      <div
        onClick={handleToggleDropdown}
        className="flex items-center gap-4 relative cursor-pointer"
      >
        <ImageAtom
          type={ImageEnum.enum_defaultSvg}
          className="w-[45px] h-[45px]"
          icon={<MessageIcon />}
        />
        <div className="flex items-center gap-2">
          <ImageAtom
            type={ImageEnum.enum_defaultSvg}
            className="w-[45px] h-[45px]"
            icon={<ProfileIcon />}
          />
          <ImageAtom
            type={ImageEnum.enum_defaultSvg}
            className="w-[10px] h-[6px]"
            icon={<ArrowIcon />}
          />
        </div>
        {isOpen && (
          <div
            ref={menuRef}
            onClick={handleMenuClick}
            className="absolute p-[30px] top-[69px] right-0 rounded-[12px] border-[1px] border-solid border-[#7362bc] bg-white z-10 inline-flex flex-col"
          >
            <div className="relative min-w-[190px] flex flex-col gap-3">
              <TextAtom type={TextAtomEnum.enum_h4}>
                Смена пользователя
              </TextAtom>

              <ImageAtom
                type={ImageEnum.enum_defaultSvg}
                className="w-3 h-[9px] absolute top-[-40px] right-0"
                icon={<PolygonIcon />}
              />
              <div className="flex flex-col gap-2 text-bg_tertiary">
                <div className="flex items-center gap-2 bg-bg_secondary p-2 rounded-[12px]">
                  <ImageAtom
                    type={ImageEnum.enum_defaultSvg}
                    className="w-[45px] h-[45px]"
                    icon={<ProfileIcon />}
                  />
                  <div className="flex flex-col gap-1">
                    <TextAtom type={TextAtomEnum.enum_h5}>Михаил</TextAtom>
                    <TextAtom type={TextAtomEnum.enum_h6}>Это вы</TextAtom>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-transparent p-2 rounded-[12px]">
                  <ImageAtom
                    type={ImageEnum.enum_defaultSvg}
                    className="w-[45px] h-[45px]"
                    icon={<AnnaIcon />}
                  />
                  <TextAtom type={TextAtomEnum.enum_h5}>Анна</TextAtom>
                </div>
              </div>
              <div className="w-full h-[1px] bg-bg_secondary"></div>
              <div className="flex justify-between items-center">
                <TextAtom
                  type={TextAtomEnum.enum_h4}
                  className="text-[#008aff]"
                >
                  Выход
                </TextAtom>
                <ImageAtom
                  type={ImageEnum.enum_defaultSvg}
                  className="w-6 h-6"
                  icon={<LeaveIcon />}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
export default React.memo(Header);
