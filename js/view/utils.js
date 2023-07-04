const updateMinPercents = (data) => {
    const $minPercents = document.querySelector(`#percents-from`)
    $minPercents.innerText = `${data.minPaymentPercents * 100}%`
}


export { updateMinPercents }
