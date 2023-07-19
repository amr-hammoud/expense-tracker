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

function addExpenseRecord() {
    const name = name_input.val()
    const amount = amount_input.val()

    if (validate(name,amount)){
        const expense_record = $(expenseRecord(name,amount))

        expenses_container.append(expense_record)
        name_input.val("")
        amount_input.val("")
    }
    else{
        console.log("INVALID")
    }
}

function validate(name,amount){
    const nameregex = /^[A-Za-z\s]*$/;
    const amountregex = /^[0-9]+$/;
    let is_valid = false
    
    // Name Validation
    if (name.trim() != ""){
        if(nameregex.test(name)){
            is_valid = true
        }else{
            name_input.addClass("error")
        }
    }
    else{
        name_input.addClass("error")
        name_error.show()
    }
    
    // Amount Validation
    if(amount.trim() != ""){
        if(amountregex.test(amount))
            is_valid = true
        
    }
    else{
        amount_input.addClass("error")
        amount_error.show()
    }
    

    return is_valid
}

$(document).ready(function () {
    name_error.hide()
    amount_error.hide()
    amount_invalid.hide()
	add_button.click(addExpenseRecord);
});
