

const inputElement = document.getElementById("title")
const btnElement = document.getElementById("create")
const resultElement = document.getElementById("list")

const notes = ['помыть попу &#129505' , "пукнуть под одеяло &#128173", 45, 23 ,234 ]

function render () {
	// for (let i = 0; i < notes.length; i++){
	// 	resultElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i]))
	// }

	for (let note of notes) {
		resultElement.insertAdjacentHTML("beforeend", getNoteTemplate(note))
	}
}

render()

btnElement.onclick = function () {
	if (inputElement.value.length === 0) {
		return 
	}
	resultElement.insertAdjacentHTML("beforeend", getNoteTemplate(inputElement.value))
	inputElement.value = ''

	// resultElement.innerHTML = `
	// <li
	// class="list-group-item d-flex justify-content-between align-items-center"
    //     >
    //       <span>${inputElement.value}</span>
    //       <span>
    //         <span class="btn btn-small btn-success">&check;</span>
    //         <span class="btn btn-small btn-danger">&times;</span>
    //       </span>
    //     </li>
	//  `
}

function getNoteTemplate(title) {
	return `
	<li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${title}</span>
          <span>
            <span class="btn btn-small btn-success">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
          </span>
        </li>

	`
}


