import React from "react";
import styled from "@emotion/styled/macro";
import { Global, css } from "@emotion/react";
import TopNavigation from "../components/ChatRoomDetail/TopNavigation";
import { useParams } from "react-router-dom";
import { fetchMyProfile } from "../apis/userApi";
import { fetchChatRoomDetail } from "../apis/roomApi";
import { useMutation, useQuery } from "react-query";
import { fetchChatMessageList, sendChatMessage } from "../apis/chatApi";
import { AxiosError, AxiosResponse } from "axios";
import { IChat, IProfile, IRoom } from "../types";
import MessageList from "../components/ChatRoomDetail/MessageList";
import InputChat from "../components/ChatRoomDetail/InputChat";
import SentMessage from "../components/ChatRoomDetail/SentMessage";
import ReceiveMessage from "../components/ChatRoomDetail/ReceiveMessage";

const Base = styled.div`
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 64px;
  align-items: center;
  padding: 0 24px;
`;

const globalStyle = css`
  body {
    background-color: #abc1d1;
  }
`;

const RoomDetail: React.FC = () => {
  const { roomId } = useParams<string>();

  const { data: profileData } = useQuery<AxiosResponse<IProfile>, AxiosError>(
    "fetchMyProfile",
    fetchMyProfile
  );
  const { data: chatRoomDetailData } = useQuery<
    AxiosResponse<IRoom>,
    AxiosError
  >(["fetchChatRoomDetail", roomId], () =>
    fetchChatRoomDetail(roomId as string)
  );
  const { data: chatListData } = useQuery<
    AxiosResponse<Array<IChat>>,
    AxiosError
  >(["fetchChatMessageList", roomId], () =>
    fetchChatMessageList(roomId as string)
  );

  const mutation = useMutation("sendChatMessage", (content: string) =>
    sendChatMessage(roomId as string, content)
  );

  const handleSend = (content: string) => {
    if (content.length) {
      mutation.mutate(content);
    }
  };

  return (
    <Base>
      <Global styles={globalStyle} />
      {chatRoomDetailData && (
        <TopNavigation title={chatRoomDetailData.data.user.username} />
      )}
      <Container>
        <MessageList>
          {chatListData?.data.map((message) =>
            message.senderId === profileData?.data.userId ? (
              <SentMessage
                senderId={message.senderId}
                content={message.content}
                timestamp={message.createdAt}
              />
            ) : (
              <ReceiveMessage
                receiver={message?.username}
                senderId={message.senderId}
                content={message.content}
                timestamp={message.createdAt}
              />
            )
          )}
        </MessageList>
      </Container>
      <InputChat onClick={handleSend} />
    </Base>
  );
};

export default RoomDetail;
