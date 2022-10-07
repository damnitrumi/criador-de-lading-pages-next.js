import mock from "./mock";
import { GridImage, GridImageProps } from "./index";
import { Meta, Story } from "@storybook/react/types-6-0";

export default {
  title: "GridImage",
  component: GridImage,
  args: mock,
} as Meta;

export const Template: Story<GridImageProps> = (args) => {
  return (
    <div>
      <GridImage {...args} />
    </div>
  );
};
