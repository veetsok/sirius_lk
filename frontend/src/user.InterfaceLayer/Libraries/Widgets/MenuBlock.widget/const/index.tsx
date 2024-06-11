import HomeIcon from "@/user.InterfaceLayer/Libraries/shared/icons/home.svg?react";
import ScheduleIcon from "@/user.InterfaceLayer/Libraries/shared/icons/schedule.svg?react";
import PaymentIcon from "@/user.InterfaceLayer/Libraries/shared/icons/payment.svg?react";
import AchievementsIcon from "@/user.InterfaceLayer/Libraries/shared/icons/achievements.svg?react";
import SimulatorIcon from "@/user.InterfaceLayer/Libraries/shared/icons/simulators.svg?react";
import LibraryIcon from "@/user.InterfaceLayer/Libraries/shared/icons/library.svg?react";
import SettingsIcon from "@/user.InterfaceLayer/Libraries/shared/icons/settings.svg?react";
import QuestionsIcon from "@/user.InterfaceLayer/Libraries/shared/icons/questions.svg?react";
import HeadsetIcon from "@/user.InterfaceLayer/Libraries/shared/icons/headset.svg?react";

export const menuElements = [
  { title: "Главная", icon: <HomeIcon />, section: "main" },
  { title: "Расписание", icon: <ScheduleIcon />, section: "schedule" },
  { title: "Оплата", icon: <PaymentIcon />, section: "payment" },
  {
    title: "Достижения",
    icon: <AchievementsIcon />,
    section: "achievements",
  },
  { title: "Тренажеры", icon: <SimulatorIcon />, section: "simulators" },
  { title: "Библиотека", icon: <LibraryIcon />, section: "library" },
  { title: "Проверка связи", icon: <HeadsetIcon />, section: "headset" },
  { title: "Настройки", icon: <SettingsIcon />, section: "settings" },
  { title: "Вопросы", icon: <QuestionsIcon />, section: "questions" },
];
