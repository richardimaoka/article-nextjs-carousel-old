import Image from "next/image";

export default function Page() {
  return (
    <main style={{ width: "640px", margin: "auto" }}>
      <Image width={640} height={360} src="/images/1.png" alt="1.png" />
    </main>
  );
}
