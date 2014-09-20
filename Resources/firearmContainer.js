exports.openFireArmContainer = function(firearm) {
	console.log(JSON.stringify(firearm));
	
	var firearmContainer = Ti.UI.createWindow({
		backgroundImage : 'images/bg_body.jpg',
		navTintColor : '#FFCC11'
	});

	var firearmModel = Ti.UI.createLabel({
		text : firearm.model,
		color: 'white',
		top: 50,
		font : {
		fontWeight : 'bold',
		fontSize : '23'
	}
	});
	
	var priceNumber = Ti.UI.createLabel({
		text: "MSRP:$" + firearm.msrp + "\n" +firearm.number,
		color: 'white',
		top: 0,
		left: 160,
		width: 150,
		font : {
		fontWeight : 'bold',
		fontSize : '18'
	}
	});
	
	var firearmDesc = Ti.UI.createLabel({
		text : firearm.desc,
		color: 'white',
		width: 150,
		left: 0,
		
		center: {
			y: 340,
		},
		
		font : {
		fontSize : '12',
		}
	});
	
	var verticalContainer = Ti.UI.createView({
		layout: 'vertical',
		height: Ti.UI.SIZE,
		width: 161,
		right: 0,
		bottom: 10,
	});
	
	for(var i = 0; i<firearm.specs.length; i++) {
		var specsTop;
		
		var firearmSpecs = Ti.UI.createLabel({
			text : firearm.specs[i],
			color: 'white',
			width: 160,
			font : {
				fontWeight : 'bold',
				fontSize : '12',
			}
				
		});
		verticalContainer.add(firearmSpecs);
	};
	
	var firearmImage = Ti.UI.createImageView({
		image: firearm.image,
		width: 'auto',
		height: 150,
		top: 75,
	});
	
	var separatorLine = Ti.UI.createImageView({
		image: 'images/yellowLine.png',
		bottom: 15,
		height: 200,
		left: 150,
	});
	
	firearmContainer.add(firearmModel, firearmImage, logoView4, firearmDesc, verticalContainer, separatorLine, priceNumber);

	return firearmContainer;
};