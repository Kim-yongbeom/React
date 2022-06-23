import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { upcomingApi } from "../../../apis/movieAPI";
import { ListResponse, MovieDetail } from "../../../types";

const useUpcomingSection = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    //queryKey
    "upcomingMovie",
    upcomingApi
  );
};

export default useUpcomingSection;
