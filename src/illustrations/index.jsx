// Site için çizilmiş çizgi illüstrasyonlar (eski şablondaki fotoğraf ve ikonların yerine).
// Hepsi satır içi SVG: ek istek yok, temaya göre renk değiştirir (currentColor + CSS değişkenleri),
// her boyutta keskin görünür. Süs oldukları için ekran okuyuculardan gizlenirler (aria-hidden).

const line = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function Svg({ viewBox, className, children }) {
  return (
    <svg viewBox={viewBox} className={className} aria-hidden="true" focusable="false">
      <g {...line}>{children}</g>
    </svg>
  )
}

// QR koduna benzeyen desen: üç köşe karesi + sabit (rastgele olmayan) modüller.
function QrPattern({ x, y, size }) {
  const cell = size / 9
  const finder = (fx, fy) => (
    <g key={`${fx}-${fy}`}>
      <rect x={fx} y={fy} width={cell * 3} height={cell * 3} rx={cell * 0.4} />
      <rect x={fx + cell} y={fy + cell} width={cell} height={cell} className="ink-fill" stroke="none" />
    </g>
  )
  const modules = [
    [4, 0], [5, 1], [4, 2], [0, 4], [2, 4], [4, 4], [5, 4], [7, 4],
    [8, 5], [4, 5], [6, 6], [4, 7], [5, 8], [7, 7], [8, 8], [1, 5],
  ]
  return (
    <g>
      {finder(x, y)}
      {finder(x + cell * 6, y)}
      {finder(x, y + cell * 6)}
      {modules.map(([cx, cy]) => (
        <rect
          key={`${cx}-${cy}`}
          x={x + cx * cell + cell * 0.12}
          y={y + cy * cell + cell * 0.12}
          width={cell * 0.76}
          height={cell * 0.76}
          rx={cell * 0.2}
          className={cx === 6 && cy === 6 ? 'accent-fill' : 'ink-fill'}
          stroke="none"
        />
      ))}
    </g>
  )
}

export function HeroArt({ className }) {
  return (
    <Svg viewBox="0 0 440 380" className={className}>
      {/* fikir ağı: düğümler ekrana doğru iniyor */}
      <g className="draw">
        <path d="M118 74 L176 38 L228 80 L284 46 L330 98" />
        <path d="M176 38 L192 112 L228 80" />
        <path d="M118 74 L192 112 L284 46" opacity="0.5" />
        <path d="M192 112 L196 150" strokeDasharray="2 7" />
        <path d="M330 98 L344 150" strokeDasharray="2 7" />
      </g>
      <circle cx="118" cy="74" r="6" className="paper-fill" />
      <circle cx="176" cy="38" r="9" className="accent-fill" stroke="none" />
      <circle cx="228" cy="80" r="6" className="paper-fill" />
      <circle cx="284" cy="46" r="7" className="accent-fill" stroke="none" />
      <circle cx="330" cy="98" r="6" className="paper-fill" />
      <circle cx="192" cy="112" r="10" className="accent-fill" stroke="none" />

      {/* dizüstü bilgisayar */}
      <rect x="76" y="150" width="232" height="146" rx="12" className="paper-fill" />
      <path d="M76 174 H308" />
      <circle cx="94" cy="162" r="3" />
      <circle cx="106" cy="162" r="3" />
      <circle cx="118" cy="162" r="3" />
      <rect x="96" y="190" width="84" height="56" rx="6" className="tint-fill" />
      <path d="M100 240 L124 214 L140 228 L152 218 L176 240" />
      <circle cx="160" cy="203" r="5" className="accent-fill" stroke="none" />
      <path d="M196 196 H286 M196 210 H270 M196 224 H280" />
      <rect x="196" y="236" width="46" height="14" rx="7" className="ink-fill" stroke="none" />
      <path d="M96 266 H180 M96 278 H150" opacity="0.6" />
      <path d="M52 296 H332 L352 318 Q354 324 346 324 H38 Q30 324 32 318 Z" className="paper-fill" />
      <path d="M170 306 H214" />

      {/* klavyeye yaslanmış telefon, ekranında QR */}
      <g transform="rotate(9 360 250)">
        <rect x="318" y="170" width="86" height="160" rx="16" className="paper-fill" />
        <path d="M348 182 H374" />
        <QrPattern x={334} y={206} size={54} />
        <rect x="334" y="280" width="54" height="16" rx="8" className="accent-fill" stroke="none" />
        <path d="M344 308 H378" opacity="0.6" />
      </g>

      {/* kupa */}
      <path d="M14 262 H58 V300 Q58 314 44 314 H28 Q14 314 14 300 Z" className="paper-fill" />
      <path d="M58 272 Q72 272 72 284 Q72 296 58 296" />
      <path d="M28 248 Q24 240 30 232 M42 248 Q38 238 44 228" />
    </Svg>
  )
}

export function WebArt({ className }) {
  return (
    <Svg viewBox="0 0 320 200" className={className}>
      <rect x="44" y="28" width="232" height="146" rx="12" className="paper-fill" />
      <path d="M44 52 H276" />
      <circle cx="62" cy="40" r="3" />
      <circle cx="74" cy="40" r="3" />
      <path d="M100 40 H220" opacity="0.5" />
      <path d="M96 52 V174" />
      <path d="M58 70 H82 M58 84 H78 M58 98 H82" />
      <rect x="112" y="66" width="70" height="44" rx="6" className="tint-fill" />
      <rect x="192" y="66" width="70" height="44" rx="6" />
      <path d="M112 126 H262 M112 140 H222" />
      <rect x="112" y="152" width="40" height="12" rx="6" className="accent-fill" stroke="none" />
      <path d="M232 132 L232 166 L241 157 L249 172 L255 169 L247 154 L259 154 Z" className="paper-fill" />
    </Svg>
  )
}

export function MlArt({ className }) {
  const layers = [
    [60, [50, 100, 150]],
    [140, [36, 82, 128, 174]],
    [220, [64, 136]],
    [280, [100]],
  ]
  const edges = []
  for (let i = 0; i < layers.length - 1; i++) {
    const [x1, ys1] = layers[i]
    const [x2, ys2] = layers[i + 1]
    ys1.forEach((y1) => ys2.forEach((y2) => edges.push(`M${x1} ${y1} L${x2} ${y2}`)))
  }
  return (
    <Svg viewBox="0 0 320 200" className={className}>
      <path d={edges.join(' ')} opacity="0.45" strokeWidth="1.6" />
      {layers.map(([x, ys], li) =>
        ys.map((y) => (
          <circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r={li === layers.length - 1 ? 13 : 9}
            className={li === layers.length - 1 ? 'accent-fill' : li === 1 ? 'tint-fill' : 'paper-fill'}
            stroke={li === layers.length - 1 ? 'none' : 'currentColor'}
          />
        )),
      )}
      <path d="M274 100 L279 105 L288 95" stroke="var(--paper)" strokeWidth="2.6" />
    </Svg>
  )
}

export function QrMenuArt({ className }) {
  return (
    <Svg viewBox="0 0 320 220" className={className}>
      {/* menü kartı */}
      <rect x="40" y="42" width="110" height="150" rx="10" className="paper-fill" transform="rotate(-7 95 117)" />
      <g transform="rotate(-7 95 117)">
        <path d="M70 62 V88 M64 62 V74 Q64 80 70 80 Q76 80 76 74 V62" />
        <path d="M116 62 Q126 66 124 80 H116 Z M120 80 V88" />
        <path d="M58 104 H132 M58 118 H112 M58 140 H132 M58 154 H104 M58 168 H124" opacity="0.8" />
      </g>
      {/* telefon */}
      <rect x="138" y="30" width="88" height="166" rx="16" className="paper-fill" />
      <path d="M168 42 H196" />
      <QrPattern x={155} y={70} size={54} />
      <rect x="155" y="146" width="54" height="16" rx="8" className="ink-fill" stroke="none" />
      <path d="M162 176 H202" opacity="0.6" />
      {/* servis zili */}
      <path d="M238 176 Q238 128 270 128 Q302 128 302 176 Z" className="paper-fill" />
      <path d="M230 176 H310" />
      <path d="M270 128 V120 M262 120 H278" />
      <path d="M252 152 Q254 140 264 136" opacity="0.6" />
      <circle cx="292" cy="104" r="6" className="accent-fill" stroke="none" />
      <path d="M282 94 L276 86 M296 90 L300 80 M304 102 L314 98" />
    </Svg>
  )
}

export function QrYoklamaArt({ className }) {
  return (
    <Svg viewBox="0 0 320 220" className={className}>
      {/* projeksiyon perdesi */}
      <path d="M40 30 H200" strokeWidth="3" />
      <path d="M120 22 V30" />
      <rect x="50" y="30" width="140" height="112" rx="4" className="paper-fill" />
      <QrPattern x={92} y={52} size={56} />
      <path d="M62 128 H178" strokeDasharray="1 6" opacity="0.7" />
      {/* geri sayım halkası */}
      <circle cx="170" cy="52" r="10" />
      <path d="M170 42 A10 10 0 0 1 180 52" stroke="var(--accent)" strokeWidth="3" />
      {/* okutan telefon */}
      <rect x="92" y="156" width="52" height="54" rx="10" className="paper-fill" />
      <path d="M100 152 L108 140 M136 152 L128 140 M118 150 V138" strokeDasharray="2 5" />
      <circle cx="118" cy="183" r="9" className="accent-fill" stroke="none" />
      <path d="M113 183 L117 187 L124 179" stroke="var(--paper)" strokeWidth="2.4" />
      {/* katılım listesi */}
      <rect x="214" y="58" width="80" height="130" rx="10" className="paper-fill" />
      <path d="M226 78 H270" strokeWidth="3" />
      {[100, 124, 148, 172].map((y, i) => (
        <g key={y}>
          <rect x="226" y={y - 7} width="14" height="14" rx="4" className={i < 3 ? 'tint-fill' : ''} />
          {i < 3 && <path d={`M229 ${y} L232 ${y + 3} L237 ${y - 3}`} />}
          <path d={`M248 ${y} H${i % 2 ? 272 : 282}`} opacity="0.75" />
        </g>
      ))}
    </Svg>
  )
}

export function LockNetArt({ className }) {
  return (
    <Svg viewBox="0 0 320 220" className={className}>
      <rect x="30" y="34" width="200" height="150" rx="12" className="paper-fill" />
      <path d="M30 58 H230" />
      <circle cx="48" cy="46" r="3" />
      <circle cx="60" cy="46" r="3" />
      <rect x="84" y="40" width="120" height="12" rx="6" opacity="0.6" />
      <path d="M50 80 H140" />
      <rect x="148" y="74" width="62" height="12" rx="6" className="ink-fill" stroke="none" />
      <path d="M50 102 H210 M50 124 H96" />
      <rect x="104" y="118" width="72" height="12" rx="6" className="ink-fill" stroke="none" />
      <path d="M184 124 H210 M50 146 H180 M50 166 H130" />
      {/* kalkan ve kilit */}
      <path d="M252 70 L292 84 V116 Q292 150 252 168 Q212 150 212 116 V84 Z" className="paper-fill" />
      <rect x="236" y="112" width="32" height="26" rx="6" className="accent-fill" stroke="none" />
      <path d="M242 112 V104 Q242 92 252 92 Q262 92 262 104 V112" />
      <circle cx="252" cy="124" r="3" fill="var(--paper)" stroke="none" />
      {/* çevrimdışı: kesik bulut */}
      <path d="M244 46 Q244 34 256 34 Q262 24 274 28 Q288 28 288 42 Q296 44 294 52 H246 Q240 52 244 46 Z" opacity="0.6" />
      <path d="M240 24 L298 58" />
    </Svg>
  )
}

export function AtasengArt({ className }) {
  return (
    <Svg viewBox="0 0 320 220" className={className}>
      <rect x="34" y="40" width="120" height="150" rx="8" className="paper-fill" />
      <rect x="48" y="56" width="92" height="52" rx="6" className="tint-fill" />
      <path d="M48 124 H130 M48 138 H112 M48 152 H124" />
      <rect x="48" y="166" width="38" height="12" rx="6" className="ink-fill" stroke="none" />
      <rect x="174" y="40" width="112" height="76" rx="8" className="paper-fill" />
      <path d="M188 60 H250 M188 74 H270 M188 88 H236" opacity="0.8" />
      {/* bezier eğrisi ve tutamaçlar */}
      <path d="M176 186 C196 128 250 200 282 140" />
      <path d="M176 186 L190 150 M282 140 L262 128" opacity="0.6" />
      <rect x="171" y="181" width="10" height="10" className="paper-fill" />
      <rect x="277" y="135" width="10" height="10" className="paper-fill" />
      <circle cx="190" cy="150" r="5" className="accent-fill" stroke="none" />
      <circle cx="262" cy="128" r="5" className="accent-fill" stroke="none" />
      {/* kalem ucu */}
      <path d="M240 168 L262 160 L270 182 L252 200 L234 190 Z" className="paper-fill" />
      <path d="M252 200 L250 178 M250 178 L262 160" />
      <circle cx="250" cy="178" r="3" />
    </Svg>
  )
}

export function PaperArt({ className }) {
  return (
    <Svg viewBox="0 0 320 220" className={className}>
      <path d="M70 26 H184 L218 60 V196 H70 Z" className="paper-fill" />
      <path d="M184 26 V60 H218" />
      <path d="M88 52 H160 M88 66 H144" strokeWidth="3" />
      <path d="M88 88 H198 M88 100 H190 M88 112 H198" opacity="0.7" />
      <path d="M92 176 V156 M116 176 V140 M140 176 V150 M164 176 V126" strokeWidth="10" strokeLinecap="butt" className="tint-stroke" />
      <path d="M164 176 V126" strokeWidth="10" strokeLinecap="butt" stroke="var(--accent)" />
      <path d="M84 180 H186" />
      <circle cx="232" cy="132" r="34" className="paper-fill" />
      <circle cx="232" cy="132" r="24" opacity="0.5" />
      <path d="M256 158 L286 190" strokeWidth="8" />
      <path d="M220 132 L229 141 L246 122" stroke="var(--accent)" strokeWidth="3" />
    </Svg>
  )
}

export function EnvelopeArt({ className }) {
  return (
    <Svg viewBox="0 0 220 160" className={className}>
      <rect x="30" y="40" width="160" height="104" rx="10" />
      <path d="M34 46 L110 102 L186 46" />
      <path d="M34 140 L90 88 M186 140 L130 88" opacity="0.6" />
      <circle cx="176" cy="38" r="14" className="accent-fill" stroke="none" />
      <path d="M8 60 H22 M2 80 H20 M10 100 H22" opacity="0.6" />
    </Svg>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const projectArt = {
  qrMenu: QrMenuArt,
  qrYoklama: QrYoklamaArt,
  lockNet: LockNetArt,
  ataseng: AtasengArt,
}
