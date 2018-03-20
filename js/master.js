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

    //grabs user name and initial deposit and makes a new object with the inputs
    var inputtedName = $("#new-name").val();
    var initialDeposit = parseInt($("#initial-deposit").val());
    var userAccount = new Account(inputtedName, initialDeposit);
    $("#new-client").hide();
    $("#transactions").show();

    $("form#account-update").submit(function() {
      event.preventDefault();

      //grabs user deposit and withdrawal and adds a new object property "newDeposit" and "newWithdrawal"
      var deposit = parseInt($("#new-deposit").val());
      var withdrawal = parseInt($("#new-withdrawal").val());
      userAccount.newDeposit = deposit;
      userAccount.newWithdrawal = withdrawal;

      //runs the Adjust prototype on the userAccount to return a modified balance
      userAccount.Adjust();

      //adjusts user balance on the page
      $("#account-balance").text(userAccount.balance);

      resetFields();
    });

    $("#account-name").text(userAccount.name);
    $("#account-balance").text(userAccount.balance);
  });
});
