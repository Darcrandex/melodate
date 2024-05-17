import { ActivitySchema } from './activity'

// 用户抛售的门票
export type TicketSchema = {
  id: string
  activity: ActivitySchema
  time: string
  type: string
  price: number // 转卖的价格
  status: number

  created_at: string
  updated_at: string
}

export type TicketCreateDto = Omit<
  TicketSchema,
  'id' | 'activity' | 'created_at' | 'updated_at'
> & {
  activityId: string
}

export type TicketUpdateDto = Omit<TicketSchema, 'activity' | 'created_at' | 'updated_at'>
