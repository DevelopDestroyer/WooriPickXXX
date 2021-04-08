import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
    key: 'recoil-persist', // configuration stay the same too
    storage: localStorage
})

export {
    persistAtom
}