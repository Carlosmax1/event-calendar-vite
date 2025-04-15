import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';

export function RootLayout() {
  return (
    <div className="min-h-dvh antialiased font-mulish">
      <Outlet />
      <Toaster />
    </div>
  );
}
