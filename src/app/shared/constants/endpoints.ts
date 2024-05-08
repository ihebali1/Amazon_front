export const ENDPOINTS = {
    SIGN_IN: 'v1/backoffice/auth/singin',
    //cart
    CART: {
        GET: 'carts',
        REMOVE_PRODUCT: 'carts/remove-product',
        ADD_PRODUCT: 'carts/add-product',
        INCREASE_QUANTITY: 'carts/increase-quantity',
        DECREASE_QUANTITY: 'carts/decrease-quantity',
    },
    //vendor
    VENDOR: {
        GET:'vendor',
        GET_PRODUCTS: 'products/vendor'
    },
    //order
    ORDER: {
        GET:'orders',
        POST:'orders',
        MINE: 'orders/clients/mine'
    },
    //payment method
    PAYMENT_METHOD:{
        GET: 'payment-methods'
    },

    //report
    REPORT_ORDER:{
        GET: 'report-orders'
    },

    //department
    DEPARTMENT: {
        GET: 'departments'
    },

    //department
    PRODUCT: {
        GET: 'products',
        GET_HOT_NEW: 'products/hot-new-arrival'
    },

    //department
    HISTORY: {
        GET_PRODUCTS: 'histories/products'
    }

  
  
    
    
  };
  