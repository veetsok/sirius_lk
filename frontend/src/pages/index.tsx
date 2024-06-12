import ImageAtom from "@/user.InterfaceLayer/Libraries/UI_KIT/Atoms/Image.Atom";
import ImageEnum from "@/user.InterfaceLayer/Libraries/UI_KIT/Atoms/Image.Atom/enum";
import TextAtom from "@/user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.Atom";
import TextAtomEnum from "@/user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.Atom/enum";
import Link from "next/link";
import { useState } from "react";
import LogoIcon from "@/user.InterfaceLayer/Libraries/shared/icons/logoshort.svg?react";

export default function Home() {
  const [translate, setTranslate] = useState(true);

  return (
    <main
      className={`h-[100vh] w-[100vw] flex bg-white items-center justify-center`}
    >
      <div className="flex flex-col pt-[50px] items-center w-[400px] h-full gap-4">
        <ImageAtom type={ImageEnum.enum_defaultSvg} icon={<LogoIcon />} />
        <TextAtom type={TextAtomEnum.enum_h2}>
          {translate ? "Вход в Sirius Future" : "Login to Sirius Future"}
        </TextAtom>

        <div className="flex flex-col gap-3 w-full">
          <input
            type="email"
            placeholder={translate ? "Введите E-mail" : "Enter to E-mail"}
            className="w-full border-[1px] border-solid border-[#ececec] rounded-[8px] py-[10px] px-3 bg-white"
          />
          <input
            type="password"
            placeholder={translate ? "Введите пароль" : "Enter to password"}
            className="w-full border-[1px] border-solid border-[#ececec] rounded-[8px] py-[10px] px-3 bg-white"
          />
          <div className="flex gap-1 items-center">
            <input
              type="checkbox"
              name=""
              id=""
              className="w-[22px] h-[22px] rounded-[5px] border-[1px] border-solid border-[#ececec]"
            />
            <TextAtom type={TextAtomEnum.enum_h4} className="text-[#79747f]">
              {translate ? "Запомнить меня" : "Remember me"}
            </TextAtom>
          </div>
        </div>

        <div className="flex w-full justify-between">
          <Link href="/profile">
            <TextAtom type={TextAtomEnum.enum_h4} className="text-text_success">
              {translate ? "Я забыл пароль" : "I forgot password"}
            </TextAtom>
          </Link>
          <Link href="/profile">
            <TextAtom type={TextAtomEnum.enum_h4} className="text-text_success">
              {translate ? "Войти как тренер" : "Login as a coach"}
            </TextAtom>
          </Link>
        </div>
        <div className="flex flex-col text-center">
          <TextAtom type={TextAtomEnum.enum_h4}>
            {translate ? "Нет аккаунта?" : "Don't have an account?"}
          </TextAtom>
          <TextAtom type={TextAtomEnum.enum_h4} className="text-text_success">
            {translate ? "Зарегистрироваться" : "Register"}
          </TextAtom>
        </div>
        <div className="flex gap-2 w-full justify-center items-center">
          <button
            className={`${
              translate
                ? "[&>h4]:!text-[24px] text-[#7362bc]"
                : "text-[#79747f]"
            }`}
            onClick={() => setTranslate(true)}
          >
            <TextAtom type={TextAtomEnum.enum_h4}>RU</TextAtom>
          </button>
          <button
            className={`${
              !translate
                ? "[&>h4]:!text-[24px] text-[#7362bc]"
                : "text-[#79747f]"
            }`}
            onClick={() => setTranslate(false)}
          >
            <TextAtom type={TextAtomEnum.enum_h4}>EN</TextAtom>
          </button>
        </div>
      </div>
    </main>
  );
}
