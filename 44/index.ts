function Making_sandwich(...items){
    console.log(`Dear sir you order is being prepared with an item you list as: `)
    for(let i = 0; i < items.length ;i++){
        console.log(`${items[i]}`)
    }
}
Making_sandwich("cheese","olives","vegies");
Making_sandwich("cheese","mushrooms","vegies");
Making_sandwich("cheese","olives","coke","mushrooms","extra vegies");