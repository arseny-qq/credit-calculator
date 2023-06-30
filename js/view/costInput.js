const init = (getData) => {
    const $input = document.querySelector(`#input-cost`)
    const { cost, minPrice, maxPrice } = getData()

    const settings = {
        numeral: true,
        numeralThousandsGroupStyle: `thousand`,
        delimiter: ` `
    }

    const cleaveInput = new Cleave($input, settings)
    cleaveInput.setRawValue(cost)

    $input.addEventListener(`input`, () => {
        const $wrapper = $input.closest(`.param__details`)
        const value = +cleaveInput.getRawValue()

        if (value < minPrice || value > maxPrice) {
            $wrapper.classList.add(`param__details--error`)
        }
        else {
            $wrapper.classList.remove(`param__details--error`)
        }
    })

    $input.addEventListener(`change`, () => {
        const $wrapper = $input.closest(`.param__details`)
        const value = +cleaveInput.getRawValue()

        if (value < minPrice) {
            cleaveInput.setRawValue(minPrice)
        }
        else if (value > maxPrice) {
            cleaveInput.setRawValue(maxPrice)
        }

        $wrapper.classList.remove(`param__details--error`)
    })
}


export default init
