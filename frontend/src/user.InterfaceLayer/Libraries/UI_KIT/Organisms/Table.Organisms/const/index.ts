const monthsInGenitive: { [key: string]: string } = {
  январь: "января",
  февраль: "февраля",
  март: "марта",
  апрель: "апреля",
  май: "мая",
  июнь: "июня",
  июль: "июля",
  август: "августа",
  сентябрь: "сентября",
  октябрь: "октября",
  ноябрь: "ноября",
  декабрь: "декабря",
};

export const formatDate = (
  dateString: string
): { day: number; month: string } => {
  const date = new Date(dateString.split(".").reverse().join("-"));
  const day = date.getDate();
  const month = date.toLocaleString("ru-RU", { month: "long" });
  const monthInGenitive = monthsInGenitive[month];
  return { day, month: monthInGenitive };
};
