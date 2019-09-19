import img_0 from "./Screen04_Mano.png";
import img_1 from "./Screen04_Cuerpo.png";

export default {
  v: "5.5.8",
  fr: 24,
  ip: 0,
  op: 41,
  w: 1920,
  h: 1080,
  nm: "Screen04",
  ddd: 0,
  assets: [
    {
      id: "image_0",
      w: 442,
      h: 664,
      p: img_0,
      e: 0
    },
    {
      id: "image_1",
      w: 1920,
      h: 1080,
      p: img_1,
      e: 0
    }
  ],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 2,
      nm: img_0,
      cl: "png",
      refId: "image_0",
      sr: 1,
      ks: {
        o: {
          a: 0,
          k: 100,
          ix: 11
        },
        r: {
          a: 1,
          k: [
            {
              i: {
                x: [0.667],
                y: [1]
              },
              o: {
                x: [0.333],
                y: [0]
              },
              t: 0,
              s: [-20]
            },
            {
              i: {
                x: [0.667],
                y: [1]
              },
              o: {
                x: [0.333],
                y: [0]
              },
              t: 20,
              s: [10]
            },
            {
              t: 41,
              s: [-20]
            }
          ],
          ix: 10
        },
        p: {
          a: 0,
          k: [587.797, 603.051, 0],
          ix: 2
        },
        a: {
          a: 0,
          k: [341, 596.407, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [100, 100, 100],
          ix: 6
        }
      },
      ao: 0,
      ip: 0,
      op: 41,
      st: 0,
      bm: 0
    },
    {
      ddd: 0,
      ind: 2,
      ty: 2,
      nm: img_1,
      cl: "png",
      refId: "image_1",
      sr: 1,
      ks: {
        o: {
          a: 0,
          k: 100,
          ix: 11
        },
        r: {
          a: 0,
          k: 0,
          ix: 10
        },
        p: {
          a: 0,
          k: [960, 540, 0],
          ix: 2
        },
        a: {
          a: 0,
          k: [960, 540, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [100, 100, 100],
          ix: 6
        }
      },
      ao: 0,
      ip: 0,
      op: 41,
      st: 0,
      bm: 0
    }
  ],
  markers: []
};
