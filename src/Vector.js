export class Vector {
  constructor({x = 0, y = 0}) {
    this.x = x
    this.y = y
  }
  
  get qLen() {
    return ((this.x * this.x) + (this.y * this.y))
  }

  get length() {
    return Math.sqrt(this.qLen)
  }
  
  add({x = 0, y = 0}) {
    return new Vector({
      x: this.x + x,
      y: this.y + y
    })
  }
  
  sub({x = 0, y = 0}) {
    return new Vector({
      x: this.x - x,
      y: this.y - y
    })
  }
  
  mult(n = 1) {
    return new Vector({
      x: this.x * n,
      y: this.y * n
    })
  }

  copy({x = 0, y = 0}) {
    this.x = x
    this.y = y
  }
  
  get norm() {
    const l = this.length || 1
    return new Vector({
      x: this.x / l,
      y: this.y / l
    })
  }

  static make(x = 0, y = 0) {
    return new Vector({x, y})
  }
}