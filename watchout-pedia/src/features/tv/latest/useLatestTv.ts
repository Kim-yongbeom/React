import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { latestApi } from "../../../apis/tvAPI";
import { TVDetail } from "../../../types";

const useLatestTv = () => {
  return useQuery<AxiosResponse<TVDetail>>("latestTv", latestApi);
};

export default useLatestTv;
