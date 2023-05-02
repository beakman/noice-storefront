import { ProductCategory } from "@medusajs/medusa"
import { useQuery } from "@tanstack/react-query"
import { medusaClient } from "@lib/config"

type LayoutCategory = {
  id: string
  name: string
}

const fetchCategoriesData = async (): Promise<LayoutCategory[]> => {
  let categories: ProductCategory[] = []
  let offset = 0
  let count = 1

  do {
    await medusaClient.productCategories
      .list({ limit: 100 })
      .then(({ categories: newCategories, count: newCount }) => {
        categories = [...categories, ...newCategories]
        count = newCount
        offset = categories.length
      })
      .catch((_) => {
        count = 0
      })
  } while (categories.length < count)

  return categories.map((c) => ({
    id: c.id,
    name: c.name,
  }))
}

export const useProductCategories = () => {
  const queryResults = useQuery({
    queryFn: fetchCategoriesData,
    queryKey: ["product_categories"],
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  })

  return queryResults
}
