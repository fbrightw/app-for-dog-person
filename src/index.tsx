import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./styles.scss";
import {Provider} from "react-redux";
import {store} from "./slices/store";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // loader: rootLoader,
        children: [
            {
                path: "liked_list",
                element: <App />,
                // loader: eventLoader,
            },
        ],
    }
]);

// browserHistory.listen(location => {
//     browserHistory.push('/liked_list');
// });

// const router = (
//     <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/liked_list" element={<App/>}/>
//     </Routes>
// )

// @ts-ignore
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
            {/*<BrowserRouter>*/}
            {/*    {router}*/}
            {/*</BrowserRouter>*/}
        </Provider>
    </React.StrictMode>
);
