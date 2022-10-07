import * as Styled from "./styles";
import { Heading } from "../Heading/index";
import Link from "next/link";

export type LogoLinkProps = {
  text: string;
  srcImg?: string;
  link: string;
};

export const LogoLink = ({ text, srcImg = "", link }: LogoLinkProps) => {
  const nextLink: boolean = link.match(/^\//) ? true : false;

  if (nextLink) {
    return (
      <Heading size="small" uppercase>
        <Link href={link} passHref>
          <Styled.Container>
            {!!srcImg && <img src={srcImg} alt={text} />}
            {!srcImg && text}
          </Styled.Container>
        </Link>
      </Heading>
    );
  }

  return (
    <Heading size="small" uppercase>
      <Link href={link} passHref>
        <Styled.Container>
          {!!srcImg && <img src={srcImg} alt={text} />}
          {!srcImg && text}
        </Styled.Container>
      </Link>
    </Heading>
  );
};
