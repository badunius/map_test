HTMLElement.prototype.cel = function(tag) { 
  const el = document.createElement(tag)
  if (el) { this.appendChild(el) } 
  return el 
}

HTMLElement.prototype.cen = function(NS, tag) { 
  const el = document.createElementNS(NS, tag)
  if (el) { this.appendChild(el) } 
  return el 
}

export function gel(i) { return document.getElementById(i) }