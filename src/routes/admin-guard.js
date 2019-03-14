
export default (to, from, next) => {
    if(localStorage.getItem("admin") != null){
        next();
    } else {
        next('/admin/sign-in');
    }
}