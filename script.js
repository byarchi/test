var money = prompt("Ваш бюджет на месяц");
var time = prompt("Введите дату  формате YYYY-MM-DD");
var appData = {
        budget: money,
        timeData: time,
        expenses: {
            expensesDescription: prompt('Ведите обязательную статью расходов в этом месяце'),
            expensesMoney: prompt('Во сколько это обойдется')
        },
        optionalExpenses: {

        },
        income: [

        ],
        savings: true,
};

alert("Ваш бюджет на один день " + appData.budget/30 + " рублей.");
