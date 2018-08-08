{
  "frame": {
    "width": 64,
    "height": 64,
    "cols": 6,
    "rows": 3,
  },
  "animations" : {
    "stopLeft": {
      "frames": [13],
      "next": "stopLeft",
      "frequency": 3,
    },
    "stopRight": {
      "frames": [16],
      "next": "stopRight",
      "frequency": 3,
    },
    "stopDown": {
      "frames": [7],
      "next": "stopDown",
      "frequency": 3,
    },
    "stopUp": {
      "frames": [10],
      "next": "stopUp",
      "frequency": 3,
    },
    "walkLeft": {
      "frames": [12,13,14,13,12,13,14,13],
      "next": "stopLeft",
      "frequency": 3,
    },
    "walkRight": {
      "frames": [15,16,17,16,15,16,17,16],
      "next": "stopRight",
      "frequency": 3,
    },
    "walkDown": {
      "frames": [6,7,8,7,6,7,8,7],
      "next": "stopDown",
      "frequency": 3,
    },
    "walkUp": {
      "frames": [9,10,11,10,9,10,11,10],
      "next": "stopUp",
      "frequency": 3,
    },
  }
}