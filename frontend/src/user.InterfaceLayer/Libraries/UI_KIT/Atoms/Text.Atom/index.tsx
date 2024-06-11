import React from "react";
import { TextAtomProps } from "./type";
import TextAtomEnum from "./enum";
import mobile from "./styled/styled.module.css";
import { ITextAtomPropsDefault } from "./mock";
import { textStyles } from "./styled/styled";
import SkeletonAtom from "../Skeleton.Atom";

const TextAtom: React.FC<TextAtomProps> = (props) => {
  const { type, children, className, isLoading } = props;

  if (isLoading) return <SkeletonAtom />;

  switch (type) {
    case TextAtomEnum.enum_h1:
      return (
        <h1 className={`${className} ${mobile.h1} ${textStyles} text-h1`}>
          {children}
        </h1>
      );
    case TextAtomEnum.enum_h2:
      return (
        <h2 className={`${className} ${mobile.h2} ${textStyles} text-h2`}>
          {children}
        </h2>
      );
    case TextAtomEnum.enum_h3:
      return (
        <h3 className={`${className} ${mobile.h3} ${textStyles} text-h3`}>
          {children}
        </h3>
      );
    case TextAtomEnum.enum_h4:
      return (
        <h4 className={`${className} ${mobile.h4} ${textStyles} text-h4`}>
          {children}
        </h4>
      );
    case TextAtomEnum.enum_h5:
      return (
        <h5 className={`${className} ${mobile.h5} ${textStyles} text-h5`}>
          {children}
        </h5>
      );
    case TextAtomEnum.enum_h6:
      return (
        <h6 className={`${className} ${mobile.h6} ${textStyles} text-h6`}>
          {children}
        </h6>
      );
    // case TextAtomEnum.enum_subtitle_1:
    //   return (
    //     <h6
    //       className={`${className} ${mobile.h6} ${textStyles} text-[16px] leading-[150%] font-normal`}
    //     >
    //       {children}
    //     </h6>
    //   );
    // case TextAtomEnum.enum_subtitle_2:
    //   return (
    //     <h6
    //       className={`${className} ${mobile.h6} ${textStyles} text-[14px] leading-[171%] font-normal`}
    //     >
    //       {children}
    //     </h6>
    //   );
    default:
      return <h5 className="text-h5 text-red">Error</h5>;
  }
};

TextAtom.defaultProps = ITextAtomPropsDefault;
export default React.memo(TextAtom);
