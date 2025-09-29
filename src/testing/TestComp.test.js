
import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import TestComp from "./TestComp";
import { Input } from "postcss";
import cleanData from "./cleanData";

// ----------------BeforAll , BeforeEach, AfterAll , AfterEach ---------
// uses to clean db or data, 
// BeforeAll - run onse before the test case, rever is AfterAll
// BeforeEach - run before the each test cases, rever is AfterEach

// beforeAll(() =>{
//     cleanData()
// }

// afterEach(() =>{
//     console.log("after each")
// })
// -----------------------

test("Test the testing component", () => {
    render (<TestComp/>)
      // it will find the Welcome Kriti in dom, or web
    // if we use /_____ / i then it will also check for upperlater or lower latter
    const text = screen.getByText(/Welcome Kriti/i)
    expect(text).toBeInTheDocument()
})

//-----------------------------------------------
test('renders learn react link', () => {
  render(<TestComp />);
  const linkElement = screen.getByText("Welcome Kriti");
  // it will not check for upperlater or lower latter
  expect(linkElement).toBeInTheDocument();
}); 

// ------------------------------------------------

// getAllByTitle - use to test the title like image title <img title="Title"

// const title = screen.getAllByTitle("Title")  
// expect(title).toBeInTheDocument()

// ------------------- INPUT --------------

test('test the input fild', () =>{
    render(<TestComp/>)

    const checkInput = screen.getByRole("textbox")
    expect(checkInput).toBeInTheDocument()

    const checkPlaceholder = screen.getByPlaceholderText("Enter Name")
    expect(checkPlaceholder).toBeInTheDocument()


    expect(checkInput).toHaveAttribute("name", "user name")
    expect(checkInput).toHaveAttribute("id", "1")

    fireEvent.change(checkInput, {target: {value: "Kriti"}})
    expect(checkInput.value).toBe("Kriti")

    const checkBtn = screen.getByRole('button')
    fireEvent.click(checkBtn)
    const isPresent = screen.getByText("Kriti")
    expect(isPresent).toBeInTheDocument()
})

// -----------ShapShort________________
// create a copy of testfile (not readable)
// used while gonna to live build if did any changes then figerout the changes
// whach moduls -  u to update the snapshort
test("snapshort test", () =>{
    const container = render (<TestComp/>)
    expect(container).toMatchSnapshot()
}

)