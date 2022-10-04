import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function profile() {
  const Router = useRouter();

  useEffect(() => {
    if (localStorage) {
      const getLocalState = localStorage.getItem("accessToken");
      if (!getLocalState) Router.replace("/user/login");
    }

  }, []);

  return (
    <div className=''></div>
  )
}
