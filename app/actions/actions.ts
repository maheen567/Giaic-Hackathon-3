import { Food } from "@/types/foods";


// For Add To Cart
export const addToCart = (product: Food) => {
    
    const cart : Food[] = JSON.parse(localStorage.getItem('cart') || '[]');

    const existingProductIndex = cart.findIndex(item => item._id === product._id);

    if(existingProductIndex > -1){
        cart[existingProductIndex].quantity += 1
    } else {
        cart.push({
            ...product, quantity: 1
        })
    }

    localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeFromCart = (productId : number) => {
    let cart : Food[] = JSON.parse(localStorage.getItem('cart') || '[]')
    cart = cart.filter(item => item._id !== productId)
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const updateCartQuantity = (productId :number, quantity : number) => {
    const cart : Food[] = JSON.parse(localStorage.getItem('cart') || '[]')
    const productIndex = cart.findIndex(item => item._id === productId)

    if(productIndex > -1) {
        cart[productIndex].quantity  = quantity;
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}

export const getCartItems = () : Food[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]')
}

// For wishLish
export const addToWishlist = (product: Food) => {
    const wishlist: Food[] = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const existingProductIndex = wishlist.findIndex(item => item._id === product._id);

    if (existingProductIndex === -1) {
        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
};

export const removeFromWishlist = (productId: number) => {
    let wishlist: Food[] = JSON.parse(localStorage.getItem('wishlist') || '[]');
    wishlist = wishlist.filter(item => item._id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
};

export const getWishlistItems = (): Food[] => {
    return JSON.parse(localStorage.getItem('wishlist') || '[]');
};

export const moveAllToCart = () => {
    const wishlist: Food[] = getWishlistItems();
    const cart: Food[] = JSON.parse(localStorage.getItem('cart') || '[]');

    wishlist.forEach(product => {
        const existingProductIndex = cart.findIndex(item => item._id === product._id);
        if (existingProductIndex > -1) {
            cart[existingProductIndex].quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
    });

    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('wishlist', '[]');
};
