// Append a hex alpha suffix to a 6-digit hex color, e.g. alpha('#3b82f6', 0.1) -> '#3b82f61a'
export function alpha(hex, opacity) {
  const a = Math.round(opacity * 255).toString(16).padStart(2, '0')
  return `${hex}${a}`
}

// '#3b82f6' -> '59,130,246' (for rgba(var(--x), a) usage)
export function hexToRgb(hex) {
  const n = parseInt(hex.slice(1), 16)
  return `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`
}
