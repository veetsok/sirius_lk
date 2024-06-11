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
import PaymentIcon from "@/user.InterfaceLayer/Libraries/shared/icons/payment.svg?react";
import { TProducts } from "@/business.InterfaceLayer/type";

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
      eachWeekOfInterval({
        start: startOfCurrentMonth,
        end: endOfMonth(startOfCurrentMonth),
      }),
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

  return (
    <>
      <div className="w-fit flex gap-8 items-center">
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
        <div>
          <button onClick={() => setCurrentMonth(new Date())}>Сегодня</button>
          {/* <QuestionsIcon isActive={false} className={icon} /> */}
        </div>
      </div>

      <div {...handlers} className="weekly-calendar">
        <table className="w-[95%] h-full">
          {daysOfWeek.map((day) => (
            <th>
              <TextAtom
                key={day}
                type={TextAtomEnum.enum_h4}
                className="text-right"
              >
                {day}
              </TextAtom>
            </th>
          ))}
          <tbody className="h-full">
            {weeks.map((day, rowIndex) => (
              <tr key={rowIndex}>
                {daysOfWeek.map((_, dayIndex) => {
                  const currentDate = addDays(day, dayIndex);
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
                          className="flex flex-col relative bg-[#BBE7B9] h-[34px] p-1 text-left rounded-[2px] gap-1 overflow-hidden border-[0.5px] border-solid border-[#bbe7b9]"
                        >
                          <TextAtom type={TextAtomEnum.enum_h6}>
                            {lesson.date}
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
