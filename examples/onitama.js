// create board
var b = jsboard.board({attach:"game", size:"5x5"});
b.cell("each").style({width:"75px", height:"75px"});

// setup pieces
var piece_red_master    = jsboard.piece({text:"RM", textIndent:"-9999px", background:"url('images/chess/king.png') no-repeat", width:"50px", height:"50px", margin:"0 auto" });
var piece_red_pawn      = jsboard.piece({text:"RP", textIndent:"-9999px", background:"url('images/pawn_blue.png') no-repeat", width:"50px", height:"50px", margin:"0 auto" });
var piece_blue_master   = jsboard.piece({text:"BM", textIndent:"-9999px", background:"url('images/master_blue.png') no-repeat", width:"50px", height:"50px", margin:"0 auto" });
var piece_blue_pawn     = jsboard.piece({text:"BP", textIndent:"-9999px", background:"url('images/pawn_blue.png') no-repeat", width:"50px", height:"50px", margin:"0 auto" });

// create pieces to place in DOM
var redPieces = [
    piece_red_master.clone(),
    piece_red_pawn.clone(),
    piece_red_pawn.clone(),
    piece_red_pawn.clone(),
    piece_red_pawn.clone(),
];

// place pieces on board
b.cell([4,2]).place(redPieces[0]);
b.cell([4,0]).place();
b.cell([4,1]).place();
