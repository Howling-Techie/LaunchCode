import {Link, Route, Routes} from "react-router-dom";

const PagePathsWithComponents = import.meta.glob("./pages/*.tsx", {eager: true});

const routes = Object.keys(PagePathsWithComponents).map((path: string) => {
    const name = path.match(/\.\/pages\/(.*)\.tsx$/)![1];
    return {
        name,
        path: name === "Home" ? "/" : `/${name.toLowerCase()}`,
        component: PagePathsWithComponents[path].default,
    };
});
const MetaTags = () => (
    <>
        <meta name="keywords" content="web development, full stack, apps, hosting, backend, frontend"/>
        <meta name="description"
              content="LaunchCode - Freelance web development to help launch your business to new heights"/>
        <meta property="og:url" content="https://howling-techie.github.io/LaunchCode"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="LaunchCode"/>
        <meta property="og:description" content="Freelance web design to help launch your business to new heights"/>
        <meta property="og:image" content="https://howling-techie.github.io/LaunchCode/assets/social.png"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="howling-techie.github.io"/>
        <meta property="twitter:url" content="https://howling-techie.github.io/LaunchCode"/>
        <meta name="twitter:title" content="LaunchCode"/>
        <meta name="twitter:description"
              content="LaunchCode - Freelance web development to help launch your business to new heights"/>
        <meta name="twitter:image" content="https://howling-techie.github.io/LaunchCode/assets/social.png"/>
    </>
);

export default function App() {
    return (
        <><MetaTags/>
            <Routes>
                {routes.map(({path, component: RouteComp}) => {
                    return <Route key={path} path={path} element={<RouteComp/>}/>;
                })}
            </Routes>
        </>
    )
        ;
}