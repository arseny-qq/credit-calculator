import updateModel from './../utils/updateModel.js'


const init = (getData) => {
    const { base, it, gov, zero } = getData().programs

    const $baseText = document.querySelector(`#base-text`)
    const $itText = document.querySelector(`#it-text`)
    const $govText = document.querySelector(`#gov-text`)
    const $zeroText = document.querySelector(`#zero-text`)

    $baseText.textContent = `${base * 100}%`
    $itText.textContent = `${it * 100}%`
    $govText.textContent = `${gov * 100}%`
    $zeroText.textContent = `${zero * 100}%`

    const $baseInput = document.querySelector(`#base-value`)
    const $itInput = document.querySelector(`#it-value`)
    const $govInput = document.querySelector(`#gov-value`)
    const $zeroInput = document.querySelector(`#zero-value`)

    $baseInput.value = base
    $itInput.value = it
    $govInput.value = gov
    $zeroInput.value = zero

    ;[$baseInput, $itInput, $govInput, $zeroInput].forEach(($input) => {
        $input.addEventListener(`change`, ({ target }) => {
            updateModel(target, {
                selectedProgram: parseFloat(target.value),
                onUpdate: `radioProgram`,
                id: target.id
            })
        })
    })
}


export default init
