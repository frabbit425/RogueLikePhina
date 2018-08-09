/*
 * runstant
 */
phina.globalize();

var eDir = {
  Down: "down",
  Left: "left",
  Up: "up",
  Right: "right",
}
var DRAWSIZE = 64;
var ASSETS = {
  image: {
    'tomapiko': 'image/tomapiko_ss.png',
    'hit': 'image/hit.png',
  },
  spritesheet: {
    'tomapiko_ss': 'spritesheet/tomapiko.tmss',
  },
  tmx: {
    'map': 'map/testmap.tmx',
  },
};
phina.define('MainScene', {
  superClass: 'DisplayScene',
  
  init: function() {
    this.superInit();
    this.mapBase = phina.display.DisplayElement()
      .setPosition(0, 0)
      .addChildTo(this);
    this.tmx = AssetManager.get('tmx', 'map');
    this.map = Sprite(this.tmx.getImage())
      .setOrigin(0, 0)
      .setPosition(0, 0)
      .addChildTo(this.mapBase);
    this.player = Player()
      .addChildTo(this)
      .setPosition(this.gridX.center(), this.gridY.center());
    this.hit = Hit()
      .addChildTo(this)
      .setPosition(this.gridX.center(), this.gridY.center());
  },
  update: function() {
  }
});
/*
 * プレイヤークラス
 */
phina.define("Player", {
  // 継承
  superClass: 'Sprite',
  
  // コンストラクタ
  init: function() {
    // 親クラス初期化
    this.superInit('tomapiko')
    this.direction = eDir.Left;
    this.tweener.playing = false;
    
    this.ss = FrameAnimation('tomapiko_ss')
      .attachTo(this)
      .gotoAndPlay(this.direction);
  },
  
  update: function(app) {
    if(!this.tweener.playing){
      this.tweener.clear();
      var key = app.keyboard;
      if (key.getKey(eDir.Left)) {
        this.tweener.to({
          x:this.x-DRAWSIZE,
          },1000,"default");
        
        this.direction = eDir.Left;
      }
      if (key.getKey(eDir.Right)) {
        this.tweener.to({
          x:this.x+DRAWSIZE,
          },1000,"default");
        this.direction = eDir.Right;
      }
      if (key.getKey(eDir.Up)) {
        this.tweener.to({
          y:this.y-DRAWSIZE,
          },1000,"default");
        this.direction = eDir.Up;
      }
      if (key.getKey(eDir.Down)) {
        this.tweener.to({
          y:this.y+DRAWSIZE,
          },1000,"default");
        this.direction = eDir.Down;
      }
      this.ss.gotoAndPlay(this.direction);
    }
  }
});
/*
 * ヒットクラス
 */
phina.define("Hit", {
  // 継承
  superClass: 'Sprite',
  
  // コンストラクタ
  init: function() {
    // 親クラス初期化
    this.superInit('hit')
  },
  
  update: function() {
    this.tweener.to({
      scaleX:0.01,
      scaleY:0.01,
    },1000,"default");
  }
});

phina.main(function() {
  var app = GameApp({
    startLabel: 'title',
    title: "phinaroguelike",
    assets: ASSETS,
  });
  app.run();
});