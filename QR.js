/* QR Code generator: byte mode, error correction level M, versions 1-20. No dependencies. */
(() => {
  const ECC = [
    10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26,
    26,
  ];
  const BLK = [
    1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16,
  ];
  const bit = (x, i) => ((x >>> i) & 1) !== 0;
  const raw = (v) => {
    let r = (16 * v + 128) * v + 64;
    if (v >= 2) {
      const n = Math.floor(v / 7) + 2;
      r -= (25 * n - 10) * n - 55;
      if (v >= 7) r -= 36;
    }
    return r >> 3;
  };
  const dataCw = (v) => raw(v) - ECC[v - 1] * BLK[v - 1];
  const align = (v) => {
    if (v === 1) return [];
    const n = Math.floor(v / 7) + 2,
      step = Math.ceil((v * 4 + 4) / (n * 2 - 2)) * 2,
      a = [6];
    for (let p = v * 4 + 10; a.length < n; p -= step) a.splice(1, 0, p);
    return a;
  };
  const mul = (x, y) => {
    let z = 0;
    for (let i = 7; i >= 0; i--) {
      z = (z << 1) ^ ((z >>> 7) * 0x11d);
      z ^= ((y >>> i) & 1) * x;
    }
    return z;
  };
  const rsDiv = (deg) => {
    const r = new Array(deg).fill(0);
    r[deg - 1] = 1;
    let root = 1;
    for (let i = 0; i < deg; i++) {
      for (let j = 0; j < deg; j++) {
        r[j] = mul(r[j], root);
        if (j + 1 < deg) r[j] ^= r[j + 1];
      }
      root = mul(root, 2);
    }
    return r;
  };
  const rsRem = (data, div) => {
    const r = div.map(() => 0);
    for (const b of data) {
      const f = b ^ r.shift();
      r.push(0);
      div.forEach((c, i) => {
        r[i] ^= mul(c, f);
      });
    }
    return r;
  };
  const MASKS = [
    (x, y) => (x + y) % 2 === 0,
    (x, y) => y % 2 === 0,
    (x) => x % 3 === 0,
    (x, y) => (x + y) % 3 === 0,
    (x, y) => (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0,
    (x, y) => ((x * y) % 2) + ((x * y) % 3) === 0,
    (x, y) => (((x * y) % 2) + ((x * y) % 3)) % 2 === 0,
    (x, y) => (((x + y) % 2) + ((x * y) % 3)) % 2 === 0,
  ];

  function penalty(m) {
    const n = m.length;
    let p = 0;
    for (let a = 0; a < n; a++)
      for (const rowWise of [true, false]) {
        let run = 1;
        for (let b = 1; b < n; b++) {
          const cur = rowWise ? m[a][b] : m[b][a],
            prev = rowWise ? m[a][b - 1] : m[b - 1][a];
          if (cur === prev) {
            run++;
            if (run === 5) p += 3;
            else if (run > 5) p++;
          } else run = 1;
        }
      }
    for (let y = 0; y < n - 1; y++)
      for (let x = 0; x < n - 1; x++)
        if (
          m[y][x] === m[y][x + 1] &&
          m[y][x] === m[y + 1][x] &&
          m[y][x] === m[y + 1][x + 1]
        )
          p += 3;
    return p;
  }

  function matrix(text) {
    const bytes = Array.from(new TextEncoder().encode(text));
    let v = 1;
    for (; ; v++) {
      if (v > 20) return null;
      if (4 + (v < 10 ? 8 : 16) + 8 * bytes.length <= dataCw(v) * 8) break;
    }
    const bits = [],
      put = (val, n) => {
        for (let i = n - 1; i >= 0; i--) bits.push((val >>> i) & 1);
      },
      cap = dataCw(v) * 8;
    put(4, 4);
    put(bytes.length, v < 10 ? 8 : 16);
    bytes.forEach((b) => put(b, 8));
    put(0, Math.min(4, cap - bits.length));
    put(0, (8 - (bits.length % 8)) % 8);
    for (let p = 0xec; bits.length < cap; p ^= 0xec ^ 0x11) put(p, 8);
    const data = [];
    for (let i = 0; i < bits.length; i += 8)
      data.push(parseInt(bits.slice(i, i + 8).join(""), 2));

    const nb = BLK[v - 1],
      eb = ECC[v - 1],
      rw = raw(v),
      ns = nb - (rw % nb),
      sl = Math.floor(rw / nb),
      div = rsDiv(eb),
      blocks = [];
    for (let i = 0, k = 0; i < nb; i++) {
      const d = data.slice(k, k + sl - eb + (i < ns ? 0 : 1));
      k += d.length;
      const e = rsRem(d, div);
      if (i < ns) d.push(0);
      blocks.push(d.concat(e));
    }
    const all = [];
    for (let i = 0; i < blocks[0].length; i++)
      blocks.forEach((bl, j) => {
        if (i !== sl - eb || j >= ns) all.push(bl[i]);
      });

    const size = v * 4 + 17,
      grid = () =>
        Array.from({ length: size }, () => new Array(size).fill(false));
    const m = grid(),
      f = grid(),
      set = (mm, x, y, d) => {
        mm[y][x] = d;
        f[y][x] = true;
      };
    for (let i = 0; i < size; i++) {
      set(m, 6, i, i % 2 === 0);
      set(m, i, 6, i % 2 === 0);
    }
    const finder = (x, y) => {
      for (let dy = -4; dy <= 4; dy++)
        for (let dx = -4; dx <= 4; dx++) {
          const d = Math.max(Math.abs(dx), Math.abs(dy)),
            xx = x + dx,
            yy = y + dy;
          if (xx >= 0 && xx < size && yy >= 0 && yy < size)
            set(m, xx, yy, d !== 2 && d !== 4);
        }
    };
    finder(3, 3);
    finder(size - 4, 3);
    finder(3, size - 4);
    const ap = align(v),
      na = ap.length;
    for (let i = 0; i < na; i++)
      for (let j = 0; j < na; j++) {
        if (
          (i === 0 && j === 0) ||
          (i === 0 && j === na - 1) ||
          (i === na - 1 && j === 0)
        )
          continue;
        for (let dy = -2; dy <= 2; dy++)
          for (let dx = -2; dx <= 2; dx++)
            set(
              m,
              ap[i] + dx,
              ap[j] + dy,
              Math.max(Math.abs(dx), Math.abs(dy)) !== 1,
            );
      }
    const fmt = (mm, mask) => {
      let r = mask;
      for (let i = 0; i < 10; i++) r = (r << 1) ^ ((r >>> 9) * 0x537);
      const b = ((mask << 10) | r) ^ 0x5412;
      for (let i = 0; i <= 5; i++) set(mm, 8, i, bit(b, i));
      set(mm, 8, 7, bit(b, 6));
      set(mm, 8, 8, bit(b, 7));
      set(mm, 7, 8, bit(b, 8));
      for (let i = 9; i < 15; i++) set(mm, 14 - i, 8, bit(b, i));
      for (let i = 0; i < 8; i++) set(mm, size - 1 - i, 8, bit(b, i));
      for (let i = 8; i < 15; i++) set(mm, 8, size - 15 + i, bit(b, i));
      set(mm, 8, size - 8, true);
    };
    fmt(m, 0);
    if (v >= 7) {
      let r = v;
      for (let i = 0; i < 12; i++) r = (r << 1) ^ ((r >>> 11) * 0x1f25);
      const b = (v << 12) | r;
      for (let i = 0; i < 18; i++) {
        const a = size - 11 + (i % 3),
          c = Math.floor(i / 3);
        set(m, a, c, bit(b, i));
        set(m, c, a, bit(b, i));
      }
    }
    let i = 0;
    for (let right = size - 1; right >= 1; right -= 2) {
      if (right === 6) right = 5;
      for (let vert = 0; vert < size; vert++)
        for (let j = 0; j < 2; j++) {
          const x = right - j,
            y = ((right + 1) & 2) === 0 ? size - 1 - vert : vert;
          if (!f[y][x] && i < all.length * 8) {
            m[y][x] = bit(all[i >>> 3], 7 - (i & 7));
            i++;
          }
        }
    }
    let best = null,
      score = Infinity;
    for (let mask = 0; mask < 8; mask++) {
      const mm = m.map((r) => r.slice());
      for (let y = 0; y < size; y++)
        for (let x = 0; x < size; x++)
          if (!f[y][x] && MASKS[mask](x, y)) mm[y][x] = !mm[y][x];
      fmt(mm, mask);
      const s = penalty(mm);
      if (s < score) {
        score = s;
        best = mm;
      }
    }
    return best;
  }

  window.makeQR = (text) => {
    const m = matrix(text);
    if (!m) return "";
    const n = m.length,
      q = 4;
    let d = "";
    m.forEach((r, y) =>
      r.forEach((c, x) => {
        if (c) d += `M${x + q} ${y + q}h1v1h-1z`;
      }),
    );
    return `<svg viewBox="0 0 ${n + 2 * q} ${n + 2 * q}" shape-rendering="crispEdges" role="img" aria-label="QR"><rect width="100%" height="100%" fill="#fff"/><path d="${d}" fill="#000"/></svg>`;
  };
  window.makeQR.matrix = matrix;
})();
