import Image from "next/image";

export function Carousel() {
  return (
    <div>
      <Image width={640} height={360} src="/images/1.png" alt="1.png" />
      <Image width={640} height={360} src="/images/2.png" alt="2.png" />
      <Image width={640} height={360} src="/images/3.png" alt="3.png" />
    </div>
  );
}
