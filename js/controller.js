import * as Model from "./model.js"

import initPrograms from "./view/radioPrograms.js"
import updateResultsView from "./view/updateResultsView.js"
import { updateMinPercents}  from "./view/utils.js"

import costInput from "./view/costInput.js"
import costRange from "./view/costRange.js"


window.addEventListener(`DOMContentLoaded`, () => {
    initPrograms(Model.getData)

    const cleaveCost = costInput(Model.getData)
    const $sliderCost = costRange(Model.getData)

    updateResultsView(Model.getResults())

    document.addEventListener(`updateForm`, (evt) => {
        Model.setData(evt.detail)

        const data = Model.getData()
        const results = Model.getResults()

        updateMinPercents(data)
        updateFormAndSliders(data)
        updateResultsView(results)
    })

    const updateFormAndSliders = ({ onUpdate, cost }) => {
        if (onUpdate !== `inputCost`) {
            cleaveCost.setRawValue(cost)
        }

        if (onUpdate !== `costSlider`) {
            $sliderCost.noUiSlider.set(cost)
        }
    }
})
