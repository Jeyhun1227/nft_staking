import { ReactNode } from "react";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};


export const Main = (props: IMainProps) => (
  <div>
    {props.meta}

    <div>{props.children}</div>
  </div>
);
