import React, { useState, useMemo } from "react";
import { useSwipeable } from "react-swipeable";
import {
  format,
  parse,
  addDays,
  startOfMonth,
  eachWeekOfInterval,
  endOfMonth,
  addMonths,
} from "date-fns";
import { ru } from "date-fns/locale";
import TextAtom from "../../UI_KIT/Atoms/Text.Atom";
import TextAtomEnum from "../../UI_KIT/Atoms/Text.Atom/enum";
import ImageAtom from "../../UI_KIT/Atoms/Image.Atom";
import ImageEnum from "../../UI_KIT/Atoms/Image.Atom/enum";
import ArrowIcon from "@/user.InterfaceLayer/Libraries/shared/icons/arrow.svg?react";
import QuestionIcon from "@/user.InterfaceLayer/Libraries/shared/icons/question.svg?react";
import PaymentIcon from "@/user.InterfaceLayer/Libraries/shared/icons/payment.svg?react";
import { TProducts } from "@/business.InterfaceLayer/type";
import ButtonAtom from "../../UI_KIT/Atoms/Button.Atom";
import ButtonAtomEnum from "../../UI_KIT/Atoms/Button.Atom/enum";
import SelectMolecule from "../../UI_KIT/Molecules/Select.Molecule";

interface ScheduleLayoutProps {
  lessons?: TProducts[];
}

const ScheduleLayout: React.FC<ScheduleLayoutProps> = (props) => {
  const { lessons } = props;

  const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вc"];
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const startOfCurrentMonth = startOfMonth(currentMonth); // Начало текущего месяца

  const weeks = useMemo(
    () =>
      eachWeekOfInterval(
        {
          start: startOfCurrentMonth,
          end: endOfMonth(startOfCurrentMonth),
        },
        { weekStartsOn: 1 } // Устанавливаем понедельник как начало недели
      ),
    [startOfCurrentMonth]
  );

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentMonth(addMonths(currentMonth, 1)),
    onSwipedRight: () => setCurrentMonth(addMonths(currentMonth, -1)),
  });

  const getLessonsForDay = (day: Date) => {
    return lessons?.filter(
      (lesson) =>
        format(parse(lesson.date, "dd.MM.yyyy", new Date()), "yyyy-MM-dd") ===
        format(day, "yyyy-MM-dd")
    );
  };

  const getScheduleStyle = (id: number) => {
    switch (id) {
      case 1:
        return { background: "bg_accent", border: "border_tertiary" };
      case 2:
        return { background: "bg_secondary", border: "border_third" };
      case 3:
        return { background: "bg_main", border: "border_sec" };
      case 4:
        return { background: "bg_yellow", border: "border_access" };
      case 5:
        return { background: "bg_blue", border: "border_secondary" };
      default:
        return { background: "bg_purple", border: "border_tertiary" };
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-[27px]">
        <div className="w-[253px] h-9">
          <SelectMolecule />
        </div>
        <ButtonAtom
          className="w-[344px] bg-[#DECFFF] font-normal text-white text-[16px] !text-bg_tertiary"
          type={ButtonAtomEnum.enum_defaultButton}
        >
          Изменить
        </ButtonAtom>
      </div>

      <div className="w-fit flex gap-8 items-center mb-3">
        <div className="flex items-center gap-5">
          <ImageAtom
            onClick={() => setCurrentMonth(addMonths(currentMonth, -1))}
            type={ImageEnum.enum_defaultSvg}
            className="[&>svg]:stroke-text_primary w-4 h-3 rotate-180 cursor-pointer"
            icon={<ArrowIcon />}
          />
          <TextAtom type={TextAtomEnum.enum_h4} className="font-bold">
            {format(startOfCurrentMonth, "MMMM yyyy", { locale: ru })}
          </TextAtom>
          <ImageAtom
            onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
            type={ImageEnum.enum_defaultSvg}
            className="[&>svg]:stroke-text_primary w-4 h-3 cursor-pointer"
            icon={<ArrowIcon />}
          />
        </div>
        <div className="flex items-center gap-5">
          <ButtonAtom
            type={ButtonAtomEnum.enum_defaultButton}
            className="border-[1px] border-solid border-[#8d7fc7] bg-transparent font-normal"
            onClick={() => setCurrentMonth(new Date())}
          >
            <TextAtom type={TextAtomEnum.enum_h5}>Сегодня</TextAtom>
          </ButtonAtom>
          <ImageAtom
            type={ImageEnum.enum_defaultSvg}
            className="w-6 h-6 cursor-pointer"
            icon={<QuestionIcon />}
          />
        </div>
      </div>

      <div {...handlers} className="weekly-calendar">
        <table className="w-[95%] h-full">
          <thead>
            <tr>
              {daysOfWeek.map((day) => (
                <th key={day}>
                  <TextAtom type={TextAtomEnum.enum_h4} className="text-right">
                    {day}
                  </TextAtom>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="h-full">
            {weeks.map((weekStart, rowIndex) => (
              <tr key={rowIndex}>
                {daysOfWeek.map((_, dayIndex) => {
                  const currentDate = addDays(weekStart, dayIndex);
                  return (
                    <td
                      key={currentDate.toISOString()}
                      className="w-[14%] h-[88px] pt-1 px-[2px] pb-[2px] relative"
                    >
                      <TextAtom
                        type={TextAtomEnum.enum_h6}
                        className="text-[#C8C5CD] absolute top-[3px] right-[3px] text-right"
                      >
                        {format(currentDate, "d")}
                      </TextAtom>
                      {getLessonsForDay(currentDate)?.map((lesson, index) => (
                        <div
                          key={index}
                          className={`flex flex-col relative bg-${
                            getScheduleStyle(lesson.id).background
                          } border-${
                            getScheduleStyle(lesson.id).border
                          } h-[34px] p-1 text-left rounded-[2px] gap-1 overflow-hidden border-[0.5px] border-solid`}
                        >
                          <TextAtom type={TextAtomEnum.enum_h6}>
                            {lesson.time}
                          </TextAtom>
                          <TextAtom type={TextAtomEnum.enum_h6}>
                            {lesson.title}
                          </TextAtom>
                          <ImageAtom
                            type={ImageEnum.enum_defaultSvg}
                            icon={<PaymentIcon />}
                            className="[&>svg]:stroke-[#E12828] w-[14px] h-[14px] absolute top-[3px] right-[3px]"
                          />
                        </div>
                      ))}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default React.memo(ScheduleLayout);
