const { render , screen} = require("@testing-library/react")
const { default: Contact } = require("../components/Contact")
import "@testing-library/jest-dom"

test("testing if the contact us page renders button componet or not", () => {
    render(<Contact/>);
    const heading = screen.getByRole("button");
    expect(heading).toBeInTheDocument();
});