import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  date1!: Date;//date1: Date = new Date(); -> JA VEM PREENCHIDO COM A DATA DE HOJE.

  date2!: Date ;

  date3!: Date;

  date4!: Date;

  date5!: Date;

  date6!: Date;

  date7!: Date;

  date8!: Date;

  date9!: Date;

  date10!: Date;

  date11!: Date;

  date12!: Date;

  date13!: Date;

  date14!: Date;
  
  dates: Date[] = [] ;

  rangeDates: Date[]  = [] ;

  minDate: Date = new Date();

  maxDate: Date = new Date();
  es: any;

  invalidDates: Array<Date> = [];

  ngOnInit() {
      this.es = {
          firstDayOfWeek: 1,
          dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
          dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
          dayNamesMin: [ "D","L","M","X","J","V","S" ],
          monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
          monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
          today: 'Hoy',
          clear: 'Borrar'
      }

      let today = new Date();
      let month = today.getMonth();
      let year = today.getFullYear();
      let prevMonth = (month === 0) ? 11 : month -1;
      let prevYear = (prevMonth === 11) ? year - 1 : year;
      let nextMonth = (month === 11) ? 0 : month + 1;
      let nextYear = (nextMonth === 0) ? year + 1 : year;
      this.minDate = new Date();
      this.minDate.setMonth(prevMonth);
      this.minDate.setFullYear(prevYear);
      this.maxDate = new Date();
      this.maxDate.setMonth(nextMonth);
      this.maxDate.setFullYear(nextYear);

      let invalidDate = new Date();
      invalidDate.setDate(today.getDate() - 1);
      this.invalidDates = [today,invalidDate];
  }

  constructor(){
    
  }



}
