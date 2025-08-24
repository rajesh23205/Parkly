import React from "react";
import AppRoutes from "./AppRoutes";
import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";

describe("Tets all the routers are navigating as expected", () => {
  function renderWithRouter(initialEntries: string[]) {
    return render(
      <MemoryRouter initialEntries={initialEntries}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <AppRoutes />
        </React.Suspense>
      </MemoryRouter>
    );
  }

  test("Render home page on as landing page", async () => {
    renderWithRouter(["/"]);
    expect(
      await screen.findByText(/welcome to our website/i)
    ).toBeInTheDocument();
  });

  test("Render find page on as on find page", async () => {
    renderWithRouter(["/find"]);
    expect(
      await screen.findByText(/welcome to our website/i)
    ).toBeInTheDocument();
  });

  test("Render register page on as on register page", async () => {
    renderWithRouter(["/register"]);
    expect(
      await screen.findByText(/This is about register parking page/i)
    ).toBeInTheDocument();
  });

  test("Render page not found page on unhandled navigation", async () => {
    renderWithRouter(["/unknown"]);
    expect(await screen.findByText(/PageNotFound/i)).toBeInTheDocument();
  });
});
