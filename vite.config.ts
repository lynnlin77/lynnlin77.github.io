import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { copyFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import configs from "./app/configs/configs";

export default defineConfig({
  base: "/",
  plugins: [
    remix({
      basename: "/",
      ssr: false,
      buildDirectory: "build",
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route("", "routes/_index.tsx", { index: true });
          configs.pages.forEach((pageName) => {
            route(pageName, `routes/${pageName}.tsx`);
          });
        });
      },
      buildEnd(args) {
        if (!args.viteConfig.isProduction) return;
        const buildPath = args.viteConfig.build.outDir;
        copyFileSync(join(buildPath, "index.html"), join(buildPath, "404.html"));
        writeFileSync(join(buildPath, "_redirects"), "/* /index.html 200");
        writeFileSync(join(buildPath, ".nojekyll"), "");
      },
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
  build: {
    outDir: "build",
    emptyOutDir: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[hash][extname]",
        chunkFileNames: "assets/[name].[hash].js",
        entryFileNames: "assets/[name].[hash].js",
      },
    },
  },
  server: { port: 3000, strictPort: true },
  preview: { port: 3000, strictPort: true },
});