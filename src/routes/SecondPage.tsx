import { useState } from "react";
import { RouteLink } from "../components/RouteLink";
import { Button } from "flowbite-react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/electron-vite.animate.svg";
import { LinkList } from "../components/LinkList";

export const SecondPage = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <LinkList />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold">Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/routes/SecondPage.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <RouteLink to="/">TopPage.tsxに遷移</RouteLink>
    </>
  );
};
