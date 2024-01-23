import { useEffect, useRef } from "react";
import styles from "./CarouselItem.module.css";
import Image from "next/image";

interface Props {
  width: number;
  height: number;
  src: string;
  isSelected?: boolean;
}

export type CarouselItemProps = Props;

export function CarouselItem(props: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (props.isSelected && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  });

  return (
    <div className={styles.component} ref={ref}>
      <Image
        width={props.width}
        height={props.height}
        src={props.src}
        alt={props.src}
      />
    </div>
  );
}
