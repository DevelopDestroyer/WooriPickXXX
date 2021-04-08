import { atom, selector } from "recoil";
import { persistAtom } from './index'

export const CounterState = atom({
  key: "CounterState",
  default: 0,
  effects_UNSTABLE: [persistAtom]
});

export const CounterTypeState = atom({
  key: "CounterTypeState",
  default: "normal",
  effects_UNSTABLE: [persistAtom]
});

export const CounterLabelState = selector({
  key: "CounterLabelState",
  get: ({ get }) => {
    const count = get(CounterState);
    const countType = get(CounterTypeState);
    switch (countType) {
      case "increment":
        return `증가 => ${count}`;
      case "decrement":
        return `감소 => ${count}`;
      default:
        return `${count}`;
    }
  },
});