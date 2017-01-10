import VueRouter from 'vue-router';

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: require('./Views/Home.vue')
        },
        {
            path: '/about',
            component: require('./Views/About.vue')
        },
        {
            path: '/contact',
            component: require('./Views/Contact.vue')
        }
    ],

    linkActiveClass: 'is-active'
});