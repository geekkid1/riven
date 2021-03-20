'use strict'

RIVEN.lib.Console = function (id, rect) {
  RIVEN.Node.call(this, id, rect)

  this.glyph = 'M 148 65 L 148 65 L 245 65 M 149 125 L 149 125 L 245 125 M 65 185 L 65 185 L 245 185 M 65 245 L 65 245 L 245 245 M 70 65 L 126 95 L 70 125 '

  this.receive = function (q) {
    console.log(this.id, q)
  }
}
