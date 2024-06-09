import React from "react";
import ImageAtom from "../../Atoms/Image.Atom";
import ImageEnum from "../../Atoms/Image.Atom/enum";
import TextAtom from "../../Atoms/Text.Atom";
import TextAtomEnum from "../../Atoms/Text.Atom/enum";

interface ReportBlockProps {
  className?: string;
  icon?: any;
  title?: any;
}

const ReportBlock: React.FC<ReportBlockProps> = (props) => {
  const { className, icon, title } = props;

  return (
    <div
      className={`${className} flex flex-col rounded-[20px] pt-4 pr-3 pb-3 pl-4 gap-[5px] max-w-[162px]`}
    >
      <TextAtom type={TextAtomEnum.enum_h3} className="max-w-[100px]">
        {title}
      </TextAtom>
      <div className="flex justify-end">
        <ImageAtom
          type={ImageEnum.enum_defaultSvg}
          icon={icon}
          className="py-[11px] px-[12px] rounded-[12px] w-[40px] h-[40px] bg-bg_white [&>div>svg]:w-[18px] [&>div>svg]:h-[20px] [&>div>svg]:stroke-bg_tertiary"
        />
      </div>
    </div>
  );
};

export default React.memo(ReportBlock);
