import { ResponseSchema } from '@/types/schema/common'
import { UserSchema } from '@/types/schema/user'

export const authApi = {
  async login(): Promise<ResponseSchema<string>> {
    return { data: 'this is token', message: '', code: 0, success: true }
  },

  async register(): Promise<ResponseSchema<string>> {
    return { data: 'this is token', message: '', code: 0, success: true }
  },

  async logout(): Promise<ResponseSchema<null>> {
    return { data: null, message: '', code: 0, success: true }
  },

  async profile(): Promise<ResponseSchema<UserSchema>> {
    return {
      data: {
        id: '1',
        username: 'test',
        nickname: 'test',
        avatar: '',
        gender: 0,
        signature: '',
        ootd: '',
        personality: '',
        da: 0,
        created_at: '',
        follows: [],
        updated_at: '',
      },
      message: '',
      code: 0,
      success: true,
    }
  },
}
