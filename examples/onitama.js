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
var moveTracker = true;
var firstCell = "";
var secondCell = "";
var move = "";
var newLocs = "";

var redTurn = true;
var gameOver = false;

b.cell("each").on("click", function() {    
    
    if (moveTracker) {
        if (b.cell(this).get() != null) {
        firstCell = b.cell(this);
            
            if (!check_turn()) {
                console.log("Not this piece's turn");
            }
            else {
        highlight_cell(true, firstCell);
        console.log("Start", firstCell);
	   //TODO: handle first click done on the empty cell}
        moveTracker = !moveTracker; }
            
        }
    } else {
        
        secondCell = b.cell(this);
        console.log(secondCell.get());
        
        game_over();
        
        if (different_cell()) {
            
            if (friendly_piece()) {
		    console.log("Occupied by friendly piece");
                //moveTracker = !moveTracker;
	    } else {
            
	       //TODO: handle the same cell being clicked twice.
	       console.log("End:", secondCell);
        
               moveTracker = !moveTracker;
        
            highlight_cell(false, firstCell);
            move_piece();
            
            redTurn = !redTurn;
            }
        }
    }
    

});

function different_cell() {
	return (secondCell.where()[0] != firstCell.where()[0] || secondCell.where()[1] != firstCell.where()[1]); 
}

function friendly_piece() {
  return (secondCell.get() != null && (secondCell.get().charAt(0) == firstCell.get().charAt(0))); 
}

function piece_color() {
    return firstCell.get().charAt(0);   
}

function move_piece() {
	secondCell.place(firstCell.DOM().children[0]);
}

function highlight_cell(highlight, cell) {
    if (highlight){
       cell.DOM().classList.add("green");
    }
    else {
        cell.DOM().classList.remove("green"); 
    }
}

function which_turn() {
 if (redTurn) {
     return 'R';
 }
    else {
        return 'B';
    }
}

function check_turn() {
 return (piece_color() == which_turn());   
}

function game_over() {
    if (b.cell([0,2]).get() == "RM" || b.cell([4,2]).get() == "BM") { 
        return true;
    }
    else if (secondCell.get() == "RM" || secondCell.get() == "BM") {
            gameOver = true;
        }
}

function make_move() {
    
}

function send_to_server(move) {
	console.log("Move", move);
}
