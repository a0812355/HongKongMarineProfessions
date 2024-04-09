var prompts = [
    {
        prompt: ' Am the life of the party',
        weight: 1,
        class: 'group1'
    },
    {
        prompt: 'Feel little concern for others',
        weight: 1,
        class: 'group1'
    },
    {
        prompt: 'Am always prepared',
        weight: 1,
        class: 'group2'
    },
    {
        prompt: 'Get stressed out easily',
        weight: 1,
        class: 'group3'
    },
    {
        prompt: 'Have a rich vocabular',
        weight: 1,
        class: 'group4'
    },
    {
        prompt: 'Don t talk a lot',
        weight: 1,
        class: 'group5'
    },
    {
        prompt: 'Am interested in people',
        weight: 1,
        class: 'group6'
    },
    {
        prompt: 'Leave my belongings around',
        weight: 1,
        class: 'group7'
    },
    {
        prompt: 'Am relaxed most of the time',
        weight: 1,
        class: 'group8'
    },
    {
        prompt: 'Have difficulty understanding abstract ideas',
        weight: 1,
        class: 'group9'
    },
    {
        prompt: 'Feel comfortable around people',
        weight: 1,
        class: 'group10'
    },
    {
        prompt: 'Insult people',
        weight: 1,
        class: 'group11'
    },
    {
        prompt: 'Pay attention to details',
        weight: 1,
        class: 'group12'
    },
    {
        prompt: 'Worry about things',
        weight: 1,
        class: 'group13'
    },
    {
        prompt: 'Have a vivid imagination',
        weight: 1,
        class: 'group14'
    },
    {
        prompt: 'Keep in the background',
        weight: 1,
        class: 'group15'
    },
    {
        prompt: 'Sympathize with others feeling',
        weight: 1,
        class: 'group16'
    },
    {
        prompt: 'Make a mess of things',
        weight: 1,
        class: 'group17'
    },
    {
        prompt: 'Seldom feel blue',
        weight: 1,
        class: 'group18'
    },
    {
        prompt: 'Am not interested in abstract ideas',
        weight: 1,
        class: 'group19'
    },
    {
    prompt: 'Start conversations',
        weight: 0,
        class: 'group20'
    },
    {
        prompt: 'Am not interested in other people s problems',
        weight: 0,
        class: 'group21'
    },
    {
        prompt: 'Get chores done right away',
        weight: 0,
        class: 'group22'
    },
    {
        prompt: 'Am easily disturbed',
        weight: 0,
        class: 'group23'
    },
    {
        prompt: 'Have excellent ideas',
        weight: 0,
        class: 'group24'
    },
    {
        prompt: 'Have little to say',
        weight: 0,
        class: 'group25'
    },
    {
        prompt: 'Have a soft heart',
        weight: 0,
        class: 'group26'
    },
    {
        prompt: 'Often forget to put things back in their proper place',
        weight: 0,
        class: 'group27'
    },
    {
        prompt: 'Get upset easily',
        weight: 0,
        class: 'group28'
    },
    {
        prompt: 'Do not have a good imagination',
        weight: 0,
        class: 'group29'
    },
    {
        prompt: 'Talk to a lot of different people at parties',
        weight: 0,
        class: 'group30'
    },
    {
        prompt: 'Am not really interested in others',
        weight: 0,
        class: 'group31'
    },
    {
        prompt: 'Like order',
        weight: 0,
        class: 'group32'
    },
    {
        prompt: 'Change my mood a lot',
        weight: 0,
        class: 'group33'
    },
    {
        prompt: 'Am quick to understand things',
        weight: 0,
        class: 'group34'
    },
    {
        prompt: 'Dont like to draw attention to mysel',
        weight: 0,
        class: 'group35'
    },
    {
        prompt: 'Take time out for others',
        weight: 0,
        class: 'group36'
    },
    {
        prompt: 'Shirk my duties',
        weight: 0,
        class: 'group37'
    },
    {
        prompt: 'Have frequent mood swings',
        weight: 0,
        class: 'group38'
    },
    {
        prompt: 'Use difficult words',
        weight: 0,
        class: 'group39'
    },
    {
        prompt: 'Dont mind being the center of attention',
        weight: 0,
        class: 'group40'
    },
    {
        prompt: 'Feel others emotions',
        weight: 0,
        class: 'group41'
    },
    {
        prompt: 'Follow a schedule',
        weight: 0,
        class: 'group42'
    },
    {
        prompt: 'Get irritated easily',
        weight: 0,
        class: 'group43'
    },
    {
        prompt: 'Spend time reflecting on things.',
        weight: 0,
        class: 'group44'
    },
    {
        prompt: 'Am quiet around strangers',
        weight: 0,
        class: 'group45'
    },
    {
        prompt: 'Make people feel at ease',
        weight: 0,
        class: 'group46'
    },
    {
        prompt: 'Am exacting in my work',
        weight: 0,
        class: 'group47'
    },
    {
        prompt: 'Often feel blue',
        weight: 0,
        class: 'group48'
    },
    {
        prompt: 'Am full of ideas',
        weight: 0,
        class: 'group49'
    }

 ]
    
    // This array stores all of the possible values and the weight associated with the value. 
    // The stronger agreeance/disagreeance, the higher the weight on the user's answer to the prompt.
    var prompt_values = [
    {
        value: 'Strongly Agree', 
        class: 'btn-default btn-strongly-agree',
        weight: 5
    },
    {
        value: 'Agree',
        class: 'btn-default btn-agree',
        weight: 4,
    }, 
    {
        value: 'Neutral', 
        class: 'btn-default',
        weight: 3
    },
    {
        value: 'Disagree',
        class: 'btn-default btn-disagree',
        weight: 2
    },
    { 
        value: 'Strongly Disagree',
        class: 'btn-default btn-strongly-disagree',
        weight: 1
    }
]
    
    function createPromptItems() {

        for (var i = 0; i < prompts.length; i++) {
            var prompt_li = document.createElement('li');
            var prompt_p = document.createElement('p');
            var prompt_text = document.createTextNode(prompts[i].prompt);
    
            prompt_li.setAttribute('class', 'list-group-item prompt');
            prompt_p.appendChild(prompt_text);
            prompt_li.appendChild(prompt_p);
    
            document.getElementById('quiz').appendChild(prompt_li);
        }
    }

    function createValueButtons() {
        for (var li_index = 0; li_index < prompts.length; li_index++) {
            var group = document.createElement('div');
            group.className = 'btn-group btn-group-justified';
    
            for (var i = 0; i < prompt_values.length; i++) {
                var btn_group = document.createElement('div');
                btn_group.className = 'btn-group';
    
                var button = document.createElement('button');
                var button_text = document.createTextNode(prompt_values[i].value);
                button.className = 'group' + li_index + ' value-btn btn ' + prompt_values[i].class;
                button.appendChild(button_text);
    
                btn_group.appendChild(button);
                group.appendChild(btn_group);
    
                document.getElementsByClassName('prompt')[li_index].appendChild(group);
            }
        }
    }

    createPromptItems();
    createValueButtons();   

// Keep a running total of the values they have selected. If the total is negative, the user is introverted. If positive, user is extroverted.
// Calculation will sum all of the answers to the prompts using weight of the value * the weight of the prompt.
var total = 0;

// Get the weight associated to group number
function findPromptWeight(prompts, group) {
	var weight = 0;

	for (var i = 0; i < prompts.length; i++) {
		if (prompts[i].class === group) {
			weight = prompts[i].weight;
		}
	}

	return weight;
}

// Get the weight associated to the value
function findValueWeight(values, value) {
	var weight = 0;

	for (var i = 0; i < values.length; i++) {
		if (values[i].value === value) {
			weight = values[i].weight;
		}
	}

	return weight;
}

// When user clicks a value to agree/disagree with the prompt, display to the user what they selected
$('.value-btn').mousedown(function () {
	var classList = $(this).attr('class');
	// console.log(classList);
	var classArr = classList.split(" ");
	// console.log(classArr);
	var this_group = classArr[0];
	// console.log(this_group);

	// If button is already selected, de-select it when clicked and subtract any previously added values to the total
	// Otherwise, de-select any selected buttons in group and select the one just clicked
	// And subtract deselected weighted value and add the newly selected weighted value to the total
	if($(this).hasClass('active')) {
		$(this).removeClass('active');
		total -= (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
	} else {
		// $('[class='thisgroup).prop('checked', false);
		total -= (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $('.'+this_group+'.active').text()));
		// console.log($('.'+this_group+'.active').text());
		$('.'+this_group).removeClass('active');

		// console.log('group' + findValueWeight(prompt_values, $('.'+this_group).text()));
		// $(this).prop('checked', true);
		$(this).addClass('active');
		total += (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
	}

	console.log(total);
})



$('#submit-btn').click(function () {
	// After clicking submit, add up the totals from answers
	// For each group, find the value that is active
	$('.results').removeClass('hide');
	$('.results').addClass('show');
	
	if(total > 25) {
		// document.getElementById('intro-bar').style.width = ((total / 60) * 100) + '%';
		// console.log(document.getElementById('intro-bar').style.width);
		// document.getElementById('intro-bar').innerHTML= ((total / 60) * 100) + '%';
		document.getElementById('results').innerHTML = '<b>You are Manatee!</b><br><br>\
		Manatees are often perceived as gentle and non-aggressive, tending to be peaceful grazers of sea grass. \n\
<br><br>\
So let’s look at how a Manatees compares.\n\
<br><br>\
Their seemingly serene demeanor and lack of territorial behavior might be likened to a humans trait of agreeableness.';}

	 if(total > 50) {
		document.getElementById('results').innerHTML = '<b>You are Squid!</b><br><br>\
		Squid is a sea creature is challenging since this trait involves emotional instability, anxiety, and moodiness, which are complex and subjective human experiences.\
			<br><br>\
So let’s look at how a Squids compares.\
<br><br>\
 Squids have the ability to rapidly change their skin color and texture, allowing them to blend into their environment and evade predators. This behavior could be loosely associated with the heightened sensitivity to threats and vulnerability that neurotic individuals may experience. Neurotic individuals may also sometimes prefer solitude or isolation due to their sensitivity to stress and emotional fluctuations.'
;}


    if (total > 75) {
		document.getElementById('results').innerHTML = '<b>You are Beaver!</b><br><br>\
		Beavers are semi-aquatic and are known for their diligent work ethic, as they meticulously construct dams and lodges.\
<br><br>\
So let’s look at how a Beaver compares.\
<br><br>\
 Their behavior exhibits characteristics such as foresight, planning, and industriousness, which could be likened to human conscientiousness. '
;} 

if (total > 100) {
    document.getElementById('results').innerHTML = '<b>You are Dolphin!</b><br><br>\
    Dolphins are often described as social, playful, and communicative, characteristics that are reminiscent of the human trait of extraversion. \
<br><br>\
So let’s look at how a Dolphin compares.\
<br><br>\
Dolphins are highly social creatures and live in groups called pods. They engage in complex social interactions, communicate through a variety of vocalizations, and show a strong preference for socializing and cooperating with their pod members. Similarly, extraverted individuals tend to enjoy socializing, seek out social interactions, and often have a wide circle of friends. They often initiate interactions with other dolphins and even display curiosity towards humans. This friendly nature aligns with the extraverted trait of being outgoing, sociable, and enjoying the company of others.'
;} 

if (total < 50) {
    document.getElementById('results').innerHTML = '<b>You are Octopus!</b><br><br>\
    Octopuses are known for their curious and exploratory nature. They exhibit a high level of intelligence and problem-solving skills, often using creative and unconventional methods to navigate their environment and hunt for prey.\
<br><br>\
So let’s look at how an Octopus compares.\
<br><br>\
Octopuses are also known to be highly adaptable and can change their behavior and appearance to match their surroundings, demonstrating a willingness to explore and experience new situations.'
;} 

	// Hide the quiz after they submit their results
	$('#quiz').addClass('hide');
	$('#submit-btn').addClass('hide');
	$('#retake-btn').removeClass('hide');
})

// Refresh the screen to show a new quiz if they click the retake quiz button
$('#retake-btn').click(function () {
	$('#quiz').removeClass('hide');
	$('#submit-btn').removeClass('hide');
	$('#retake-btn').addClass('hide');

	$('.results').addClass('hide');
	$('.results').removeClass('show');
})
