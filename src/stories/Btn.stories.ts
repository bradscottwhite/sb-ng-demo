import { Story, Meta } from '@storybook/angular/types-6-0';
import { BtnComponent as Btn } from '../app/btn/btn.component';

export default {
  title: 'Component/Button',
  component: Btn,
  argTypes: {
   // backgroundColor: { control: 'text' },
  },
} as Meta;

const Template: Story<Btn> = (args: Btn) => ({
  props: args,
  template: `
    <app-btn [color]="color">
      This is a template test.
    </app-btn>`,
});

export const SimpleExample = Template.bind({});


export const Primary = Template.bind({});

Primary.args = {
  color: 'primary'
} as Partial<Btn>;

/*export const Primary = Template.bind({});
Primary.args = {
  color: 'blue'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};*/
