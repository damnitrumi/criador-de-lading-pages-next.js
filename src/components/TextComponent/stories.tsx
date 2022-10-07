import { Meta, Story } from "@storybook/react/types-6-0";
import { TextComponent, TextComponentProps } from "./index";

export default {
  title: "TextComponent",
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Dolor voluptatem totam voluptatum quidem distinctio cum, porro ratione
    enim laboriosam dolorum? Tenetur asperiores officia sapiente dolore
    perferendis, pariatur ducimus repudiandae est`,
  },
  argTypes: {
    children: { type: "string" },
  },
} as Meta;

export const Template: Story<TextComponentProps> = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
