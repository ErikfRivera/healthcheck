logoPix = new Array
("images/logoanime01.gif",
"images/logoanime02.gif",
"images/logoanime03.gif",
"images/logoanime04.gif",
"images/logoanime05.gif")
	imgCt = logoPix.length 

	function choosePic() {
		if (document.images) {
			randomNum = Math.floor((Math.random() * imgCt))
			document.logoPix.src = logoPix[randomNum]
		}
	}