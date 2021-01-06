// const tid = evt.target.getAttribute('type-id');

// enable offline data
db.enablePersistence().catch(function (err) {
  if (err.code == "failed-precondition") {
    // probably multible tabs open at once
    console.log("persistance failed");
  } else if (err.code == "unimplemented") {
    // lack of browser support for the feature
    console.log("persistance not available");
  }
});

//
// const db = firebase.firestore();

// real-time listener
db.collection("classes")
  .orderBy("date")
  .onSnapshot((snapshot) => {
    let changes = snapshot.docChanges();
    changes.forEach((change) => {
      if (change.type === "added") {
        renderdates(change.doc.data().date);
        renderclassoauth(change.doc.data(), change.doc.id);
        // console.log(dateset);
      }
      if (change.type === "removed") {
        removeclasso(change.doc.id);
      }
    });
  });
const getname = (value) => {
  if (value == 1) return ["CC", "Complier Constuction"];

  if (value == 2) return ["DS", "Dristibuted Systems"]; // url = "https://meet.google.com/nvx-fdbu-iuf";
  if (value == 3) return ["IS", "Information Security"]; // url = "https://meet.google.com/gma-sysw-ydj";
  if (value == 4) return ["DM", "Data Mining"]; //url = "https://meet.google.com/lookup/fgx2i426tj";
  if (value == 5) return ["FIOT", "Internet Of Things"]; // url = "https://meet.google.com/lookup/cplbuqw4sk";
  if (value == 6) return ["ESHP", "Entrepreneurship"]; // url = "https://meet.google.com/lookup/fscipzf234";
  if (value == 7) return ["RSE", "Road Safety & Enginnering"]; //url = "https://meet.google.com/jhq-hofm-sqs";
  if (value == 8) return ["CC-Lab", "Compiler Construction Lab"];
  if (value == 9) return ["DM-Lab", "Data Mining Lab"];
  if (value == 10) return ["DS-Lab", "Dristibuted Systems Lab"];
};
// add new classo
const form = document.querySelector("#f1");
// console.log(form.title)
form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  var nn = getname(form.cname.value);
  const classo = {
    name: nn,
    cid: form.cname.value,
    date: form.dateio.value,
    time: [form.timeio1.value, form.timeio2.value],
  };

  db.collection("classes")
    .add(classo)
    .catch((err) => console.log(err));

  // form.title.value = "";
  form.details.value = "";
  form.dateio.value = "";
  form.timeio1.value = "";
  form.timeio2.value = "";
});

// remove  or edit a classo
const classoContainer = document.querySelector(".classes");
classoContainer.addEventListener("click", (evt) => {
  // console.log(evt.target);
  if (evt.target.tagName === "I") {
    const tid = evt.target.getAttribute("type-id");
    const id = evt.target.getAttribute("data-id");
    if (tid === "delete") db.collection("classes").doc(id).delete();
  }
});

// date-select

const dateioContainer = document.querySelector(".dropdown-content");
dateioContainer.addEventListener("click", (evt) => {
  if (evt.target.tagName === "LI") {
    const id = evt.target.getAttribute("date-id");
    // console.log(id);
    // console.log(document.getElementById("id").classList);
    classes.innerHTML = ``;
    document.getElementById("loading").classList.remove("hide");
    document.getElementById("addform").classList.add("hide");
    db.collection("classes")
      .where("date", "==", id)
      .orderBy("time[0]")
      .get()
      .then((snapshot) => {
        // console.log(snapshot.docs);
        snapshot.docs.forEach((doc) => {
          renderclasso(doc.data(), id);
        });
      });
  }
});
