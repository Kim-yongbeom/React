import React from "react";
import axios from "axios";
import useSWR from "swr";

const fetcher = (...args) => axios.get(...args).then((res) => res.data);

function useUser(id) {
  const { data, error } = useSWR(`/api/user/${id}`, fetcher, {
    refreshInterval: 1000,
  });

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default function Page() {
  return (
    <>
      <Profile id={1234} />
      <Avatar id={1234} />
    </>
  );
}

function Profile({ id }) {
  const { user, isLoading, isError } = useUser(id);

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <dic>loading...</dic>;

  return (
    <>
      <div>hello, {user.name}!</div>
    </>
  );
}

function Avatar({ id }) {
  const { user, isLoading, isError } = useUser(id);
  if (isError) return <div>failed to load (Avatar)</div>;
  if (isLoading) return <dic>loading...(Avatar)</dic>;

  return <div>hello, {user.name} (Avatar)</div>;
}
