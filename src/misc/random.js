export function random (min, max) {
  [min, max] = [parseInt(min), parseInt(max)]
  if (min > max) { [min, max] = [max, min] }
  max++
  return Math.floor(Math.random() * (max - min) + min)
}
