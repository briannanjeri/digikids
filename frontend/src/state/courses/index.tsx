import { atom } from 'jotai'

const coursesDisplayFormat = atom<'list' | 'grid'>('grid')

export const coursesAtom = {
  coursesDisplayFormat,
}
