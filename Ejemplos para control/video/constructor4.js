/*
Los atributos con this son publicos
Se añaden los set
Se añade getVistas para el acceso a this.vistas y se presenta el span que contiene this.vistas()
*/

class Video {
  constructor(ns, a, b, c, d, e, f) {
    this._t1 = c.replace("PT", "").toLowerCase(); // duracion PT3h4m5s calculamos el total de segundos
    var t2 = this._t1.split(/h|m|s/);
    var seg = parseInt(3600 * t2[0]) + parseInt(60 * t2[1]) + parseInt(t2[2]);
    this._ns = parseInt(ns);
    this._vid = a;
    this._titulo = b.charAt(0).toUpperCase() + b.slice(1).toLowerCase(); // todo minusculas primera en mayusculas
    this._titulo = this._titulo.toUpperCase();
    this._duracion = seg;
    this._subida = new Date(d);
    this._visitas = parseInt(e);
    this.vistas = (function () {
      // closure permite atributos privados y estaticos
      var contador = f;
      return function () {
        contador += 1;
        return contador;
      };
    })();
  }
  get getHTML() {
    var img =
      '<a href="#openModal"><img src="https://i.ytimg.com/vi/' +
      this._vid +
      '/mqdefault.jpg" alt="foto"/></a>';
    var txt =
      '<div class="titulo">' +
      this._titulo +
      "</div>" +
      this._t1 +
      "<br/>" +
      this._subida.toLocaleDateString() +
      '<br/><div class="visitas">' +
      this._visitas +
      "</div>" +
      this._ns +
      '(<span id="' +
      this._vid +
      'vistas">' +
      this.vistas() +
      "</span>)";
    var ficha = "<div>" + img + "<div>" + txt + "</div></div>";
    var res = '<div class="ficha" id="' + this._vid + '">' + ficha + "</div>";
    return res;
  }
  get ns() {
    return this._ns;
  }
  get vid() {
    return this._vid;
  }
  get titulo() {
    return this._titulo;
  }
  get duracion() {
    return this._duracion;
  }
  get subida() {
    return this._subida;
  }
  get visitas() {
    return this._visitas;
  }
  get getVistas() {
    return this.vistas();
  }
  set ns(x) {
    this._ns = x;
  }
  set vid(x) {
    this._vid = x;
  }
  set titulo(x) {
    this._titulo = x;
  }
  set duracion(x) {
    this._duracion = x;
  }
  set subida(x) {
    this._subida = x;
  }
  set visitas(x) {
    this._visitas;
  }
}
