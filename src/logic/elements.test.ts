import test from 'node:test';
import assert from 'node:assert/strict';
import { ELEMENTS_DATA } from './elementsData';
import {
  calculateElectronsFromConfig,
  parseConfigurationToSubshells,
} from './elements';

test('dataset has exactly 118 elements', () => {
  assert.equal(ELEMENTS_DATA.length, 118);
});

test('all atomic numbers Z are unique and range from 1 to 118', () => {
  const zSet = new Set<number>();
  for (let i = 0; i < ELEMENTS_DATA.length; i++) {
    const el = ELEMENTS_DATA[i];
    assert.equal(el.z, i + 1, `Element at index ${i} should have Z = ${i + 1}`);
    assert.equal(zSet.has(el.z), false, `Duplicate Z found: ${el.z}`);
    zSet.add(el.z);
  }
  assert.equal(zSet.size, 118);
});

test('total electrons from condensed configuration equals atomic number Z for all 118 elements', () => {
  for (const el of ELEMENTS_DATA) {
    const totalElectrons = calculateElectronsFromConfig(el.configCondensed);
    assert.equal(
      totalElectrons,
      el.z,
      `Element ${el.symbol} (Z=${el.z}) has config ${el.configCondensed} with sum ${totalElectrons} electrons`
    );
  }
});

test('Oxygen (Z=8) has correct properties and orbital distribution', () => {
  const o = ELEMENTS_DATA.find((e) => e.z === 8);
  assert.ok(o, 'Oxygen exists');
  assert.equal(o.symbol, 'O');
  assert.equal(o.nameVi, 'Oxy');
  assert.equal(o.nameEn, 'Oxygen');
  assert.equal(o.generalType, 'Phi kim');
  assert.equal(o.group, 16);
  assert.equal(o.period, 2);
  assert.equal(o.configCondensed, '[He] 2s² 2p⁴');
  assert.equal(o.configFull, '1s² 2s² 2p⁴');

  // Verify Hund's rule for 2p⁴:
  // p has 3 orbitals. 4 electrons -> orbital 1: pair, orbital 2: up, orbital 3: up
  const subshells = parseConfigurationToSubshells(o.configCondensed);
  const pSub = subshells.find((s) => s.label === '2p');
  assert.ok(pSub, '2p subshell exists');
  assert.deepEqual(pSub.orbitals, ['pair', 'up', 'up']);
});

test('Chromium (Z=24) and Copper (Z=29) have exceptional configurations', () => {
  const cr = ELEMENTS_DATA.find((e) => e.z === 24)!;
  assert.ok(cr.configCondensed.includes('3d⁵ 4s¹'));

  const cu = ELEMENTS_DATA.find((e) => e.z === 29)!;
  assert.ok(cu.configCondensed.includes('3d¹⁰ 4s¹'));
});

test('all 118 elements have discoverer, year and atomicMass defined', () => {
  for (const el of ELEMENTS_DATA) {
    assert.ok(el.discoverer && el.discoverer.trim().length > 0, `Element ${el.symbol} missing discoverer`);
    assert.ok(el.year !== undefined && el.year !== null, `Element ${el.symbol} missing year`);
    assert.ok(el.atomicMass && el.atomicMass.trim().length > 0, `Element ${el.symbol} missing atomicMass`);
  }
});
