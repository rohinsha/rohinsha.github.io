$(document).ready(function() {


// My quotes 

var myQuotes = [
	{
		quote: "Your body is not a temple, it's an amusement park. Enjoy the ride.",
		name: "Anthony Bourdain"
	},

	{
		quote: "I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game's winning shot and missed. I’ve failed over and over and over again in my life and that's why I succeed.",
		name: "Michael Jordan"
	},

	{
		quote: "If you can explain the why of things, then that makes a huge difference to people’s motivation. Then they understand purpose.",
		name: "Elon Musk"
	},

	{
		quote: "Starting a company is like starting into the abyss and eating glass.",
		name: "Elon Musk"
	},

	{
		quote: "If something is important enough, even if the odds are against you, you should still do it.",
		name: "Elon Musk"
	},

	{
		quote: "The days you are the most uncomfortable are the days you learn the most about yourself.",
		name: "Anon"
	},

	{
		quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
		name: "Chinese Proverb"
	},

	{
		quote: "Is hard to fail, but it is (even) worse never to have tried succeed.",
		name: "Anon"
	},

	{
		quote: "To the world, you may be one person, but to one person, you may be the world.",
		name: "Anon"
	},

	{
		quote: "Life isn't about waiting for the storm to pass, it's about learning to dance in the rain.",
		name: "Anon"
	},

	{
		quote: "Life is the art of drawing whithout an eraser.",
		name: "Anon"
	},

	{
		quote: "Teachers open the door. You enter by yourself.",
		name: "Chinese Proverb"
	},

	{
		quote: "If we encounter a man of rare intellect, we should ask him what books he reads.",
		name: "Anon"
	},

	{
		quote: "You don't need that person to make your life, you already have that, what you need is that person who makes your life better.",
		name: "Anon"
	},

	{
		quote: "A house without books is like a room without windows.",
		name: "Heinrich Mann"
	},

	{
		quote: "Reading is important, because if you can read, you can learn anything about everything and everything about anything.",
		name: "Tomie dePaola"
	}, 

	{
		quote: "My favorite things in life don't cost any money. It's really clear that the most precious resource we all have is time.",
		name: "Steve Jobs"	
	},

	{
		quote: "Not all those who wander are lost.",
		name: "J.R.R. Tolkien"
	},

	{
		quote: "Happiness is only real when shared.",
		name: "Alexander Supertramp"
	},

	{
		quote: "I'm going to paraphrase Thoreau here... rather than love, than money, than faith, than fame, than fairness... give me truth.",
		name: "Alexander Supertramp"
	}


]; // End Quotes

	$('#randomQuote').click(function(evt){
		
		var quote = $('#quoteContainer p').text();
		var quoteAuthor = $('#quoteAuthor').text();
		
		evt.preventDefault();
		
		var sourceLength = myQuotes.length;
		var randomNumber = Math.floor(Math.random()*sourceLength);
		
		for(i=0; i<=sourceLength; i+=1) {
		var newQuoteText = myQuotes[randomNumber].quote;
		var newQuoteAuthor = myQuotes[randomNumber].name;
		var timeAnimation = 500;
		var quoteContainer = $('#quoteContainer');

		quoteContainer.fadeOut(timeAnimation, function() {
			quoteContainer.html('');
			quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteAuthor">'+'-            '+newQuoteAuthor+'</p>')
		
			quoteContainer.fadeIn(timeAnimation);
		}); // End function

		break;
		}; // End for Loop 
	});






}); // End Document ready 

