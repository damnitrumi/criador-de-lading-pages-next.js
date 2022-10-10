import { Base } from "../Base";

import { PageNotFound } from "../PageNotFound";
import {
  GridTwoColumns,
  GridTwoColumnsProps,
} from "../../components/GridTwoColumns";
import { GridContent, GridContentProps } from "../../components/GridContent";
import { GridText, GridTextProps } from "../../components/GridText";
import { GridImage, GridImageProps } from "../../components/GridImage";
import Head from "next/head";
import { MenuProps } from "../../components/Menu";
import { LogoLinkProps } from "../../components/LogoLink";

export type SectionProps = (
  | GridTwoColumnsProps
  | GridContentProps
  | GridTextProps
  | GridImageProps
) & { component: string };

export type HomeProps = {
  data: {
    footerHtml: string;
    slug: string;
    title: string;
    sections: SectionProps[];
    menu: MenuProps & LogoLinkProps;
  };
};

export function Home({ data }: HomeProps) {
  if (data === undefined) {
    return <PageNotFound />;
  }

  const { menu, sections, footerHtml, slug, title } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      links={links}
      logoData={{ text, link, srcImg }}
      footerHtml={footerHtml}
    >
      <Head>
        <title>{title}</title>
      </Head>
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === "section.section-two-columns") {
          return (
            <GridTwoColumns key={key} {...(section as GridTwoColumnsProps)} />
          );
        }

        if (component === "section.section-content") {
          return <GridContent key={key} {...(section as GridContentProps)} />;
        }

        if (component === "section.section-grid-text") {
          return <GridText key={key} {...(section as GridTextProps)} />;
        }

        if (component === "section.section-grid-image") {
          return <GridImage key={key} {...(section as GridImageProps)} />;
        }
      })}
    </Base>
  );
}

export default Home;
