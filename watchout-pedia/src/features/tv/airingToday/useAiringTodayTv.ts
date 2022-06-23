import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { airingTodayApi } from "../../../apis/tvAPI";
import { ListResponse, TVDetail } from "../../../types";

const useAiringTodayTv = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    "airingTodayApi",
    airingTodayApi
  );
};

export default useAiringTodayTv;
