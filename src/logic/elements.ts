export interface ElementData {
  z: number;              // Số hiệu nguyên tử (1..118)
  symbol: string;         // Ký hiệu hóa học (H, He...)
  nameVi: string;         // Tên tiếng Việt (Hiđro, Heli...)
  nameEn: string;         // Tên tiếng Anh (Hydrogen, Helium...)
  atomicMass: string;     // Nguyên tử khối trung bình / chuẩn IUPAC (u)
  group: number | 'f-block'; // Nhóm (1..18 hoặc 'f-block')
  period: number;         // Chu kỳ (1..7)
  category: string;       // Loại chi tiết (kim loại kiềm, kiềm thổ, chuyển tiếp, ...)
  generalType: 'Kim loại' | 'Phi kim' | 'Á kim' | 'Khí hiếm'; // Loại chung
  configCondensed: string;// Cấu hình rút gọn e.g. "[He] 2s² 2p⁴"
  configFull: string;     // Cấu hình đầy đủ e.g. "1s² 2s² 2p⁴"
  isPredicted?: boolean;  // Cấu hình dự đoán
  discoverer: string;     // Người phát hiện
  year: number | string;  // Năm phát hiện hoặc "Thời cổ đại"
  notes?: string;         // Chú thích nếu có
}

export interface Subshell {
  label: string; // e.g. "1s", "2p"
  n: number;
  type: 's' | 'p' | 'd' | 'f';
  count: number; // number of electrons in this subshell
  orbitals: ('empty' | 'up' | 'pair')[]; // Hund's rule orbital states
}

const NOBLE_CORE_EXPANSIONS: Record<string, string> = {
  '[He]': '1s²',
  '[Ne]': '1s² 2s² 2p⁶',
  '[Ar]': '1s² 2s² 2p⁶ 3s² 3p⁶',
  '[Kr]': '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶',
  '[Xe]': '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶',
  '[Rn]': '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶',
};

const SUPERSCRIPT_MAP: Record<string, string> = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
  '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
};

export function parseSuperscriptNumber(str: string): number {
  let res = '';
  for (const ch of str) {
    if (SUPERSCRIPT_MAP[ch] !== undefined) {
      res += SUPERSCRIPT_MAP[ch];
    } else if (/\d/.test(ch)) {
      res += ch;
    }
  }
  return parseInt(res, 10) || 0;
}

export function toSuperscript(num: number): string {
  const map: Record<string, string> = {
    '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
    '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
  };
  return String(num).split('').map(d => map[d] || d).join('');
}

// Convert "1s² 2s² 2p⁴" into parsed Subshell list with Hund's rule orbitals
export function parseConfigurationToSubshells(configStr: string): Subshell[] {
  // Remove core bracket if any e.g. "[He] "
  const clean = configStr.replace(/\[(He|Ne|Ar|Kr|Xe|Rn)\]\s*/g, '').trim();
  if (!clean) return [];

  // Match subshells like "1s²", "2p⁴", "3d¹⁰", "4f¹⁴"
  const tokens = clean.split(/\s+/).filter(Boolean);
  const result: Subshell[] = [];

  for (const token of tokens) {
    const match = token.match(/^(\d)([spdf])([⁰¹²³⁴⁵⁶⁷⁸⁹\d]+)$/);
    if (!match) continue;
    const n = parseInt(match[1], 10);
    const type = match[2] as 's' | 'p' | 'd' | 'f';
    const count = parseSuperscriptNumber(match[3]);

    const orbitalCapacity = type === 's' ? 1 : type === 'p' ? 3 : type === 'd' ? 5 : 7;
    const orbitals: ('empty' | 'up' | 'pair')[] = [];

    // Hund's rule: fill up (↑) first across all orbitals, then pair down (↓)
    for (let i = 0; i < orbitalCapacity; i++) {
      if (count > orbitalCapacity + i) {
        // Paired electron (↑↓)
        orbitals.push('pair');
      } else if (count > i) {
        // Single spin-up electron (↑)
        orbitals.push('up');
      } else {
        // Empty orbital
        orbitals.push('empty');
      }
    }

    result.push({
      label: `${n}${type}`,
      n,
      type,
      count,
      orbitals,
    });
  }

  return result;
}

// Calculate total electron count from configuration
export function calculateElectronsFromConfig(configCondensed: string): number {
  let coreCount = 0;
  const coreMatch = configCondensed.match(/^\[(He|Ne|Ar|Kr|Xe|Rn)\]/);
  if (coreMatch) {
    const core = coreMatch[1];
    if (core === 'He') coreCount = 2;
    else if (core === 'Ne') coreCount = 10;
    else if (core === 'Ar') coreCount = 18;
    else if (core === 'Kr') coreCount = 36;
    else if (core === 'Xe') coreCount = 54;
    else if (core === 'Rn') coreCount = 86;
  }
  const subshells = parseConfigurationToSubshells(configCondensed);
  const valenceCount = subshells.reduce((acc, sub) => acc + sub.count, 0);
  return coreCount + valenceCount;
}

export function getCoreTag(configCondensed: string): string | null {
  const match = configCondensed.match(/^\[(He|Ne|Ar|Kr|Xe|Rn)\]/);
  return match ? match[0] : null;
}
