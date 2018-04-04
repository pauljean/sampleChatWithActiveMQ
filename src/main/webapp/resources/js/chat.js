

	var myDestination = 'queue://WEB-APP-JMS-QUEUE';
	var myId = '1';
		
  var amq = org.activemq.Amq;
  amq.init({ 
    uri: './amq/*', 
    logging: true,
    timeout: 20,
    clientId:myId
  });



  var myHandler = {
			rcvMessage : function(message) {

				console.log(message);
				
				var who="you";
				var response=JSON.stringify(message)
				
				insertChat(who, response);
				alert(response);
			}
		};
	
		amq.addListener(myId, myDestination, myHandler.rcvMessage);
			
			
	
	
var me = {};
me.avatar = "./resources/img/me.png?sz=48";

var you = {};
you.avatar = "./resources/img/you.png";

function formatAMPM(date) {
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var ampm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	minutes = minutes < 10 ? '0' + minutes : minutes;
	var strTime = hours + ':' + minutes + ' ' + ampm;
	return strTime;
}

// -- No use time. It is a javaScript effect.
function insertChat(who, text, time) {
	if (time === undefined) {
		time = 0;
	}
	var control = "";
	var date = formatAMPM(new Date());

	if (who == "me") {
		
		console.log("send message");

		amq.sendMessage(myDestination, text);

		console.log(text);

		control = '<li style="width:100%">'
				+ '<div class="msj macro">'
				+ '<div class="avatar"><img class="img-circle" style="width:100%;" src="'
				+ me.avatar + '" /></div>' + '<div class="text text-l">'
				+ '<p>' + text + '</p>' + '<p><small>' + date + '</small></p>'
				+ '</div>' + '</div>' + '</li>';
	} else {

		console.log("******** you receive message **********");

		control = '<li style="width:100%;">'
				+ '<div class="msj-rta macro">'
				+ '<div class="text text-r">'
				+ '<p>'
				+ text
				+ '</p>'
				+ '<p><small>'
				+ date
				+ '</small></p>'
				+ '</div>'
				+ '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="'
				+ you.avatar + '" /></div>' + '</li>';
	}
	setTimeout(function() {
		$("ul").append(control).scrollTop($("ul").scrollHeight);
	}, time);

}

function resetChat() {
	$("ul").empty();
}



function sendMessage(){
	
var text=document.getElementById("mytext").value;
	
	if (text !== "") {
		insertChat("me", text);
		document.getElementById("mytext").value="";
	}
	
};


// -- Clear Chat
resetChat();

// -- Print Messages
/*
 * insertChat("me", "Hello Tom...", 0); insertChat("you", "Hi, Pablo", 1500);
 * insertChat("me", "What would you like to talk about today?", 3500);
 * insertChat("you", "Tell me a joke",7000); insertChat("me", "Spaceman:
 * Computer! Computer! Do we bring battery?!", 9500); insertChat("you", "LOL",
 * 12000);
 */

$(document).ready(function() {	
	
		$(".mytext").keyup( function(e) {

		if ((e.keyCode || e.which) == 13) {

			var text = $(this).val();

			if (text !== "") {

				insertChat("me", text);

				$(this).val('');

			}

		}

	});

});

function send_data(text) {

	var data = {
		"data" : text
	};

	console.log(data)
	// JSON.stringify(data)

	$.ajax({
		url : "./index",
		type : "post",
		data : data,
		success : function() {
			console.log("chat success");
			// console.log(response.responseText);
		},
		error : function() {
			console.log("chat failure");

		}
	});
}

// -- NOTE: No use time on insertChat.
