// "use client";
import Container from "@/components/shared/Container";

import React from "react";

function Page() {
  const count = 0;

  //   const response = await fetch("https://randomuser.me/api/", {
  //     method: "GET",
  //   });

  //   const data = await response.json();

  //   console.log("data", data);
  return (
    <div className=''>
      <div>NavBar</div>

      <Container maxWidth='md'>
        <div>
          <div>photo</div>
          <div>login form</div>
        </div>
      </Container>
    </div>
  );
}

export default Page;
