export default function Home() {
  if (typeof window !== "undefined") {
    console.log(window.location.hostname);
  }
  return (
    <div>
      <h1>test</h1>
    </div>
  );
}
