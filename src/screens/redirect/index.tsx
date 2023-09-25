import React from "react";
import { LayoutRedirect } from "@/layout/pages/redirect";
import { useRouter } from "next/router";

export const RedirectScreen = () => {
  const { query : {code}, pathname } = useRouter();
  return code ? <LayoutRedirect pathname={pathname} code={code as string} title="redirect" description="redirect" /> :  null
};