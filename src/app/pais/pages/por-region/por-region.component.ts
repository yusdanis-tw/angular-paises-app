import { Component } from '@angular/core'

import { Country } from '../../interfaces/paises.interface'
import { PaisService } from '../../services/pais.service'

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent {
  regiones: string[] = [
    'EU',
    'EFTA',
    'CARICOM',
    'PA',
    'AU',
    'USAN',
    'EEU',
    'AL',
    'ASEAN',
    'CAIS',
    'CEFTA',
    'NAFTA',
    'SAARC',
  ]
  regionActiva: string = ''
  paises: Country[] = []

  constructor(private paisService: PaisService) {}

  getClaseCSS(region: string) {
    return this.regionActiva === region
      ? 'btn btn-primary mt-2'
      : 'btn btn-outline-primary mt-2'
  }

  activarRegion(region: string) {
    if (region === this.regionActiva) return

    this.regionActiva = region
    this.paises = []

    this.paisService.buscarRegion(region).subscribe((paises) => {
      this.paises = paises
    })
  }
}
