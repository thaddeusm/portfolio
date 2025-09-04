import Home from './views/Home.svelte';
import Query from './views/Query.svelte';
import Detail from './views/Detail.svelte';

const routes = {
    '/': Home,
    '/query/:category/:tag': Query,
    '/detail/:category/:index': Detail
};

export {routes};