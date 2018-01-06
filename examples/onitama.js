// create board
var b = jsboard.board({attach:"game", size:"5x5"});
b.cell("each").style({width:"75px", height:"75px"});

// setup pieces
var piece_red_master    = jsboard.piece({text:"RM", textIndent:"-9999px", background:"url('images/white.png') no-repeat", width:"50px", height:"50px", margin:"0 auto", color:"red"});
var piece_red_pawn      = jsboard.piece({text:"RP", textIndent:"-9999px", background:"url('images/red.png') no-repeat", width:"50px", height:"50px", margin:"0 auto", color:"red" });
var piece_blue_master   = jsboard.piece({text:"BM", textIndent:"-9999px", background:"url('images/bknight.png') no-repeat", width:"50px", height:"50px", margin:"0 auto", color:"blue" });
var piece_blue_pawn     = jsboard.piece({text:"BP", textIndent:"-9999px", background:"url('images/black.png') no-repeat", width:"50px", height:"50px", margin:"0 auto", color:"blue" });

// create pieces to place in DOM
var pieces = [
    piece_red_master.clone(),
    piece_red_pawn.clone(),
    piece_red_pawn.clone(),
    piece_red_pawn.clone(),
    piece_red_pawn.clone(),
    piece_blue_master.clone(),
    piece_blue_pawn.clone(),
    piece_blue_pawn.clone(),
    piece_blue_pawn.clone(),
    piece_blue_pawn.clone()
];

// place pieces on board
b.cell([4,2]).place(pieces[0]);
b.cell([4,0]).place(pieces[1]);
b.cell([4,1]).place(pieces[2]);
b.cell([4,3]).place(pieces[3]);
b.cell([4,4]).place(pieces[4]);
b.cell([0,2]).place(pieces[5]);
b.cell([0,0]).place(pieces[6]);
b.cell([0,1]).place(pieces[7]);
b.cell([0,3]).place(pieces[8]);
b.cell([0,4]).place(pieces[9]);

// 
var counter = true;
var firstCell = "";
var secondCell = "";
var move = "";

b.cell("each").on("click", function() {
    
    
    if (counter) {
        if (b.cell(this).get() != null) {
        firstCell = b.cell(this);
        console.log("Start", firstCell);
	   //TODO: handle first click done on the empty cell
        counter = !counter;
        }
    } else {
        
        secondCell = b.cell(this);
        if (not_same_cell()) {
            
            if (friendly_piece()) {
		    console.log("Occupied by friendly piece");
	    } else {
            
	       //TODO: handle the same cell being clicked twice.
	       console.log("End:", secondCell);
        
               counter = !counter;
        
            move = firstCell.where().concat(secondCell.where());
        //verification(move);
            
        //send_to_server(move);
            }
        }
    }
    
});

function not_same_cell() {
	return (secondCell.where()[0] != firstCell.where()[0] || secondCell.where()[1] != firstCell.where()[1]); 
}

function friendly_piece() {
  return (secondCell.get() != null && (secondCell.get().charAt(0) == firstCell.get().charAt(0))); 
}



//need verification for:
    // - Piece can't move to it's own square 
    // - Piece can't move to friendly piece squares
    // - First coordinate must be a piece
function verification(move) {
    
    
    //if (b.cell([move[0], move[1]]).get().charAt(0) == b.cell([move[2], move[3]]).get().charAt(0)) {
    //    console.log("Cant move on squares with your pieces")
    //}
    
    //b.cell([move[0], move[1]]).get().charAt(0)//
    
    /*if (b.cell([move[0], move[1]]).get() == null) {
        console.log("First click must be a piece");
        return false;

    }
    
    if (move[0] == move[2] && move[1] == move[3]) {	   
        console.log("False");
        return false;

    } */
}


function send_to_server(move) {
	console.log("Move", move);
}
