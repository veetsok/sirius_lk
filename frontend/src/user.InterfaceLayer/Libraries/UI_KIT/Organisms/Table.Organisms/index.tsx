import React from "react";
import TextAtom from "../../Atoms/Text.Atom";
import TextAtomEnum from "../../Atoms/Text.Atom/enum";
import { TableBlockProps } from "./type";
import { globalBgRadius } from "@/user.InterfaceLayer/constants/styles/CommonStyles";
import TableBlockEnum from "./enum";
import ButtonAtom from "../../Atoms/Button.Atom";
import ButtonAtomEnum from "../../Atoms/Button.Atom/enum";
import { formatDate } from "./const";

const TableBlock: React.FC<TableBlockProps> = (props) => {
  const { title, tbody, type } = props;

  return (
    <div
      className={`${globalBgRadius} flex flex-col h-fit bg-bg_white border-solid border-[1px] border-border_primary pt-7 px-6 pb-[30px]`}
    >
      <TextAtom type={TextAtomEnum.enum_h3}>{title}</TextAtom>
      {type === TableBlockEnum.enum_balanceTable && (
        <div className="thead2 text-text_primary">
          <table className="w-full table-fixed">
            {tbody?.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="border-b-[1px] last:border-0 border-border_primary flex items-center justify-between py-[10px]"
              >
                <TextAtom type={TextAtomEnum.enum_h4}>{row.title}</TextAtom>
                <TextAtom
                  type={TextAtomEnum.enum_h4}
                  className="w-[40px] h-10 bg-bg_secondary py-5 rounded-full flex items-center justify-center"
                >
                  {tbody.length}
                </TextAtom>
              </div>
            ))}
          </table>
        </div>
      )}
      {type === TableBlockEnum.enum_scheduleTable && (
        <div className="thead2 text-text_primary">
          <table className="w-full table-fixed">
            {tbody?.map((row, rowIndex) => {
              const { day, month } = formatDate(row.date);
              return (
                <div
                  key={rowIndex}
                  className="border-b-[1px] justify-between last:border-0 border-border_primary flex items-center"
                >
                  <div className="w-[42px] flex flex-col gap-1">
                    <TextAtom type={TextAtomEnum.enum_h1}>{day}</TextAtom>
                    <TextAtom type={TextAtomEnum.enum_h6}>{month}</TextAtom>
                  </div>
                  <div className="flex gap-[15px]">
                    <TextAtom type={TextAtomEnum.enum_h5}>{row.title}</TextAtom>
                    <TextAtom type={TextAtomEnum.enum_h5}>{row.time}</TextAtom>
                    <TextAtom type={TextAtomEnum.enum_h5}>
                      {row.teacher}
                    </TextAtom>
                  </div>
                  <div className="flex justify-end">
                    <ButtonAtom
                      type={ButtonAtomEnum.enum_defaultButton}
                    ></ButtonAtom>
                    <ButtonAtom
                      type={ButtonAtomEnum.enum_defaultButton}
                    ></ButtonAtom>
                  </div>
                </div>
              );
            })}
          </table>
        </div>
      )}
    </div>
  );
};

export default React.memo(TableBlock);
