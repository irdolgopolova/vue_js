import { mount } from "@vue/test-utils"
import App from './../App.vue'

describe('Calculator calc tests', () => {
    it('Test sum result', async () => {
        const wrapper = mount(App);

        const operand1Input = wrapper.find('input[id="operand1"]');
        operand1Input.setValue('100');

        const operand2Input = wrapper.find('input[id="operand2"]');
        operand2Input.setValue('5');

        const sumOperationButton = wrapper.find('button[name="+"]');
        sumOperationButton.trigger('click');

        expect(wrapper.vm.result).toBe(105)
    })

    it('Test subtraction result', async () => {
        const wrapper = mount(App);

        const operand1Input = wrapper.find('input[id="operand1"]');
        operand1Input.setValue('100');

        const operand2Input = wrapper.find('input[id="operand2"]');
        operand2Input.setValue('5');

        const sumOperationButton = wrapper.find('button[name="-"]');
        sumOperationButton.trigger('click');

        expect(wrapper.vm.result).toBe(95)
    })

    it('Test multiplication result', async () => {
        const wrapper = mount(App);

        const operand1Input = wrapper.find('input[id="operand1"]');
        operand1Input.setValue('100');

        const operand2Input = wrapper.find('input[id="operand2"]');
        operand2Input.setValue('5');

        const sumOperationButton = wrapper.find('button[name="*"]');
        sumOperationButton.trigger('click');

        expect(wrapper.vm.result).toBe(500)
    })

    it('Test division result', async () => {
        const wrapper = mount(App);

        const operand1Input = wrapper.find('input[id="operand1"]');
        operand1Input.setValue('100');

        const operand2Input = wrapper.find('input[id="operand2"]');
        operand2Input.setValue('5');

        const sumOperationButton = wrapper.find('button[name="/"]');
        sumOperationButton.trigger('click');

        expect(wrapper.vm.result).toBe(20)
    })

    it('Test exponentiation result', async () => {
        const wrapper = mount(App);

        const operand1Input = wrapper.find('input[id="operand1"]');
        operand1Input.setValue('10');

        const operand2Input = wrapper.find('input[id="operand2"]');
        operand2Input.setValue('2');

        const sumOperationButton = wrapper.find('button[name="^"]');
        sumOperationButton.trigger('click');

        expect(wrapper.vm.result).toBe(100)
    })

    it('Test integer division result', async () => {
        const wrapper = mount(App);

        const operand1Input = wrapper.find('input[id="operand1"]');
        operand1Input.setValue('11');

        const operand2Input = wrapper.find('input[id="operand2"]');
        operand2Input.setValue('5');

        const sumOperationButton = wrapper.find('button[name="~/"]');
        sumOperationButton.trigger('click');

        expect(wrapper.vm.result).toBe(2)
    })

    it('Test click on number (operand 1)', async () => {
        const wrapper = mount(App, {
            data() {
                return { showKeyboard: true }
            }
        })

        const btn = wrapper.find('button[name="1"]');
        btn.trigger('click');

        expect(wrapper.vm.operand1).toBe(1);
        expect(wrapper.vm.operand2).toBe(0);
    })

    it('Test click on number (operand 2)', async () => {
        const wrapper = mount(App, {
            data() {
                return { showKeyboard: true }
            }
        })

        const checkedSecondInput = wrapper.find('input[id="secondInput"]');
        checkedSecondInput.setChecked();

        const btn = wrapper.find('button[name="1"]');
        btn.trigger('click');

        expect(wrapper.vm.operand1).toBe(0);
        expect(wrapper.vm.operand2).toBe(1);
    })

    it('Test click on clear (operand 2)', async () => {
        const wrapper = mount(App, {
            data() {
                return { showKeyboard: true }
            }
        })

        const operand1Input = wrapper.find('input[id="operand1"]');
        operand1Input.setValue('100');

        const operand2Input = wrapper.find('input[id="operand2"]');
        operand2Input.setValue('200');

        const checkedSecondInput = wrapper.find('input[id="secondInput"]');
        checkedSecondInput.setChecked();

        const btn = wrapper.find('button[name="clear"]');
        btn.trigger('click');

        expect(wrapper.vm.operand1).toBe(100);
        expect(wrapper.vm.operand2).toBe(20);
    })

    it('Test click on clear (operand 1)', async () => {
        const wrapper = mount(App, {
            data() {
                return { showKeyboard: true }
            }
        })

        const operand1Input = wrapper.find('input[id="operand1"]');
        operand1Input.setValue('100');

        const operand2Input = wrapper.find('input[id="operand2"]');
        operand2Input.setValue('200');

        const btn = wrapper.find('button[name="clear"]');
        btn.trigger('click');

        expect(wrapper.vm.operand1).toBe(10);
        expect(wrapper.vm.operand2).toBe(200);
    })
})