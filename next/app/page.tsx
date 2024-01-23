import { Carousel } from "./components/Carousel";

export default function Page() {
  const items = [
    {
      width: 640,
      height: 360,
      src: "/images/1.png",
    },
    {
      width: 640,
      height: 360,
      src: "/images/2.png",
    },
    {
      width: 640,
      height: 360,
      src: "/images/3.png",
    },
  ];

  return (
    <main>
      <Carousel items={items} />
    </main>
  );
}
