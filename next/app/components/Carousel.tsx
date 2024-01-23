"use client";
import { useState } from "react";
import styles from "./Carousel.module.css";
import { CarouselItem, CarouselItemProps } from "./CarouselItem";

interface Props {
  items: CarouselItemProps[];
}

export function Carousel(props: Props) {
  const [selectItemIndex, setItemIndex] = useState(0);

  return (
    <div className={styles.component}>
      <div className={styles.slider}>
        {props.items.map((x, index) => (
          <CarouselItem
            key={x.src}
            width={x.width}
            height={x.height}
            src={x.src}
            isSelected={index == selectItemIndex}
          />
        ))}
      </div>
      <div>
        {props.items.map((x, index) => (
          <button key={x.src} onClick={() => setItemIndex(index)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
