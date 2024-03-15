import { MouseEvent } from "react";

export function scrollToTop(e: MouseEvent) {
  e.preventDefault();
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export function scrollToElement(e: MouseEvent, elementId: string) {
  e.preventDefault();
  document.getElementById(elementId)?.scrollIntoView({
    behavior: "smooth",
  });
}
