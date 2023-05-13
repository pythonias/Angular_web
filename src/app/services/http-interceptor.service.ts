import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }



  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    const started = Date.now();
    let Ok: string;

    console.log('Interceptor');

    const newRequest = req.clone({
      url: "http://localhost:3000/api/" + req.url
    });

    return next.handle(newRequest).pipe(

      tap({
        next: (event) => (Ok = event instanceof HttpResponse ? 'Succeeded' : ''),
        error: (error) => (Ok = 'failed')
      }),
      finalize(() => {
        const timeElapsed = Date.now() - started;
        const msg = `${req.method}- ${req.urlWithParams}  ${Ok} in ${timeElapsed} ms.`;
        console.log("Message :" + msg);
      })


    )
  }


}
