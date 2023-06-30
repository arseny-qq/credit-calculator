import * as Model from "./model.js"

import initPrograms from "./view/radioPrograms.js"
import updateResultsView from "./view/updateResultsView.js"

import costInput from "./view/costInput.js"
import costRange from "./view/costRange.js"


window.addEventListener(`DOMContentLoaded`, () => {
    initPrograms(Model.getData)
    costInput(Model.getData)
    costRange(Model.getData)

    updateResultsView(Model.getResults())

    document.addEventListener(`updateForm`, (evt) => {
        Model.setData(evt.detail)

        const results = Model.getResults()
        updateResultsView(results)
    })
})
