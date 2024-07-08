const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");


addBtn.addEventListener("click", addNote);

function addNote() {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = ' <div class="tool"> <i class=" trash fa-solid fa-trash"></i> <i class=" save fa-solid fa-floppy-disk"></i> </div> <textarea></textarea> ';

    const save = note.querySelector(".save");
    const trash = note.querySelector(".trash");
    const textarea = note.querySelector("textarea");

    save.addEventListener("click",saveNotes);
    textarea.addEventListener("input", saveNotes);
    trash.addEventListener("click", ()=>{
        
        note.remove();
        saveNotes();
    });

    main.appendChild(note);
}

function saveNotes() {
    const notes = document.querySelectorAll(".note textarea");
    const data = Array.from(notes).map(note => note.value);
    console.log(notes,data);

    if(data.length ===0) {
        localStorage.removeItem("notes");
    } else {
        localStorage.setItem("notes",JSON.stringify(data));
    }
}