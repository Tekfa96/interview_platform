import { isAuthenicated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenicated();
  if (isUserAuthenticated) redirect("/");
  return <div className="auth-layout">({children})</div>;
};

export default AuthLayout;
