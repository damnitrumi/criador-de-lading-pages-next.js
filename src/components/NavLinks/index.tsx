import { MenuLink, MenuLinkProps } from "../MenuLink";
import * as Styled from "./styles";

// export type NavLinksProps = {
//   links?: Array<{ children: string; link: string; newTab: boolean }>;
// };

export type NavLinksProps = {
  links?: MenuLinkProps[];
};

// As duas opções de type estão corretas, pois nosso MenuLink é um obj que contem Children, link e newtab
// e o nosso Links é um array de obj com essas props, ou seja, um array de MenuLinks

export const NavLinks = ({ links = [] }: NavLinksProps) => {
  return (
    <Styled.Container aria-label="Main menu">
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </Styled.Container>
  );
};
