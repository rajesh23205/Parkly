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

  test("Render about page once navigate to about", async () => {
    renderWithRouter(["/about"]);
    expect(await screen.findByText(/This is about page/i)).toBeInTheDocument();
  });

  test("Render page not found page on unhandled navigation", async () => {
    renderWithRouter(["/unknown"]);
    expect(await screen.findByText(/PageNotFound/i)).toBeInTheDocument();
  });
});
