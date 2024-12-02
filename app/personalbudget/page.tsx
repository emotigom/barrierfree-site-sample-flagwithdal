import React from "react";

const personalbudget = () => {
  return (
    <>
      <div>장애인 개인 예산제</div>
      <div className="text-[100px]">💫</div>
      <div className="my-4">
        <h2 className="text-xl font-bold">연합뉴스 기사 요약</h2>
        <p>
          최근 주요 이슈에 대한 내용을 다룬 기사가 연합뉴스에 게시되었습니다.
          자세한 내용을 보려면 아래 링크를 클릭하세요.
        </p>
        <a
          href="https://www.yna.co.kr/view/AKR20240630042600530"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          기사 보러 가기
        </a>
      </div>
    </>
  );
};

export default personalbudget;
