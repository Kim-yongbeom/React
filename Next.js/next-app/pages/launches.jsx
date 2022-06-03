// import React, { useState, useEffect } from "react";

export default function launches({ data }) {
  // 클라이언트 사이드 렌더링

  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchLaunches = async () => {
  //     const res = await fetch("https://api.spacexdata.com/v3/launches");
  //     const data = await res.json();

  //     setData(data);
  //   };
  //   fetchLaunches();
  // }, []);

  if (data == null) {
    return null;
  }

  return (
    <div>
      <ol>
        {data.map((launch, index) => (
          <li key={index}>{launch.mission_name}</li>
        ))}
      </ol>
    </div>
  );
}
// 서버 사이드 렌더링

export async function getServerSideProps() {
  const res = await fetch("https://api.spacexdata.com/v3/launches");
  const data = await res.json();

  // 서버 console로 찍힘
  console.log("getServerSideProps");
  return {
    props: { data },
  };
}

// 서버 사이드 렌더링과는 다름
// 서버사이드렌더링은 새로고침마다 console이 찍히지만 서버 사이드 제너레이션은 아님

// npm run build
// 페이지에서 (정적 사이트 생성) 이라는 함수를 내보내는 경우
// getStaticPropsNext.js는 에서 반환된
// props를 사용하여 빌드 시 이 페이지를 미리 렌더링합니다 getStaticProps.

export async function getStaticProps() {
  const res = await fetch("https://api.spacexdata.com/v3/launches");
  const data = await res.json();

  // 서버 console로 찍힘
  console.log("getStaticProps");
  return {
    props: { data },
  };
}
