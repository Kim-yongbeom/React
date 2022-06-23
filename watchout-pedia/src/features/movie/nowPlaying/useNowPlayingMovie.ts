import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { nowPlayingApi } from "../../../apis/movieAPI";
import { ListResponse, MovieDetail } from "../../../types";

const useLatestMovie = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    //queryKey
    "nowPlayingMovie",
    nowPlayingApi
  );
};

export default useLatestMovie;
