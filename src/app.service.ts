import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('SERVICIO_USUARIO') private usuario: ClientProxy){}
  getHello(): string {
    return 'Soy la principal';
  }
  newUsuario(user:any){
    this.usuario.emit('nuevo_usuario', user);
    return 'send_queue'
  }
}
