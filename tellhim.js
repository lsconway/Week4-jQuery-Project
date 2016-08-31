$( function (){

	var why = {
		cheated: ["I smell your secret. ", "I'm not too perfect, to ever feel this worthless. ", "I am the dragon breathing fire, beautiful man I'm the lion. ", "Beautiful man I know you're lying. ", "You can taste the dishonesty, It's all over your breath. "],
		tooGood: ["Now I'm the one that's lying, and I don't feel bad about it. ", "It's exactly what you get. ", "Tell me, what did I do wrong? I'm movin' on. ", "I came into this world, daddy's little girl, and daddy made a soldier out of me. ", "I am not broken, I'm not crying. ", "I'm not crying, you ain't trying hard enough. ", "You ain't loving hard enough. " , "I’m fresher than you. "]
		}

	var feels = {
		jelly: ["You only want me when I'm not there. ", "Better call Becky with the good hair. ", "Can't you see there's no other man above you? What a wicked way to treat the girl that loves you. "],
		liberated: ["Got a bigger smile on my face, being alone. ", "I break chains all by myself. ", "Won't let my freedom rot in hell. ", "Hey! I'ma keep running, cause a winner don't quit on themselves. ", "Headed to the club, I ain't thinking 'bout you. ", "Middle fingers up, I ain't thinking 'bout you. ", "Tonight I’m not takin’ no calls, ‘cause I’ll be dancin’. "],
		bittersweet: ["Oh it is such a shame, you let this good love go to waste. ", "Ten times out of nine, I know you're lying. But nine times outta ten, I know you're trying. ", "I'm trying to be fair, and you're trying to be there and to care. ", "We built sand castles that washed away, I made you cry when I walked away. ", "I promised that I couldn't stay, baby, every promise don't work out that way. ", "Everywhere I’m looking now, I’m surrounded by your embrace. "]
		}

		var starter = {
			cheated: ["I know everything. ", "You lying piece of garbage. "],
			tooGood: ["We need to talk...I think I'm too good for you. ", "I cant do this anymore. "]
		}

		var end = {
			jelly: ["Tell Becky I say good luck! ", "Have a great life. "],
			liberated: ["I wish I could say I wanted to stay friends, but...I dont! ", "See you never! "],
			bittersweet: ["I'll miss you but I think this is for the best. ", "I hope we can be friends one day. "]
		}
		var boyBye = {
			bye: ["Boy, bye!"]
		}

	// Allow user to select one option from each question.

	// Store data of users selections(values).

	// With selected values

	$('.breakupForm').on('submit', function(event){
		event.preventDefault();
	
	var selectedWhy = $('input[name=why]:checked').val();
	var selectedFeels = $('input[name=feels]:checked').val();
	var sender = $('input[name=number]').val();
	console.log(sender);

		var reasonWhy = why[selectedWhy];
		// console.log(reasonWhy);
		var reasonFeels = feels[selectedFeels];
		// console.log(reasonFeels);
		var insertStart = starter[selectedWhy];
		var insertEnd = end[selectedFeels];

		function getRandomArrayElement(array){
			var randomIndex = Math.floor(Math.random() * array.length);
			return array[randomIndex];
		}

		var finalWhy = getRandomArrayElement(reasonWhy);
		var finalFeel = getRandomArrayElement(reasonFeels);
		var finalStart = getRandomArrayElement(insertStart);
		var finalEnd = getRandomArrayElement(insertEnd);

		$('.messageContent').find('#insert').html(finalWhy);
		$('.messageContent').find('#insertTwo').html(finalFeel);
		$('.messageContent').find('#start').html(finalStart);
		$('.messageContent').find('#end').html(finalEnd);
		$('.messageContent').find('#bye').html("Boy, bye!");

		$('.hiddenContent').find('#insert').html(finalWhy);
		$('.hiddenContent').find('#insertTwo').html(finalFeel);
		$('.hiddenContent').find('#start').html(finalStart);
		$('.hiddenContent').find('#end').html(finalEnd);
		$('.hiddenContent').find('#bye').html("Boy, bye!");

		$('#placeholder').addClass('imessageHidden');

		$('.send p').on('click', function(event){
		$('.hiddenContent').addClass('visible');
		$('.messageContent p').addClass('hiddenContent')
		$.ajax({
  			url: "https://rest.nexmo.com/sms/json?api_key=7726babc&api_secret=password&to="+sender+"&from=12023679044&text="+finalStart+finalWhy+finalFeel+finalEnd+"Boy, bye!"+"",
  			// 	method: 'GET',
  			//   dataType: 'json'
  			// }).then(function() {
  			//   console.log('It worked!');
  			});

	});	



	

	
	});



		

});

//when you click send make messageContent hidden AND make hiddenContent Visible 

