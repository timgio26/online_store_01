import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { MobileFooter } from "./MobileFooter";



export function AppLayout() {

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <main className="flex flex-row h-svh overflow-y-auto">
        <Outlet />
      </main>
      <MobileFooter />
    </div>
  );
}
