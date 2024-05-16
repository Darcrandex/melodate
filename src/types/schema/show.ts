// 用户分享的活动现场，类似于微信朋友圈
export type ShowSchema = {
  id: string
  activityId: string

  title: string
  description?: string
  images?: string[]
  status: number // 用于标记是否删除等

  created_at: string
  updated_at: string
}

export type ShowCreateDto = Omit<ShowSchema, 'id' | 'created_at' | 'updated_at'>

export type ShowUpdateDto = Omit<ShowSchema, 'created_at' | 'updated_at'>
