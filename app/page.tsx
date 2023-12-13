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
      }}
      href="/"
    >
      dscript.art
    </Link>
  );
};

export default Page;
