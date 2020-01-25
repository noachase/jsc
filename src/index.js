let money = 10000,
    income = 'freelance',
    addExpences = 'food,water,room',
    deposit = true,
    mission = 1000000,
    period = 10,
    budgetDay = money/30;

console.log(`typeof $money is`, typeof(money));
console.log(`typeof $income is`, typeof(income));
console.log(`typeof $deposit is`, typeof(deposit));

console.log(addExpences.length);

console.log(`Период равен ${period} месяцев`);
console.log(`цель заработать ${mission} бачей`);

console.log(addExpences.toLowerCase().split(','));
// console.log(expArr);
console.log(`Бюджет да 1 день: ${budgetDay}`);