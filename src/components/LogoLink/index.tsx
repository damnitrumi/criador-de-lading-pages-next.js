import * as Styled from "./styles";
import { Heading } from "../Heading/index";
import Link from "next/link";

export type LogoLinkProps = {
  text: string;
  srcImg?: string;
  link: string;
  newTab?: boolean;
};

export const LogoLink = ({
  text,
  srcImg = "",
  link,
  newTab = false,
}: LogoLinkProps) => {
  const nextLink: boolean = link.match(/^\//) ? true : false;
  const target: string = newTab ? "_blank" : "_self";

  if (nextLink) {
    return (
      <Heading size="small" uppercase>
        <Link href={link} passHref>
          <Styled.Container target={target}>
            {!!srcImg && <img src={srcImg} alt={text} />}
            {!srcImg && text}
          </Styled.Container>
        </Link>
      </Heading>
    );
  }

  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link} target={target}>
        {!!srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && text}
      </Styled.Container>
    </Heading>
  );
};
