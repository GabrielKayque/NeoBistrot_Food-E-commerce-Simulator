import { Title } from "./HeadTitlestyle";
import { ReactNode } from "react";

interface HeadTitleProps {
  title: string;
  children?: ReactNode;
}

export default function Head({ title, children }: HeadTitleProps) {
  document.title = `Neo Bistrot - ${title}`;

  return <Title>{children}</Title>;
}
