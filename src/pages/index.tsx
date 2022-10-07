import { GetStaticProps } from "next";
import { mapData } from "../api/map-data";
import { Home } from "../templates/Home";

export default function Index({ data = null }: IndexProps) {
  console.log(data);
  return <Home data={data} />;
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const data = await fetch("http://localhost:1337/api/pages?populate=deep");

  const json = await data.json();

  const { attributes } = json.data[0];

  const pageData = mapData([attributes]);

  return {
    props: {
      data: pageData[0],
    },
  };
};

export type IndexProps = {
  // eslint-disable-next-line
  data: any;
};
