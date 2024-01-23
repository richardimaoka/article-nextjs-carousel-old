import styles from "./CarouselItem.module.css";
import Image from "next/image";

interface Props {
  width: number;
  height: number;
  src: string;
}

export type CarouselItemProps = Props;

export function CarouselItem(props: Props) {
  return (
    <div className={styles.component}>
      <Image
        width={props.width}
        height={props.height}
        src={props.src}
        alt={props.src}
      />
    </div>
  );
}
