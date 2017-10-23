//https://twitter.com/onerelatableboi


/* This twitter bot is a sort of caricature of millenial humor. With an odd
mixture of apathy, existentialism, self pride, and pure sass, this bot tweets
random thoughts and emotions concerning different aspects of a typical 
teenager's life. The more I coded this, I realized this bot was not just a 
caricature of the millenial, but specifically of the type of millenial I am:
one that is depressed and dependent on humor to create light of a darkening
reality (yes I realize how incredibly melodramatic that sounds, but that 
should go to prove that this bot truly is modeled after me). This bot manufactures
a type of persona that is quite unique to the "memeing" community, more frequently
seen and appreciated on platforms like Tumblr, Reddit, and some parts of Twitter.
Nevertheless, I find this humor particularly awkward and endearing and hope my
one follower (a fellow bot) also appreciates it! */

// DEBUG
var debug = false;		// if we don't want it to post to Twitter! Useful for debugging!

// Our Twitter library
var Twit = require('twit');

// We need to include our configuration file
var T = new Twit(require('./config.js'));

var qualitiesNoun = ['swag', 'beauty', 'stunning face', 'intellect', 'confidence', 'hot bod', 'steaming hot intellect'];
var emojis = ['😇', '😉', '😎', '😜', '😛', '😊', '😈', '🤔', '👅', '🤷', '👀', '👸', '💃', '💁', '👑'];
var fireAdj = ['flaming', 'roaring', 'blazing', 'fiery', 'raging', 'burning', 'smoldering', 'steaming', 'boiling','crackling'];
var prizes = ['better', 'gold', 'a nobel peace prize', 'a noble piece pries', 'my boyfriend`s virginity', 'at least 4 french fries', 'the world', 'every diamond in the world', 'literal diamonds', 'the heart of every man and woman on this putrid earth', 'beauty! luxury! ease!', 'heavenly relief', 'literal fucking immortality', 'nirvana, no not like the band, but like that chakra shit that religions have', 'utter and total harmony with all things', 'glory', 'happiness', 'a non lethal form of ecstasy equal to a thousand ecstasy pills'];
var shineAdj = ['glitter', 'shine', 'gold', 'luster', 'sheen', 'radiance', 'a glint', 'a light', 'tears', 'a twinkle', 'mist', 'a single blue teardrop', 'the light of a thousand stars', 'a sheen similar to the swirling clouds of jupiter,', 'confusion', 'worry', 'stress', 'panic', 'happiness', 'ecstasy', 'craziness', 'wildness', 'insanity', 'humor'];
var actions =['to cry a river over the fact that brad is such a bitch', 'to drive away in dads corvette', 'to elope with my boyfriend, fuck u dad', 'to run myself into a better me', 'to eat this entire box of cheezits and then just kind of like i guess think about life', 'to think about the reality of life and decide i am too good for this shit', 'to contemplate my extraordinary bod', 'to code a twitter bot in the most sassy angry way possible', 'to get into an argument with a loved one and then rue all my life decisions', 'to be depressed', 'to cry', 'to disillusion myself into thinking i am cool', 'to eat this entire pint of ben and jerrys', 'to scream', 'to turn on some taylor swift', 'to gentrify my experience as well as the experiences of my peers', 'to culturally appropriate', 'to start some white nonsense', 'to begin an autobiography (except imma write this shit in Mandarin)'];
var positiveAdj = ['adaptable','adventurous','affable','affectionate','agreeable','ambitious','amiable','amicable','amusing','brave','bright','broad-minded','calm','careful','charming','communicative','compassionate','conscientious','considerate','convivial','courageous','courteous','creative','decisive','determined','diligent','diplomatic','discreet','dynamic','easygoing','emotional','energetic','enthusiastic','exuberant','fair-minded','faithful','fearless','forceful','frank','friendly','funny','generous','gentle','good','gregarious','hard-working','helpful','honest','humorous','imaginative','impartial','independent','intellectual','intelligent','intuitive','inventive','kind','loving','loyal','modest','neat','nice','optimistic','passionate','patient','persistent','pioneering','philosophical','placid','plucky','polite','powerful','practical','pro-active','quick-witted','quiet','rational','reliable','reserved','resourceful','romantic','self-confident','self-disciplined','sensible','sensitive','shy','sincere','sociable','straightforward','sympathetic','thoughtful','tidy','tough','unassuming','understanding','versatile','warmhearted','willing','witty'];
var skills = ['Ability to work under pressure ','Accuracy','Adaptability ','Advising people','Analyzing data','Analyzing problems','Assembling equipment','Attention to detail','Auditing financial data ','Brainstorming','Budgeting','Building new business ','Business communication','Business management','Calculating data','Categorizing records','Checking for accuracy','Coaching','Collaborating ideas','Communicating with people','Comparing results','Comprehending ideas','Conducting interviews','Conflict resolution ','Counseling people ','Creative thinking ','Critical thinking','Customer service','Dealing with complaints','Decision making','Defining problems','Delegating','Designing systems','Determination','Developing plans for projects','Diplomacy','Distributing products','Editing','Effective listening ','Encouraging people','Enforcing rules','Envisioning solutions or ideas','Estimating project workload','Ethics','Evaluating programs','Expressing ideas','Extracting or gathering information ','Following instructions ','Generating accounts','Goal setting ','Handling money','Identifying problems','Imagining innovative solutions','Information management','Interpreting languages','Interviewing ','Inventing products/ideas','Investigating solutions','Knowledge of community ','Knowledge of concepts and principles','Knowledge of government affairs','Leading teams','Listening to people','Maintain focus with interruptions','Maintaining a high level of production','Maintaining accurate records','Maintaining files','Maintaining schedules or times','Making important decisions','Managing organizations','Managing people ','Mediating ','Meeting deadlines','Motivating others','Multi-tasking','Navigating politics ','Negotiating skills','Operating equipment','Organizing tasks','Patience','People management','Performing clerical work ','Performing numerical analysis','Persuading others','Planning meetings ','Planning organizational needs','Predicting future trends','Preparing written communications','Prioritization skills','Problem solving','Promoting events or products','Proposing ideas','Providing discipline ','Public speaking','Questioning nature','Quick learner','Raising funds','Reading ','Recruiting','Relating to others','Reliability','Remembering information','Repairing equipment ','Reporting data','Researching ','Resolving conflicts ','Resourcefulness','Responsibility','Results orientated ','Risk taking','Running meetings','Sales ability','Screening telephone calls','Self-motivated ','Selling ideas','Selling products or services','Serving people','Setting performance standards','Setting up demonstrations','Sketching charts or diagrams','Strategic thinking','Suggesting courses of action','Summarizing data','Supervising','Supporting others ','Taking decisive action','Taking inititiave','Taking personal responsibility','Teaching ','Team building','Teamwork','Technical work','Thinking logically','Time management','Training','Translating','Using computers','Verbal communication','Working creatively  ','Working with statistics','Writing clearly and concisely'];
var stupidSkills = ['eating', 'watching 20 hours of netflix uninterrupted', 'consuming entire boxes full of oreos', 'consuming entire boxes of honey nut cheereos', 'consuming entire boxes of chocolates', 'dancing spastically when i`m home alone', 'making awkward eye contact with the cute boy sitting across from me on this bus', 'making prolonged eye contact with the cute girl sitting across from me', 'listening to old school taylor swift and knowing all the lyrics', 'knowing all the lyrics to every single nickelback song ever', 'dehydrating myself bc alcohol', 'spending an ungodly amount of time in the bathroom avoiding human contact', 'complaining about first world problems', 'flirting with the drunk bartender', 'convincing everyone that i can have just one more drink']
var stupidCompliments = ['your face, it`s like super nice', 'can u d8 me', 'd8 me', 'i like u pls like me pls please plz', 'hey hey hey u wanna be my bae bae bae?', 'i like ur face i mean just look at ur face', 'ur so darn cute omg ahhhhhhhhhhhhh', 'ahhhhhhhhhhhhh ur so cute it hurts', 'i l i k e y o u ', 'pls think i`m as cute as i think u are', 'can u like hold something for me, it`s my hand, i want you to hold my hand', 'i am in love with u'];
var shits = ['crap','shit','shite','deuce','flying horse shit', 'horse shit', 'flying bat shit', 'bullshit', 'fuk', 'fuq', 'fuckkkk', 'flying fuck', 'rat`s ass', 'two rats` asses'];
var comoSeDice = ['comoSeDice', 'how u say', 'miten sanotaan', 'как казваш', 'comment dites-vous', 'كيف تقول', 'וויאזוי זאגסטו', 'তুমি কিভাবে বলো', 'Conas a deireann tú', 'wie sagt man'];
var num = ['un', 'one', 'yksi', 'един', 'un', 'واحد', 'איינער', 'এক', 'ceann amháin', 'eins'];
var whatTheHeck = ['what the heck', 'what the fuck', 'wtf', 'what the actual hell', 'what the' + randomizer(fireAdj) + 'hell', 'what the fuckie', 'wut the fuq', 'oh fuckie what the fuckie', 'waht the hekc'];
var moods = ['suffering', 'weeping', 'in low spirits', 'feeling anxiety it`s fine it`s fine whatever', 'in despair', 'Joy', 'in high spirits', 'in love (or just infatuated, i mean i guess whatever don`t make me question my feels ok)'];
var emotions = ['amazed','foolish','overwhelmed','angry','frustrated','peaceful','annoyed','furious','proud','anxious','grieving','relieved','ashamed','resentful','bitter','hopeless as heck','sad as heckkkk','bored as fuq','hurt','unsatisfied','uncomfortable','inadequate','scared','confused','insecure','self-conscious','discontented :(','shocked','depressed','irritated','determined','jealous','stupid','disdain','suspicious','disgusted','lonely','tense','eager','lost','terrified','embarrassed','trapped','energetic in like the most anxious way possible?','miserable','uncomfortable','envious','unmotivated','worried','nervous','worthless'];
var pickUpLines = ['I may not be Fred Flintstone but I can sure make your bed rock!', 'Is your dad a thief or something? Because someone stole the stars and put them into your eyes!','I’ve heard sex is a killer. Want to die happy?','Excuse me, but I’m new in town, can I have directions to your place?','Can I buy you a drink – or would you just prefer the five bucks?','I’m a thief, and I’m here to steal your heart.','I wish I were a tear so i could start in your eyes, live on your face, and die on your lips.','If I could rearrange the alphabet, I would put U and I together.','Am I cute enough yet? Or do you need more to drink?','You must be the reason for global warming because you’re hot.','You know what would look great on you? Me.','Can I read your T shirt in brail?','Do you have a map? Because I keep getting lost in your eyes.','You know what? Your eyes are the same color as my Porsche.','I think I need to call heaven because they’ve lost one of their angels.','Is your name Gillette? Because you’re the best a man can get!','Do you believe in the hereafter? Well, then I guess you know what I’m here after.','Do you have a mirror in your pocket? Because I can see myself in your pants.','The body is made up of 90% water and I’m thirsty.','Baby you must be tired because you’ve been running through my mind all night!','Are you an overdue book? Because you’ve got FINE written all over you!','How much does a polar bear weigh? Enough to break the ice- can I get your number?','I have Skittles in my mouth, wanna taste the rainbow?','That’s a nice shirt. Can I talk you out of it?','You know, winning the lottery doesn’t mean much when you have a weak heart.','If I had a garden I’d put your tulips and my tulips together.','What has 142 teeth and holds back the incredible hulk? My zipper.','If you were a new sandwich at Mcdonalds, you’de be called McGorgeous.','All those curves! And me with no brakes!','Can I even get a fake number?'];
var links = ['https://vine.co/u/942560408319975424', 'https://vine.co/u/917527567878205440', 'https://vine.co/u/1143117799087296512', 'https://vine.co/u/1262142414173646848', 'https://vine.co/u/1144551132975296512', 'https://vine.co/u/1132776328161353728', 'https://vine.co/u/1132776328161353728', 'https://vine.co/u/963196986734137344', 'https://vine.co/u/980422881370669056', 'https://vine.co/u/1144551132975296512', 'https://vine.co/MaxGoodrich', 'https://vine.co/u/980422881370669056'];

function randomizer(list) {
	return list[(Math.floor(Math.random()*list.length))];
}

function full() {
	var i = Math.floor(Math.random()*18)
	if (i == 0) {
		var fire = randomizer(fireAdj);
		var prize = randomizer(prizes);
		return 'so like in all honesty,,, why the ' + fire + ' hell would you even........ like bitch i deserve ' + prize;
	} else if (i == 1) {
		var quality = randomizer(qualitiesNoun);
		return 'sorry is my ' + quality + ' distracting you ? ?';
	} else if (i == 2) {
		var emoji = randomizer(emojis);
		return 'person: who do you think you are?\nme: ' + emoji;
	} else if (i == 3) {
		var shine = randomizer(shineAdj);
		var action = randomizer(actions);
		return 'me with ' + shine + ' in my eye: time to ' + action + ' h a h a h a';
	} else if (i == 4) {
		var positive = randomizer(positiveAdj)
		return 'me @ me: hi so u might be ' + positive + ' but don`t you even d a r e';
	} else if (i == 5) {
		var skill1 = randomizer(skills);
		var skill2 = randomizer(skills);
		var skill3 = randomizer(stupidSkills);
 		return 'my hidden talents include ' + skill1 + ', ' + skill2 + " and of course " + skill3;
	} else if (i == 6) {
		var compliment1 = randomizer(positiveAdj);
		var compliment2 = randomizer(positiveAdj);
		var compliment3 = randomizer(stupidCompliments);
		return 'when i try to flirt & i say shit like "ur ' + compliment1 + ' and also ' + compliment3 + '"';
	} else if (i == 7) {
		var positive = randomizer(positiveAdj);
		var shit = randomizer(shits);
		return 'i am too ' + positive + ' just far far too ' + positive + ' by far,,,,, to have to deal with your ' + shit;
	} else if (i == 8) {
		var como = randomizer(comoSeDice);
		var index = comoSeDice.indexOf(como);
		var numM = num[index]; 
		var shit = randomizer(shits);
		return 'i don`t... ' + como + '..... give ' + numM + ' ' + shit;
	} else if (i == 9) {
		var fire = randomizer(fireAdj);
		return 'sometimes i wonder if it`s possible to be this ' + fire + ' hot but then i look in the mirror and i remember';
	} else if (i == 10) {
		var currentdate = new Date(); 
		var action = randomizer(actions);
		return 'welp it`s ' + currentdate.getHours() + ":" + currentdate.getMinutes() + ' my dudes, that means it`s time to ' + action;
	} else if (i == 11) {
		var currentdate = new Date();
		var whatThe = randomizer(whatTheHeck);
		return 'hey friendos it`s ' + currentdate.getHours() + ":" + currentdate.getMinutes() + ' so i just wanted to say ' + whatThe;
	} else if (i == 12) {
		var positive = randomizer(positiveAdj);
		return '*silently contemplates life* why am i just so... ' + positive + 'just so fuckin...... ' + positive;
	} else if (i == 13) {
		var mood = randomizer(moods);
		return 'mood of the day? i am ' + mood + ' but u know what it`s ok';
	} else if (i == 14) {
		var emotion = randomizer(emotions);
		var positive = randomizer(positiveAdj);
		var link = randomizer(links);
		return 'to my ' + positive + ' followers, if you feel ' + emotion + ' then here`s the perfect mood: ' + link;
	} else if (i == 15) {
		var pickUpLine = randomizer(pickUpLines);
		return 'a pick up line i`ve seen on tinder: ' + pickUpLine;
	} else if (i == 16) {
		var mood = randomizer(moods);
		var positive = randomizer(positiveAdj);
		return 'even if i`m ' + mood + ' at least i`m ' + positive;
	} else if (i == 17) {
		var mood = randomizer(moods);
		var positive = randomizer(positiveAdj);
		return 'yo i might be ' + mood + ' but i`m also ' + positive + ' ya feel?';

	}

}

function tweet() {
	var tweetText = full();
	
	if (debug) 
		console.log(tweetText);
	else
		T.post('statuses/update', {status: tweetText }, function(err, reply) {
			if (err !== null) {
				console.log('Error: ', err);
			}
			else {
				console.log('Tweeted: ', tweetText);
			}
		});
}

function runBot() {
	console.log(" "); // just for legible logs
	var d=new Date();
	var ds = d.toLocaleDateString() + " " + d.toLocaleTimeString();
	console.log(ds);  // date/time of the request	
	tweet();	
}

// Try to retweet something as soon as we run the program...
runBot();
// ...and then every hour after that. Time here is in milliseconds, so
// 1000 ms = 1 second, 1 sec * 60 = 1 min, 1 min * 60 = 1 hour --> 1000 * 60 * 60
setInterval(runBot, 1000 * 60 * 60);
