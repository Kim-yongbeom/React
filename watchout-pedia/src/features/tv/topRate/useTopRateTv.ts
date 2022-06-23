import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { topRatedApi } from "../../../apis/tvAPI";
import { ListResponse, TVDetail } from "../../../types";

const useTopRateTv = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    "topRateTv",
    topRatedApi
  );
};

export default useTopRateTv;
