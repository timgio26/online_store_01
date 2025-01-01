import { Outlet } from "react-router-dom";
import { Catalog } from "./Catalog";
import { Header } from "./Header";

export function AppLayout() {
  return (
    <div className="flex flex-col h-screen">

      <Header />

      <main className="flex flex-row h-svh overflow-y-auto ">
        <Outlet />
      </main>
    </div>
  );
}
