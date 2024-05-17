import { PageData, ResponseSchema } from '@/types/schema/common'
import { ShowCreateDto, ShowSchema, ShowUpdateDto } from '@/types/schema/show'

export const showApi = {
  async pages(): Promise<ResponseSchema<PageData<ShowSchema>>> {
    const records: Array<ShowSchema> = Array(10)
      .fill(0)
      .map((_, i) => ({
        id: `id${i}`,
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
        title: '活动标题',
        description: '活动描述',
        images: [],
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

  async getById(id: string): Promise<ResponseSchema<ShowSchema>> {
    return {
      data: {
        id,
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
        title: '活动标题',
        description: '活动描述',
        images: [],
        status: 0,
        created_at: '2021-08-08 08:08:08',
        updated_at: '2021-08-08 08:08:08',
      },
      message: '',
      code: 0,
      success: true,
    }
  },

  async create(dto: ShowCreateDto): Promise<ResponseSchema<null>> {
    console.log('dto', dto)
    return { data: null, message: '', code: 0, success: true }
  },

  async update(dto: ShowUpdateDto): Promise<ResponseSchema<null>> {
    console.log('dto', dto)
    return { data: null, message: '', code: 0, success: true }
  },
}
