import { Component, Input } from '@angular/core'
import { Country } from '../../interfaces/paises.interface'

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [],
})
export class PaisTablaComponent {
  @Input() paises: Country[] = []
}
