import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>('http://localhost:8080/usuarios/logar', usuarioLogin);
  }



  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastrar', usuario);
  }


putUser(usuario:Usuario):Observable<Usuario>{
  return this.http.put<Usuario>('http://localhost:8080/usuarios/atualizar', usuario);
}

  getAllUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost:8080/usuarios/all');
  }


  getByIdUser(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`http://localhost:8080/usuarios/${id}`);
  }


  deleteUser(id: number) {
    return this.http.delete<Usuario>(`http://localhost:8080/usuarios/${id}`);
  }






  logado() {
    let ok: boolean = false;


    if (environment.token != '') {
      ok = true;
    }

    return ok;
  }



  adm() {
    let ok: boolean = false;


    if (environment.tipo == 'adm') {
      ok = true;
    }

    return ok;
  }
}

