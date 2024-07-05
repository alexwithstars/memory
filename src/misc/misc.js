export function random (min, max) {
  [min, max] = [parseInt(min), parseInt(max)]
  if (min > max) { [min, max] = [max, min] }
  max++
  return Math.floor(Math.random() * (max - min) + min)
}

export function canvasDPI (width, height, canvas) {
  const ratio = window.devicePixelRatio
  canvas.width = width * ratio
  canvas.height = height * ratio
  canvas.style.width = width + 'px'
  canvas.style.height = height + 'px'
  canvas.getContext('2d').scale(ratio, ratio)
}
