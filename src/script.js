import { gel } from './DOM.js'
import { Vector } from './Vector.js'
import { LocMap } from './LocMap.js'
import { rndRoll, rndNum } from './Rands.js'
import { Canvas } from './Canvas.js'

const DB = document.body
const MAP = new LocMap()
const CVS = new Canvas(DB)
const BUFF = {
  list: [''],
  pos: 0
}


const rndTile = (maxX = 1, maxY = 1) => Vector.make(
  rndRoll(maxX) << 0,
  rndRoll(maxY) << 0
)

function render(time) {
  requestAnimationFrame(render)
}

function init() {
  const inp = DB.cel('input')
  inp.className = 'console'
  inp.onkeydown = (e) => {
    const val = e.target.value
    switch (e.keyCode) {
      case 13: 
        BUFF.list = [...BUFF.list, val]
        BUFF.pos = BUFF.list.length
        e.target.value = ''
        console.info(BUFF)
        setTimeout(() => eval(val), 0)
        break;
      case 38:
        BUFF.pos = BUFF.pos + 1
        BUFF.pos = Math.max(BUFF.pos, 0)
        BUFF.pos = Math.min(BUFF.pos, BUFF.list.length - 1)
        // display
        e.target.value = BUFF.list[BUFF.pos] || ''
        console.info(BUFF)
        break
      case 40:
        BUFF.pos = BUFF.pos - 1
        // min-max
        BUFF.pos = Math.max(BUFF.pos, 0)
        BUFF.pos = Math.min(BUFF.pos, BUFF.list.length - 1)
        // display
        e.target.value = BUFF.list[BUFF.pos] || ''
        console.info(BUFF)
        break;
      default:
        //console.info(e)
    }
  }
  
  CVS.size = {x: 800, y: 800}
  CVS.stroke = 'rgba(0, 0, 0, 0.15)'
  CVS.fill = 'white'
  CVS.lineWidth = '2px'

  MAP.reset()
  MAP.size(100, 100)
  MAP.tiles.forEach((t, i, a) => {
    a[i] = Vector.make(
      i % 100,
      i / 100 << 0
    )
    CVS.rect(a[i].mult(8), {x: 8, y: 8}, true)
  })

  for (let i = 0; i < 100; i++) {
    const n = MAP.tileIndex(
      Vector.make(
        rndRoll(2) * 50 << 0,
        rndRoll(2) * 50 << 0
      )
    )
    MAP.objes[n] = new Vector(MAP.tiles[n])
    MAP.objes[n].opacity = rndRoll(4) / 4

    CVS.fill = `rgba(255, 0, 0, ${MAP.objes[n].opacity})`
    CVS.circle(
      MAP.objes[n].mult(8).add({x: 4, y: 4}),
      4,
      true
    )
  }

  render()
}

function getTest() {
  console.time('get test')
  console.timeLog('get test', 'running 1M gets')
  for (let i = 0; i < 1000000; i++) {
    MAP.getTile(
      Vector.make(rndNum(100), rndNum(100))
    )
  }
  console.timeEnd('get test')
}

function traceTest() {
  console.time('trace test')
  console.timeLog('trace test', 'running 1M traces')
  for (let i = 0; i < 1000000; i++) {
    MAP.trace(
      Vector.make(rndNum(100), rndNum(100)),
      Vector.make(rndNum(100), rndNum(100))
    )
  }
  console.timeEnd('trace test')
}

function redraw() {

}

function initGFX() {
  const cvs = DB.cel('canvas')
}

init()