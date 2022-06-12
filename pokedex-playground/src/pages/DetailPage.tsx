// 포켓몬 아이디를 파라미터로 전달받아 상세정보 표시
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Tabs from "../components/Tabs";

type Params = {
  id: string;
};

type Tab = "about" | "stats" | "evolution";

const DetailPage: React.FC = () => {
  const { id } = useParams<Params>();
  const [selectedTab, setSelectedTab] = useState<Tab>("about");

  const handleClick = (tab: Tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <Tabs
        tab={selectedTab}
        onClick={handleClick}
        color={{ name: "red", url: "" }}
      />
    </div>
  );
};

export default DetailPage;
