import HomeView from './views/pages/home.jsx';
import ExampleView from './views/pages/example.jsx';

export default [
    {
        name: 'home',
        path: '/',
        element: <HomeView />
    },
    {
        name: 'example',
        path: '/example',
        element: <ExampleView />
    },
];
