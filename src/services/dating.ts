import { PageData, ResponseSchema } from '@/types/schema/common'
import { DatingCreateDto, DatingSchema, DatingUpdateDto } from '@/types/schema/dating'

export const datingApi = {
  async pages(): Promise<ResponseSchema<PageData<DatingSchema>>> {
    const records: Array<DatingSchema> = Array(10)
      .fill(0)
      .map((_, i) => ({
        id: `id${i}`,

        publisher: {
          id: 'a',
          username: `username${i}`,
          nickname: '张三',
          avatar: `avatar${i}`,
          gender: 0,
          signature: '签名',
          ootd: '012',
          personality: 'III 人',
          da: 65,
          created_at: '2021-08-08 08:08:08',
          updated_at: '2021-08-08 08:08:08',
        },

        activity: {
          id: '1',
          title: `title${i}`,
          type: `type${i}`,
          cover: `cover${i}`,
          description: `description${i}`,
          price: i,
          created_at: '2021-08-08 08:08:08',
          updated_at: '2021-08-08 08:08:08',
        },
        theme: '拼车',
        remark: '备注',
        time: '2021-08-08 08:08:08',
        location: '地点',
        nop: 1,
        status: 0,
        created_at: '2021-08-08 08:08:08',
        updated_at: '2021-08-08 08:08:08',
      }))

    return {
      data: {
        page: 1,
        size: 0,
        total: 0,
        records,
      },
      message: '',
      code: 0,
      success: true,
    }
  },

  async getById(id: string): Promise<ResponseSchema<DatingSchema>> {
    return {
      data: {
        id,
        publisher: {
          id: 'a',
          username: '18866663333',
          nickname: '张三',
          avatar: '',
          gender: 0,
          signature: '签名',
          ootd: '012',
          personality: 'III 人',
          da: 65,
          created_at: '2021-08-08 08:08:08',
          updated_at: '2021-08-08 08:08:08',
        },
        activity: {
          id: '1',
          title: '666演唱会',
          type: 'a',
          cover: 'cover',
          description: '俄美幸的演唱会',
          price: 200,
          created_at: '2021-08-08 08:08:08',
          updated_at: '2021-08-08 08:08:08',
        },
        theme: '拼车',
        remark: '备注',
        time: '2021-08-08 08:08:08',
        location: '地点',
        nop: 1,
        status: 0,
        created_at: '2021-08-08 08:08:08',
        updated_at: '2021-08-08 08:08:08',
      },
      message: '',
      code: 0,
      success: true,
    }
  },

  async create(dto: DatingCreateDto): Promise<ResponseSchema<null>> {
    console.log('dto', dto)
    return { data: null, message: '', code: 0, success: true }
  },

  async update(dto: DatingUpdateDto): Promise<ResponseSchema<null>> {
    console.log('dto', dto)
    return { data: null, message: '', code: 0, success: true }
  },
}
