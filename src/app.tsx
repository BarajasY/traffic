// @refresh reload
import { Link, MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Suspense } from "solid-js";
import './root.scss';

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>Tráfico</Title>
          <Link rel="preconnect" href="https://fonts.googleapis.com" />
          <Link rel="preconnect" href="https://fonts.gstatic.com" />
          <Link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
