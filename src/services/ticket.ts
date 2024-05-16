import { PageData, ResponseSchema } from '@/types/schema/common'
import { TicketCreateDto, TicketSchema, TicketUpdateDto } from '@/types/schema/ticket'

export const ticketApi = {
  async pages(): Promise<ResponseSchema<PageData<TicketSchema>>> {
    return {
      data: {
        page: 1,
        size: 0,
        total: 0,
        records: [],
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
        activityId: '1',
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
