const updateResultsView = ({ rate }) => {
    const $node = document.querySelector(`#total-percent`)
    $node.textContent = `${rate * 100}%`
}


export default updateResultsView
