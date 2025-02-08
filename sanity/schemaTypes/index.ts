import { type SchemaTypeDefinition } from 'sanity'
import chefs from './chefs'
import foods from './foods'
import order from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [chefs, foods, order],
}
