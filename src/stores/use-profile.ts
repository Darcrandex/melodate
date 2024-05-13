import AsyncStorage from '@react-native-async-storage/async-storage'
import { useAtom } from 'jotai'
import { atomWithStorage, createJSONStorage } from 'jotai/utils'

const state = {
  name: '',
  email: '',
  avatar: '',
}

export type Profile = typeof state
const storage = createJSONStorage<Profile>(() => AsyncStorage)
const stateAtom = atomWithStorage('profile', state, storage)

export function useProfile() {
  return useAtom(stateAtom)
}
