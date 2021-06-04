import { atom } from 'recoil';

export const Demo = atom({
  key: 'gridState',
  default: [
    {
      i: 'a',
      name: 'CNC1호기',
      x: 0,
      y: 0,
      w: 4,
      h: 2,
      status: 'stop',
      contentType: 'number',
    },
    {
      i: 'b',
      name: 'CNC2호기',
      x: 4,
      y: 0,
      w: 4,
      h: 2,
      status: 'run',
      contentType: 'sparkline',
    },
    {
      i: 'c',
      name: 'CNC3호기',
      x: 40,
      y: 0,
      w: 5,
      h: 2,
      status: 'off',
      contentType: 'text',
      datas: '설비고장',
      color: 'red',
    },

    {
      i: 'd',
      name: 'CNC4호기',
      x: 20,
      y: 0,
      w: 5,
      h: 2,
      status: 'run',
      contentType: 'number',
      color: 'blue',
      alarm: true,
    },
  ],
});

export const TileDemo = atom({
  key: 'tileDemo',
  default: {
    manufacture: { header: '생산', title1: '생산량', data1: 500 },
    running: { header: '가동', title1: '가동률', data1: 80 },
    facility: { header: '설비', title1: '작업중', data1: 20 },
    defect: { header: '불량', title1: '불량률', data1: '1.0%' },
  },
});
