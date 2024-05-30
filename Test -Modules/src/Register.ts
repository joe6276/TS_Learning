

export class Customer {

    static customers:string[]=[]

    addCustomer(name:string){
        Customer.customers.push(name)
    }
}


const c= new Customer()
c.addCustomer('wes')