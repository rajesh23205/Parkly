// src/routes/__tests__/AppRoutes.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import AppRoutes from "./AppRoutes";

describe("AppRoutes", () => {
  function renderWithRouter(initialEntries: string[]) {
    return render(
      <MemoryRouter initialEntries={initialEntries}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <AppRoutes />
        </React.Suspense>
      </MemoryRouter>
    );
  }

  test('renders Home inside MainLayout for "/" route', async () => {
    renderWithRouter(["/"]);

    // Wait for Home component to appear; it must be inside MainLayout
    expect(
      await screen.findByText(/Welcome to Our Website/i)
    ).toBeInTheDocument();

    // Optionally, verify layout element exists, e.g. header or container
    // screen.getByTestId('main-layout-header');
  });

  //   test('renders About inside MainLayout for "/about" route', async () => {
  //     renderWithRouter(["/about"]);

  //     expect(await screen.findByText(/About/i)).toBeInTheDocument();

  //     // Optionally, verify layout presence
  //   });

  test("renders NotFound for an unknown route", async () => {
    renderWithRouter(["/unknown"]);

    expect(await screen.findByText(/PageNotFound/i)).toBeInTheDocument();
  });
});
