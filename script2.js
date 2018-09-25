function startGame() {
  myGameArea.start();
  //mario is
  //12px wide
  //16 px tall
  var colors = ["red", "#654321", "#eac086", "black", "blue", "yellow", "#2b1d0e"];
  myGamePiece = new component(30, 30, colors[0], 120, 0);
  p2 = new component(30, 30, colors[0], 150, 0);//c
  p3 = new component(30, 30, colors[0], 180, 0);//c
  p4 = new component(30, 30, colors[0], 210, 0);//c
  p5 = new component(30, 30, colors[0], 240, 0);//c
  p6 = new component(30, 30, colors[0], 270, 0);//end

  p7 = new component(30, 30, colors[0], 150, 30);//c
  p8 = new component(30, 30, colors[0], 180, 30);//c
  p9 = new component(30, 30, colors[0], 210, 30);//c
  p10 = new component(30, 30, colors[0], 240, 30);//c
  p11 = new component(30, 30, colors[0], 270, 30);//c
  p12 = new component(30, 30, colors[0], 300, 30);//c
  p13 = new component(30, 30, colors[0], 120, 30);//c
  p14 = new component(30, 30, colors[0], 90, 30);//c
  p15 = new component(30, 30, colors[0], 330, 30);//end

  p16 = new component(30, 30, colors[1], 90, 60);//hair
  p17 = new component(30, 30, colors[1], 120, 60);//hair
  p18 = new component(30, 30, colors[1], 150, 60);//hair
  p19 = new component(30, 30, colors[2], 180, 60);//s
  p20 = new component(30, 30, colors[2], 210, 60);//skin
  p21 = new component(30, 30, colors[3], 240, 60);//s
  p22 = new component(30, 30, colors[2], 270, 60);//end line

  p23 = new component(30, 30, colors[1], 60, 90);//h
  p24 = new component(30, 30, colors[2], 90, 90);//s
  p25 = new component(30, 30, colors[1], 120, 90);//h
  p26 = new component(30, 30, colors[2], 150, 90);//s
  p27 = new component(30, 30, colors[2], 180, 90);//s
  p28 = new component(30, 30, colors[2], 210, 90);//s
  p29 = new component(30, 30, colors[3], 240, 90);//e
  p30 = new component(30, 30, colors[2], 270, 90);//s
  p31 = new component(30, 30, colors[2], 300, 90);//s
  p32 = new component(30, 30, colors[2], 330, 90);//s

  p33 = new component(30, 30, colors[1], 60, 120);//h
  p34 = new component(30, 30, colors[2], 90, 120);//s
  p35 = new component(30, 30, colors[1], 120, 120);//h
  p36 = new component(30, 30, colors[1], 150, 120);//h
  p37 = new component(30, 30, colors[2], 180, 120);//s
  p38 = new component(30, 30, colors[2], 210, 120);//s
  p39 = new component(30, 30, colors[2], 240, 120);//s
  p40 = new component(30, 30, colors[3], 270, 120);//m
  p41 = new component(30, 30, colors[2], 300, 120);
  p42 = new component(30, 30, colors[2], 330, 120);
  p43 = new component(30, 30, colors[2], 360, 120);

  p44 = new component(30, 30, colors[1], 60, 150);
  p45 = new component(30, 30, colors[1], 90, 150);
  p46 = new component(30, 30, colors[2], 120, 150);
  p47 = new component(30, 30, colors[2], 150, 150);
  p48 = new component(30, 30, colors[2], 180, 150);
  p49 = new component(30, 30, colors[2], 210, 150);
  p50 = new component(30, 30, colors[3], 240, 150);
  p51 = new component(30, 30, colors[3], 270, 150);
  p52 = new component(30, 30, colors[3], 300, 150);
  p53 = new component(30, 30, colors[3], 330, 150);

  p54 = new component(30, 30, colors[2], 90, 180);
  p55 = new component(30, 30, colors[2], 120, 180);
  p56 = new component(30, 30, colors[2], 150, 180);
  p57 = new component(30, 30, colors[2], 180, 180);
  p58 = new component(30, 30, colors[2], 210, 180);
  p59 = new component(30, 30, colors[2], 240, 180);
  p60 = new component(30, 30, colors[2], 270, 180);
  p61 = new component(30, 30, colors[2], 300, 180);

  p62 = new component(30, 30, colors[0], 90, 210);
  p63 = new component(30, 30, colors[0], 120, 210);
  p64 = new component(30, 30, colors[4], 150, 210);
  p65 = new component(30, 30, colors[0], 180, 210);
  p66 = new component(30, 30, colors[0], 210, 210);
  p67 = new component(30, 30, colors[0], 240, 210);

  p68 = new component(30, 30, colors[0], 60, 240);
  p69 = new component(30, 30, colors[0], 90, 240);
  p70 = new component(30, 30, colors[0], 120, 240);
  p71 = new component(30, 30, colors[4], 150, 240);
  p72 = new component(30, 30, colors[0], 180, 240);
  p73 = new component(30, 30, colors[0], 210, 240);
  p74 = new component(30, 30, colors[4], 240, 240);
  p75 = new component(30, 30, colors[0], 270, 240);
  p76 = new component(30, 30, colors[0], 300, 240);
  p77 = new component(30, 30, colors[0], 330, 240);

  p78 = new component(30, 30, colors[0], 30, 270);
  p79 = new component(30, 30, colors[0], 60, 270);
  p80 = new component(30, 30, colors[0], 90, 270);
  p81 = new component(30, 30, colors[0], 120, 270);
  p82 = new component(30, 30, colors[4], 150, 270);
  p83 = new component(30, 30, colors[4], 180, 270);
  p84 = new component(30, 30, colors[4], 210, 270);
  p85 = new component(30, 30, colors[4], 240, 270);
  p86 = new component(30, 30, colors[0], 270, 270);
  p87 = new component(30, 30, colors[0], 300, 270);
  p88 = new component(30, 30, colors[0], 330, 270);
  p89 = new component(30, 30, colors[0], 360, 270);

  p90 = new component(30, 30, colors[2], 30, 300);
  p91 = new component(30, 30, colors[2], 60, 300);
  p92 = new component(30, 30, colors[0], 90, 300);
  p93 = new component(30, 30, colors[4], 120, 300);
  p94 = new component(30, 30, colors[5], 150, 300);
  p95 = new component(30, 30, colors[4], 180, 300);
  p96 = new component(30, 30, colors[4], 210, 300);
  p97 = new component(30, 30, colors[5], 240, 300);
  p98 = new component(30, 30, colors[4], 270, 300);
  p99 = new component(30, 30, colors[0], 300, 300);
  p100 = new component(30, 30, colors[2], 330, 300);
  p101 = new component(30, 30, colors[2], 360, 300);

  p102 = new component(30, 30, colors[2], 30, 330);
  p103 = new component(30, 30, colors[2], 60, 330);
  p104 = new component(30, 30, colors[2], 90, 330);
  p105 = new component(30, 30, colors[4], 120, 330);
  p106 = new component(30, 30, colors[4], 150, 330);
  p107 = new component(30, 30, colors[4], 180, 330);
  p108 = new component(30, 30, colors[4], 210, 330);
  p109 = new component(30, 30, colors[4], 240, 330);
  p110 = new component(30, 30, colors[4], 270, 330);
  p111 = new component(30, 30, colors[2], 300, 330);
  p112 = new component(30, 30, colors[2], 330, 330);
  p113 = new component(30, 30, colors[2], 360, 330);

  p114 = new component(30, 30, colors[2], 30, 360);
  p115 = new component(30, 30, colors[2], 60, 360);
  p116 = new component(30, 30, colors[4], 90, 360);
  p117 = new component(30, 30, colors[4], 120, 360);
  p118 = new component(30, 30, colors[4], 150, 360);
  p119 = new component(30, 30, colors[4], 180, 360);
  p120 = new component(30, 30, colors[4], 210, 360);
  p121 = new component(30, 30, colors[4], 240, 360);
  p122 = new component(30, 30, colors[4], 270, 360);
  p123 = new component(30, 30, colors[4], 300, 360);
  p124 = new component(30, 30, colors[2], 330, 360);
  p125 = new component(30, 30, colors[2], 360, 360);

  p126 = new component(30, 30, colors[4], 90, 390);
  p127 = new component(30, 30, colors[4], 120, 390);
  p128 = new component(30, 30, colors[4], 150, 390);

  p129 = new component(30, 30, colors[4], 240, 390);
  p130 = new component(30, 30, colors[4], 270, 390);
  p131 = new component(30, 30, colors[4], 300, 390);

  p132 = new component(30, 30, colors[6], 60, 420);
  p133 = new component(30, 30, colors[6], 90, 420);
  p134 = new component(30, 30, colors[6], 120, 420);

  p135 = new component(30, 30, colors[6], 270, 420);
  p136 = new component(30, 30, colors[6], 300, 420);
  p137 = new component(30, 30, colors[6], 330, 420);

  p138 = new component(30, 30, colors[6], 30, 450);
  p139 = new component(30, 30, colors[6], 60, 450);
  p140 = new component(30, 30, colors[6], 90, 450);
  p141 = new component(30, 30, colors[6], 120, 450);

  p142 = new component(30, 30, colors[6], 270, 450);
  p143 = new component(30, 30, colors[6], 300, 450);
  p144 = new component(30, 30, colors[6], 330, 450);
  p145 = new component(30, 30, colors[6], 360, 450);

}

var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function() {
    this.canvas.width = 480;
    this.canvas.height = 480;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 15);
    window.addEventListener('keydown', function(e) {
      myGameArea.key = e.keyCode;
    })

    window.addEventListener('keyup', function(e) {
      myGameArea.key = false;
    })
  },
  clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function() {
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    //quick idea try and make mario with canvas and js
  }
  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
}

function updateGameArea() {
  myGameArea.clear();
  myGamePiece.speedX = 0;
  myGamePiece.speedY = 0;
  if (myGameArea.key && myGameArea.key == 37) {
    myGamePiece.speedX = -1;
  }
  if (myGameArea.key && myGameArea.key == 39) {
    myGamePiece.speedX = 1;
  }
  if (myGameArea.key && myGameArea.key == 38) {
    myGamePiece.speedY = -1;
  }
  if (myGameArea.key && myGameArea.key == 40) {
    myGamePiece.speedY = 1;
  }
  myGamePiece.newPos();
  myGamePiece.update();
  p2.update();
  p3.update();
  p4.update();
  p5.update();
  p6.update();
  p7.update();
  p8.update();
  p9.update();
  p10.update();
  p11.update();
  p12.update();
  p13.update();
  p14.update();
  p15.update();
  p16.update();
  p17.update();
  p18.update();
  p19.update();
  p20.update();
  p21.update();
  p22.update();
  p23.update();
  p24.update();
  p25.update();
  p26.update();
  p27.update();
  p28.update();
  p29.update();
  p30.update();
  p31.update();
  p32.update();
  p33.update();
  p34.update();
  p35.update();
  p36.update();
  p37.update();
  p38.update();
  p39.update();
  p40.update();
  p41.update();
  p42.update();
  p43.update();
  p44.update();
  p45.update();
  p46.update();
  p47.update();
  p48.update();
  p49.update();
  p50.update();
  p51.update();
  p52.update();
  p53.update();
  p54.update();
  p55.update();
  p56.update();
  p57.update();
  p58.update();
  p59.update();
  p60.update();
  p61.update();
  p62.update();
  p63.update();
  p64.update();
  p65.update();
  p66.update();
  p67.update();
  p68.update();
  p69.update();
  p70.update();
  p71.update();
  p72.update();
  p73.update();
  p74.update();
  p75.update();
  p76.update();
  p77.update();
  p78.update();
  p79.update();
  p80.update();
  p81.update();
  p82.update();
  p83.update();
  p84.update();
  p85.update();
  p86.update();
  p87.update();
  p88.update();
  p89.update();
  p90.update();
  p91.update();
  p92.update();
  p93.update();
  p94.update();
  p95.update();
  p96.update();
  p97.update();
  p98.update();
  p99.update();
  p100.update();
  p101.update();
  p102.update();
  p103.update();
  p104.update();
  p105.update();
  p106.update();
  p107.update();
  p108.update();
  p109.update();
  p110.update();
  p111.update();
  p112.update();
  p113.update();
  p114.update();
  p115.update();
  p116.update();
  p117.update();
  p118.update();
  p119.update();
  p120.update();
  p121.update();
  p122.update();
  p123.update();
  p124.update();
  p125.update();
  p126.update();
  p127.update();
  p128.update();
  p129.update();
  p130.update();
  p131.update();
  p132.update();
  p133.update();
  p134.update();
  p135.update();
  p136.update();
  p137.update();
  p138.update();
  p139.update();
  p140.update();
  p141.update();
  p142.update();
  p143.update();
  p144.update();
  p145.update();
}
