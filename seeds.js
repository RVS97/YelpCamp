var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
	{
		name: "A place for fire",
		image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350",
		description: "Nullam nec felis ultrices, pharetra lacus in, laoreet augue. Nulla finibus a risus eget lobortis. Nam commodo porta felis, et commodo tortor lobortis eget. Nunc dictum elit et purus suscipit, sit amet ultrices nisl euismod. Fusce hendrerit lorem a metus rhoncus congue. Duis cursus mollis condimentum. Phasellus placerat erat eget felis varius, non hendrerit mi suscipit. In orci enim, viverra sed dui at, efficitur molestie sem. Cras dapibus odio at volutpat fringilla. Quisque suscipit scelerisque est, eget dictum urna vehicula eu. Maecenas venenatis nulla id dolor vehicula, vitae convallis purus interdum. "
	},
	{
		name: "Tea Valley",
		image: "https://images.pexels.com/photos/1239422/pexels-photo-1239422.jpeg?auto=compress&cs=tinysrgb&h=350",
		description: "Nullam nec felis ultrices, pharetra lacus in, laoreet augue. Nulla finibus a risus eget lobortis. Nam commodo porta felis, et commodo tortor lobortis eget. Nunc dictum elit et purus suscipit, sit amet ultrices nisl euismod. Fusce hendrerit lorem a metus rhoncus congue. Duis cursus mollis condimentum. Phasellus placerat erat eget felis varius, non hendrerit mi suscipit. In orci enim, viverra sed dui at, efficitur molestie sem. Cras dapibus odio at volutpat fringilla. Quisque suscipit scelerisque est, eget dictum urna vehicula eu. Maecenas venenatis nulla id dolor vehicula, vitae convallis purus interdum. "
	},
	{
		name: "Painted Sky",
		image: "https://images.pexels.com/photos/45241/tent-camp-night-star-45241.jpeg?auto=compress&cs=tinysrgb&h=350",
		description: "Nullam nec felis ultrices, pharetra lacus in, laoreet augue. Nulla finibus a risus eget lobortis. Nam commodo porta felis, et commodo tortor lobortis eget. Nunc dictum elit et purus suscipit, sit amet ultrices nisl euismod. Fusce hendrerit lorem a metus rhoncus congue. Duis cursus mollis condimentum. Phasellus placerat erat eget felis varius, non hendrerit mi suscipit. In orci enim, viverra sed dui at, efficitur molestie sem. Cras dapibus odio at volutpat fringilla. Quisque suscipit scelerisque est, eget dictum urna vehicula eu. Maecenas venenatis nulla id dolor vehicula, vitae convallis purus interdum. "
	},
];

function seedDB(){
	Campground.remove({}, function(err){
		if(err){
			console.log(err);
		} 
		console.log("removed campgrounds");
		Comment.remove({}, function(err){
			if(err){
				console.log(err);
			}
			console.log("comments removed");
			data.forEach(function(seed){
				Campground.create(seed, function(err, campground){
					if(err){
						console.log(err);
					} else {
						console.log("Added a campground");
						Comment.create(
							{
								text: "This is a special place, but bing your mosquito repelent",
								author: "Cryer"
							}, function(err, comment){
								if(err){
									console.log(err)
								} else {
									campground.comments.push(comment);
									campground.save();
									console.log("Created new comment");
								}
							});
					}
				});
			});
		})
	});
};

module.exports = seedDB;