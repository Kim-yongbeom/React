import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { onTheAirApi } from "../../../apis/tvAPI";
import { ListResponse, TVDetail } from "../../../types";

const useOnTheAirTv = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    "theAirApi",
    onTheAirApi
  );
};

export default useOnTheAirTv;
