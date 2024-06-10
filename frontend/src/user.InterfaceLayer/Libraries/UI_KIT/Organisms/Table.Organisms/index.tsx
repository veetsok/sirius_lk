import React from "react";
import TextAtom from "../../Atoms/Text.Atom";
import TextAtomEnum from "../../Atoms/Text.Atom/enum";
import { TableBlockProps } from "./type";
import { globalBgRadius } from "@/user.InterfaceLayer/constants/styles/CommonStyles";

const TableBlock: React.FC<TableBlockProps> = (props) => {
  const { title, tbody, tbodyStyle } = props;

  return (
    <div
      className={`${globalBgRadius} flex flex-col h-fit bg-bg_white border-solid border-[1px] border-border_primary pt-7 px-6 pb-[30px]`}
    >
      <TextAtom type={TextAtomEnum.enum_h3}>{title}</TextAtom>
      <div className="thead2 text-text_primary">
        <table className="w-full table-fixed">
          {tbody?.map((row, rowIndex) => (
            <tbody
              key={rowIndex}
              className="border-b-[1px] last:border- border-border_primary"
            >
              <tr>
                <td className="w-[75%]">
                  <TextAtom type={TextAtomEnum.enum_h5}>{row.title}</TextAtom>
                </td>
                <td className="w-[40px] rounded-full">
                  <TextAtom type={TextAtomEnum.enum_h4}>
                    {tbody.length}
                  </TextAtom>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default React.memo(TableBlock);
