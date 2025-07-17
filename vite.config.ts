import { reactRouter } from "@react-router/dev/vite";
import { sentryReactRouter, type SentryReactRouterBuildOptions } from "@sentry/react-router";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "o-kravchuk",
  project: "travel-dashboard",
  // An auth token is required for uploading source maps.
  authToken: "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"
  // ...
};

export default defineConfig(config => {
  return {
  plugins: [tailwindcss(), tsconfigPaths(), reactRouter(), sentryReactRouter(sentryConfig, config)],
  sentryConfig,
    ssr: {
      noExternal: [/@syncfusion/]
    }
  };
});