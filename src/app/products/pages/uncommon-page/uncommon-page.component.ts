import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  //i18nSelect
  public name: string = 'Ariel';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeCliente(): void {
    this.name = 'Diamela';
    this.gender = 'female';
  }

  //i18nPlural
  public clients: string[] = [
    'Daryl',
    'Diame',
    'Kevo',
    'Cami',
    'Nancy',
    'Rubi',
    'Pichi',
  ];

  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 esperando.',
    other: 'tenemos # clientes esperando.',
  };

  //keyValue pipe
  public person = {
    name: 'Ariel',
    edad: 32,
    address: 'Argentina',
  };

  //Async pipe

  public myObservableTimer = interval(2000).pipe(
    tap((value) => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promesa recibe datos');
      console.log('Promesa');
    }, 3500);
  });

  deleteClient(): void {
    this.clients.shift();
  }
}
