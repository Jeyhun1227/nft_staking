import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { Main } from "@/templates/main";
import { IMetaProps, Meta } from "@/layout/meta";
import { useAuth } from "@/contexts/auth";

interface Props extends IMetaProps {
  children?: ReactNode;
  code:string;
  pathname:string;
}

export const LayoutRedirect = ({ code, pathname, children, ...metaProps }: Props) => {
  const router = useRouter();
  const auth = useAuth();

  useEffect(() => {
    async function fetchMyData() {
      if (code) {
        if(pathname === '/redirect-login'){
          let signeduser = await auth.logInGoogle(code);
          if (signeduser) {
            router.push("/my-account");
          }
        }
        if(pathname === '/redirect-register'){
          let signeduser = await auth.registerGoogle(code);
          if (signeduser) {
            router.push("/sign-up/2/");
          }
        }
      }
    }

    fetchMyData()
  }, [])

  return <Main meta={<Meta {...metaProps} />}>Redirect...</Main>;
};