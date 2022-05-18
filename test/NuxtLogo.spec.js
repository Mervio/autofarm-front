import { mount } from '@vue/test-utils'
import AuthLayout from '@/layouts/AuthLayout.vue'

describe('AuthLayout', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(AuthLayout)
    expect(wrapper.vm).toBeTruthy()
  })
})
