const { Provider } = require("react-redux")
const { BrowserRouter } = require("react-router-dom")
import Header from "../components/Header"
import { render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import appStore from "../utils/UserContext"

it("should render header component's login button",() => {
    render(
        <BrowserRouter>
            <Provider store ={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>

    );
    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();
})