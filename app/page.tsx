import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <Link
      style={{
        height: "95vh",
        width: "100vw",
        fontSize: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#678",
        textDecoration: "none",
        flexDirection: "column",
        fontWeight: "lighter",
      }}
      href="/"
    >
      dscript.art
      <div
        style={{
          fontSize: "24px",
          padding: "12px 48px",
          textAlign: "center",
          fontWeight: "normal",
          color: "#36454F",
        }}
      >
        the only developer of this project feeling lazy now
      </div>
    </Link>
  );
};

export default Page;
