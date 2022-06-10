// 포켓몬 아이디를 파라미터로 전달받아 상세정보 표시
import React from "react";
import { useParams } from "react-router-dom";

type Params = {
  id: string;
};

const DetailPage: React.FC = () => {
  const { id } = useParams<Params>();

  return <div>DetailPage id: {id}</div>;
};

export default DetailPage;
