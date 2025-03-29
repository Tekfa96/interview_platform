import Agent from "@/app/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";
import React from "react";

const page = async () => {
  const user = await getCurrentUser();
  return (
    <>
      <h3>Interiew generation</h3>
      <Agent userName={user?.name} userId={user?.id} type="generate" />
    </>
  );
};

export default page;

// STATIC version
// import Agent from "@/app/components/Agent";
// import React from "react";

// const page = () => {
//   return (
//     <>
//       <h3>Interiew generation</h3>
//       <Agent userName="You" userId="user1" type="generate" />
//     </>
//   );
// };

// export default page;
