import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <h1>Weather Now</h1>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">
        <p>&copy; 2023 Weather Now</p>
      </footer>
    </div>
  );
}
