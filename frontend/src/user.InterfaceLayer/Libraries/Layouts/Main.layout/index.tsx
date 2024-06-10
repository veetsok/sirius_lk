import React from "react";
import { MainLayoutProps } from "./type";
import Image from "next/image";
import { globalBgRadius } from "@/user.InterfaceLayer/constants/styles/CommonStyles";
import TextAtom from "../../UI_KIT/Atoms/Text.Atom";
import TextAtomEnum from "../../UI_KIT/Atoms/Text.Atom/enum";
import ButtonAtomEnum from "../../UI_KIT/Atoms/Button.Atom/enum";
import ButtonAtom from "../../UI_KIT/Atoms/Button.Atom";
import ReportBlockCeil from "@/user.InterfaceLayer/Libraries/UI_KIT/Cells/ImagesTeam.Cell";
import SchooltaskIcon from "@/user.InterfaceLayer/Libraries/shared/icons/schooltask.svg?react";
import TableBlockOrganisms from "@/user.InterfaceLayer/Libraries/UI_KIT/Organisms/Table.Organisms";

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  return (
    <div className="flex flex-col ml-8 gap-5">
      <div className="flex gap-5 mt-5">
        <div
          className={`${globalBgRadius} pl-[40px] pr-[164px] py-[56px] relative bg-border_primary overflow-hidden`}
        >
          <div className="flex flex-col gap-3 max-w-[322px] text-text_secondary">
            <TextAtom type={TextAtomEnum.enum_h1}>
              До 31 декабря любой курс со скидкой 20%
            </TextAtom>
            <TextAtom type={TextAtomEnum.enum_h4}>
              До конца года у вас есть уникальная возможность воспользоваться
              нашей новогодней скидкой 20% на любой курс!
            </TextAtom>
          </div>
          <div className="absolute right-[-69px] top-0 h-[248px] w-[261px]">
            <Image
              src={"/images/add_banner.png"}
              alt="banner"
              className="w-full h-full"
              width={261}
              height={248}
            />
          </div>
        </div>

        <div
          className={`${globalBgRadius} flex flex-col gap-8 py-8 px-[62px] bg-bg_yellow text-center`}
        >
          <TextAtom type={TextAtomEnum.enum_h3}>
            Следующее занятие <br /> начнется через:
          </TextAtom>
          <div className="flex items-center justify-center">
            <TextAtom type={TextAtomEnum.enum_h3}>6 Д 12 Ч 24 МИН</TextAtom>
          </div>

          <ButtonAtom type={ButtonAtomEnum.enum_textButton}>Button</ButtonAtom>
        </div>

        <div className="flex flex-col justify-between">
          <ReportBlockCeil
            className="bg-bg_blue"
            title="Домашние задания"
            icon={<SchooltaskIcon />}
          />
          <ReportBlockCeil
            className="bg-bg_purple"
            title="Отчеты от учителей"
            icon={<SchooltaskIcon />}
          />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex w-[33%]">
          <TableBlockOrganisms title="Баланс занятий" />
        </div>
        <div className="flex w-[67%]">
          <TableBlockOrganisms title="Ближайшие уроки" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(MainLayout);
