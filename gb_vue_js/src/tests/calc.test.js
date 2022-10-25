import { mount } from "@vue/test-utils"
import App from './../App.vue'

describe('Calculator input tests', () => {
    it('Test operand1 input value', async () => {
        const wrapper = mount(App);

        const operand1Input = wrapper.find('input[id="operand1"]')
        operand1Input.setValue('100')

        const operand2Input = wrapper.find('input[id="operand2"]')
        operand2Input.setValue('5')

        const sumOperationButton = wrapper.find('button[name="+"]');
        sumOperationButton.trigger('click');

        expect(wrapper.vm.result).toBe(105)
    })

    it('Test operand1 input value', async () => {
        const wrapper = mount(App);

        const operand1Input = wrapper.find('input[id="operand1"]')
        operand1Input.setValue('100')

        const operand2Input = wrapper.find('input[id="operand2"]')
        operand2Input.setValue('5')

        const sumOperationButton = wrapper.find('button[name="-"]');
        sumOperationButton.trigger('click');

        expect(wrapper.vm.result).toBe(95)
    })

    it('Test operand1 input value', async () => {
        const wrapper = mount(App);

        const operand1Input = wrapper.find('input[id="operand1"]')
        operand1Input.setValue('100')

        const operand2Input = wrapper.find('input[id="operand2"]')
        operand2Input.setValue('5')

        const sumOperationButton = wrapper.find('button[name="*"]');
        sumOperationButton.trigger('click');

        expect(wrapper.vm.result).toBe(500)
    })

    it('Test operand1 input value', async () => {
        const wrapper = mount(App);

        const operand1Input = wrapper.find('input[id="operand1"]')
        operand1Input.setValue('100')

        const operand2Input = wrapper.find('input[id="operand2"]')
        operand2Input.setValue('5')

        const sumOperationButton = wrapper.find('button[name="/"]');
        sumOperationButton.trigger('click');

        expect(wrapper.vm.result).toBe(20)
    })

    it('Test operand1 input value', async () => {
        const wrapper = mount(App);

        const operand1Input = wrapper.find('input[id="operand1"]')
        operand1Input.setValue('10')

        const operand2Input = wrapper.find('input[id="operand2"]')
        operand2Input.setValue('2')

        const sumOperationButton = wrapper.find('button[name="^"]');
        sumOperationButton.trigger('click');

        expect(wrapper.vm.result).toBe(100)
    })

    it('Test operand1 input value', async () => {
        const wrapper = mount(App);

        const operand1Input = wrapper.find('input[id="operand1"]')
        operand1Input.setValue('11')

        const operand2Input = wrapper.find('input[id="operand2"]')
        operand2Input.setValue('5')

        const sumOperationButton = wrapper.find('button[name="~/"]');
        sumOperationButton.trigger('click');

        expect(wrapper.vm.result).toBe(2)
    })

    it('Test operand1 input value', async () => {
        const wrapper = mount(App, {
            data() {
                return { showKeyboard: true }
            }
        })

        const btn = wrapper.find('button[name="1"]');
        btn.trigger('click');

        expect(wrapper.vm.operand1).toBe("1")
    })

    it('Test operand1 input value', async () => {
        const wrapper = mount(App, {
            data() {
                return { showKeyboard: true }
            }
        })

        const operand1Input = wrapper.find('input[id="operand1"]')
        operand1Input.setValue('100')

        const btn = wrapper.find('button[name="clear"]');
        btn.trigger('click');

        expect(wrapper.vm.operand1).toBe("10")
    })
})