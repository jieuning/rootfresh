import { createSlice } from "@reduxjs/toolkit"

const cart = createSlice({

  name: 'cart',
  initialState: [],
  reducers: {
    /* count가 1씩 증가 */
    increase(state, action) {
      let num = state.findIndex((i) => { return i.id === action.payload })
      state[num].count++
    },
    /* count가 1씩 감소 */
    decrease(state, action) {
      let num = state.findIndex((i) => { return i.id === action.payload })
      state[num].count--
    },
    /* 데이터 추가 */
    addItem(state, action) {
      state.push(action.payload)
    },
    /* 아이템 개별 삭제 */
    removeItem(state, action) {
      let num = state.findIndex((i) => { return i.id === action.payload })
      console.log(num)
      state.splice(num, 1)
    },
    /* 개별 체크박스 */
    checkedChange(state, action) {
      let num = state.findIndex((i) => { return i.id === action.payload })
      state[num].checked = !state[num].checked
    },
    /* 체크박스 전체 선택 */
    allCheckedTrue(state) {
      state.forEach((i) => { i.checked = true })
    },
    /* 체크박스 전체 해제 */
    allCheckedFalse(state) {
      state.forEach((i) => { i.checked = false })
    }
  }
})

export const {
  increase,
  decrease,
  addItem,
  removeItem,
  checkedChange,
  allCheckedTrue,
  allCheckedFalse
} = cart.actions

export default cart;