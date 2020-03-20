let toDay = new Date()
let numberYear = toDay.getFullYear()
let numberMonth = toDay.getMonth()
let numberWeek = 0
let calendar = document.getElementById('calendar');
let numberOfDays = [31, 28, 31, 30, 31, 30, 31, 30, 30, 31, 30, 31]
let month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

CreateCalendarContents()


function CreateCalendarContents(){
	CreateHTMLCode()

	for (let i = 1; i <= numberOfDays[numberMonth]; i++){
		let dayOfTheMonth = new Date(numberYear, numberMonth, i)
		let nextWeek = document.getElementById('date'+ numberWeek);

		if (i == toDay.getDate() && numberMonth == toDay.getMonth() && numberYear == toDay.getFullYear() ){
			nextWeek.innerHTML = nextWeek.innerHTML + '<td class="today" onclick="GetReservationDate(this)">' + i + '</td>'
		}else{
			nextWeek.innerHTML = nextWeek.innerHTML + '<td class="calendar_day" onclick="GetReservationDate(this)">' + i + '</td>'
		}

		CreateNewWeek(dayOfTheMonth,nextWeek,i)
	}
}


function CreateHTMLCode(){
	let FirstDayOfTheWeek = new Date(numberYear, numberMonth, 1).getDay() - 1
	CreateHeaderCode()

	if (FirstDayOfTheWeek == -1){
		FirstDayOfTheWeek = 6
	}

	for (let i = 0; i < FirstDayOfTheWeek; i++){
		document.getElementById('date0').innerHTML = document.getElementById('date0').innerHTML + '<td></td>';
	}
}


function CreateHeaderCode(){

	let CalendarHTMLCode = '<caption><button onclick="BackButton()" style="background-image: url(assets/img/prev_mon.png);">'
	+'</button><h3>' + month[numberMonth] + ', ' + numberYear + '</h3>' 
	+ '<button onclick="ForwardButton()" style="background-image: url(assets/img/next_mon.png);" ></button></caption>'
	+ '<tr><td>Пн</td><td>Вт</td><td>Ср</td><td>Чт</td><td>Пт</td><td>Сб</td><td>Вс</td></tr><tr id="date0"></tr>'
	
	calendar.innerHTML = CalendarHTMLCode

}


function CreateNewWeek(dayOfTheMonth, nextWeek, i){

	if (dayOfTheMonth.getDay() == 0 ){
		numberWeek = numberWeek + 1
		calendar.innerHTML = calendar.innerHTML + '<tr id="date' + numberWeek + '">' + '</tr>'

	}
}


function GetReservationDate(elem){

	document.getElementById('reservation_date').value = elem.innerHTML + '.' + (numberMonth + 1) + '.' + numberYear
	document.getElementById('calendar').style.display = 'none'

}


function ShowCalendar(){

	document.getElementById('calendar').style.display = 'block'

}


function ForwardButton(){

	numberMonth = numberMonth + 1
	numberWeek = 0

	if (numberMonth > 11){
		numberMonth = 0
		numberYear = numberYear + 1
	}

	CreateCalendarContents()

}


function BackButton(){

	numberMonth = numberMonth - 1
	numberWeek = 0

	if (numberMonth < 0){
		numberMonth = 11
		numberYear = numberYear - 1
	}

	CreateCalendarContents()

}
