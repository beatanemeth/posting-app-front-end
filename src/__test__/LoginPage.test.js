import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginPage from "../pages/LoginPage";
import { MemoryRouter } from "react-router-dom";


describe("Behaviour of the LoginPage in general.", () => {
  test("Page title should be rendered.", () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    const H1_ELEMENT = screen.getByText("Login to create a new post");
    expect(H1_ELEMENT).toBeInTheDocument();
  });
});


describe("Behaviour of the labels on the form elemen.", () => {
  test("Email lable should be rendered.", () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    const EMAIL_LABEL = screen.getByText("Your Email");
    expect(EMAIL_LABEL).toBeInTheDocument();
  });


  test("Password label should be rendered.", () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    const PASSWORD_LABEL = screen.getByText("Your Password");
    expect(PASSWORD_LABEL).toBeInTheDocument();
  });
});


describe("Behaviour of the input fields on the form element.", () => {
  describe("Email input field.", () => {
    test("Email input field should be rendered.", () => {
      render(
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      );

      const TEXT = "your@";
      const EMAIL_INPUT = screen.getByPlaceholderText(TEXT, { exact: false });
      expect(EMAIL_INPUT).toBeInTheDocument();
    });


    test("Email input field should be empty.", () => {
      render(
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      );

      const TEXT = "your@";
      const EMAIL_INPUT = screen.getByPlaceholderText(TEXT, { exact: false });
      expect(EMAIL_INPUT.value).toBe("");
    });


    test("Email input field should change.", () => {
      render(
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      );
      const TEXT = "your@";
      const EMAIL_INPUT = screen.getByPlaceholderText(TEXT, { exact: false });

      const testValue = "my text";

      fireEvent.change(EMAIL_INPUT, { target: { value: testValue } });

      expect(EMAIL_INPUT.value).toBe(testValue);
    });
  });


  describe("Password input field.", () => {
    test("Password input field should be rendered.", () => {
      render(
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      );

      const PASSWORD_INPUT = screen.getByPlaceholderText("*****", { exact: false });
      expect(PASSWORD_INPUT).toBeInTheDocument();
    });


    test("Password input field should be empty.", () => {
      render(
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      );

      const PASSWORD_INPUT = screen.getByPlaceholderText("*****", { exact: false });
      expect(PASSWORD_INPUT.value).toBe("");
    });


    test("Password input field should change.", () => {
      render(
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      );
      const PASSWORD_INPUT = screen.getByPlaceholderText("*****", { exact: false });

      const testValue = "my text";

      fireEvent.change(PASSWORD_INPUT, { target: { value: testValue } });

      expect(PASSWORD_INPUT.value).toBe(testValue);
    });
  });
});


describe("Behaviour of the buttons on the form.", () => {
  test("Submit button should be rendered.", () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    const LOGIN_BUTTON = screen.getByTestId("loginBtn");
    expect(LOGIN_BUTTON).toBeInTheDocument();
  });
});


describe("Behaviour of error modal", () => {
  test("Error modal pops up if email or password fields are empyt.", async () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    const EMAIL_INPUT = screen.getByPlaceholderText("your@", { exact: false });
    const PASSWORD_INPUT = screen.getByPlaceholderText("*****", { exact: false });
    const LOGIN_BUTTON = screen.getByTestId("loginBtn");

    fireEvent.change(EMAIL_INPUT, { target: { value: "" } });
    fireEvent.change(PASSWORD_INPUT, { target: { value: "" } });
    fireEvent.click(LOGIN_BUTTON);

    const H2_ELEMENT = await screen.findByText("An Error Occurred!");
    expect(H2_ELEMENT).toBeInTheDocument();
  });


  test("Error modal pops up if incorrect email format is entered.", async () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    const EMAIL_INPUT = screen.getByPlaceholderText("your@", { exact: false });
    const LOGIN_BUTTON = screen.getByTestId("loginBtn");

    fireEvent.change(EMAIL_INPUT, { target: { value: "tomEmail.com" } });
    fireEvent.click(LOGIN_BUTTON);

    const H2_ELEMENT = await screen.findByText("An Error Occurred!");
    expect(H2_ELEMENT).toBeInTheDocument();
  });


  test("Error modal pops up if password is shorter than 4 characters.", async () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    const PASSWORD_INPUT = screen.getByPlaceholderText("*****", { exact: false });
    const LOGIN_BUTTON = screen.getByTestId("loginBtn");

    fireEvent.change(PASSWORD_INPUT, { target: { value: "abc" } });
    fireEvent.click(LOGIN_BUTTON);

    const H2_ELEMENT = await screen.findByText("An Error Occurred!");
    expect(H2_ELEMENT).toBeInTheDocument();
  });
});