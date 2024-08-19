/* 
- CarritoCompra debería ser una clas
- carritoCompra debería ser una instancia de la clase CarritoCompra
- El método agregarProducto debería poder agregar un producto a la lista
- El método calcularTotal debería poder calcular el total de la compra 
  sumando los precios de todos los productos del carrito.CarritoCompra
- El método aplicarDescuento debería poder aplicar un descuento al total
  de la compra.
 */  

  /* En TTD se hacen los test primero, antes de hacer las clases*/
  
  const {CarritoCompra} = require("../index")

  describe("Clase CarritoCompra", () =>{
    let carritoCompra;

    beforeEach(()=>{
        carritoCompra = new CarritoCompra;
    })
    /* la anterior vble debe ir sin el const o let para que funcione */

    describe("Sobre el constructor de la clase CarritoCompra", ()=>{
        it("CarritoCompra debería ser una clase", ()=>{
            expect(typeof CarritoCompra.prototype.constructor).toBe("function")
        })
        it("carritoCompra debería ser una instancia de la clase CarritoCompra", ()=>{
            expect(carritoCompra instanceof CarritoCompra).toBe(true)
        })
        it("Debería guardar productos en una lista", ()=>{
            /* Así se evalúa que sea un array vacío*/
            expect(carritoCompra.products).toEqual([])
        })
    })

    describe("Métodos de la clase CarritoCompra", () => {
        const product1 = {
            id: 1,
            name: 'Camiseta Negra',
            price: 1000,
            quantity: 3
        }
        const product2 = {
            id: 2,
            name: 'Camiseta Azul',
            price: 900,
            quantity: 5
        }

        const product3 = {
            id: 3,
            name: 'Remera blanca Estampada',
            price: 1200,
            quantity: 1
        }

        it("Debería tener un método llamado agregarProducto", () => {
            expect(typeof carritoCompra.agregarProducto).toBe('function')
        })
        it("Debería tener un método llamado calcularTotal", ()=>{
            expect(typeof carritoCompra.calcularTotal).toBe('function')
        }) 
        it("Debería tener un método llamdo aplicarDescuento",()=>{
            expect(typeof carritoCompra.aplicarDescuento).toBe('function')
        })
        it("El método agregarProducto debería agregar un producto a la lista",() => {
            carritoCompra.agregarProducto(product1)
            expect(carritoCompra.products).toContain(product1)
        })
        it("El método calcularTotal debería poder calcular el total de la compra         sumando los precios de todos los productos del carrito",()=>{
            carritoCompra.agregarProducto(product1)
            carritoCompra.agregarProducto(product2)
            carritoCompra.agregarProducto(product3)

            const totalExpect = product1.price * product1.quantity + product2.price * product2.quantity + product3.price * product3.quantity
            
            const total = carritoCompra.calcularTotal()

            expect(total).toBe(totalExpect)
        })
        it("El método aplicarDescuento debería poder aplicar un descuento al total de la compra",()=>{
            carritoCompra.agregarProducto(product1)
            carritoCompra.agregarProducto(product2)
            carritoCompra.agregarProducto(product3)

            const subtotal = product1.price * product1.quantity + product2.price * product2.quantity + product3.price * product3.quantity
            
            const porcentajeDescuento = 0.12

            const totalExpect = subtotal * (1 - porcentajeDescuento)

            const total = carritoCompra.aplicarDescuento(porcentajeDescuento)

            expect(totalExpect).toEqual(total)
        })
    })
  })