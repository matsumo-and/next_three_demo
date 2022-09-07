import { atom, selector } from 'recoil'

export const countAtom = atom<number>({
  key: 'count',
  default: 60,
})

export const countSelector = selector<number>({
  key: 'countSelector',
  get: ({ get }) => {
    // get()で任意のatomの値を取得
    const count: number = get(countAtom)
    return count || 60
  },
})
