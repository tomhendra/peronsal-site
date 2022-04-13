export function addClass(value: string): void {
  document.documentElement.classList.add(value);
}

export function removeClass(value: string): void {
  document.documentElement.classList.remove(value);
}
