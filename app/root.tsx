import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Navbar } from "./components/Navbar";
import stylesheet from "~/tailwind.css?url";
import configs from "./configs/configs";
import About from "./routes/about";
import { json } from "@remix-run/node";
import { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";


// export async function loader({ request }: LoaderFunctionArgs) {
//   if (request.url.includes("/.well-known/appspecific/")) {
//     return new Response(null, { status: 204 });
//   }
//   return json({});
// }

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "icon", href: "pictures/icon.png" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap"
          rel="stylesheet"
        />

        <Meta />
        <Links />
      </head>
      <body
        className={`flex flex-col min-h-screen`}
        style={{ backgroundColor: configs.colors.background }}
      >
        <Navbar />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div className="w-full md:w-5/6 mx-auto">
      <Outlet />
    </div>
  );
}

export function HydrateFallback() {
  return (
    <div className="w-full flex items-center">
      <About />
    </div>
  );
}