// 由平台发布的活动
export type ActivitySchema = {
  id: string
  title: string
  type: string // live-house，音乐节，演唱会
  description: string
  cover: string
  price: number

  created_at: string
  updated_at: string
}
