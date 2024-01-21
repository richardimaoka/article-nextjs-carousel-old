import styles from "./Carousel.module.css";
import { CarouselItem } from "./CarouselItem";

export function Carousel() {
  return (
    <div className={styles.component}>
      <CarouselItem width={640} height={360} src={"/images/1.png"} />
      <CarouselItem width={640} height={360} src={"/images/2.png"} />
      <CarouselItem width={640} height={360} src={"/images/3.png"} />
    </div>
  );
}
