/**********************************
* @Proyecto: utiles (ex CaFéDevJS);
* @Autor/a: Carlos F. Gorosito;
* @CopyRight: (C) 2016 CaFéDev;
* @Version: 2.6
* El siguiente código se encuentra liberado bajo licencia GPL v.3
* Este sistema es software libre: podés redistribuir y/o modificar 
* bajo los términos de la Licencia Pública General de GNU 
* habilitada por la fundación Free Software Foundation, en su versión 
* 3 de la Licencia, o cualquier versión posterior.
*
* Este sistema está distribuido con la esperanza de que será útil,
* pero SIN GARANTÍA ALGUNA; sin, incluso, garantías implícitas de
* MERCANTIBILIDAD o de ENCAJE PARA UN PROPÓSITO EN PARTICULAR.
* Mirá la GNU General Public Licence para más detalles.
*
* Deberías haber recibido una copia de la GNU General Public Licence
* junto con este sistema en formato archivo. Si no lo está, leela en
* <http://www.gnu.org/licenses/gpl-3.0.html>.
*
*/

	if (typeof window.cafe === 'undefined') { window.cafe = { version: "0.2.5"} }

	var 
		codeN = "\n",
		br = "<br />",
		hr = "<hr />",
		table = function($,$$) { return "<table "+($$?$$:"")+">"+$+"</table>"},
		thead = function($,$$) { return "<thead "+($$?$$:"")+">"+$+"</thead>"},
		tbody = function($,$$) { return "<tbody "+($$?$$:"")+">"+$+"</tbody>"},
		tr 	  = function($,$$) { return "<tr "+($$?$$:"")+">"+$+"</tr>"},
		td 	  = function($,$$) { return "<td "+($$?$$:"")+">"+$+"</td>"},
		th 	  = function($,$$) { return "<th "+($$?$$:"")+">"+$+"</th>"}	;

	var Sumar = function ($, $$) {
		return parseFloat($) + parseFloat($$);
	}
		
	var Es = function ($) {
			return {
				unNumero: function() { return !isNaN($) && !($==null) },
				unEntero: function() { return !isNaN($) && ($%1==0) && !($==null) },
				unaFrase: function() { return Object.prototype.toString.call($) == '[object String]'},
				unaFicha: function() { return Object.prototype.toString.call($) == '[object Object]'},
				unaLista: function() { return Object.prototype.toString.call($) == '[object Array]'},
				unaFuncion:function(){ return Object.prototype.toString.call($) == '[object Function]'},
				deTipo:	  function(_) { 
						if(typeof _ === "undefined") return Object.prototype.toString.call($);
						else return Object.prototype.toString.call($) === _;
					},
				indefinido:function(){ return typeof $ === 'undefined'},
				nulo:     function() { return $==null },
				positivo: function() { return $ > 0},
				negativo: function() { return $ < 0},
				cero: 	  function() { return !isNaN($) && $ == 0},
				vacio:	  function() {
					return (this.unaLista() && $ === []) || 
						(this.unaFicha() && $ === {}) ||
						(this.unaFrase() && $ === "") ||
						($ == 0)
				}
			}
		}
	var es = Es;
	;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
	
	var Frase = function ($) {
		return {
			longitud: 		function() { return $.length },
			izquierda:		function(_){ return $.substr(0,_)},
			derecha:		function(_){ return $.substr($.length-_)},
			hasta:			function(_){ return $.substr(0,$.length-_)},
			desde:			function(_){ return $.substr(_) },
			puesto:			function(_){ return $.substr(_,1)},
			invertida:		function() { var _ = ""; for(var i=$.length-1; i>=0; i--) _+=$[i]; return _;},
			contiene:		function(_) {
				var R = 0;
				for(var i=0; i<$.length; i++) {
					for(var j = 0; j < _.length; j++)
						if ($[i] == _[j]) {
							R = i+1;
							break; break;
						}
				}
				return R;
			}
		}
	}
	var frase = Frase;
	;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
	
	
	var Coleccion = function ($$) {
		if (!(Es($$).unaLista()) || !(Es($$).deTipo("[object HTMLCollection]") ) || !(Es($$).deTipo("[object NodeList]") ) ) return null;
		return {
			enTotal:			function () { return $$.length },
			elPrimero:		function () { return $$[0] },
			elUltimo:			function () { if ($$.length) return $$[$$.length-1]; null },
			invertida:		function () {
				if ($$.length == 0) return $$;
				var Nueva = [];
				for(var i = $$.length-1; i >=0 ; i--) Nueva.push( $$[i] );
				return Nueva; //
			},
			primeroQue:		function(_) { for(var i in $$){ $ = $$[i]; if (eval("("+_+")")) return $; }return null;  },
			puestoPrimer:	function (_) { for(var i in $$){ $ = $$[i]; if(eval("("+_+")")) return i;} return -1}
		}
	}
	var coleccion = Coleccion;
	;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
	
	var aCada = function ($, fn) {for(var i in $)fn($[i],i,$)};
	var paraCada = aCada;
	var paracada = aCada;
	var ParaCada = aCada;
	var Paracada = aCada;
	var paratodo = aCada;
	var paraTodo = aCada;
	var ParaTodo = aCada;
	var Paratodo = aCada;
	var paratoda = aCada;
	var paraToda = aCada;
	var ParaToda = aCada;
	var Paratoda = aCada;
	
	var Para = {
		valores: function($) {
			var x = new Escala($);
			return {
				ejecutar: function($$) { aCada(x, $$)},
				realizar: function($$) { aCada(x, $$)}
			}
		},
		cada: function ($) { return { 
			ejecutar: function($$){aCada($, $$)},
			realizar: function($$){aCada($, $$)},
		} },
		cadaUno: function ($) { return { 
			ejecutar: function($$){aCada($, $$)},
			realizar: function($$){aCada($, $$)},
		} },
		cadaUnoDe: function ($) { return { 
			ejecutar: function($$){aCada($, $$)},
			realizar: function($$){aCada($, $$)},
		} },
		todo: function ($) { return { 
			ejecutar: function($$){aCada($, $$)},
			realizar: function($$){aCada($, $$)},
		} },
		todos: function ($) { return { 
			ejecutar: function($$){aCada($, $$)},
			realizar: function($$){aCada($, $$)},
		} },
		todosLos: function ($) { return { 
			ejecutar: function($$){aCada($, $$)},
			realizar: function($$){aCada($, $$)},
		} },
		todasLas: function ($) { return { 
			ejecutar: function($$){aCada($, $$)},
			realizar: function($$){aCada($, $$)},
		} }
	}
	var para = Para;

	;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
	
	var Tabla = function ($$, $cl) {
		var
			$ti = [],
			$df = [],
			clave = $cl;
		;
		if( Es($cl).indefinido() ) {
			var $$$ = [];
		} else {
			var $$$ = {};
		}
		
		if( Es($$).unaLista() ) {
			var _ = $$.length;
			$$.forEach(function (cadaItem){
				if( Es(cadaItem).unaFrase() ) {
					var Separador = Frase(cadaItem).contiene([" ",".",":",";","//"]);
					if (Separador) {
						// "Hola TEXTO"
						$ti.push( cadaItem.substr(0, Separador-1) );
						$df.push( cafeItem.substr(Separador+1).trim() );
					}
					else {
						if(cadaItem.length){
							$ti.push(cadaItem);
							$df.push("TEXTO");
						}
					}
				}
				else
				if( Es(cadaItem).unaLista() ) {
					if(cadaItem.length > 1) {
						$ti.push(cadaItem[0]);
						$df.push(cadaItem[1]);
					}
					else {
						$ti.push(cadaItem[0]);
						$df.push("TEXTO");
					}
				}
				else 
				if( Es(cadaItem).unaFicha ) {
					var nombre = cadaItem.nombre || cadaItem.titulo || "";
					var tipo = cadaItem.tipo || cadaItem.valor || "TEXTO";
					if ( !Es(nombre).indefinido() ) {
						$ti.push( nombre );
						$df.push( tipo );
					}
				}
			})
		}
		else
		if( Es($$).unaFicha() ) {
			for(var _ in $$) {
				var $ = $$[_];
				$ti.push( _ );
				if ( Es($).indefinido() || Es($).null || $ == "" )
					$df.push( "TEXTO" );
				else 
					$df.push( $ );
				;
			}
		}
		
		return {
			modelo: function () {
				var R = {};
				for(var _ in $ti) {
					R[ $ti[_] ] = $df[_];
				}
				return R;
			},
			fichas: function () {
				return $$$;
			},
			_insert03394883: function ($) {
				$$$ = $
				return this;
			},
			insertar: function (_) {
				console.log("Insertando...")
				console.log(_)
				$$$ = _;
				return this;
				console.log(_);
				if ( Es(_).unaFicha() ) {
					var R = {};
					aCada($ti, function($) {
						R[$] = _[$] || null;
					});
					if ( Es($$$).unaFicha() )
						$$$[ R[clave] ] = R;
					else
						$$$.push(R);
					;
				}
				else
				if ( Es(_).unaLista() ) {
					var R = {};
					var c = 0;
					aCada($ti, function(cadaCampo) {
						R[cadaCampo] = _[c++].cadaCampo || null;
					});
					if ( Es($$$).unaFicha() )
						$$$[ R[clave] ] = R;
					else
						$$$.push(R);
					;
				}
				return this;
			},
			
			enCuales: function (_) {
				if( Es($$$).unaFicha() ) {
					var R = {};
					for(var i in $$$) {
						var $ = $$$[i];
						if( eval("("+_+")") )
						R[ i ] = $;
					}
				} else { // $$$ es unaLista
					var R = [];
					for(var i in $$$) {
						var $ = $$$[i];
						if( eval("("+_+")"))
						R.push($);
					}
				}
				return new Tabla( this.modelo() )._insert03394883(R);
			},
			tablaHTML: function ($, $$, $th, $tb, $tr, $td, $tdh) {
				var R = '<table id="'+$+'" '+($$?$$:"")+'>';
				R+='<thead id="'+$+'enc" '+($th?$th:'')+'>';
					aCada($ti, function($) { R+=th($.substr(0,1).toUpperCase()+$.substr(1), $tdh) });
				R+='</thead><tbody id="'+$+'cue" '+($tb?$tb:'')+'>';
					aCada($$$, function($) {
						R+="<tr "+($tr?$tr:"")+">";
						aCada($, function($){ R+=td($, $td)});
						R+="</tr>";
					})
				R+='</tbody></table>';
				return R; 
			},
			presentar: function (_) {
				if( Es($$$).unaFicha() ) {
					var R = {};
					for(var i in $$$) {
						var $ = $$$[i];
						R[ i ] = eval("("+_+")");
					}
				} else { // $$$ es unaLista
					var R = [];
					for(var i in $$$) {
						var $ = $$$[i];
						R.push(eval("("+_+")"));
					}
				}
				return new Tabla( R[0], $cl )._insert03394883(R);
			}
		} // return
	} // clase Tabla
	var tabla = Tabla;
	///////////////[ Clase: Entre dos o más valores ]
	
	var Entre = function (A, B) {
		return {
			elMinimo: function () {
				if ( Es(A).unaLista() ) {
					var R = A[0];
					for(var i = 1; i < A.length; i++) if(A[i] < R) R = A[i];
					return R;
				}
				else
					if (A < B) return A; return B;
			},
			elMaximo: function () {
				if ( Es(A).unaLista() ) {
					var R = A[0];
					for(var i = 1; i < A.length; i++) if(A[i] > R) R = A[i];
					return R;
				}
				else
					if (A > B) return A; return B;
			},
			sumatoria: 	function() { var S = 0; if(Es(A).unaLista()) aCada(A,function($){S+=$}); else S = A+B; return S},
			productoria:function() { var P = 1; if(Es(A).unaLista()) aCada(A,function($){P*=$}); else P = A*B; return P},
			promedio: 	function() { 
				var S, C, P = 0.00; 
				S = 0; C = 0;
				if (Es(A).unaLista()) 
					if (Es(A).vacio())
						{ S = 0; C = 0;}
					else
						aCada(A, function($){ S+= $; C++});
				
				else 
					if ( Es(B).indefinido())
						if (Es(A).indefinido())
							{ S = 0; C = 1;}
						else
							{ S = A; C = 1;}
					else 
						{ S = A+B; C = 2;}
					;
				;
				P = S/C;
				return P;
				
			},
			juntar: 	function (clv, pri, ult) {
				var i = A.length;
				var R = (pri?pri:"");
				if (Es(A).unaLista())
				aCada(A, function ($, _) {
					R+= $ + (_ == (i-1)? (ult? ult : "") : (clv? clv : ""));
				})
				else
				R += A + (clv?clv:"") + (B?B:"") + (ult?ult:"");
				return R;
			},
			azar:		function () {
				if( Es(A).unaLista() ) {
					if ( Es(A).vacio() ) return Math.random();
					var D = A.length;
					var R = Math.floor( Math.random() * D );
					return A[R];
				} else {
					if (A > B) { var temp = A; A = B; B = temp; }
					var Delta = B - A;
					return Math.random() * Delta + A;
				}
			}
		}
	}
	var entre = Entre;
	
	///////////////[ Clase: Escala ]
	var Escala = function (datos) {
		if( !Es(datos).indefinido() ) {
			var _desde = datos.desde || datos.dsd || datos[0] || 0;
			var _hasta = datos.hasta || datos.hst || datos[1] || 0;
			var __paso = datos.paso  || datos.pas || datos[2] || 1;
		} else {
			_desde = 1; _hasta = 10; __paso = 1;
		}
		if (__paso < 0) __paso = -__paso;
			console.log(_desde);
			console.log(_hasta);
			console.log(__paso);
		var R = [];
		if(_desde < _hasta) {// Del máximo al mínimo {
			for(var i = _desde; i <= _hasta; i+=__paso) if(i==0) R.push("0"); else R.push(i);
		}else {
			for(var i = _desde; i >= _hasta; i-=__paso) if (i==0) R.push('0'); else R.push(i);
		}
		return R;
	}
	var escala = Escala;

	var cafeDe = function (obj) {
		return {
			cuando: function ( fraSituacion ) {
				if (!Es(fraSituacion).unaFrase()) return null;
				return {
					ejecutar: function (que) {
						if (/clic/gi.test(fraSituacion)) 
							if(Es(obj).unaLista() || Es(obj).deTipo()=="[object HTMLCollection]" || Es(obj).deTipo("[object NodeList]") ) 
								for( var i in obj ) obj[i].onclick = que;
							else
								obj.onclick = que;
						else
						if (/cambi/gi.test(fraSituacion)) 
							if(Es(obj).unaLista() || Es(obj).deTipo()=="[object HTMLCollection]" || Es(obj).deTipo("[object NodeList]") ) 
								for( var i in obj ) obj[i].onchange = que;
							else
								obj.onchange = que;
						else
						if (/escrib/gi.test(fraSituacion)) 
							if(Es(obj).unaLista() || Es(obj).deTipo()=="[object HTMLCollection]" || Es(obj).deTipo("[object NodeList]") ) 
								for( var i in obj ) obj[i].onkeydown = que;
							else
								obj.onkeydown = que;
						else 
						if (/selec/gi.test(fraSituacion))
							if(Es(obj).unaLista() || Es(obj).deTipo()=="[object HTMLCollection]" || Es(obj).deTipo("[object NodeList]")) 
								for( var i in obj ) obj[i].onselect = que;
							else
								obj.onselect = que;
						;
						return cafeDe(this);
					}
				}
			},
			contenido: function( htmlCodigo, forma ) {
				if (!forma) 
					if( Es(obj).unaLista() || Es(obj).deTipo("[object HTMLCollection]") || Es(obj).deTipo("[object NodeList]") )
						for( var i in obj ) obj[i].innerHTML = htmlCodigo;
					else
						obj.innerHTML = htmlCodigo; 
				else if (/agreg/gi.test(forma)) 
					if( Es(obj).unaLista() || Es(obj).deTipo("[object HTMLCollection]") || Es(obj).deTipo("[object NodeList]"))
						for( var i in obj ) obj[i].innerHTML += htmlCodigo;
					else
						obj.innerHTML += htmlCodigo; 
				else if (/delan/gi.test(forma)) 
					if( Es(obj).unaLista() || Es(obj).deTipo("[object HTMLCollection]") || Es(obj).deTipo("[object NodeList]"))
						for( var i in obj ) obj[i].innerHTML = htmlCodigo + obj[i].innerHTML;
					else
						obj.innerHTML = htmlCodigo + obj.innerHTML;
					;
				;
				return this;
			},
			estilos: function ( a, b ) {
				var r = "";
				if( Es(obj).unaLista() || Es(obj).deTipo("[object HTMLCollection]") || Es(obj).deTipo("[object NodeList]")) {
					for( var i in obj ) {
						r = "";
						if(!b) {
							if( Es(a).unaFicha() ) {
								for(var j in a)
									r += " " + j + ": " + a[j] + ";";
							} else if( Es(a).unaLista() ) {
								for(var j in a)
									r += a[j] + ";";
							} else if( Es(a).unaFrase() ) {
								r = a + ";";
							} else
								r = ";";
							;
						} else {
							r = a + ": " + b + ";";
						}
						obj[i].style.cssText = Frase(r).hasta(1);
					}
				} else {
					if(!b) {
						r = "";
						if( Es(a).unaFicha() ) {
							for(var j in a)
								r += " " + j + ": " + a[j] + ";";
						} else if( Es(a).unaLista() ) {
							for(var j in a)
								r += a[j] + ";";
						} else if( Es(a).unaFrase() ) {
							r = a + ";";
						} else
							r = ";";
						;
						obj.style.cssText = Frase(r).hasta(1);
					} else
						obj.style.cssText = a + ": " + b;
					;
					
				}
			}
		}
	}
	var A 	= 	cafeDe;
	var a 	= 	cafeDe;
	var De 	= 	cafeDe;
	var de	= 	cafeDe;
	var Con =	cafeDe;
	var con = 	cafeDe;
	
	var Items = function( nombre ) {
		return {
			tag: 		function() { return document.getElementsByTagName( nombre ); },
			etiqueta: 	function() { return document.getElementsByTagName( nombre ); },
			clase: 		function() { return document.getElementsByClassName( nombre ); },
			categoria: 	function() { return document.getElementsByClassName( nombre ); },
			id: 		function() { return document.getElementById( nombre ); },
			nombre: 	function() { return document.getElementsByName( nombre ); },
			selector: 	function() { return document.querySelectorAll( nombre ); }
		}
	}
	var items = Items;
	var item = items;
	var Item = item;
/*
	var unPunto = function (a, b) {
		if ( arguments.length == 0 ) return { x: 0, y: 0 };
		var xx, yy, zz;
		if ( b == null ) {
			if( Es(a).unaFicha() ) { xx = a.x; yy = a.y; }
			if( Es(a).unaLista() ) { xx = a[0];yy = a[1] }
			if( Es(a).unaFrase() ) {
				if( a.split(" ").length > 1 ) zz = a.split(" "); else
				if( a.split(",").length > 1 ) zz = a.split(","); else
				if( a.split(";").length > 1 ) zz = a.split(";"); else
				zz = false;
				if( zz ) {
					xx = zz[0];
					yy = zz[0];
				}
			}
		} else {
			xx = a;
			yy = b;
		}
		return {
			x: xx,
			y: yy
		}
	}
	
	var Dibujo = function ( dadoLienzo ) {
		console.log( dadoLienzo );
		console.log( Es(dadoLienzo).deTipo() )
		var c = dadoLienzo.getContext("2d");
		console.log(c);
		var dsd__ = {x:0, y: 0}, hst__ = {x:0, y:0};
		c.lineJoin = "round";
		
		return {
			linea: function (color, grosor, finale, unione) {
				if (color)  c.strokeStyle =	color;
				if (grosor) c.lineWidth =	grosor;
				if (finale) c.lineCap =		finale;
				if (unione) c.lineJoin =	unione;
				console.log( "Aspecto de línea:");
				console.log( arguments );
				return this;
			},
			relleno: function (forma, valor) {
				if( /color/gi.test(forma) )
					c.fillStyle = valor;
				return this;
			},
			desde: function (x, y) {
				dsd__ = unPunto(x,y);
				console.log("Desde...");
				console.log( arguments )
				return this;
			},
			hasta: function (x, y) {
				hst__ = unPunto(x,y);
				console.log("Hasta...");
				console.log( arguments )
				return this;
			},
			longitud: function (x, y) {
				hst__.x = dsd__.x + (new unPunto(x,y)).x
				hst__.y = dsd__.y + (new unPunto(x,y)).y
				return this;
			},
			rectangulo: function () {
				c.rect( dsd__.x, dsd__.y, (hst__.x-dsd__.x), (hst__.y-dsd__.y) );
				c.stroke();
				console.log( "dibujando rectángulo")
				c.beginPath()
				return this;
			},
			segmento: function () {
				c.moveTo( dsd__.x, dsd__.y );
				c.lineTo( hst__.x, hst__.y );
				c.stroke();
				c.beginPath()
			}
		}
	}
*/
