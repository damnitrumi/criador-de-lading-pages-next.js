import { Meta, Story } from "@storybook/react/types-6-0";
import { SectionContainer, SectionContainerProps } from ".";

export default {
  title: "SectionContainer",
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          placeat voluptatibus cum aperiam amet excepturi sed quidem ad
          praesentium dicta odio eligendi, dolore tenetur quisquam maxime. Nihil
          quibusdam delectus magnam.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: "string" },
  },
} as Meta;

export const Template: Story<SectionContainerProps> = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
