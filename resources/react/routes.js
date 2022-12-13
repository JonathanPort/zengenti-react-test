import HomeView from './views/pages/Home.jsx';
import ExampleView from './views/pages/Example.jsx';
import StudyView from './views/pages/Study.jsx';
import ResearchView from './views/pages/Research.jsx';
import AboutUsView from './views/pages/AboutUs.jsx';

export default [
    {
        name: 'home',
        path: '/',
        element: <HomeView />,
    },
    {
        name: 'example',
        path: '/example',
        element: <ExampleView />,
    },
    {
        name: 'study',
        path: '/study',
        element: <StudyView />,
    },
    {
        name: 'about-us',
        path: '/about-us',
        element: <AboutUsView />,
    },
    {
        name: 'research',
        path: '/research',
        element: <ResearchView />,
    },
];
