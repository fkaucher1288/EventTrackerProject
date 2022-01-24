import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Property } from '../models/property';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private baseUrl = 'http://localhost:4200/';
  private url = this.baseUrl + 'api/properties/';


  constructor(
    private http: HttpClient,
  ) { }

  index(): Observable<Property[]> {
    // return [...this.todos];
    return this.http.get<Property[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => {
          'KABOOM' + err
          }
        );
      })
    )

    }

    show(id: number): Observable<Property> {
      // return [...this.todos];
      return this.http.get<Property>(this.url + "/" + id).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError(
            () => {
            'KABOOM' + err
            }
          );
        })
      )

      }

      create(property: Property): Observable<Property> {
        property.address = '';
        property.city = '';
        property.state = '';
        property.marketPrice = 0;
        property.expectedCashflow = 0;
        property.capRate = 0;
        return this.http.post<Property>(this.url, property).pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError(
              () => {
              'PropertyService.index(): error retrieving' + err
              }
            );
          })
        )

        }

        update(property: Property): Observable<Property> {

          return this.http.put<Property>(this.url + '/' + property.id, property).pipe(
            catchError((problem: any) => {
              console.error('PropertyService.index(): error updating.');
              console.error(problem);
              return throwError(
                () => new Error(
                  'PropertyService.update(): error updating property.'
                )
              );

            })
          );

          // console.log(todo);
          // if (todo.id != undefined) {
          //   this.todos[todo.id - 1].task = todo.task;
          //   this.todos[todo.id - 1].description = todo.description;
          //   this.todos[todo.id - 1].completed = todo.completed;
          // }

        }

}
