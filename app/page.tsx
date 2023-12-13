import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <Link
      style={{
        height: "100dvh",
        width: "100vw",
        fontSize: "6vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#678",
        textDecoration: "none",
        flexDirection: "column",
      }}
      href="/"
    >
      dscript.art
      <div
        style={{
          fontSize: "1vw",
          letterSpacing: "0.3vh",
        }}
      >
        (the only developer of this project feeling lazy now)
      </div>
    </Link>
  );
};

export default Page;
