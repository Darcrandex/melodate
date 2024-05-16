export type UserSchema = {
  id: string
  username: string // 用户名/手机号码

  nickname: string
  avatar: string
  gender: number // 性别 0: 未知 1: 男 2: 女
  signature: string
  ootd: string // 'Outfit of the Day' 相当于皮肤
  personality: string // i人？e人？
  da: number // DA值 多巴胺指数

  favoriteSinger?: string
  favoriteMusic?: string

  follows?: string[] // 关注的用户（id）

  created_at: string
  updated_at: string
}
