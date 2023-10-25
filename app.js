

const inputElement = document.getElementById("title")
const btnElement = document.getElementById("create")
const resultElement = document.getElementById("list")

const notes = [{
	title: "Buy products &#127805",
	completed: true
},
{
	title: "Wash floor &#128273",
	completed: false
}]

function render() {
	resultElement.innerHTML = ''
	if (notes.length === 0) {
		resultElement.innerHTML = '<p>Нет элементов</p>'
	}
	for (let i = 0; i < notes.length; i++){
		resultElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i], i))
	}
	// for (let note of notes) {
	// 	resultElement.insertAdjacentHTML("beforeend", getNoteTemplate(note))
	// }
	// for (let note of notes) {
	// 	resultElement.insertAdjacentHTML("beforeend", getNoteTemplate(note))
	// }

}

render()

btnElement.onclick = function () {
	if (inputElement.value.length === 0) {
		return
	}
	const newNote = {
		title: inputElement.value,
		completed: false
	}
	notes.push(newNote)
	render()
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


resultElement.onclick = function (event) {
	if (event.target.dataset.index) {
		const index = event.target.dataset.index
		const type = event.target.dataset.type
		if (type === "toggle") {
			notes[index].completed = !notes[index].completed
		} else if (type === "remove") {
			notes.splice(index,1)
		}
	}
	render()
}

function getNoteTemplate(note, index) {
	return `
	<li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
        <span class="${note.completed ? 'text-decoration-line-through' : ''}" >${note.title}</span>
          <span>
            <span class="btn btn-small btn-${note.completed ? "warning" : "success"}" data-index ="${index}" data-type = "toggle">&check;</span>
            <span class="btn btn-small btn-danger" data-index ="${index}" data-type="remove">&times;</span>
          </span>
        </li>

	`
}


