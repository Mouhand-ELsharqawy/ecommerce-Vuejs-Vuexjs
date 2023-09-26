import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ShopView from '../views/ShopView.vue'
import FurnitureView from '../views/FurnitureView'
import ContactView from '../views/ContactView.vue'
import AddCategory from '../views/category/AddCategory.vue'
import AddCustomer from '../views/customer/AddCustomer.vue'
import AddDelivery from '../views/delivery/AddDelivery.vue'
import AddOrder from '../views/order/AddOrder.vue'
import AddPayment from '../views/payment/AddPayment.vue'
import AddProduct from '../views/product/AddProduct.vue'
import AddSeller from '../views/seller/AddSeller.vue'
import AddTransaction from '../views/transaction/AddTransaction.vue'
import AllCategory from '../views/category/AllCategories.vue'
import AllCustomer from '../views/customer/AllCustomers.vue'
import AllDelivery from '../views/delivery/AllDeliveries.vue'
import AllOrder from '../views/order/AllOrders.vue'
import AllPayment from '../views/payment/AllPayments.vue'
import AllProduct from '../views/product/AllProducts.vue'
import AllSeller from '../views/seller/AllSellers.vue'
import AllTransaction from '../views/transaction/AllTransaction.vue'
import SingleCategory from '../views/category/SingelCategory.vue'
import SingleCustomer from '../views/customer/SingleCustomer.vue'
import SingleDelivery from '../views/delivery/SingleDelivery.vue'
import SingleOrder from '../views/order/SingleOrder.vue'
import SinglePayment from '../views/payment/SinglePayment.vue'
import SingleProduct from '../views/product/SingleProduct.vue'
import SingleSeller from '../views/seller/SingleSeller.vue'
import SingleTransacton from '../views/transaction/SingleTransaction.vue'
import EditCategory from '../views/category/EditCategory.vue'
import EditCustomer from '../views/customer/EditCustomer.vue'
import EditDelivery from '../views/delivery/EditDelivery.vue'
import EditOrder from '../views/order/EditOrder.vue'
import EditPayment from '../views/payment/EditPayment.vue'
import EditProduct from '../views/product/EditProduct.vue'
import EditSeller from '../views/seller/EditSeller.vue'
import EditTransacton from '../views/transaction/EditTransaction.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopView
  },
  {
    path: '/furniture',
    name: 'furniture',
    component: FurnitureView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/addcategory',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/addcustomer',
    name: 'AddCustomer',
    component: AddCustomer
  },
  {
    path: '/adddelivery',
    name: 'AddDelivery',
    component: AddDelivery
  },
  {
    path: '/addorder',
    name: 'AddOrder',
    component: AddOrder
  },
  {
    path: '/addpayment',
    name: 'AddPayment',
    component: AddPayment
  },
  {
    path: '/addproduct',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/addseller',
    name: 'AddSeller',
    component: AddSeller
  },
  {
    path: '/addreport',
    name: 'AddTransaction',
    component: AddTransaction
  },
  {
    path: '/allcategory',
    name: 'AllCategory',
    component: AllCategory
  },
  {
    path: '/allcustomer',
    name: 'AllCustomer',
    component: AllCustomer
  },
  {
    path: '/alldelivery',
    name: 'AllDelivery',
    component: AllDelivery,
  },
  {
    path: '/allorder',
    name: 'AllOrder',
    component: AllOrder
  },
  {
    path: '/allpayment',
    name: 'AllPayment',
    component: AllPayment
  },
  {
    path: '/allproduct',
    name: 'AllProduct',
    component: AllProduct
  },
  {
    path: '/allseller',
    name: 'AllSeller',
    component: AllSeller
  },
  {
    path: '/allreport',
    name: 'AllReport',
    component: AllTransaction
  },
  {
    path: '/editcategory',
    name: 'EditCategory',
    component: EditCategory,
    props: true
  },
  {
    path: '/editcategory',
    name: 'EditCategory',
    component: EditCategory,
    props: true
  },
  {
    path: '/editcustomer',
    name: 'EditCustomer',
    component: EditCustomer,
    props: true
  },
  {
    path: '/editdelivery',
    name: 'EditDelivery',
    component: EditDelivery,
    props: true
  },
  {
    path: '/editorder',
    name: 'EditOrder',
    component: EditOrder,
    props: true
  },
  {
    path: '/editpayment',
    name: 'EditPayment',
    component: EditPayment,
    props: true
  },
  {
    path: '/editproduct',
    name: 'EditProduct',
    component: EditProduct,
    props: true
  },
  {
    path: '/editseller',
    name: 'EditSeller',
    component: EditSeller,
    props: true
  },
  {
    path: '/editreport',
    name: 'EditTransaction',
    component: EditTransacton,
    props: true
  },
  {
    path: '/singlecategory',
    name: 'SingleCategory',
    component: SingleCategory,
    props: true
  },
  {
    path: '/singlecustomer',
    name: 'SingleCustomer',
    component: SingleCustomer,
    props: true
  },
  {
    path: '/singledelivery',
    name: 'SingleDelivery',
    component: SingleDelivery,
    props: true
  },
  {
    path: '/singleorder',
    name: 'SingleOrder',
    component: SingleOrder,
    props: true
  },
  {
    path: '/singlepayment',
    name: 'SinglePayment',
    component: SinglePayment,
    props: true
  },
  {
    path: '/singleproduct',
    name: 'SingleProduct',
    component: SingleProduct,
    props: true
  },
  {
    path: '/singleseller',
    name: 'SingleSeller',
    component: SingleSeller,
    props: true
  },
  {
    path: '/singlereport',
    name: 'SingleTransaction',
    component: SingleTransacton,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
