export class Canvas {
  constructor(parent) {
    this.__cvs = parent
      ? parent.cel('canvas')
      : document.createElement('canvas')
    this.__ctx = this.__cvs.getContext('2d')
  }

  // Resizing
  set size({x = 100, y = 100}) {
    this.__cvs.width = x
    this.__cvs.height = y
  }

  get size() {
    return {
      x: this.__cvs.width,
      y: this.__cvs.height
    }
  }

  // fill style
  set fill(style) {
    this.__ctx.fillStyle = style
  }

  get fill() {
    return this.__ctx.fillStyle
  }

  // stroke
  set stroke(style) {
    this.__ctx.strokeStyle = style
  }

  get stroke() {
    return this.__ctx.strokeStyle
  }

  // line width
  set lineWidth(width) {
    this.__ctx.lineWidth = width
  }

  get lineWidth() {
    return this.__ctx.linewidth
  }

  // clear canvas
  clear() {
    this.__ctx.clearRect(
      0, 
      0, 
      this.__cvs.width,
      this.__cvs.height
    )
  }

  // path operations
  beginPath() {
    this.__ctx.beginPath()
  }

  fillPath() {
    this.__ctx.fill()
  }

  strokePath() {
    this.__ctx.stroke()
  }

  // shorthands
  line(a, b) {

  }

  circle(center = {x: 0, y: 0}, radius = 0, fill = false, stroke = true) {
    this.__ctx.beginPath()
    this.__ctx.arc(
      center.x, 
      center.y, 
      radius,
      0, 2 * Math.PI
    )

    if (fill) {
      this.__ctx.fill()
    }

    if (stroke) {
      this.__ctx.stroke()
    }
  }

  rect(pos = {x: 0, y: 0}, size = {x: 0, y: 0}, fill = false, stroke = true) {
    this.__ctx.beginPath()
    this.__ctx.rect(
      pos.x, 
      pos.y, 
      size.x,
      size.y
    )

    if (fill) {
      this.__ctx.fill()
    }

    if (stroke) {
      this.__ctx.stroke()
    }
  }
}