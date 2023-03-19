

// setTimeout(function(){
//     window.location.reload();
//  }, 3000);

let score = 0;
let x = Math.floor((Math.random() * 3) + 1);

let array = [1,2,3];


// Text Completion

// async function generateCatImage(){
//   const catImages = await fetch('https://aws.random.cat/meow?ref=apilist.fun')
//     .then(response => response.json())
//     .then(data => {
//       console.log(data); // Do something with the data here
//     })
//     .catch(error => {
//       console.error(error);
//     });

//    const data = await catImages.json();
    

//   console.log(data);
  
//   const id = "id"+x;

//   array[id-1] = 0;
 
//   document.getElementById(id).src = data['data'][0].url;
//   document.getElementsByTagName("p")[0].innerHTML = prompt;
// }




async function generateImg(){


  const API_URL = 'https://api.openai.com/v1/images/generations';

  const apiKey = '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';
  const prompt = 'Cat';

  const fetchOptions = await fetch(API_URL,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      "model": "image-alpha-001",
      "prompt": prompt,
      "num_images": 1
    })
  });


  const data = await fetchOptions.json();


  console.log(x);
  let id = "id"+x;
  array[x-1] = 0;
  

  console.log(data['data'][0].url);
 
  console.log(id + " gpt id");;
  document.getElementById(id).alt="G";
  document.getElementById(id).src = data['data'][0].url;
  document.getElementsByTagName("p")[0].innerHTML = prompt;

}

// async function dostuff() {
//     const apiKey = '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'; // replace with your OpenAI API key
//     const prompt = 'What is burnout? '; // replace with your prompt
//     const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

//     const resp = await fetch(apiUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${apiKey}`
//         },
//         body: JSON.stringify({
//           prompt: prompt,
//           max_tokens: 25
//         })
//       })
//     //   .then(response => response.json())
//     //   .then(data => document.getElementsByTagName("p")[0].innerHTML = prompt + data.choices[0].text)
//     //   .catch(error => console.error(error));

//     const data = await resp.json();

//     document.getElementsByTagName("p")[0].innerHTML = prompt + data['choices'][0].text;
// }

//dostuff();

async function genCats1(){
// Set up the API endpoint URL
  const apiUrl = 'https://api.thecatapi.com/v1/images/search';

  // Make a GET request to the API
  const resp = await fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Get the image URL from the response
      const imageUrl = data[0].url;

      // Create an image element and set its source to the URL
     
      let id;
      for(let i=0;i<3;i++){
        if(array[i] != 0){
          id="id" + array[i];
          console.log(array[i]);
          array[i] = 0;
          
          break;
        }
      }
    
      console.log(id);
      const catImg = document.getElementById(id);
      catImg.src = imageUrl;

      // Add the image element to the HTML document

    })
    .catch(error => console.error(error));

}


async function genCats2(){
  // Set up the API endpoint URL
    const apiUrl = 'https://api.thecatapi.com/v1/images/search';
  
    // Make a GET request to the API
    const resp = await fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Get the image URL from the response
        const imageUrl = data[0].url;
  
        // Create an image element and set its source to the URL
        
        let id;
       
        for(let i=0;i<3;i++){
          if(array[i] != 0){
            id="id" + array[i];
            array[i] = 0;
            break;
          }
        }
        console.log(id);
        const catImg = document.getElementById(id);
        catImg.src = imageUrl;
  
        // Add the image element to the HTML document
      })
      .catch(error => console.error(error));
  
  }

async function genSetOfImages(){

  x = Math.floor((Math.random() * 3) + 1);
  array = [1,2,3];
 
  document.getElementById("btn").style.visibility="collapse";
  document.getElementById("id1").style.visibility="hidden";
  document.getElementById("id2").style.visibility="hidden";
  document.getElementById("id3").style.visibility="hidden";
  document.getElementById("score").style.visibility="hidden";
  document.getElementById("paw").style.visibility="collapse";


  
  document.getElementById("btn").style.visibility="none";

  document.getElementsByTagName("p")[1].style.visibility="visible";
 


  document.getElementsByTagName("p")[1].innerHTML = "Waiting for the cats";
  document.getElementById("abc").style.visibility="visible";

  await generateImg();
  await genCats1();
  await genCats2();
 
  
 
  document.getElementsByTagName("p")[1].innerHTML = "";
  document.getElementsByTagName("p")[1].style.visibility="none";

  document.getElementById("abc").style.visibility="hidden";
  document.getElementById("paw").style.visibility="collapse";
  
  document.getElementById("images").style.visibility="visible";

  document.getElementById("score").style.visibility="visible";
  document.getElementById("score").innerHTML="Score: "+score;

  document.getElementById("id1").style.visibility="visible";
  document.getElementById("id2").style.visibility="visible";
  document.getElementById("id3").style.visibility="visible";


}



function gameover(){


  document.getElementById("id1").style.visibility="collapse";
  document.getElementById("id2").style.visibility="collapse";
  document.getElementById("id3").style.visibility="collapse";
  document.getElementById("btn").style.visibility="visible";
  document.getElementById("paw").style.visibility="visible";


  document.getElementById("score").innerHTML = "Final Score: "+ score;
  document.getElementsByTagName("p")[1].style.visibility="none";
  
  score = 0;


}

function checkImage(e){

  
  let img1 = document.getElementById("id1");
  let img2 = document.getElementById("id2");
  let img3 = document.getElementById("id3");

  console.log(e.target);

  if(e.target.alt=='G'){
    score++;
    console.log("gpt");
    start();
    e.target.alt = "";

    genSetOfImages();
  } else {
    gameover();
  }
 
}

window.addEventListener("load",function(){

  let img1 = document.querySelectorAll("img");
 

  for(let i of img1){
    i.addEventListener("click",checkImage,false);
  }
  console.log(img1);

  let btn = document.getElementById("btn");
  btn.addEventListener("click",genSetOfImages);


  genSetOfImages();
});


var confetti = {
	maxCount: 150,		//set max confetti count
	speed: 2,			//set the particle animation speed
	frameInterval: 15,	//the confetti animation frame interval in milliseconds
	alpha: 1.0,			//the alpha opacity of the confetti (between 0 and 1, where 1 is opaque and 0 is invisible)
	gradient: false,	//whether to use gradients for the confetti particles
	start: null,		//call to start confetti animation (with optional timeout in milliseconds, and optional min and max random confetti count)
	stop: null,			//call to stop adding confetti
	toggle: null,		//call to start or stop the confetti animation depending on whether it's already running
	pause: null,		//call to freeze confetti animation
	resume: null,		//call to unfreeze confetti animation
	togglePause: null,	//call to toggle whether the confetti animation is paused
	remove: null,		//call to stop the confetti animation and remove all confetti immediately
	isPaused: null,		//call and returns true or false depending on whether the confetti animation is paused
	isRunning: null		//call and returns true or false depending on whether the animation is running
};

(function() {
	confetti.start = startConfetti;
	confetti.stop = stopConfetti;
	confetti.toggle = toggleConfetti;
	confetti.pause = pauseConfetti;
	confetti.resume = resumeConfetti;
	confetti.togglePause = toggleConfettiPause;
	confetti.isPaused = isConfettiPaused;
	confetti.remove = removeConfetti;
	confetti.isRunning = isConfettiRunning;
	var supportsAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
	var colors = ["rgba(30,144,255,", "rgba(107,142,35,", "rgba(255,215,0,", "rgba(255,192,203,", "rgba(106,90,205,", "rgba(173,216,230,", "rgba(238,130,238,", "rgba(152,251,152,", "rgba(70,130,180,", "rgba(244,164,96,", "rgba(210,105,30,", "rgba(220,20,60,"];
	var streamingConfetti = false;
	var animationTimer = null;
	var pause = false;
	var lastFrameTime = Date.now();
	var particles = [];
	var waveAngle = 0;
	var context = null;

	function resetParticle(particle, width, height) {
		particle.color = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
		particle.color2 = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
		particle.x = Math.random() * width;
		particle.y = Math.random() * height - height;
		particle.diameter = Math.random() * 10 + 5;
		particle.tilt = Math.random() * 10 - 10;
		particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
		particle.tiltAngle = Math.random() * Math.PI;
		return particle;
	}

	function toggleConfettiPause() {
		if (pause)
			resumeConfetti();
		else
			pauseConfetti();
	}

	function isConfettiPaused() {
		return pause;
	}

	function pauseConfetti() {
		pause = true;
	}

	function resumeConfetti() {
		pause = false;
		runAnimation();
	}

	function runAnimation() {
		if (pause)
			return;
		else if (particles.length === 0) {
			context.clearRect(0, 0, window.innerWidth, window.innerHeight);
			animationTimer = null;
		} else {
			var now = Date.now();
			var delta = now - lastFrameTime;
			if (!supportsAnimationFrame || delta > confetti.frameInterval) {
				context.clearRect(0, 0, window.innerWidth, window.innerHeight);
				updateParticles();
				drawParticles(context);
				lastFrameTime = now - (delta % confetti.frameInterval);
			}
			animationTimer = requestAnimationFrame(runAnimation);
		}
	}

	function startConfetti(timeout, min, max) {
		var width = window.innerWidth;
		var height = window.innerHeight;
		window.requestAnimationFrame = (function() {
			return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function (callback) {
					return window.setTimeout(callback, confetti.frameInterval);
				};
		})();
		var canvas = document.getElementById("confetti-canvas");
		if (canvas === null) {
			canvas = document.createElement("canvas");
			canvas.setAttribute("id", "confetti-canvas");
			canvas.setAttribute("style", "display:block;z-index:999999;pointer-events:none;position:fixed;top:0");
			document.body.prepend(canvas);
			canvas.width = width;
			canvas.height = height;
			window.addEventListener("resize", function() {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}, true);
			context = canvas.getContext("2d");
		} else if (context === null)
			context = canvas.getContext("2d");
		var count = confetti.maxCount;
		if (min) {
			if (max) {
				if (min == max)
					count = particles.length + max;
				else {
					if (min > max) {
						var temp = min;
						min = max;
						max = temp;
					}
					count = particles.length + ((Math.random() * (max - min) + min) | 0);
				}
			} else
				count = particles.length + min;
		} else if (max)
			count = particles.length + max;
		while (particles.length < count)
			particles.push(resetParticle({}, width, height));
		streamingConfetti = true;
		pause = false;
		runAnimation();
		if (timeout) {
			window.setTimeout(stopConfetti, timeout);
		}
	}

	function stopConfetti() {
		streamingConfetti = false;
	}

	function removeConfetti() {
		stop();
		pause = false;
		particles = [];
	}

	function toggleConfetti() {
		if (streamingConfetti)
			stopConfetti();
		else
			startConfetti();
	}
	
	function isConfettiRunning() {
		return streamingConfetti;
	}

	function drawParticles(context) {
		var particle;
		var x, y, x2, y2;
		for (var i = 0; i < particles.length; i++) {
			particle = particles[i];
			context.beginPath();
			context.lineWidth = particle.diameter;
			x2 = particle.x + particle.tilt;
			x = x2 + particle.diameter / 2;
			y2 = particle.y + particle.tilt + particle.diameter / 2;
			if (confetti.gradient) {
				var gradient = context.createLinearGradient(x, particle.y, x2, y2);
				gradient.addColorStop("0", particle.color);
				gradient.addColorStop("1.0", particle.color2);
				context.strokeStyle = gradient;
			} else
				context.strokeStyle = particle.color;
			context.moveTo(x, particle.y);
			context.lineTo(x2, y2);
			context.stroke();
		}
	}

	function updateParticles() {
		var width = window.innerWidth;
		var height = window.innerHeight;
		var particle;
		waveAngle += 0.01;
		for (var i = 0; i < particles.length; i++) {
			particle = particles[i];
			if (!streamingConfetti && particle.y < -15)
				particle.y = height + 100;
			else {
				particle.tiltAngle += particle.tiltAngleIncrement;
				particle.x += Math.sin(waveAngle) - 0.5;
				particle.y += (Math.cos(waveAngle) + particle.diameter + confetti.speed) * 0.5;
				particle.tilt = Math.sin(particle.tiltAngle) * 15;
			}
			if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
				if (streamingConfetti && particles.length <= confetti.maxCount)
					resetParticle(particle, width, height);
				else {
					particles.splice(i, 1);
					i--;
				}
			}
		}
	}
})();

const start = () => {
  setTimeout(function(){
      confetti.start();
  }, 1000);
  stop(); 
};

const stop = () => {
  setTimeout(function(){
      confetti.stop();
  }, 5000);
};