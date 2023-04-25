import { mfComponentWithFallback } from "./utils/mfComponentWithFallback";
import { default as FallbackHeader } from "./components/Header";
import { lazy } from "react";

export { default as Footer } from "./components/Footer";
export const Header = mfComponentWithFallback(
  // @ts-ignore
  lazy<typeof FallbackHeader>(() => import("mf-lib-poc-remote/Header")),
  FallbackHeader
);
