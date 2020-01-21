

		function updateTime(){

			 const month = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
			 const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
			 
			 var today = new Date();
			 var hours = today.getHours() > 12 ? today.getHours() - 12 : today.getHours();
			 var am_pm = today.getHours() >= 12 ? "PM" : "AM";
			 var minutes = today.getMinutes();
			 if(minutes<10){
				 minutes = "0" + today.getMinutes();
			 }
			 var date = month[today.getMonth()]+' '+today.getDate()+', '+today.getFullYear();
			 var time = hours + ":" + minutes + " " + am_pm;
			 var dateTime = date+' '+time;
			 
			 document.getElementById("weekday").innerHTML = weekday[today.getDay()];
			 document.getElementById("month").innerHTML = date;
			 document.getElementById("time").innerHTML = time;
		}
		setInterval(updateTime, 1000);
			 
			 
			 //(today.getMonth(month)+1)
