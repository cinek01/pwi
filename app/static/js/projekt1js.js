window.onload = kolkoikrzyzyk;
function kolkoikrzyzyk () 
{

	var turn = true; 
	var gridx = [false, false, false, false, false, false, false, false, false];
	var grido = [false, false, false, false, false, false, false, false, false];
	var masterGrid = [false, false, false, false, false, false, false, false, false]; 

	function status (toSet) 
	{
		document.getElementById("status").innerHTML=toSet;
	}

	function setCellProperties (id) 
	{

		var cellId = id;
		var cell = document.getElementById(cellId.toString());
		cell.unWritten = true; 

		cell.onclick = function () 
		{ 

			cellClick(cellId, cell);
			var gameOver = false;
			gameOver = checkWin(gridx, "X");
			if(!gameOver) gameOver = checkWin(grido, "O");
			if(!gameOver) checkTie();
		}

	}

	for (var i = 0; i<9; i++) 
	{

		setCellProperties(i); 
	}

	function cellClick (cellId, cell) 
	{

		if (turn) { 
			if (cell.unWritten) 
			{ 

				cell.innerHTML="x";
				turn=false; 
				status("Ruch gracza O");
				cell.unWritten=undefined;
				gridx[cellId]=true;
				grido[cellId]=false;
				masterGrid[cellId]=true;
			}

		} 
		else if (cell.unWritten) 
		{ 

			cell.innerHTML="o";
			turn=true; 
			status("Ruch gracza X");
			cell.unWritten=undefined;
			grido[cellId]=true;
			gridx[cellId]=false;
			masterGrid[cellId]=true;
		}
	}

	function checkWin (gridToCheck, who) 
	{
		
		var gameOver = false;

		gameOver = checkCombo(0, 1, 2, who);
		if(!gameOver) gameOver = checkCombo(3, 4, 5, who);
		if(!gameOver) gameOver = checkCombo(6, 7, 8, who);
		if(!gameOver) gameOver = checkCombo(0, 3, 6, who);
		if(!gameOver) gameOver = checkCombo(1, 4, 7, who);
		if(!gameOver) gameOver = checkCombo(2, 5, 8, who);
		if(!gameOver) gameOver = checkCombo(0, 4, 8, who);
		if(!gameOver) gameOver = checkCombo(2, 4, 6, who);

		return gameOver;

		function checkCombo (cell1, cell2, cell3, who) 
		{
			if(gridToCheck[cell1] === true && gridToCheck[cell2] === true && gridToCheck[cell3] === true) 
			{
				
				status(who + " wygrał!");
				writeAll(undefined);
				bold([cell1, cell2, cell3]);
				return true;
			}

		}
	}

	function checkTie () 
	{

		if(masterGrid[0] === true && masterGrid[1] === true && masterGrid[2] === true && masterGrid[3] === true && masterGrid[4] === true && masterGrid[5] === true && masterGrid[6] === true && masterGrid[7] === true && masterGrid[8] === true) 
		{ 
			status("Remis!");
			writeAll(undefined);
		}
	}

	function writeAll (bool) 
	{
		for(var i = 0; i<9; i++) 
		{

			document.getElementById(i.toString()).unWritten=bool;
		}
	};

	function bold (toBold) 
	{

		for(var i = 0; i<3; i++) 
		{

			document.getElementById(toBold[i].toString()).classList.add("bold");
		}
	}

	document.getElementById("reset").onclick = function () 
	{

		writeAll(true);
		status("Zaczyna gracz X");
		turn=true;
		gridx=[false, false, false, false, false, false, false, false, false];
		grido=[false, false, false, false, false, false, false, false, false];
		masterGrid=[false, false, false, false, false, false, false, false, false];
		for(var i = 0; i<9; i++) 
		{

			document.getElementById(i.toString()).classList.remove("bold");
		}

		for(var i = 0; i<9; i++) 
		{

			document.getElementById(i.toString()).innerHTML=" - ";
		}
	}
}