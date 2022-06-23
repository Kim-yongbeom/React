import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { topRateApi } from "../../../apis/movieAPI";
import { ListResponse, MovieDetail } from "../../../types";

const useTopRateMovie = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    //queryKey
    "topRateMovie",
    topRateApi
  );
};

export default useTopRateMovie;
