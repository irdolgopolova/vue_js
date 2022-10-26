import { mount } from "@vue/test-utils"
import App from './../App.vue'

describe('Calculator input tests', () => {
    it('Test operand1 input value', async () => {
        const wrapper = mount(App);

        const operand1Input = wrapper.find('input[id="operand1"]');
        operand1Input.setValue('1');

        expect(wrapper.vm.operand1).toBe(1);
    })

    it('Test operand2 input value', async () => {
        const wrapper = mount(App);

        const operand2Input = wrapper.find('input[id="operand2"]');
        operand2Input.setValue('2');

        expect(wrapper.vm.operand2).toBe(2);
    })
})