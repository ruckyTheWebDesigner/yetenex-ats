// "use client";

import React from "react";

function Signuppage() {
  // generate random api

  const response = fetch("https://randomuser.me/api/", {
    method: "GET",
  });

  console.log("response", response);

  //   const data = await response.json();
  return <div>data</div>;
}

export default Signuppage;
