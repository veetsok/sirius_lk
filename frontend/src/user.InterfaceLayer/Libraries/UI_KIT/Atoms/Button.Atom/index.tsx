import React from "react";
import { IButtonAtomPropsDefault } from "./mock";
import ButtonAtomEnum from "./enum";
import { ButtonAtomProps } from "./type";
import SkeletonAtom from "../Skeleton.Atom";
import { globalBgRadius } from "@/user.InterfaceLayer/constants/styles/CommonStyles";

const ButtonAtom: React.FC<ButtonAtomProps> = (props) => {
  const {
    children,
    className,
    isActive,
    onClick,
    type,
    isLoading,
    disabled,
    style,
  } = props;

  if (isLoading) {
    return <SkeletonAtom />;
  }

  switch (type) {
    case ButtonAtomEnum.enum_defaultButton: {
      return (
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onClick?.(e);
          }}
          style={style}
          disabled={disabled}
          className={`${className} justify-center flex cursor-pointer text-[14px] font-normal leading-[135%] py-2 px-[10px] rounded-[15px]`}
        >
          {children}
        </button>
      );
    }
    case ButtonAtomEnum.enum_tabButton: {
      return (
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onClick?.(e);
          }}
          style={style}
          disabled={disabled}
          className={`${className} inline-block cursor-pointer text-[16px] font-bold py-[6px] ${
            isActive
              ? "text-text_secondary [&>div>svg]:stroke-bg_white bg-[#8d7fc7] rounded-[0_30px_30px_0]"
              : "text-text_primary [&>div>svg]:stroke-text_primary deep [&>svg]:max-w-full"
          }`}
        >
          {children}
        </button>
      );
    }
    case ButtonAtomEnum.enum_textButton: {
      return (
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onClick?.(e);
          }}
          style={style}
          disabled={disabled}
          className={`${className} ${globalBgRadius} py-[13px] justify-center border-dashed	border-[1px] border-bg_tertiary text-bg_tertiary text-[16px] leading-[143%] text-center font-normal`}
        >
          {children}
        </button>
      );
    }
    default: {
      return (
        <button className="text-text_error rounded-md w-full py-3">
          Ошибка
        </button>
      );
    }
  }
};

ButtonAtom.defaultProps = IButtonAtomPropsDefault;
export default React.memo(ButtonAtom);
