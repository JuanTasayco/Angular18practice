import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test-fusion',
  standalone: false,
  templateUrl: './test-fusion.component.html',
  styleUrl: './test-fusion.component.scss'
})
export class TestFusionComponent {
  fb = inject(FormBuilder);
  selected!: Date | null;
  horarios: any[] = [];
  calendaryForm: FormGroup = this.fb.group({
    valueCalendary: [Date]
  })

  calendaryValues: Date[] = [];

  onClick(e: any) {
    console.log(e);
    /*     if (this.formRangoHorarios.invalid) {
          return;
        } */

    /* const request = {
      "codigoSede": +this.formGroupSearchHorarios.controls.sede.value,
      "codigoEspecialidad": +this.formGroupSearchHorarios.controls.especialidad.value,
      "fechaInicio":  moment(this.formGroupSearchHorarios.controls.fecha_desde.value).format(BASE_DATE_FORMAT_API) ,
      "fechaFin":  moment(this.formGroupSearchHorarios.controls.fecha_hasta.value).format(BASE_DATE_FORMAT_API),
      "horaInicio": this.formRangoHorarios.controls.hora_inicio.value,
      "horaFin": this.formRangoHorarios.controls.hora_fin.value
    }
    */

    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    let diaDescripcion: string;
    switch (e.value.getDay()) {
      case 1: diaDescripcion = 'Lunes'; break;
      case 2: diaDescripcion = 'Martes'; break;
      case 3: diaDescripcion = 'Miercoles'; break;
      case 4: diaDescripcion = 'Jueves'; break;
      case 5: diaDescripcion = 'Viernes'; break;
      case 6: diaDescripcion = 'Sabado'; break;
      default:
        diaDescripcion = 'Domingo';
        break;
    }

    const horario: any = {
      fechaDia: e.value.getDate(),
      anio: e.value.getFullYear(),
      mesDescripcion: monthNames[e.value.getMonth()],
      estado: 'V'
    };

    console.log(horario)
    if (!this.horarios.find((e: any) => JSON.stringify(e) === JSON.stringify(horario))) {
      this.horarios.push(
        horario
      );
    }


    console.log(this.horarios)
  }

  onDateChange(event: Date) {
    if (this.calendaryValues.some(date => date.getTime() == event.getTime())) {
      this.calendaryValues = this.calendaryValues.filter(value => value.getTime() !== event.getTime());
    } else {
      this.calendaryValues.push(event);
    }
  }

  daysSelected: any[] = [];
  event: any;

  isSelected = (event: any) => {
    const date =
      event.getFullYear() +
      "-" +
      ("00" + (event.getMonth() + 1)).slice(-2) +
      "-" +
      ("00" + event.getDate()).slice(-2);
    return this.daysSelected.find(x => x == date) ? "selected" : "";
  };

  select(event: any, calendar: any) {
    const date =
      event.getFullYear() +
      "-" +
      ("00" + (event.getMonth() + 1)).slice(-2) +
      "-" +
      ("00" + event.getDate()).slice(-2);
    const index = this.daysSelected.findIndex(x => x == date);
    if (index < 0) this.daysSelected.push(date);
    else this.daysSelected.splice(index, 1);

    calendar.updateTodaysDate();

    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    console.log(event)
    let diaDescripcion: string;
    switch (event.getDay()) {
      case 1: diaDescripcion = 'Lunes'; break;
      case 2: diaDescripcion = 'Martes'; break;
      case 3: diaDescripcion = 'Miercoles'; break;
      case 4: diaDescripcion = 'Jueves'; break;
      case 5: diaDescripcion = 'Viernes'; break;
      case 6: diaDescripcion = 'Sabado'; break;
      default:
        diaDescripcion = 'Domingo';
        break;
    }

    const horario: any = {
      fechaDia: event.getDate(),
      anio: event.getFullYear(),
      mesDescripcion: monthNames[event.getMonth()],
      estado: 'V'
    };

    console.log(horario)
    if (!this.horarios.find((e: any) => JSON.stringify(e) === JSON.stringify(horario))) {
      this.horarios.push(
        horario
      );
    }

    console.log(this.horarios)
  }
}
