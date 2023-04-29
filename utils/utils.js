export function getHeightString(decimeters) {
  //TODO: corregir la conversion
  const meters = decimeters / 10;
  const feet = Math.floor(decimeters / 30.48);
  const inches = Math.round((decimeters / 2.54) % 12);
  return `${feet}'${inches}'' (${meters.toFixed(2)} meters)`;
}

export function getWeightString(centigrams) {
  const kilos = centigrams / 10;
  const pounds = kilos * 2.204;
  return `${pounds.toFixed(2)} Pounds (${kilos.toFixed(1)} Kg)`;
}
