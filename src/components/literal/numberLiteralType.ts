// 타입스크립트에는 위의 문자열 리터럴과 같은 역할을 하는 숫자형 리터럴 타입도 있습니다.
function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
  return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}

const result = rollDice();

/** loc/lat 좌표에 지도를 생성합니다. */
declare function setupMap(config: MapConfig): void;
// ---생략---
interface MapConfig {
  lng: number;
  lat: number;
  tileSize: 8 | 16 | 32;
}

setupMap({ lng: -73.935242, lat: 40.73061, tileSize: 26 });
setupMap({ lng: -73.935242, lat: 40.73061, tileSize: 16 });
