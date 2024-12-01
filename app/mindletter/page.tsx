// app/mindletter/page.tsx
export const metadata = {
  title: "마음 편지 만들기",
  description: "AI로 생성된 따뜻한 편지",
  icons: {
    icon: "/favicon.ico",
  },
};

import ClientComponent from "./ClientComponent";

export default function Page() {
  return <ClientComponent />;
}
