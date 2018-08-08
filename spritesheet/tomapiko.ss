{
  // フレーム情報
  "frame": {
    "width": 64, // 1フレームの画像サイズ（横）
    "height": 64, // 1フレームの画像サイズ（縦）
    "cols": 6, // フレーム数（横）
    "rows": 3, // フレーム数（縦）
  },
  // アニメーション情報
  "animations" : {
    "stopLeft": {
      "frames": [13], // フレーム番号範囲
      "next": "stopLeft", // 次のアニメーション
      "frequency": 3, // アニメーション間隔
    },
    "stopRight": {
      "frames": [16], // フレーム番号範囲
      "next": "stopRight", // 次のアニメーション
      "frequency": 3, // アニメーション間隔
    },
    "stopDown": {
      "frames": [7], // フレーム番号範囲
      "next": "stopDown", // 次のアニメーション
      "frequency": 3, // アニメーション間隔
    },
    "stopUp": {
      "frames": [10], // フレーム番号範囲
      "next": "stopUp", // 次のアニメーション
      "frequency": 3, // アニメーション間隔
    },
    "walkLeft": { // アニメーション名
      "frames": [12,13,14,13,12,13,14,13], // フレーム番号範囲
      "next": "stopLeft", // 次のアニメーション
      "frequency": 3, // アニメーション間隔
    },
    "walkRight": { // アニメーション名
      "frames": [15,16,17,16,15,16,17,16], // フレーム番号範囲
      "next": "stopRight", // 次のアニメーション
      "frequency": 3, // アニメーション間隔
    },
    "walkDown": { // アニメーション名
      "frames": [6,7,8,7,6,7,8,7], // フレーム番号範囲
      "next": "stopDown", // 次のアニメーション
      "frequency": 3, // アニメーション間隔
    },
    "walkUp": { // アニメーション名
      "frames": [9,10,11,10,9,10,11,10], // フレーム番号範囲
      "next": "stopUp", // 次のアニメーション
      "frequency": 3, // アニメーション間隔
    },
  }
}