import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 min-h-0 flex flex-col pb-20 md:pb-28">
        <Outlet />
      </main>
      <div className="flex-shrink-0 h-16 md:h-24" aria-hidden="true" />
      <Footer />
    </div>
  );
}
