function expenseRecord(name, amount) {
	return `<tr>
                <td>${name}</td>
                <td>${amount}</td>
            </tr>`;
}

const name_input = $("#name-input");
const amount_input = $("#amount-input");
const expenses_container = $("tbody")
const add_button = $("#add-expense");

function addExpenseRecord() {
    const name = name_input.val()
    const amount = amount_input.val()

    const expense_record = $(expenseRecord(name,amount))

    expenses_container.append(expense_record)
    // console.log(expense_record)
    name_input.val("")
    amount_input.val("")
}

$(document).ready(function () {
	add_button.click(addExpenseRecord);
});
