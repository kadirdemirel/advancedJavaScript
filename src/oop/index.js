//Değer ataması için prototip denen yapıyla yapıyoruz.
//Her şey fonksiyon, fonksiyona prototip oluşturuluyor.

export class Customer {
  constructor(id, customerNumber) {
    this.id = id;
    this.customerNumber=customerNumber
  }
}

let customer = new Customer(1, "12345");
//prototyping
customer.a = "Kadir Demirel";
console.log(customer.a);

Customer.bisey = "Bişey";
console.log(Customer.bisey);

console.log(customer.customerNumber)


class IndividualCustomer extends Customer
{
    constructor(firstName,id,customerNumber)
    {
        super(id,customerNumber)
        this.firstName=firstName
    }
}

class CorporateCustomer extends Customer
{
constructor(companyName,id,customerNumber)
{
    super(id,customerNumber)
    this.companyName=companyName
}
}