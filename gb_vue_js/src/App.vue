<template>
  <div class="calc">
    <div class="calc__screen">
      <input id="operand1" class="calc__screen_input" v-model.number="operand1"/>
      <span class="calc__screen_operator">{{ operator }}</span>
      <input id="operand2" class="calc__screen_input" v-model.number="operand2"/>
      <span class="calc__screen_equally">=</span>
      <span class="calc__screen_result">{{ result }}</span>
    </div>

    <div v-if="error" class="calc__error">{{error}}</div>

    <div class="calc__keyboard">
      <div class="calc__keyboard_operators">
        <button class="calc__keyboard_operators__item" v-for="(item, index) in operators" :key="index" @click="setOperator(item)">{{ item }}</button>
      </div>

      <div class="calc__keyboard_numbers">
        <div class="calc__keyboard_numbers__show_keyboard">
          <input type="checkbox" id="checkbox" v-model="showKeyboard">
          <label for="checkbox">Показать клавиатуру</label>
        </div>

        <template v-if="showKeyboard">
          <div class="calc__keyboard_numbers__operand">
            <input type="radio" id="firstInput" value="operand1" v-model="inputForInter">
            <label for="firstInput">Первый операнд</label>
            <br>
            <input type="radio" id="secondInput" value="operand2" v-model="inputForInter">
            <label for="secondInput">Второй операнд</label>
          </div>

          <div class="calc__keyboard_numbers_group">
            <button class="calc__keyboard_numbers__item" v-for="(number, index) in numbers" :key="index" @click="addNumber(number)">{{number}}</button>
            <button class="calc__keyboard_numbers__item" @click="clearLastNumber">
              <svg id="Layer_1" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m21 2h-13.24l-7.76 10 7.76 10h13.24a3 3 0 0 0 3-3v-14a3 3 0 0 0 -3-3zm1 17a1 1 0 0 1 -1 1h-12.26l-6.2-8 6.2-8h12.26a1 1 0 0 1 1 1zm-4.043-9.543-2.543 2.543 2.543 2.543-1.414 1.414-2.543-2.543-2.543 2.543-1.414-1.414 2.543-2.543-2.543-2.543 1.414-1.414 2.543 2.543 2.543-2.543z"/></svg>
            </button>
          </div>
        </template>
      </div>
    </div>

    <ul>
      <li v-for="[time, msg] in Object.entries(log)" :key="time">{{time}}: {{msg}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      operand1: '',
      operand2: '',
      operator: '+',
      error: '',
      operators: ['+', '-', '*', '/', '^', '~/'],
      showKeyboard: false,
      inputForInter: 'operand1',
      numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      log: {}
    }
  },
  computed: {
    result() {
      this.operand1 = Number(this.operand1);
      this.operand2 = Number(this.operand2);
      this.error = '';
      this.$set(this.log, new Date().toTimeString(), `${this.operand1} ${this.operator} ${this.operand2}`);

      switch (this.operator) {
        case '+':
          return this.operand1 + this.operand2;
        case '-':
          return this.operand1 - this.operand2;
        case '*':
          return this.operand1 * this.operand2;
        case '/':
          if (this.operand2 === 0) {
            this.error = "На ноль делить нельзя"
            break;
          }
          return this.operand1 / this.operand2;
        case '^':
          return this.operand1 ** this.operand2;
        case '~/':
          return ~~(this.operand1 / this.operand2);
        default:
          return "Error";
      }
    }
  },
  methods: {
    setOperator(operator) {
      this.operator = operator;
    },

    addNumber(number) {
      if (this[this.inputForInter] || number != 0) {
        this[this.inputForInter] += number;
      }
    },

    clearLastNumber() {
      this[this.inputForInter] = String(this[this.inputForInter]).slice(0, -1);
    }
  }
}
</script>

<style lang="scss">
  .calc {
    width: 100%;
    max-width: 700px;
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

    &__error {
      margin: 10px;
      padding: 20px;
      border: 1px solid red;
      background-color: pink;
      color: red;
    }

    &__keyboard {
      display: flex;
      flex-direction: column;
      align-items: center;

      &_operators {
        margin: 24px 0 0;

        &__item {
          width: 50px;
          height: 40px;
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

      &_numbers {
        display: flex;
        flex-direction: column;
        align-items: center;

        &__show_keyboard {
          margin: 20px 0 0;
        }

        &__operand {
          display: flex;
          margin: 20px 0;
        }

        &_group {
          display: flex;
        }

        &__item {
          width: 50px;
          height: 48px;
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
  }
</style>
