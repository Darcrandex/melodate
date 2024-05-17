import { ActivitySchema } from './activity'

// 用户分享的活动现场，类似于微信朋友圈
export type ShowSchema = {
  id: string

  activity: ActivitySchema

  title: string
  description?: string
  images?: string[]
  status: number // 用于标记是否删除等

  created_at: string
  updated_at: string
}

export type ShowCreateDto = Omit<ShowSchema, 'id' | 'activity' | 'created_at' | 'updated_at'> & {
  activityId: string
}

export type ShowUpdateDto = Omit<ShowSchema, 'created_at' | 'activity' | 'updated_at'>
