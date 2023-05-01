export function getHeightString(decimeters) {
  //TODO: corregir la conversion
  const meters = decimeters / 10;
  const feet = Math.floor(decimeters / 3.048);
  const inches = Math.round((decimeters / 0.254) % 12);
  return `${feet}'${inches}'' (${meters.toFixed(2)} meters)`;
}

export function getWeightString(centigrams) {
  const kilos = centigrams / 10;
  const pounds = kilos * 2.204;
  return `${pounds.toFixed(2)} Pounds (${kilos.toFixed(1)} Kg)`;
}

export function upperCaseChar0(string) {
  if (typeof string === "string") {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } else {
    throw new Error("No es tipo string");
  }
}

export const formatId = (id) => {
  return `#${String(id).padStart(4, "0")}`;
};
