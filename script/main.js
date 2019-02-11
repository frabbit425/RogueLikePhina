/*
 * runstant
 */
phina.globalize();

const eDir = {
  Down: "down",
  Left: "left",
  Up: "up",
  Right: "right",
}
const DRAWSIZE = 64;
const GRIDWIDTH = 14;
const GRIDHEIGHT = 15;
const TESTMAP =
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,
0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,
0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,
0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,
0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,
0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,
0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,
0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,
0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,
0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,
0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,
0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,
0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,
0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,
0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,
0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,
0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,
0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,
0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,
0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,
0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,
0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,
0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,
0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,
0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,
0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,
0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const TESTMAPWIDTH = 30;
const TESTMAPHEIGHT = 40;
const TESTMAP2 =
[0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,1,1,1,1,1,1,1,0,0,0,
0,0,0,1,1,1,1,1,1,1,0,0,0,
0,0,0,1,1,1,1,1,1,1,0,0,0,
0,0,0,1,1,1,1,1,1,1,0,0,0,
0,0,0,1,1,1,1,1,1,1,0,0,0,
0,0,0,1,1,1,1,1,1,1,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,];
const TESTMAPWIDTH2 = 13;
const TESTMAPHEIGHT2 = 10;
const MESSAGEVOL = 50;
const MESSAGESHOW = 7;

var ASSETS = {
  image: {
    'tomapiyo': 'https://cdn.jsdelivr.net/gh/frabbit425/RogueLikePhina@master/image/tomapiyo.png',
    'hit': 'https://cdn.jsdelivr.net/gh/frabbit425/RogueLikePhina@master/image/hit.png',
  },
  spritesheet: {
    'tomapiko_ss': 'https://cdn.jsdelivr.net/gh/frabbit425/RogueLikePhina@master/spritesheet/tomapiko.tmss',
  },
  tmx: {
    "testmap": 'https://cdn.jsdelivr.net/gh/frabbit425/RogueLikePhina@master/map/testmap.tmx',
  },
};

function　Pos2D(x, y){
  this.x = x;
  this.y = y;
}
function GameData(){
  this.playerPos = null;
  this.playerDir = null;
  
  this.mapFloor = null;
  this.mapCollision = null;
}

var message;
var DirUtillMove = function(position, dir){
  switch(dir){
    case eDir.Left:
      position.x--;
      break;
    case eDir.Right:
      position.x++;
      break;
    case eDir.Up:
      position.y--;
      break;
    case eDir.Down:
      position.y++;
      break;
  }
  return position;
}
phina.define('MainScene', {
  superClass: 'DisplayScene',
  
  init: function() {
    this.superInit();
    this.field = Field(this, 4, 6)
      .setPosition(this.gridX.span(0), this.gridY.span(0))
      .addChildTo(this);
    this.player = Player(this.field, 4, 6)
      .addChildTo(this.field)
      .setPosition(this.field.camera.x, this.field.camera.y-DRAWSIZE/4);
    this.hit = Hit()
      .addChildTo(this.field)
      .setPosition(this.field.gridX.center()-2*DRAWSIZE, this.field.gridY.center());
    message = Message("").addChildTo(this);
    this.savedata = SaveData(this);
  },
  update: function() {
    this.field.camera.wx = this.player.wx;
    this.field.camera.wy = this.player.wy;
    this.field.camera.gridX = this.field.worldToGridX(this.player.wx);
    this.field.camera.gridY = this.field.worldToGridY(this.player.wy);
  }
});
phina.define("Field", {
  // 継承
  superClass: 'DisplayElement',
  // コンストラクタ
  init: function(m, x, y) {
    // 親クラス初期化
    this.superInit();
    this.main = m;
//    this.map = Array2D(TESTMAP, TESTMAPWIDTH, TESTMAPHEIGHT);
    this.collision = Array2D(TESTMAP, TESTMAPWIDTH, TESTMAPHEIGHT);
    this.map = this.read("testmap", "floor");
    this.create(this.map);
    this.camera = RectangleShape({
      width:DRAWSIZE,
      height:DRAWSIZE,
      gridX:x,
      gridY:y,
      wx:x*DRAWSIZE,
      wy:y*DRAWSIZE,
      fill:"yellow",
      alpha: 0.5,
    }).setPosition(this.gridX.center()-2*DRAWSIZE, this.gridY.center())
    .addChildTo(this);
  },
  
  update: function(app){
    let self = this;
    let subx = 0;
    let suby = 0;
    let num = 0;
//    console.log("tflag:"+this.main.player.tflag,this.main.player.tweener.playing);
    if(this.main.player.tweener.playing){
        subx = this.camera.wx - this.camera.gridX * DRAWSIZE;
        suby = this.camera.wy - this.camera.gridY * DRAWSIZE;
//      this.main.player.tflag = true;
    }
    (GRIDWIDTH+4).times(function(spanX) {
      (GRIDHEIGHT+2).times(function(spanY) {
        if((num = self.map.get(spanX+self.camera.gridX-GRIDWIDTH/2-2,spanY+self.camera.gridY-(GRIDHEIGHT-1)/2-1))==1){
//        if(self.map.get(self.screenToGridX(self.gridToScreenX(spanX)), self.screenToGridY(self.gridToScreenY(spanY)))==1){
          self.maprect[spanX+spanY*GRIDWIDTH]
          .setPosition(self.gridX.span(spanX-4)-subx, self.gridY.span(spanY)-DRAWSIZE/2-suby)
//          .setPosition(self.gridToScreenX(spanX), self.gridToScreenY(spanY)+DRAWSIZE/2)
          .fill = "yellowgreen";
          self.maprect[spanX+spanY*GRIDWIDTH].stroke = "green";
        }else{
          self.maprect[spanX+spanY*GRIDWIDTH]
          .setPosition(self.gridX.span(spanX-4)-subx, self.gridY.span(spanY)-DRAWSIZE/2-suby)
//          .setPosition(self.gridToScreenX(spanX), self.gridToScreenY(spanY)+DRAWSIZE/2)
          .fill = "skyblue";
          self.maprect[spanX+spanY*GRIDWIDTH].stroke = "skyblue";
        }
//        console.log("spanX:"+spanX+", span:"+(self.gridX.span(spanX-4)-subx))
//        self.maplabel[spanX+spanY*GRIDWIDTH].text = 
//        ""+(spanX+self.camera.gridX-GRIDWIDTH/2-4)+","+(spanY+self.camera.gridY-(GRIDHEIGHT-1)/2-1);
      });
    });
//    console.log("camera("+this.camera.gridX+", "+this.camera.gridY+")");
    let key = app.keyboard;
    if (key.getKey("s")) {
      this.main.savedata.save();
    }
    if (key.getKey("l")) {
      this.main.savedata.loadData();
    }
  },
  read: function(fname, layer){
    let tmx = phina.asset.AssetManager.get("tmx", fname);
    let mapdata = tmx.getMapData(layer);
    return Array2D(mapdata, tmx.width, tmx.height);
  },
  create: function(mapdata){
    this.gridX = Grid({
      width: DRAWSIZE*GRIDWIDTH,
      columns: GRIDWIDTH,
      loop: false,
    });
    this.gridY = Grid({
      width: DRAWSIZE*GRIDHEIGHT,
      columns: GRIDHEIGHT,
      loop: false,
    });
    this.maprect = Array(GRIDWIDTH*GRIDHEIGHT);
    this.maplabel = Array(GRIDWIDTH*GRIDHEIGHT);
    let self = this;
    (GRIDWIDTH+4).times(function(spanX) {
      (GRIDHEIGHT+2).times(function(spanY) {
        self.maprect[spanX+(spanY)*GRIDWIDTH] = RectangleShape({
          width:DRAWSIZE,
          height:DRAWSIZE,
          fill:"black",
          stroke:"black",
        }).setPosition(self.gridX.span(spanX), self.gridY.span(spanY)+DRAWSIZE/2)
        .addChildTo(self);
        self.maplabel[spanX+(spanY)*GRIDWIDTH] = Label({
          text:"",
        }).addChildTo(self.maprect[spanX+spanY*GRIDWIDTH]);
      });
    });
  },
  loadData: function(gamedata){
    this.map = gamedata.mapFloor;
    this.collision = gamedata.mapCollision;
  },
  isCollide: function(gridX, gridY){
    return (this.collision.get(gridX, gridY)<1);
  },
  gridToScreenX: function(gridX){
    return gridX*DRAWSIZE-this.camera.wx+DRAWSIZE*GRIDWIDTH/2;
  },
  gridToScreenY: function(gridY){
    return gridY*DRAWSIZE-this.camera.wy+DRAWSIZE*(GRIDHEIGHT-1)/2;
  },
  screenToGridX: function(screenX){
    return Math.floor((screenX-DRAWSIZE*GRIDWIDTH/2+this.camera.wx)/DRAWSIZE);
  },
  screenToGridY: function(screenY){
    return Math.floor((screenY-DRAWSIZE*(GRIDHEIGHT-1)/2+this.camera.wy)/DRAWSIZE);
  },
  worldToGridX: function(worldX){
    return Math.floor(worldX/DRAWSIZE);
  },
  worldToGridY: function(worldY){
    return Math.floor(worldY/DRAWSIZE);
  },
  gridToWorldX: function(gridX){
    return gridX*DRAWSIZE;
  },
  gridToWorldY: function(gridY){
    return gridY*DRAWSIZE;
  },
});
phina.define("Array2D", {
//  superClass: 'DisplayElement',
  init: function(data, w, h){
//    this.superInit();
    this.data = data;
    this.w = w;
    this.h = h;
  },
  set: function(x, y, v){
    this.data[x+y*this.w] = v;
  },
  get: function(x, y){
    return this.data[x+y*this.w];
  },
});
/*
 * プレイヤークラス
 */
phina.define("Player", {
  // 継承
  superClass: 'Sprite',
  // コンストラクタ
  init: function(f, x, y) {
    // 親クラス初期化
    this.superInit('tomapiyo')
    this.direction = eDir.Left;
    this.tweener.playing = false;
    this.px = x;
    this.py = y;
    this.wx = x*DRAWSIZE;
    this.wy = y*DRAWSIZE;
    this.field = f;
    this.ss = FrameAnimation('tomapiko_ss')
      .attachTo(this)
      .gotoAndPlay(this.direction);
    this.tweener;
    this.tflag = false;
  },
  
  update: function(app) {
    this.px = this.field.worldToGridX(this.wx);
    this.py = this.field.worldToGridY(this.wy);
    if(!this.tweener.playing){
      let key = app.keyboard;
      if (key.getKey(eDir.Left)) {
        this.direction = eDir.Left;
        let nextPos = new DirUtillMove(new Pos2D(this.px, this.py), this.direction);
        if(!this.field.isCollide(nextPos.x, nextPos.y)){
          this.tweener.clear();
          this.tweener.to({
            wx:this.wx-DRAWSIZE,
            },1000,"default");
          message.addText("tomapiyoが左に動きました", "yellow");
        }
      }
      if (key.getKey(eDir.Right)) {
        this.direction = eDir.Right;
        let nextPos = new DirUtillMove(new Pos2D(this.px, this.py), this.direction);
        if(!this.field.isCollide(nextPos.x, nextPos.y)){
          this.tweener.clear();
          this.tweener.to({
            wx:this.wx+DRAWSIZE,
            },1000,"default");
          message.addText("tomapiyoが右に動きました", "yellow");
        }
      }
      if (key.getKey(eDir.Up)) {
        this.direction = eDir.Up;
        let nextPos = new DirUtillMove(new Pos2D(this.px, this.py), this.direction);
        if(!this.field.isCollide(nextPos.x, nextPos.y)){
          this.tweener.clear();
          this.tweener.to({
            wy:this.wy-DRAWSIZE,
            },1000,"default");
          message.addText("tomapiyoが上に動きました", "yellow");
        }
      }
      if (key.getKey(eDir.Down)) {
        this.direction = eDir.Down;
        let nextPos = new DirUtillMove(new Pos2D(this.px, this.py), this.direction);
        if(!this.field.isCollide(nextPos.x, nextPos.y)){
          this.tweener.clear();
          this.tweener.to({
            wy:this.wy+DRAWSIZE,
            },1000,"default");
          message.addText("tomapiyoが下に動きました", "yellow");
        }
      }
      this.ss.gotoAndPlay(this.direction);
    }
  },
  
  loadData: function(gamedata){
    this.px = gamedata.playerPos.x;
    this.py = gamedata.playerPos.y;
    this.wx = this.field.gridToWorldX(this.px);
    this.wy = this.field.gridToWorldY(this.py);
    this.direction = gamedata.playerDir;
  },
});
/*
 * メッセージ表示クラス
 */
phina.define("Message", {
  // 継承
  superClass: 'Shape',
  // コンストラクタ
  init: function(t) {
    // 親クラス初期化
    this.superInit()
    this.labels = Array(MESSAGEVOL);
    let self = this;
    (MESSAGEVOL).times(function(x) {
      self.labels[x] = Label({text:t, fill:"white", stroke:"blue", align:"left",
      baseline:"bottom", x:-1000, y:270-15*(MESSAGESHOW+1), alpha:0.8, scaleX:0.8, scaleY:0.8,}).addChildTo(self);
    });
    this.x = -10;
    this.y = DRAWSIZE*GRIDHEIGHT-300;
    this.width = 0;
    this.height = 0;
    this.p = 0;
    this.r = 0;
    this.q = 0;
    this.popflag = false;
    this.num = 0;
  },
  
  update: function() {
    let self = this;
    if(this.popflag&&(!self.labels[this.r].tweener.playing)){
      let r = this.r;
      let n = 0;
      (this.num/2+1).times(function(x) {
        if(!self.labels[(r-x+MESSAGEVOL+1)%MESSAGEVOL].tweener.playing){
          self.labels[(r-x+MESSAGEVOL+1)%MESSAGEVOL].tweener.clear();
          self.labels[(r-x+MESSAGEVOL+1)%MESSAGEVOL].tweener
          .to({
            y:240-15*(MESSAGESHOW-1-n),
          },1500,"swing");
        }
        n = n < (MESSAGESHOW-1)*2-1 ? n+2 : (MESSAGESHOW-1)*2;
//        console.log(n+","+((r+x+MESSAGEVOL-1)%MESSAGEVOL)+","+(200-30*(MESSAGESHOW-n)));
      });
      if(this.num/2>MESSAGESHOW-1){
        this.initText(this.q);
        this.q  = (this.q+1) % MESSAGEVOL;
      }
      this.r = (this.r+1) % MESSAGEVOL;
      this.num = this.num<(MESSAGESHOW-1)*2-1 ? this.num+1 : (MESSAGESHOW-1)*2;
      this.popflag = false;
    }else if(!self.labels[this.r].tweener.playing){
      if(self.labels[this.r].text!==""){
        self.labels[this.r].tweener.clear();
        self.labels[this.r].tweener.to({
          x:10,
          y:270-15*(MESSAGESHOW+1),
        },1500,"swing");
        console.log("text"+this.r+"="+self.labels[this.r].text);
        this.popflag = true;
        this.num++;
      }
    }
  },
  initText: function(q){
      this.labels[q].text = "";
      this.labels[q].color = "blue";
      this.labels[q].x = -1000;
      this.labels[q].y = 270-15*(MESSAGESHOW+1);
      this.num--;
  },
  addText: function(t, c){
    this.labels[this.p].text=t;
    this.labels[this.p].stroke=c;
    this.p = (this.p+1) % MESSAGEVOL;
    if(Math.abs(this.p-this.q)>MESSAGEVOL){
      this.p = this.q;
      this.q  = (this.q+1) % MESSAGEVOL;
    }
  },
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
      scaleX:3,
      scaleY:3,
      alpha:0,
    },1000,"easeOutQuart");
  }
});
// シーン管理
phina.define("SceneFlow", {
  superClass: "phina.game.ManagerScene",
  init: function() {
    this.superInit({
      startLabel: "title",
      scenes: [{
        label: "title",
        className: "phina.game.TitleScene",
        title: "phinaroguelike",
        nextLabel: "load",
      },{
        label: "load",
        className: "phina.game.LoadingScene",
        arguments: {
          assets: ASSETS,
        },
        nextLabel: "main",
      },{
        label: "main",
        className: "MainScene",
      }],
    });
  }
});
/*
 * セーブデータクラス
 */
phina.define("SaveData", {
  
  // コンストラクタ
  init: function(main) {
    this.main = main;
    this.gamedata = new GameData;
  },
  
  save: function() {
    this.gamedata.playerPos = new Pos2D(this.main.player.px, this.main.player.py);
    let jsontext = JSON.stringify(this.gamedata.playerPos);
    ckSave("playerPos",jsontext,30);
    this.gamedata.playerDir = this.main.player.direction;
    jsontext = JSON.stringify(this.gamedata.playerDir);
    ckSave("playerDir",jsontext,30);
    this.gamedata.mapFloor = this.main.field.map;
    this.saveMapData("mapFloor",this.gamedata.mapFloor);
    this.gamedata.mapCollision = this.main.field.collision;
    this.saveMapData("mapCollision",this.gamedata.mapCollision);
//    jsontext = JSON.stringify(this.gamedata);
  },
  
  saveMapData: function(name, data) {
    (data.w).times(function(spanX) {
      let d = [];
      (data.h).times(function(spanY) {
        d.push(data.get(spanX,spanY));
      });
      jsontext = JSON.stringify(d);
      ckSave(name+spanX,jsontext,30);
    });
    jsontext = JSON.stringify(data.w);
    ckSave(name+"width",jsontext,30);
    jsontext = JSON.stringify(data.h);
    ckSave(name+"height",jsontext,30);
  },
  
  loadData: function() {
//    this.gamedata = JSON.parse(jsontext);
    let jsontext = ckLoad("playerPos");
    let pos = JSON.parse(jsontext);
    this.gamedata.playerPos = pos;
    jsontext = ckLoad("playerDir");
    let dir = JSON.parse(jsontext);
    this.gamedata.playerDir = dir;
    this.gamedata.mapFloor = this.loadMapData("mapFloor");
    this.gamedata.mapCollision = this.loadMapData("mapCollision");
    this.main.field.loadData(this.gamedata);
    this.main.player.loadData(this.gamedata);
  },
  
  loadMapData: function(name) {
    let jsontext = ckLoad(name+"width");
    let w = JSON.parse(jsontext);
    jsontext = ckLoad(name+"height");
    let h = JSON.parse(jsontext);
    let a = [];
    let d = [];
    (w).times(function(spanX) {
      jsontext = ckLoad(name+spanX);
      let q = JSON.parse(jsontext);
      a.push(q);
    });
    (h).times(function(spanY) {
      (w).times(function(spanX) {
        d.push(a[spanX][spanY]);
      });
    });
    let data = new Array2D(d,w,h);
    return data;
  },
  
  getDataFile: function(fname){
    
  },
});

phina.main(function() {
  var app = GameApp({
//    assets: ASSETS,
  });
  app.fps = 60;
  app.enableStats();
  app.replaceScene(SceneFlow());
  app.run();
});
