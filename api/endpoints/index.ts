import { register } from "module";

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const baseUrlApi = `${process.env.NEXT_PUBLIC_BASE_URL}api/`;
export const baseUrlMedia = process.env.NEXT_PUBLIC_BASE_URL;


export const mediaUrl = (url: string) => {
  return `${baseUrlMedia}/uploads/${url}`;
}

export const endpoints = {
  auth: {
    register:'register',
    login:'login',
    forgotPassword:'forgot-password',
    resetPassword: 'create-new-password',
    changePassword:'change-password'
  },
  cms: {
    dashboard:'my-profile',
    updateProfile:'update-profile',
    homePageContent:'contents',
    testimonials:'testimonials',
    stateLists:'state-lists',
    callback:'callback',
    contactUs: 'contact-us',
    categories:'categories',
    insurances:'insurances',
    insuranceDetails:'insurance',
    addToCart:'cart-add-update',
    viewCart:'carts',
    emptyCart:'empty-cart'

}
}

export const sucessNotificationEndPoints = [
        endpoints.auth.register,
        endpoints.auth.forgotPassword,
        endpoints.auth.resetPassword,
        endpoints.auth.changePassword,
        endpoints.cms.dashboard,
        endpoints.cms.updateProfile,
        endpoints.cms.homePageContent,
        endpoints.cms.testimonials,
        endpoints.cms.stateLists,
        endpoints.cms.callback,
        endpoints.cms.contactUs,
        endpoints.cms.categories,
        endpoints.cms.insurances,
        endpoints.cms.insuranceDetails,
        endpoints.cms.addToCart,
        endpoints.cms.viewCart,
        endpoints.cms.emptyCart
  
];
