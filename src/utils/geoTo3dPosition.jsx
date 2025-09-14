export function geoTo3dPosition(lat, lon, radius = 4) {
  const phi = (lat * Math.PI) / 180;
  const theta = (lon * Math.PI) / 180;
  const x = radius * Math.cos(phi) * Math.cos(theta);
  const y = radius * Math.sin(phi);
  const z = radius * Math.cos(phi) * Math.sin(theta);
  return [x, y, z];
}