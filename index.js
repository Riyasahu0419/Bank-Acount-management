function BankAccount(AccountNumber,name,type,balance)
{
    this.AccountNumber = AccountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
}
let p1 = new BankAccount(23456452,'masai','saving',10000);

function Deposite(c)
{
    console.log(this.balance+=c)
}
Deposite.call(p1,1000)


function Withdraw(q)
{
    console.log(this.balance-=q)
}
Withdraw.call(p1,2000)


function checkblace()
{
    console.log(this.balance)
}
checkblace.call(p1)


function isActive()
{
    if(this.balance>0)
    {
     return true;   
    }
    else{
        return false;
    }
}
isActive.call(p1)








