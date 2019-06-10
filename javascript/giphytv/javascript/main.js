function getURL(){
	
	var rootPath = "http://api.giphy.com/v1/gifs/random?";
	// Stole API key and tag
	var endPath = "&api_key=CW27AW0nlp5u0&tag=giphytv";
	var url = rootPath + endPath;
	findGif(url);
	setTimeout(getURL, 5000);
};
// call function getURL
getURL();



function findGif(url){
	var GiphyAJAXCall = new XMLHttpRequest();
	GiphyAJAXCall.open( 'GET', url );
	GiphyAJAXCall.send();

	GiphyAJAXCall.addEventListener('load',function(e){

	var data = e.target.response;
	pushToDOM(data)
	});
};


/* 3. Show me the GIFs */

function pushToDOM(values) {

  var response = JSON.parse(values);
  var ImageURL =  response.data;
  var container = document.querySelector(".js-container");
  var img_src = ImageURL.images.fixed_height.url;
  container.innerHTML = "<img src=\"" + img_src + "\" class=\"container-image\">";
};
