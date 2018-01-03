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
        firstCell = b.cell(this);
        console.log("Start", firstCell);
        //alert(firstCell.get());
        //alert(firstCell.where());
        counter = !counter;
    
    } else {
        secondCell = b.cell(this);
	console.log("End:", secondCell);
        //b.cell(secondCell.where()).place(firstCell.get());
        //firstCell = b.cell(this).rid();
        
        counter = !counter;
        
        move = firstCell.where().concat(secondCell.where());
	send_to_server(move);
	//alert(move);
        //alert(move[0])
    }
    
    
    
    
    
    //!=null
    //if (b.cell(this).get()!=null) {
        
        //b.cell(this).place();
        
        
        
    //}
});


function send_to_server(move) {
	console.log("Move", move);
}

/*
pieces[0].addEventListener("click", function() { showMoves(this); });

// show new locations 
function showMoves(piece) {

    // parentNode is needed because the piece you are clicking 
    // on doesn't have access to cell functions, therefore you 
    // need to access the parent of the piece because pieces are 
    // always contained within in cells
    var loc = b.cell(piece.parentNode).where();
    var newLocs = [[loc[0]-1,loc[1]-1],[loc[0]-1,loc[1]+1]];

    // locations to move to and simple jump check
    for (var i=0; i<newLocs.length; i++) {
        if (b.cell(newLocs[i]).get()=="B") { 
            if (!i) newLocs[i] = [loc[0]-2,loc[1]-2];
            else newLocs[i] = [loc[0]-2,loc[1]+2];
        }
        b.cell(newLocs[i]).style({background:"yellow"});
        b.cell(newLocs[i]).on("click", movePiece);
    }

    // move piece to new location when clicked
    function movePiece() {
        b.cell(this).place(piece);
        b.removeEvents("click", movePiece);
        for (var i=0; i<newLocs.length; i++) 
            b.cell(newLocs[i]).style({background:"lightblue"});
    }

}
*/
