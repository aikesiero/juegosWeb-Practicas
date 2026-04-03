
// 1. Definición de la Producto 

class Producto {
  constructor(nombre, cantidad, precio) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio;
  }

  imprimeProducto(){
    return "<td>" + this.nombre + "</td>" + "<td>" + this.precio + "</td>" + "<td>" + this.cantidad + "</td>"
  }
}

class Maquina {

    constructor(productos) {

        var matrix = [], i, k;

        for (i = 0, k = -1; i < productos.length; i++) {
            if (i % 4 === 0) {
                k++;
                matrix[k] = [];
            }

            matrix[k].push(productos[i]);
        }

        this.productos = matrix;
    }

    imprimeProductos(){
        var values = "<table>";
        values = values + "<thead><tr><th>BOTON</th><th>Nombre</th><th>Precio</th><th>Stock</th></tr></thead><tbody>";
        for (let i = 0; i < this.productos.length; i++) {
            var row = this.rowForValue(i % 4)
            for (let j = 0; j < this.productos[i].length; j++) {
                const btn =  "<td>" + row + (j+1) + "</td>";
                values = values + "<tr>" + btn + this.productos[i][j].imprimeProducto() + "</tr>";
                console.log(this.productos[i][j]); // Imprime cada elemento
            }
        }
        values = values + "</tbody></table>";
        return values;
    }

    rowForValue(i){
        switch (i){
            case 0: return "A";
            case 1: return "B";
            case 2: return "C";
            case 3: return "D";
            default: return "";
        }
    }
}

const prodA = new Producto("Patatas", 3, 1.25);
const prodB = new Producto("Refresco", 2, 2);
const prodC = new Producto("Chocolate", 3, 5);
const prodD = new Producto("Patatas", 3, 1.25);
const prodE = new Producto("Refresco", 2, 2);
const prodF = new Producto("Chocolate", 3, 5);

const maquina = new Maquina([prodA, prodB, prodC, prodD, prodE, prodF]);

 mensaje.innerHTML = maquina.imprimeProductos();
 //mensaje.style.color = "blue";