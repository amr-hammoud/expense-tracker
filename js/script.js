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
const name_error = $("#name-error");
const amount_error = $("#amount-error");
const amount_invalid = $("#amount-invalid");
const total_amount_parent = $("#total-amount")
const total_amount_text = $("#total-amount-value")
let total_amount = 0

function addExpenseRecord() {
    const name = name_input.val()
    const amount = amount_input.val()

    if (validate(name,amount)){
        const expense_record = $(expenseRecord(name,amount))

        expenses_container.append(expense_record)
        total_amount += parseInt(amount)
        total_amount_text.text(total_amount)
        total_amount_parent.show()
        name_input.val("")
        amount_input.val("")
    }
}

function validate(name,amount){
    const nameregex = /^[A-Za-z\s]*$/;
    const amountregex = /^[0-9]+$/;
    let is_valid = false
    let name_valid = false
    let amount_valid = false
    

    if (name.trim() != ""){
        if(nameregex.test(name)){
            name_valid = true
        }
        else
            name_input.addClass("error")
    }
    else{
        name_input.addClass("error")
        name_error.show()
    }

    if(amount.trim() != ""){

        if(amountregex.test(amount))
                amount_valid = true
        else
            amount_invalid.show()
    }
    else{
        amount_input.addClass("error")
        amount_error.show()
    }

    if(name_valid && amount_valid){
        is_valid = true
    }
    return is_valid
}

function calculateTotal(){
    
}

$(document).ready(function () {
    name_error.hide()
    amount_error.hide()
    amount_invalid.hide()
    total_amount_parent.hide()
	add_button.click(addExpenseRecord);

    name_input.on("change", function() {
        name_error.hide()
        name_input.removeClass("error")
    })
    
    amount_input.on("change", function() {
        amount_error.hide()
        amount_invalid.hide()
        amount_input.removeClass("error")
    })
});
