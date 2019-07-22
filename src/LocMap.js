export class LocMap {
  constructor() {
    this.reset()
  }

  reset() {
    this.tiles = []
    this.index = []
    this.objes = []
    this.units = []
  }

  size(width = 0, height = 0) {
    this.tiles = new Array(width * height).fill({})
    this.objes = new Array(width * height).fill()
    this.index = (new Array(height)).fill().map((e, i) => i * width)
  }

  tileIndex({x = 0, y = 0}) {
    return this.index[y] + x
  }

  getTile(p) {
    return this.tiles[
      this.tileIndex(p)
    ]
  }

  /**
   * LoS tracing
   * @param {Vector} a - point A
   * @param {Vector} b - point B
   */
  trace(a, b, debug = false) {
    const maxD = Math.max(
      Math.abs(b.x - a.x),
      Math.abs(b.y - a.y)
    ) + 1 
    // tracing step
    const step = b.sub(a).mult(1 / maxD)
    // resulting visibility 
    let vis = 1
    for (let s = 1; s < maxD; s++) {
      const pos = a.add(step.mult(s))
      const n = this.tileIndex({
        x: Math.ceil(pos.x),
        y: Math.ceil(pos.y)
      })
      if (debug) {
        console.log(
          'visiting tile %d:%d', 
          Math.ceil(pos.x),
          Math.ceil(pos.y)
        )
      }
      vis *= this.objes[n]
        ? this.objes[n].opacity || 1
        : 1
    }

    return vis
  }
}