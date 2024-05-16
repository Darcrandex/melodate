import { ActivitySchema } from '@/types/schema/activity'
import { PageData, ResponseSchema } from '@/types/schema/common'

export const activityApi = {
  async pages(): Promise<ResponseSchema<PageData<ActivitySchema>>> {
    const records: Array<ActivitySchema> = Array(10)
      .fill(0)
      .map((_, i) => ({
        id: `id${i}`,
        title: `title${i}`,
        type: `type${i}`,
        cover: `cover${i}`,
        description: `description${i}`,
        price: i,
        created_at: '2021-08-08 08:08:08',
        updated_at: '2021-08-08 08:08:08',
        status: 0,
      }))

    return {
      data: {
        page: 1,
        size: 0,
        total: 10,
        records,
      },
      message: '',
      code: 0,
      success: true,
    }
  },
}
