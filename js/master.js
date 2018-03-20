//Business Logic
function Account(name, balance) {
  this.name = name;
  this.balance = balance;
};

Account.prototype.Adjust = function () {
  return this.balance += (this.newDeposit - this.newWithdrawal);
};

function resetFields() {
  $("#new-deposit").val(0);
  $("#new-withdrawal").val(0);
};

//UI Logic
$(document).ready(function() {
  $("form#new-client").submit(function() {
    event.preventDefault();
    debugger;
    var inputtedName = $("#new-name").val();
    var initialDeposit = parseInt($("#initial-deposit").val());
    var userAccount = new Account(inputtedName, initialDeposit);

    $("form#account-update").submit(function() {
      event.preventDefault();
      debugger;
      var deposit = parseInt($("#new-deposit").val());
      var withdrawal = parseInt($("#new-withdrawal").val());
      userAccount.newDeposit = deposit;
      userAccount.newWithdrawal = withdrawal;
      console.log(deposit, withdrawal);
      console.log(userAccount);
      userAccount.Adjust();
      console.log(userAccount);
      $("#account-balance").text(userAccount.balance);

      resetFields();
    });

    $("#account-name").text(userAccount.name);
    $("#account-balance").text(userAccount.balance);
  });
});
