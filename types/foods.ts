

export interface Food {
    _id: number
    name: string
    _type: "food"
    image?: {
        asset : { _ref: string; _type: "image"; }
    }
    originalPrice: number
    tags: string[];
    category: string
    price: number
    description: string
    available : boolean
    slug : {
        _type: 'slug',
        current: string
    }
    quantity: number
}