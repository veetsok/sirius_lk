import { useMemo } from "react";
import { useDataQuery } from "../useFetchData";
import { baseUrl } from "../config";

export const useProducts = () => {
  const { data, isLoading, isError, isFetching } = useDataQuery(
    "lessons",
    `${baseUrl}`
  );

  const products = useMemo(() => data || [], [data]);

  return { products, isLoading, isError, isFetching };
};
