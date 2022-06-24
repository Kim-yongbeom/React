import { DataTypes } from "sequelize/types";
import sequelize from "../sequelize";

import User from "./user";

const Room = sequelize.define("room", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  // 1대1 채팅방을 만들기 때문에 상대방 아이디를 지칭하는 opponentId 생성
  opponentId: {
    type: DataTypes.UUID,
    references: {
      model: User,
    },
  },
});

export default Room;
