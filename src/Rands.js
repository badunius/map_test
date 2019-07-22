export const rndRoll = (n = 1) => (new Array(n)).fill(0).reduce((prev, curr) => prev + Math.random(), 0)

export const rndColor = (v = 1) => {
  const r = 1 - v
  const comp = '000'.split('').map(el => Math.random())
  const min = Math.min(...comp)
  const max = Math.max(...comp)
  const del = max - min
  comp.forEach((el, i) => {
    comp[i] = (
      (v * (el - min) / del + r * el) * 255
    ) << 0
  })
  //console.log(comp, min, max, del)
  return `#${comp.map(el => el.toString(16).padStart(2, 0)).join('')}`
}

export const rndNum = (n = 1) => Math.random() * n