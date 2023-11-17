const recomendFunctionDefinition =  {
    name: "getMenu",
    description: "Get Food Menu Recomendation With Limit Calorie And User Restriction Based On User Input",
    parameters: {
        type: "object",
        properties: {
            breakfast: {
                type: "string"
            },
            calorieBreakfast:{
                type: "number"
            },
            lunch: {
                type: "string"
            },
            calorieLunch:{
                type: "number"
            },
            dinner: {
                type: "string"
            },
            calorieDinner:{
                type: "number"
            },
            snack: {
                type: "string"
            },
            calorieSnack:{
                type: "number"
            },
            message: {
                type: "string"
            }
       },
       required: ["breakfast", "lunch", "dinner", "snack", "string", "calorieSnack", "calorieDinner", "calorieLunch", "calorieBreakfast"]
    },
}

module.exports = recomendFunctionDefinition