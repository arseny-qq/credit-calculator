import nouislider from "../../libs/noUiSlider/nouislider";
import wNumb from "../../libs/wNumb/wNumb";

import updateModel from "./../utils/updateModel.js";

const init = (getData) => {
    const $slider = document.querySelector(`#slider-cost`)
    const { cost, minPrice, maxPrice } = getData()

    nouislider.create($slider, {
        start: cost,
        connect: `lower`,
        tooltips: true,
        step: 100000,
        range: {
            min: minPrice,
            '1%': [400000, 100000],
            '50%': [10000000, 500000],
            max: maxPrice
        },
        format: wNumb({
            decimals: 0,
            thousand: ` `,
            suffix: ``
        })
    })

    $slider.noUiSlider.on(`slide`, () => {
        let sliderValue = $slider.noUiSlider
            .get()
            .split(`.`)[0]
            .replaceAll(` `, ``)
        sliderValue = parseInt(sliderValue)

        updateModel($slider, {
            cost: sliderValue,
            onUpdate: `costSlider`
        })
    })
}


export default init
