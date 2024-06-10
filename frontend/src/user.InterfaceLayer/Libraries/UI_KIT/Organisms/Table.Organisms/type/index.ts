import { TProducts } from "@/business.InterfaceLayer/type";
import TableBlockEnum from "../enum";

export interface TableBlockProps {
  title?: string;
  lengthItems?: string;
  subtitle?: string;
  thead?: string[];
  tbody?: TProducts[];
  type?: TableBlockEnum;
}
