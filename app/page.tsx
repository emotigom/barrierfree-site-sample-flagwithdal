import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center h-screen bg-green-600">
      <div className="bg-black text-white py-5 w-full">그린withDal</div>
      <div className="flex justify-around w-full bg-orange-500 py-3">
        <Link href="/mindletter">
          <div className="text-white font-bold">마음 편지</div>
        </Link>
        <Link href="/barrierfree">
          <div className="text-white font-bold">배리어프리</div>
        </Link>
        <Link href="/personalbudget">
          <div className="text-white font-bold">장애인 개인 예산제</div>
        </Link>
        <Link href="/movefree">
          <div className="text-white font-bold">이동의 자유</div>
        </Link>
        <Link href="/improveaware">
          <div className="text-white font-bold">인식개선</div>
        </Link>
        <Link href="/convenience">
          <div className="text-white font-bold">편의즐기기</div>
        </Link>
      </div>
      <div className="flex-1 w-full bg-green-600 text-[100px]"></div>
    </div>
  );
}
