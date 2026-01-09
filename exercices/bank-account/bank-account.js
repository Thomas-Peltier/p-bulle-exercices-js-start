//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
 
export class BankAccount {
 
  NBargent
  ouvert
 
  constructor() {
    this.NBargent = 0
    this.ouvert = false
  }
 
  open() {
    if (this.ouvert) {
      throw new ValueError()
    }
    this.NBargent = 0
    this.ouvert = true
  }
 
  close() {
    if (!this.ouvert) {
      throw new ValueError()
    }
    this.ouvert = false
  }
 
  deposit(NBdepot) {
    if (!this.ouvert || NBdepot < 0) {
      throw new ValueError()
    }
    this.NBargent += NBdepot
  }
 
  withdraw(NBretrait) {
    if (!this.ouvert || NBretrait < 0 || NBretrait > this.NBargent) {
      throw new ValueError()
    }
    this.NBargent -= NBretrait
  }
 
  get balance() {
    if (!this.ouvert) {
      throw new ValueError()
    }
    return this.NBargent
  }
}
 
export class ValueError extends Error {
  constructor() {
    super('Bank account error')
  }
}
 