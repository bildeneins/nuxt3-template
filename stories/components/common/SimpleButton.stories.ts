import { Meta, Story } from '@storybook/vue3'
import { defineComponent } from 'vue'
import SimpleButton from '../../../components/common/SimpleButton.vue'

export default {
  title: 'SimpleButton',
  component: SimpleButton,
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: 'Text',
    },
  },
} as Meta

export const Template: Story = args => defineComponent({
  components: { SimpleButton },
  setup: () => ({ args }),
  template: '<simple-button :primary="args.primary">{{ args.default }}</simple-button>'
})

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
}
