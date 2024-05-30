export class Customer {
    addCustomer(name) {
        Customer.customers.push(name);
    }
}
Customer.customers = [];
const c = new Customer();
c.addCustomer('wes');
