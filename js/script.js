function show_emergency_info() {
  var emergency_fund = document.getElementById("emergency_fund");

  if (emergency_fund.checked == true) {
    document.getElementById("emergency_info_yes").style.display = 'block';
    document.getElementById("emergency_info_no").style.display = 'none';
  } else {
    document.getElementById("emergency_info_no").style.display = 'block';
    document.getElementById("emergency_info_yes").style.display = 'none';
  }
}

function show_monthly_expenses() {
  var monthly_expenses = document.getElementById("monthly_expenses")
  if (monthly_expenses.checked == true) {
    document.getElementById("monthly_expenses_info_yes").style.display = 'block';
    document.getElementById("monthly_expenses_info_no").style.display = 'none';
  } else {
    document.getElementById("monthly_expenses_info_no").style.display = 'block';
    document.getElementById("monthly_expenses_info_yes").style.display = 'none';
  }
}

function show_page2() {
  document.getElementById("page1").style.display = "none";
  document.getElementById("page2").style.display = "block";
}