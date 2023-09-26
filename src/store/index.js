import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    categories: [],
    customers: [],
    deliveries: [],
    delivery:[],
    orders: [],
    payments: [],
    products: [],
    sellers: [],
    transactions: [],
  },
  getters: {
  },
  mutations: {
    getAllCategories(state,payload){
      state.categories = payload
    },
    addCategory(state,payload){
      state.categories.push(payload)
 
    },
    getOneCategory(state, payload){
      state.categories = payload
      // console.log("commit"+payload)
 
    },
    EditCategory(state,payload){
      state.categories = state.categories.splice(state.categories[payload._id],1,payload)
    
    },
    deleteCategory(state,payload){
      state.categories = state.categories.splice(payload,1)
 
    },



    getCustomer(state,payload){
      state.customers = payload
 
    },
    addCustomer(state,payload){
      state.customers.push(payload)
 
    },
    getOneCustomer(state,customerData){
      state.customers = customerData
 
    },
    editCustomer(state,payload){
      state.customers = state.customers.splice(state.customers[payload._id],1,payload)
 
    },
    deleteCustomer(state,payload){
      state.customers = state.customers.splice(payload,1)
 
    },



    getDelivery(state,payload){
      state.deliveries = payload
 
    },
    addDelivery(state,payload){
      state.deliveries.push(payload)
 
    },
     getOneDelivery(state,payload){
       state.deliveries = payload
      
       console.log(state.deliveries)
    },
    editDelivery(state,payload){
      state.deliveries = state.deliveries.splice(state.deliveries[payload._id],1,payload)
 
    },
    deleteDelivery(state,payload){
      state.deliveries = state.deliveries.splice(payload,1)
 
    },



    getOrder(state,payload){
      state.orders = payload
 
    },
    addOrder(state,payload){
      state.orders.push(payload)
 
    },
    getOneOrder(state,payload){
      state.orders = payload
 
    },
    editOrder(state,payload){
      state.orders = state.orders.splice(state.orders[payload._id],1,payload)
 
    },
    deleteOrder(state,payload){
      state.orders = state.orders.splice(payload,1)
 
    },



    getPayment(state,paymentData){
      state.payments = paymentData
 
    },
    addPayment(state,payload){
      state.payments.push(payload)
 
    },
    getOnePayment(state,payload){
      state.payments = payload
 
    },
    editPayment(state,payload){
      state.payments = state.payments.splice(state.payments[payload._id],1,payload)
 
    },
    deletePayment(state,payload){
      state.payments = state.payments.splice(payload,1)
 
    },



    getProduct(state,payload){
      state.products = payload
 
    },
    addProduct(state,payload){
      state.products.push(payload)
 
    },
    getOneProduct(state,payload){
      state.products = payload
 
    },
    editProduct(state,payload){
      state.products = state.products.splice(state.products[payload._id],1,payload)
 
    },
    deleteProduct(state,payload){
      state.products = state.products.splice(payload,1)
 
    },


    getSeller(state,payload){
      state.sellers = payload
 
    },
    addSeller(state,payload){
      state.sellers.push(payload)
 
    },
    getOneSeller(state,payload){
      state.sellers = payload
    },
    editSeller(state,payload){
      state.sellers = state.sellers.splice(state.sellers[payload._id],1,payload)
    },
    deleteSeller(state,payload){
      state.sellers = state.sellers.splice(payload,1)
    },



    getTransaction(state,payload){
      state.transactions = payload

    },
    addTransaction(state,payload){
      state.transactions.push(payload)
    },
    getOneTransaction(state,payload){
      state.transactions = payload
    },
    editTransaction(state,payload){
      state.transactions = state.transactions.splice(state.transactions[payload._id],1,payload)
    },
    deleteTransaction(state,payload){
      state.transactions = state.transactions.splice(payload,1)
    },
  },
  actions: {


    async getAllCategories({commit}){
     try{
      const res = await axios.get('http://localhost:3000/api/category')
      const data = await res.data
      commit("getAllCategories",data)
     }catch(error){
      console.log(error.message)
     }
    },

    async addCategory({ commit }, categoryData) {
      try {
        const res = await axios.post('http://localhost:3000/api/category', categoryData);
          const data = res.data;
          commit('addCategory', data);
      } catch (error) {
        console.error(error);
      }
    },
    


    async getOneCategory({commit}, categoryId){
      try{
        const res = await axios.get('http://localhost:3000/api/category/'+categoryId)
        const data = await res.data
        commit("getOneCategory",data)
      }catch(error){
        console.log(error.message)
      }
    },


    async EditCategory({commit}, categorydata){
     try{
      const res = await axios.patch('http://localhost:3000/api/category/' + categorydata.id, categorydata.data)
      const data = await  res.data
      commit("EditCategory",data)
      console.log(data)
     }catch(error){
      console.log(error.message)
     }
    },



    async deleteCategory({commit},id){
      try{
        const res = await axios.delete('http://localhost:3000/api/category/'+id)
        commit("deleteCategory",id)
      }catch(error){
        console.log(error.message)
      }
    },

    async getCustomer({commit}){
      try{
      const res = await axios.get('http://localhost:3000/api/customer') 
      const data = await res.data
      commit("getCustomer",data)
      }catch(error){
        console.log(error.message)
      }
    },




    async addCustomer({commit},customerinputes){
      try{
        const res = await axios.post('http://localhost:3000/api/customer',customerinputes)
        if( res.status === 200){
          const data = await res.data
          commit("addCustomer",data)
        }
      }catch(error){
        console.log(error.message)
      }
    },


   async getOneCustomer({commit},customerId){
      try{
        const res = await axios.get('http://localhost:3000/api/customer/'+customerId)
        if(res.status === 200){
        const data =await res.data
        commit("getOneCustomer",data)
        }
      }catch(error){
        console.log(error.message)
      }
    },


    async editCustomer({commit},customerdata){
      try{
        const res = await axios.patch('http://localhost:3000/api/customer/' + customerdata.id,
        customerdata.data)
        const data = await res.data
        commit("editCustomer",data)
      }catch(error){
        console.log(error.message)
      }
    },

    async deleteCustomer({commit},id){
      try{
        const res = await axios.delete('http://localhost:3000/api/customer/' + id)
        commit("deleteCustomer",id)
      }catch(error){
        console.log(error.message)
      }
    },

    async getDelivery({commit}){
      try{
        const res = await axios.get('http://localhost:3000/api/delivery')
        const data = await res.data
        commit("getDelivery",data)
      }catch(error){
        console.log(error.message)
      }
    },

    async addDelivery({commit},deliveryInputes){
      try{
        const res = await axios.post('http://localhost:3000/api/delivery',deliveryInputes)
        const data = await res.data
        commit("addDelivery",data)
      }catch(error){
        console.log(error.message)
      }
    },


    async getOneDelivery({commit},deliveryId){
      try{
        const res = await axios.get('http://localhost:3000/api/delivery/'+deliveryId)
        const data = await res.data
        commit("getOneDelivery",data)
      }catch(error){
        console.log(error.message)
      }
    },


    async editDelivery({commit},deliverydata){
      try{
        const res = await axios.patch('http://localhost:3000/api/delivery/'+deliverydata.id,
        deliverydata.data)
        const data = await res.data
        commit("editDelivery",data)
      }catch(error){
        console.log(error.message)
      }
    },

    async deleteDelivery({commit},id){
      try{
        const res = await axios.delete('http://localhost:3000/api/delivery/'+id)
        commit("deleteDelivery",id)
      }catch(error){
        console.log(error.message)
      }
    },

    async getOrder({commit}){
     try{
      const res = await axios.get('http://localhost:3000/api/order')
      const data = await res.data
      commit("getOrder",data)
    }catch(error){
      console.log(error.message)
     }
    },

    async addOrder({commit},orderInputes){
      try{
          const res = await axios.post('http://localhost:3000/api/order',orderInputes)
          const data = await res.data
          commit("addOrder",data)
      }catch(error){
        console.log(error.message)
      }
    },
    
    async getOneOrder({commit},orderId){
     try{
      const res = await axios.get('http://localhost:3000/api/order/'+orderId)
      const data = res.data 
      commit("getOneOrder",data)
     }catch(error){
        console.log(error.message)
      }
    
    },


    async editOrder({commit},orderdata){
      try{
        const res = await axios.patch('http://localhost:3000/api/order/'+orderdata.id,
        orderdata.data)
        const data = await res.data
        commit("editOrder",data)
      }catch(error){
        console.log(error.message)
      }
    },

    async deleteOrder({commit},id){
      try{
        const res = await axios.delete('http://localhost:3000/api/order/'+id)
        commit("deleteOrder",id)
      }catch(error){
        console.log(error.message)
      }
    },



  
    async getPayment({commit}){
      try{
        const payres = await axios.get('http://localhost:3000/api/payment')
        const paydata = await payres.data
        commit("getPayment",paydata)
      }catch(error){
        console.log(error.message)
      }
    },


    async  addPayment({commit},paymentInputes){
      try{
        const res = await axios.post('http://localhost:3000/api/payment',paymentInputes)
        const data = await res.data
        commit("addPayment",data)
      }catch(error){
        console.log(error.message)
      }
    },

    async getOnePayment({commit},paymentId){
      try{
        const res = await axios.get('http://localhost:3000/api/payment/'+paymentId)
        const data = await res.data
        commit("getOnePayment",data)
      }catch(error){
        console.log(error.message)
      }
    },


    async editPayment({commit},paymentdata){
      try{
        const res = await axios.patch('http://localhost:3000/api/payment/'+paymentdata.id,
        paymentdata.data)
        const data = await res.data
        commit("editPayment",data)
      }catch(error){
        console.log(error.message)
      }
    },

    async deletePayment({commit},id){
      try{
        const res = await axios.delete('http://localhost:3000/api/payment/'+id) 
        commit("deletePayment",id)
      }catch(error){
        console.log(error.message)
      }
    },


    async getProduct({commit}){
      try{
        const res = await axios.get('http://localhost:3000/api/product')
        const data  = await res.data
        commit("getProduct",data)
      }catch(error){
        console.log(error.message)
      }
    },

    async addProduct({commit},productInputes){
      try{

        const res = await axios.post('http://localhost:3000/api/product',productInputes)
        const data = await res.data
        commit("addProduct",data)

      }catch(error){
        console.log(error.message)
      }
    },


    async getOneProduct({commit},productId){
     try{
      const res = await axios.get('http://localhost:3000/api/product/'+productId)
      const data = await res.data
      commit("getOneProduct",data)
     }catch(error){
      console.log(error.message)
     }
    },


    async editProduct({commit},productdata){
      try{
        const res = await axios.patch('http://localhost:3000/api/product/'+productdata.id,
        productdata.data)
        const data = await res.data
        commit("editProduct",data)
      }catch(error){
        console.log(error.message)
      }
    },

    async deleteProduct({commit},id){
    try{
      const res = await axios.delete('http://localhost:3000/api/product/'+id)
      commit("deleteProduct",id)
    }catch(error){
      console.log(error.message)
    }
  },
  
  async getSeller({commit}){
    try{
      const res = await axios.get('http://localhost:3000/api/seller')
      const data = await res.data
      commit("getSeller",data)
    }catch(error){
      console.log(error.message)
    }
  },


  


  async addSeller({commit},sellerInputes){
    try{
      const res = await axios.post('http://localhost:3000/api/seller',sellerInputes)
      const data = await res.data
      commit("addSeller",data)
    }catch(error){
      console.log(error.message)
    }
  },


  async getOneSeller({commit},sellerId){
    try{
      const res = await axios.get('http://localhost:3000/api/seller/'+sellerId)
      const data = await res.data
      commit("getOneSeller",data)
    }catch(error){
      console.log(error.message)
    }
  },


  async editSeller({commit},sellerdata){
    try{
      const res = await axios.patch('http://localhost:3000/api/seller/'+sellerdata.id,
      sellerdata.data)
      const data = await res.data
      commit("editSeller",data)
    }catch(error){
      console.log(error.message)
    }
  },

  async deleteSeller({commit},id){
    try{
      const res = await axios.delete('http://localhost:3000/api/seller/'+id)
      commit("deleteSeller",id)
    }catch(error){
      console.log(error.message)
    }
  },


  async getTransaction({commit}){
   try{
    const res = await axios.get('http://localhost:3000/api/report')
    const data = await res.data
    commit("getTransaction",data)
   }catch(error){
    console.log(error.message)
   }
  },


  async addTransaction({commit},transactionInputes){
    try{
      const res = await axios.post('http://localhost:3000/api/report',transactionInputes)
      const data = await res.data
      commit("addTransaction",data)
    }catch(error){
      console.log(error.message)
    }
  },


  async getOneTransaction({commit},transactionId){
   try{
    const res = await axios.get('http://localhost:3000/api/report/'+transactionId)
    const data = await res.data
    commit("getOneTransaction",data)
   }catch(error){
    console.log(error.message)
   }
  },

  async editTransaction({commit},transactiondata){
    try{
      const res = await axios.patch('http://localhost:3000/api/report/'+transactiondata.id,
      transactiondata.data)
      const data = await res.data
      commit("editTranaction",data)
    }catch(error){
      console.log(error.message)
    }
  },


  async deleteTransaction({commit},id){
    try{
      const res = await axios.delete('http://localhost:3000/api/report/'+id)
      commit("deleteTransaction",id)
    }catch(error){
      console.log(error.message)
    }
  }
  ,

}})
