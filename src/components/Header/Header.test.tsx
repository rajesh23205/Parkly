import { MemoryRouter, Route, Routes } from "react-router";
import Header from "./Header";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const Home = () => <div>Home page</div>;
const About = () => <div>About page</div>;
const Sports = () => <div>Spots Page</div>;
const Login = () => <div>Login page</div>;

describe("Test header component", () => {
  const renderWithPath = (path: string) => {
    render(
      <MemoryRouter initialEntries={[path]}>
        <Header />
      </MemoryRouter>
    );
  };

  test("Highlights home link when at root path", () => {
    renderWithPath("/");
    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toHaveClass("active");
  });

  test("Highlights about link when at about path", () => {
    renderWithPath("/about");
    const aboutLink = screen.getByText(/About/i);
    expect(aboutLink).toHaveClass("active");
  });

  test("Do not highlights other then home link when at root path", () => {
    renderWithPath("/");
    const aboutLink = screen.getByText(/About/i);
    expect(aboutLink).not.toHaveClass("active");
  });

  test("Does not add active class active on sports when not on sports", () => {
    renderWithPath("/");
    const sportsLink = screen.getByText(/Spots/i);
    expect(sportsLink).not.toHaveClass("active");
  });

  test("Always show login link", () => {
    renderWithPath("/");
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  test("Show the logo link", () => {
    renderWithPath("/about");
    const logoLink = screen.getByText(/Parkly/i);
    expect(logoLink.getAttribute("href")).toBe("/");
  });

  test("Verify navigation via click", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/spots" element={<Sports />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MemoryRouter>
    );

    // Initially should show Home page
    expect(screen.getByText(/Home Page/i)).toBeInTheDocument();

    // Click About
    await userEvent.click(screen.getByRole("link", { name: /About/i }));
    expect(screen.getByText(/About Page/i)).toBeInTheDocument();

    // Click Spots
    await userEvent.click(screen.getByRole("link", { name: /spots/i }));
    expect(screen.getByText(/Spots Page/i)).toBeInTheDocument();

    // Click Login
    await userEvent.click(screen.getByRole("link", { name: /Login/i }));
    expect(screen.getByText(/Login page/i)).toBeInTheDocument();
  });
});
