import { TProducts } from "@/business.InterfaceLayer/type";

export interface TableBlockProps {
  title?: string;
  lengthItems?: string;
  subtitle?: string;
  thead?: string[];
  tbody?: TProducts[];
  tbodyStyle?: (cell: string, cellIndex: number) => string;
}
