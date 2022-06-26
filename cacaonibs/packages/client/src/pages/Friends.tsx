import React from "react";
import styled from "@emotion/styled/macro";
import { useNavigate } from "react-router-dom";
import TopNavigation from "../components/TopNavigation";
import BottomNavigation from "../components/BottomNavigation";
import Profile from "../components/Profile";
import FriendList from "../components/FriendList";
import Friend from "../components/FriendList/Friend";
import { useMutation, useQuery } from "react-query";
import { fetchMyProfile, fetchUserList } from "../apis/userApi";
import { AxiosError, AxiosResponse } from "axios";
import { IProfile, IUser, IRoom } from "../types";
import {
  fetchChatRoomList,
  makeChatRoom,
  MakeChatRoomRequest,
} from "../apis/roomApi";

const Base = styled.div``;

const Container = styled.div``;

const Summary = styled.small``;

const Friends: React.FC = () => {
  const { data: profileData } = useQuery<AxiosResponse<IProfile>, AxiosError>(
    "fetchMyProfile",
    fetchMyProfile
  );

  const { data: userData } = useQuery<
    AxiosResponse<{ count: number; rows: Array<IUser> }>,
    AxiosError
  >("fetchUserList", fetchUserList);

  const { data: chatRoomListData } = useQuery<
    AxiosResponse<Array<IRoom>>,
    AxiosError
  >("fetchChatRoomList", fetchChatRoomList);

  const mutation = useMutation("makeChatRoom", (request: MakeChatRoomRequest) =>
    makeChatRoom(request)
  );

  const handleChatRoomCreate = (opponentId: string) => {
    const chatRoom = chatRoomListData?.data.find(
      (chatRoom) => chatRoom.opponentId === opponentId
    );
    if (chatRoom) {
      navigate(`/room/${charRoom.id}`);
    } else {
    }
  };

  return (
    <Base>
      <Container>
        <TopNavigation title="친구" />

        {profileData && <Profile username={profileData.data.username} />}
        {userData && (
          <>
            <Summary>친구: {userData.data.count}</Summary>
            <FriendList>
              {userData.data.rows.map((row) => (
                <Friend
                  key={row.id}
                  username={row.username}
                  thumbnailImage={row.thumbnailImageUrl}
                  onClick={() => handleChatRoomCreate(row.id)}
                />
              ))}
            </FriendList>
          </>
        )}
        <BottomNavigation />
      </Container>
    </Base>
  );
};

export default Friends;
