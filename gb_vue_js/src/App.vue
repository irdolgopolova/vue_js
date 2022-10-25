<template>
  <div class="calc">
    <div class="calc__screen">
      <input class="calc__screen_input" v-model="operand1"/>
      <span class="calc__screen_operator">{{ operator }}</span>
      <input class="calc__screen_input" v-model="operand2"/>
      <span class="calc__screen_equally">=</span>
      <span class="calc__screen_result">{{ result }}</span>
    </div>
    <div class="calc__keyboard">
      <button class="calc__keyboard_button" @click="operator = '+'">+</button>
      <button class="calc__keyboard_button" @click="operator = '-'">-</button>
      <button class="calc__keyboard_button" @click="operator = '*'">*</button>
      <button class="calc__keyboard_button" @click="operator = '/'">/</button>
      <button class="calc__keyboard_button" @click="operator = '^'">^</button>
      <button class="calc__keyboard_button" @click="operator = '~~'">~~</button>
      <button class="calc__keyboard_button" @click="getResult">=</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      operand1: 0,
      operand2: 0,
      operator: '+',
      result: 0
    }
  },
  methods: {
    getResult() {
      let operand1 = Number(this.operand1);
      let operand2 = Number(this.operand2);

      switch (this.operator) {
        case '+':
          this.result = operand1 + operand2;
          break;
        case '-':
          this.result = operand1 - operand2;
          break;
        case '*':
          this.result = operand1 * operand2;
          break;
        case '/':
          this.result = operand1 / operand2;
          break;
        case '^':
          this.result = operand1 ** operand2;
          break;
        case '~~':
          this.result = ~~(operand1 / operand2);
          break;
        default:
          this.result = "Error";
          break;
      }
    }
  }
}
</script>

<style lang="scss">
  .calc {
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px auto 0;
    background-color: floralwhite;
    border: 2px solid bisque;
    border-radius: 4px;
    padding: 24px;

    &__screen {
      &_input {
        width: 140px;
        font-size: 14px;
        line-height: 16px;
        box-sizing: border-box;
        margin: 0 12px;
      }

      &_operator,
      &_equally {
        font-weight: 900;
      }

      &_result {
        font-weight: 900;
        margin: 0 12px;
      }
    }

    &__keyboard {
      margin: 24px 0 0;

      &_button {
        width: 40px;
        height: 32px;
        font-size: 16px;
        line-height: 18px;
        font-weight: 900;
        background-color: blanchedalmond;
        border: 2px solid bisque;
        border-radius: 4px;
        margin: 0 4px;

        &:hover {
          background-color: bisque;
        }

        &:active {
          background-color: burlywood;
          border-color: saddlebrown;
        }
      }
    }
  }



</style>
