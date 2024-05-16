// 用户抛售的门票
export type TicketSchema = {
  id: string
  activityId: string
  time: string
  type: string
  price: number // 转卖的价格
  status: number

  created_at: string
  updated_at: string
}

export type TicketCreateDto = Omit<TicketSchema, 'id' | 'created_at' | 'updated_at'>

export type TicketUpdateDto = Omit<TicketSchema, 'created_at' | 'updated_at'>
