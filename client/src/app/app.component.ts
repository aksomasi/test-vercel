import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <h1>Test App</h1>
    <button (click)="callApi()">Test Button</button>
  `
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  callApi() {
    this.http.post('/api/test', { value: 'World' }).subscribe({
      next: (response: any) => {
        alert(response.message);
      },
      error: (error) => {
        alert('Error: ' + error.message);
      }
    });
  }
}