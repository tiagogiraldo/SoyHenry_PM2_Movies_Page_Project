class CarritoCompra{
    
    constructor(){
        this.products =[];
    };
    
    
    agregarProducto(producto){
        this.products.push(producto);
    };

    calcularTotal(){
        
        let total = 0;

        for (const item of this.products) total += item.price * item.quantity;
        
        return total
    };
    
    aplicarDescuento(porcentaje){
        
        const totalConDescuento = this.calcularTotal() * (1 - porcentaje)
        
        return totalConDescuento
    }  
}


module.exports = {
    CarritoCompra,
}









