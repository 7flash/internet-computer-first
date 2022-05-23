import Map "mo:base/HashMap";
import Text "mo:base/Text";
import Principal "mo:base/Principal";

actor {
  var balance: Int = 0;

  public func deposit(amount: Int): async Int {
    balance += amount;
    return balance;
  };

  public func withdraw(amount: Int): async Int {
    balance -= amount;
    return balance;
  };
}