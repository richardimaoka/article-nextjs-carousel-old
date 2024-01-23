import styles from "./Carousel.module.css";
import { CarouselItem, CarouselItemProps } from "./CarouselItem";

interface Props {
  items: CarouselItemProps[];
}

export function Carousel(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.slider}>
        {props.items.map((x) => (
          <CarouselItem
            key={x.src}
            width={x.width}
            height={x.height}
            src={x.src}
          />
        ))}
      </div>
    </div>
  );
}
