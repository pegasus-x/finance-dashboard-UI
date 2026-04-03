export const getInsights = (transactions) => {
    let income = 0;
    let expense = 0;
    const categoryMap = {};

    transactions.forEach((tx) => {
        if (tx.type === "income") {
            income += tx.amount;
        } else {
            expense += tx.amount;
            categoryMap[tx.category] =
                (categoryMap[tx.category] || 0) + tx.amount;
        }
    });

    // highest spending category
    let topCategory = "N/A";
    let max = 0;

    for (let key in categoryMap) {
        if (categoryMap[key] > max) {
            max = categoryMap[key];
            topCategory = key;
        }
    }

    // insight message
    let insight = "";
    if (expense > income) {
        insight = "You are spending more than you earn.";
    } else {
        insight = "Good job! Your income exceeds expenses.";
    }

    return {
        income,
        expense,
        topCategory,
        insight,
    };
};