import { medusaClient } from "../config"

export const getProductCategories = async (): Promise<string[]> => {
  const data = await medusaClient.productCategories
    .list({ limit: 100 })
    .then(({ categories }) => {
      return categories.map(({ id }: any) => id)
    })

  return data
}
