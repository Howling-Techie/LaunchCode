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

export default function App() {
    return (
        <Routes>
            {routes.map(({path, component: RouteComp}) => {
                return <Route key={path} path={path} element={<RouteComp/>}/>;
            })}
        </Routes>
    );
}