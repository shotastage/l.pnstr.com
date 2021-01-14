
import { BrowserRouter as Switch, Route, BrowserRouter } from "react-router-dom";

// Import pages
import App from './App';


function Router(): JSX.Element {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
