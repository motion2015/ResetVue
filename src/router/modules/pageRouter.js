const withPrefix = (prefix, routes) =>

    routes.map((route) => {
        console.log(prefix);
        console.log(routes);
        console.log(route);
        route.path = prefix + route.path;
        return route;
    });

const pageRouter = {
    path: "/",
    name: "layout",
    redirect: "/main",
    component: () => import("@/layout/index.vue"),
    children: [
        {
            path: "/main",
            name: "main",
            component: () => import("@/views/main.vue"),
        },
        ...withPrefix("/book", [
            {
                path: "/",
                component: () => import("@/views/Books.vue"),
            },
            {
                path: "/:tabId",
                name: "book",
                component: () => import("@/views/Books.vue"),
            },
        ]),
        {
            path: "/reference",
            name: "reference",
            component: () => import("@/views/reference.vue"),
        },
        {
            path: "/movieclass",
            name: "movieclass",
            component: () => import("@/views/movieclass.vue"),
        },
        {
            path: "/classsample",
            name: "classsample",
            component: () => import("@/views/classsample.vue"),
        },

    ]
}

export default pageRouter;