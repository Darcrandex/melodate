import { ActivitySchema } from './activity'
import { UserSchema } from './user'

// 由用户发起的约会
export type DatingSchema = {
  id: string
  publisher: UserSchema
  activity: ActivitySchema

  theme: string // 拼车，住宿，现场见，其他
  remark?: string

  time: string
  location: string
  nop: number // 人数

  status: number

  created_at: string
  updated_at: string
}

export type DatingCreateDto = Omit<
  DatingSchema,
  'id' | 'publisher' | 'activity' | 'updated_at' | 'created_at' | 'status'
> & { activityId: string }

export type DatingUpdateDto = Omit<
  DatingSchema,
  'publisher' | 'activity' | 'created_at' | 'updated_at'
> & {
  activityId: string
}
