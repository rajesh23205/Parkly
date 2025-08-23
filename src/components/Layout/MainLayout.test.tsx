import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import MainLayout from "./MainLayout";

jest.mock("../Header/Header", () => () => <header>Mock Header</header>);

describe("Test Main layout component", () => {
  const renderWithRoute = (
    route: string,
    outletText: string = "Outlet Content"
  ) => {
    const Dummy = () => <div>{outletText}</div>;

    render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="*" element={<Dummy />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
  };

  test("renders Header and outlet content at default route", () => {
    renderWithRoute("/");
    expect(screen.getByText("Mock Header")).toBeInTheDocument();
    expect(screen.getByText("Outlet Content")).toBeInTheDocument();
  });

  test("Render different outlet content depending on route", () => {
    renderWithRoute("/custom", "Custom Route Content");
    expect(screen.getByText("Mock Header")).toBeInTheDocument();
    expect(screen.getByText("Custom Route Content")).toBeInTheDocument();
  });
});
