import React, { useState, useMemo } from "react";
import { useSwipeable } from "react-swipeable";
import {
  startOfWeek,
  addWeeks,
  format,
  eachDayOfInterval,
  endOfWeek,
  addDays,
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
  const [currentWeek, setCurrentWeek] = useState(new Date());

  const startOfCurrentWeek = startOfWeek(currentWeek, { weekStartsOn: 1 }); // Monday as the start of the week

  const weeks = useMemo(
    () =>
      Array.from({ length: 5 }, (_, i) =>
        eachDayOfInterval({
          start: addDays(startOfCurrentWeek, i * 7),
          end: endOfWeek(addDays(startOfCurrentWeek, i * 7), {
            weekStartsOn: 1,
          }),
        })
      ),
    [startOfCurrentWeek]
  );

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentWeek(addWeeks(currentWeek, 1)),
    onSwipedRight: () => setCurrentWeek(addWeeks(currentWeek, -1)),
  });

  const getLessonsForDay = (day: Date) => {
    return lessons?.filter(
      (lesson) =>
        format(new Date(lesson.date), "yyyy-MM-dd") ===
        format(day, "yyyy-MM-dd")
    );
  };

  return (
    <>
      <div className="w-fit flex gap-8 items-center">
        <div className="flex items-center gap-5">
          <ImageAtom
            onClick={() => setCurrentWeek(addWeeks(currentWeek, -1))}
            type={ImageEnum.enum_defaultSvg}
            className="[&>svg]:stroke-text_primary w-4 h-3 rotate-180 cursor-pointer"
            icon={<ArrowIcon />}
          />
          <TextAtom type={TextAtomEnum.enum_h4} className="font-bold">
            {format(startOfCurrentWeek, "MMMM yyyy", { locale: ru })}
          </TextAtom>
          <ImageAtom
            onClick={() => setCurrentWeek(addWeeks(currentWeek, 1))}
            type={ImageEnum.enum_defaultSvg}
            className="[&>svg]:stroke-text_primary w-4 h-3 cursor-pointer"
            icon={<ArrowIcon />}
          />
        </div>
        <div>
          <button onClick={() => setCurrentWeek(new Date())}>Сегодня</button>
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
            {weeks.map((week, weekIndex) => (
              <tr key={weekIndex}>
                {week.map((day: Date) => (
                  <td
                    key={day.toISOString()}
                    className="w-[14%] h-[88px] pt-1 px-[2px] pb-[2px] relative"
                  >
                    <TextAtom
                      type={TextAtomEnum.enum_h6}
                      className="text-[#C8C5CD] absolute top-[3px] right-[3px] text-right"
                    >
                      {format(day, "d")}
                    </TextAtom>
                    {getLessonsForDay(day)?.map((lesson, index) => (
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
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default React.memo(ScheduleLayout);
