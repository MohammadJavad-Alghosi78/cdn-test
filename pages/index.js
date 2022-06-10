import getConfig from "next/config";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
// Will only be available on the server-side
console.log(serverRuntimeConfig.mySecret);
// Will be available on both server-side and client-side
console.log(publicRuntimeConfig.staticFolder);

export default function Home() {
  // if (typeof window !== "undefined") {
  //   console.log(window.location.hostname);
  // }
  return (
    <div>
      <h1>test</h1>
    </div>
  );
}
