import { lazy, LazyExoticComponent } from "react";

import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () =>  JSX.Element;

interface Route {
    path: string;       // espera un tipado LazyLoad | Espera un componente común.
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
    children?: Route[];
}

// const LazyPage1 = lazy( () => import( /* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1') );
// const LazyPage2 = lazy( () => import( /* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2') );
// const LazyPage3 = lazy( () => import( /* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3') );
// const LazyLayout = lazy( () => import( /* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout') );

export const routes: Route[] = [
    {
        path: '/lazyLayout',
        Component: lazy( () => import( /* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout') ),
        name: 'LazyLayout'
    },
    {
        path: '/no-lazy',
        Component: NoLazy,
        name: 'NoLazy'
    }
];