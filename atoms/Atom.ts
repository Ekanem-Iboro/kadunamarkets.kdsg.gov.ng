import React from 'react'
import { DocumentData } from 'firebase/firestore'
import { atom } from 'recoil'

export const modalState = atom({
    key: 'modalState',
    default: false
})

export const userState = atom({
    key: 'userState',
    default: null
})

// export const projectState = atom<DocumentData | null>({
//     key: 'projectState',
//     default: null
// })
// export default modalAtom