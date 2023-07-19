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
    if (name.trim() != "" || amount.trim() != ""){
        const nameregex = /^[A-Za-z\s]*$/;
        const amountregex = /^[0-9]+$/;
        
        if(nameregex.test(name)){
            if(amountregex.test(amount)){
                return true
            }
            else{
                return false
            }
        }else{
            return false
        }
    }
    else
        return false
}

$(document).ready(function () {
	add_button.click(addExpenseRecord);
});
