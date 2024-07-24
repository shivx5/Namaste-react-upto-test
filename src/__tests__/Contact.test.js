import { render,screen } from "@testing-library/react"
import Contact from "../components/contact/Contact"
import "@testing-library/jest-dom"

describe('contact page test cases', () => {
  
    test("render a contact page ",()=>{
        render(<Contact/>);
        const heading =screen.getByRole("heading")
        expect(heading).toBeInTheDocument();
    
    })
    test("button in  contact page ",()=>{
        render(<Contact/>);
        const button =screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    
    })
    
    test("placeholder name in input field",()=>{
        render(<Contact/>);
        const placeHolder_name = screen.getByPlaceholderText("name");
        expect(placeHolder_name).toBeInTheDocument();
    })
})

