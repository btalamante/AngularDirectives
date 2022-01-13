import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  htmlElement: ElementRef<HTMLElement>;

  private _color: string = 'red';
  private _mensaje: string = 'Este campo es requerido';

  /**
   * Propiedad para ser recibida desde el hijo
   */
  @Input() set color(valor: string) { // Setter tradicional con función, dentro podemos establecer el cambio necesario para el elemento
    //this.htmlElement.nativeElement.style.color = valor;
    this.setColor();
    this._color = valor;
  };
  @Input() set mensaje(texto: string) {
    //this.htmlElement.nativeElement.innerText = texto;
    this.setMensaje();
    this._mensaje = texto;
  };

  @Input() set valido(valor: boolean) {
    if (valor) {
      this.htmlElement.nativeElement.classList.add('hidden');
    }
    else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  /**
   * 
   * @param el 
   */
  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }
  ngOnChanges(changes: SimpleChanges): void {
    /**
     * Esta aproximación para detectar cambios y manejarlos no es la más eficiente
     * debido a que es necesario poder tener el control de que elemento está sufriendo el cambio
     * Toda esa programación se vuelve tediosa
     */
    // const mensaje = changes.mensaje.currentValue;
    // this.htmlElement.nativeElement.innerText = mensaje;




    //console.log(changes);
  }
  ngOnInit(): void {
    this.setEstilo();
    this.setColor();
    this.setMensaje();
  }

  setEstilo() {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

}
