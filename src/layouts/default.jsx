import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="flex flex-col min-h-screen p-6 bg-red-500 text-white items-center justify-center">
      <header className="w-full flex justify-between items-center p-4 bg-red-700">
        <div className="flex items-center">
          <img src="/path/to/china-logo.png" alt="China Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-xl font-bold">Explore China</h1>
        </div>
      </header>
      <Outlet />
    </main>
  );
};

export default Layout;