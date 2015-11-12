$(document).ready(function(){
	$.get("https://www.reddit.com/r/aww/.json",function(response){
		var posts= response.data.children;
	
		$.each(posts,function(index,post){
			var $container= $("<div />").appendTo($(".maincontainer"));
			var $title= $("<a />").html("<h1>"+ post.data.title +"<h1>").appendTo($container);
			$title.attr("href", post.data.url);
			$("<img /> ").attr("src",post.data.thumbnail).appendTo($container);
			$("<p />").text("User: "+post.data.author).appendTo($container);

			var postDate= new Date(post.data.created*1000);
			var month= postDate.getUTCMonth()+1;
			var year= postDate.getUTCFullYear();
			var day= postDate.getDate();

			$("<p />").text("Posted: "+month+"/"+day+"/"+year).appendTo($container);
			

			});

	});
	
});