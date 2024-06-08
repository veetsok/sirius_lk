import React from "react";
import ImageAtom from "../../UI_KIT/Atoms/Image.Atom";
import ImageEnum from "../../UI_KIT/Atoms/Image.Atom/enum";
import LogoIcon from "@/user.InterfaceLayer/Libraries/shared/icons/logo.svg?react";
import { globalBgRadius } from "@/user.InterfaceLayer/constants/styles/CommonStyles";
import HomeIcon from "@/user.InterfaceLayer/Libraries/shared/icons/home.svg?react";
import ScheduleIcon from "@/user.InterfaceLayer/Libraries/shared/icons/schedule.svg?react";
import PaymentIcon from "@/user.InterfaceLayer/Libraries/shared/icons/payment.svg?react";
import AchievementsIcon from "@/user.InterfaceLayer/Libraries/shared/icons/achievements.svg?react";
import SimulatorIcon from "@/user.InterfaceLayer/Libraries/shared/icons/simulators.svg?react";
import LibraryIcon from "@/user.InterfaceLayer/Libraries/shared/icons/library.svg?react";
import SettingsIcon from "@/user.InterfaceLayer/Libraries/shared/icons/settings.svg?react";
import QuestionsIcon from "@/user.InterfaceLayer/Libraries/shared/icons/questions.svg?react";
import HeadsetIcon from "@/user.InterfaceLayer/Libraries/shared/icons/headset.svg?react";
import ButtonAtom from "../../UI_KIT/Atoms/Button.Atom";
import ButtonAtomEnum from "../../UI_KIT/Atoms/Button.Atom/enum";
import TextAtom from "../../UI_KIT/Atoms/Text.Atom";

interface MenuBlockProps {}

const MenuBlock: React.FC<MenuBlockProps> = () => {
  const menuElements = [
    { title: "Главная", icon: <HomeIcon /> },
    { title: "Расписание", icon: <ScheduleIcon /> },
    { title: "Оплата", icon: <PaymentIcon /> },
    { title: "Достижения", icon: <AchievementsIcon /> },
    { title: "Тренажеры", icon: <SimulatorIcon /> },
    { title: "Библиотека", icon: <LibraryIcon /> },
    { title: "Проверка связи", icon: <HeadsetIcon /> },
    { title: "Настройки", icon: <SettingsIcon /> },
    { title: "Вопросы", icon: <QuestionsIcon /> },
  ];

  return (
    <div
      className={`${globalBgRadius} flex flex-col bg-bg_secondary pt-[44px] pb-[22px] px-5`}
    >
      <ImageAtom type={ImageEnum.enum_defaultSvg} icon={<LogoIcon />} />
      <div className="flex flex-col">
        {menuElements.map((e, index) => (
          <ButtonAtom
            className="flex items-center gap-2"
            type={ButtonAtomEnum.enum_tabButton}
            key={index}
          >
            <ImageAtom type={ImageEnum.enum_defaultSvg} icon={e.icon} />
            {e.title}
          </ButtonAtom>
        ))}
      </div>
    </div>
  );
};

export default React.memo(MenuBlock);
