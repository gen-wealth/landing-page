import { MouseEvent } from "react";

export function scrollToTop(e: MouseEvent) {
  e.preventDefault();
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export function scrollToElement(e: MouseEvent, elementName: string) {
  e.preventDefault();
  document.querySelector(elementName)?.scrollIntoView({
    behavior: "smooth",
  });
}
