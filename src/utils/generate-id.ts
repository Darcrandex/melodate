import { customAlphabet } from 'nanoid'

export function gid(len?: number) {
  return customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 10)(len)
}
