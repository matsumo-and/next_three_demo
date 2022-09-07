import { atom, selector } from 'recoil'

export const hogeState = atom<number>({
  key: 'count',
  default: 60,
})

export const hogeLengthSelector = selector<number>({
  key: 'countSelector',
  get: ({ get }) => {
    // get()で任意のatomの値を取得
    const count: number = get(hogeState)
    return count || 60
  },
})
