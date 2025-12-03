// import { Inter } from "next/font/google";
// import "./globals.css";
// import Footer from "@/components/MyComponents/Footer";
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/MyComponents/AppSidebar";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Finance Master",
//   description: "Track All your finance on Finance Master.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} antialiased bg-gray-100`}>
//         <SidebarProvider>
//           <AppSidebar />

//           <main className="container mx-auto">
//             <nav className="flex justify-between bg-white p-3 md:hidden">
//               <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">
//                 Finance Master
//               </h1>
//               <SidebarTrigger />
//             </nav>

//             {/* Hidden on mobile, visible on desktop */}
//             <SidebarTrigger className="hidden md:block" />

//             {children}

//             <footer className="text-center py-8 border-t border-gray-200">
//               <Footer />
//             </footer>
//           </main>
//         </SidebarProvider>
//       </body>
//     </html>
//   );
// }

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Layouts/ThemeProvider";
import { AppLayout } from "@/components/Layouts/AppLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Finance Master",
  description: "Track all your finances on Finance Master.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          storageKey="finance-theme"
          enableSystem
          disableTransitionOnChange
        >
          <AppLayout>{children}</AppLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
