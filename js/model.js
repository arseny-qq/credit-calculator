let data = {
    selectedProgram: 0.1,
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
    data = {...data, ...newData}

    results = {
        rate: data.selectedProgram
    }
}

const getResults = () => {
    return {...results}
}


export {getData, setData, getResults}
