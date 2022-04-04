//varible
// get note-Liste for display
let noteList = document.querySelector("#note-list");
//get button remove-All
let removeAllBtn=document.querySelector("#remove-all");

if (true) {
  removeAllBtn.style.display="none"
}


//eventlistener
eventListener();
function eventListener() {
  //get butten for form
  document.querySelector("#form").addEventListener("submit", saveBtn);
  //adding Event to the noteList for removeNote
  noteList.addEventListener("click", removeNote);
  //event butten remove-All
  removeAllBtn.addEventListener("click",removeAll);
//get data from localStorage with event "DOMCountentLoaded"
document.addEventListener("DOMContentLoaded",onLodedDataFromLocalSg);

}

//function for save data
function saveBtn(e) {
  //disible butten
  e.preventDefault();
  //get data for textArea
  let note = document.querySelector("#note").value;

  //creat tage <li>
  let li = document.createElement("li");
  //adding note to tage <li>
  li.innerHTML = note;
  //adding tage <li> to the noteList
  noteList.appendChild(li);
  //creat tage <a>
  let removeBtn = document.createElement("a");
  //adding x to the removeBtn
  removeBtn.innerHTML = "X";
  //adding calss to removeBtn
  removeBtn.classList = "remove-note";
  //adding removeBtn to the tage <li>
  li.appendChild(removeBtn);

// creat element tag <div>
  let line=document.createElement("div");
  line.id=line;
  line.style.borderBottom="2px solid rgb(140, 0, 255)"
  li.appendChild(line);


  removeAllBtn.style.display="inline"
  removeAllBtn.style.color="gray";
  removeAllBtn.style.background="blue"

  setLocalStorage(note)

  alert(` ${note} به یادداشت شما اضافه شد`);
  this.reset()
 

}

//function remove for singele note
function removeNote(e) {
  if (e.target.classList.contains("remove-note")) {
    e.target.parentElement.remove();
  }
 
 

  removeDataFromSetLS(e.target.parentElement.textContent);
}

//function remove for all note
function removeAll() {
  noteList.innerHTML="";
  removeAllBtn.style.display="none"

  removeAllDataFromSetLS()
}
//function for set data 
function setLocalStorage(note) {
  let getLS=getLocalStorage();
  getLS.push(note);
localStorage.setItem("noteData",JSON.stringify(getLS))
}
//function for get data
function getLocalStorage() {
  let note;
  let notes=localStorage.getItem("noteData");
  if(notes==null||notes==[]){
    note=[];
  
  }else{
    note=JSON.parse(notes);
  }
  return note;
}
//get data for display
function onLodedDataFromLocalSg() {
  let getLS=getLocalStorage();
  getLS.forEach(note => {
    let li = document.createElement("li");
  //adding note to tage <li>
  li.innerHTML = note;
  //adding tage <li> to the noteList
  noteList.appendChild(li);
  //creat tage <a>
  let removeBtn = document.createElement("a");
  //adding x to the removeBtn
  removeBtn.innerHTML = "X";
  //adding calss to removeBtn
  removeBtn.classList = "remove-note";
  //adding removeBtn to the tage <li>
  li.appendChild(removeBtn);

  removeAllBtn.style.display="inline"
  removeAllBtn.style.color="gray";
  removeAllBtn.style.background="blue"
  });
};

function removeDataFromSetLS(note) {
  let noteDelete=note.slice(0,length-1);
  let getLS=getLocalStorage();
 getLS.forEach((get,index) => {
    if(get===noteDelete){
     getLS.splice(index,1)
    }
  });
  localStorage.setItem("noteData",JSON.stringify(getLS))
}


function  removeAllDataFromSetLS(){
  let getLS=getLocalStorage();
  localStorage.clear(getLS)
 
}

