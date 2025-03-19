"use client";

import dynamic from "next/dynamic";

// Memuat komponen Main hanya di sisi klien (klien saja)
const Main = dynamic(() => import("@/components/contact/Main"), { ssr: false });

export default function Contact() {
  return (
    <>
      <div className="mtt-5">
        <Main />
      </div>
    </>
  );
}
