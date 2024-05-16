// api 数据返回格式
export type ResponseSchema<Data = any> = {
  code: number
  success: boolean
  data: Data
  message: string
}

export type PageData<Data = any> = {
  page: number
  size: number
  total: number
  records: Data[]
}
