let data = {
    selectedProgram: 0.1,
    cost: 12000000,
    minPrice: 375000,
    maxPrice: 100000000,
    minPaymentPercents: 0.15,
    maxPaymentPercents: 0.9,
    programs: {
       base: 0.1,
       it: 0.047,
       gov: 0.067,
       zero: 0.12
   }
}

let results = {
    rate: data.selectedProgram
}

const getData = () => {
    return {...data}
}

const setData = (newData) => {
    if (newData.onUpdate === `radioProgram`) {
        newData.id === `zero-value`
            ? (data.minPaymentPercents = 0)
            : (data.minPaymentPercents = 0.15)
    }

    if (newData.onUpdate === `inputCost`) {
        if (newData.cost < data.minPrice) {
            newData.cost = data.minPrice
        }
        else if (newData.cost > data.maxPrice) {
            newData.cost = data.maxPrice
        }
    }

    data = {...data, ...newData}

    results = {
        rate: data.selectedProgram
    }
}

const getResults = () => {
    return {...results}
}


export {getData, setData, getResults}
