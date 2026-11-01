const fs = require("fs");
const file = process.argv[2];
const s = fs.readFileSync(file, "utf8");
const els = [...s.matchAll(/<(path|rect|circle)\b[^>]*>/g)].map((m) => m[0]);

function pathBox(d) {
  const toks = d.match(/[MHVCZ]|-?\d*\.?\d+/g);
  let i = 0, cmd = null, x = 0, y = 0;
  const xs = [], ys = [];
  while (i < toks.length) {
    if (/[MHVCZ]/.test(toks[i])) { cmd = toks[i++]; if (cmd === "Z") continue; }
    if (cmd === "M") { x = +toks[i++]; y = +toks[i++]; }
    else if (cmd === "H") { x = +toks[i++]; }
    else if (cmd === "V") { y = +toks[i++]; }
    else if (cmd === "C") { const a = toks.slice(i, i + 6).map(Number); i += 6; xs.push(a[0], a[2]); ys.push(a[1], a[3]); x = a[4]; y = a[5]; }
    else i++;
    xs.push(x); ys.push(y);
  }
  return [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)];
}

const pts = [];
for (const e of els) {
  const fill = (e.match(/fill="(#[0-9A-Fa-f]+)"/) || [])[1];
  const d = (e.match(/ d="([^"]+)"/) || [])[1];
  if (!d || !fill || fill === "#0A0A0A") continue;
  const [x0, y0, x1, y1] = pathBox(d);
  pts.push({ x0, y0, x1, y1, cx: (x0 + x1) / 2, cy: (y0 + y1) / 2, w: x1 - x0, fill });
}
const bbox = (arr) => [Math.min(...arr.map((p) => p.x0)), Math.min(...arr.map((p) => p.y0)), Math.max(...arr.map((p) => p.x1)), Math.max(...arr.map((p) => p.y1))];
console.log("all bbox", bbox(pts));
console.log("lit bbox", bbox(pts.filter((p) => p.fill === "#F4F4F0" || p.fill === "#FF3B00")));
const ys = [...new Set(pts.map((p) => Math.round(p.cy)))].sort((a, b) => a - b);
const xsAll = [...new Set(pts.map((p) => Math.round(p.cx)))].sort((a, b) => a - b);
console.log("rows", ys.join(","));
console.log("cols", xsAll.join(","));
for (const y of ys) {
  let line = "";
  for (const x of xsAll) {
    const p = pts.find((q) => Math.round(q.cy) === y && Math.round(q.cx) === x);
    line += !p ? " " : p.fill === "#FF3B00" ? "O" : p.fill === "#F4F4F0" ? "#" : ".";
  }
  console.log(String(y).padStart(4), line);
}
