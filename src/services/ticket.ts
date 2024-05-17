import { PageData, ResponseSchema } from '@/types/schema/common'
import { TicketCreateDto, TicketSchema, TicketUpdateDto } from '@/types/schema/ticket'

export const ticketApi = {
  async pages(): Promise<ResponseSchema<PageData<TicketSchema>>> {
    const records: Array<TicketSchema> = Array(10)
      .fill(0)
      .map((_, i) => ({
        id: `id${i}`,
        activity: {
          id: `id${i}`,
          title: `title${i}`,
          type: `type${i}`,
          cover: `cover${i}`,
          description: `description${i}`,
          price: i,
          created_at: '2021-08-08 08:08:08',
          updated_at: '2021-08-08 08:08:08',
        },
        time: '2021-08-08 08:08:08',
        type: '早鸟票',
        price: 1,
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

  async getById(id: string): Promise<ResponseSchema<TicketSchema>> {
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
        time: '2021-08-08 08:08:08',
        type: '早鸟票',
        price: 1,
        status: 0,
        created_at: '2021-08-08 08:08:08',
        updated_at: '2021-08-08 08:08:08',
      },
      message: '',
      code: 0,
      success: true,
    }
  },

  async create(dto: TicketCreateDto): Promise<ResponseSchema<null>> {
    console.log('dto', dto)
    return { data: null, message: '', code: 0, success: true }
  },

  async update(dto: TicketUpdateDto): Promise<ResponseSchema<null>> {
    console.log('dto', dto)
    return { data: null, message: '', code: 0, success: true }
  },
}
