// const tid = evt.target.getAttribute('type-id');

// enable offline data
// db.enablePersistence()
//   .catch(function(err) {
//     if (err.code == 'failed-precondition') {
//       // probably multible tabs open at once
//       console.log('persistance failed');
//     } else if (err.code == 'unimplemented') {
//       // lack of browser support for the feature
//       console.log('persistance not available');
//     }
//   });

// real-time listener
db.collection('classes').orderBy('date').onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change => {
    if(change.type === 'added'){
      renderdates(change.doc.data().date)
      renderclasso(change.doc.data(), change.doc.id);
      // console.log(dateset);
    }
    if(change.type === 'removed'){
      removeclasso(change.doc.id);
    }
  });
});


// add new classo
const form = document.querySelector("#f1");
// console.log(form.title)
form.addEventListener('submit', evt => {
  evt.preventDefault();
  
  const classo = {
    name: form.title.value,
    details: form.details.value,
    date: form.dateio.value,
    time:form.timeio.value
  };

  db.collection('classes').add(classo)
    .catch(err => console.log(err));

  form.title.value = '';
  form.details.value = '';
  form.dateio.value='';
  form.timeio.value='';
});

// remove  or edit a classo
const classoContainer = document.querySelector('.classes');
classoContainer.addEventListener('click', evt => {
  // console.log(evt.target);
  if(evt.target.tagName === 'I'){
    const tid = evt.target.getAttribute('type-id');
    const id = evt.target.getAttribute('data-id');
    if (tid==="delete") db.collection('classes').doc(id).delete(); 
    else {
      console.log("edit initited");
      db.collection('classes').doc(id).get().then(function(docs) {
        renderEditset(docs.data());
      //   var data=docs.data();
      //   console.log(form.title.value);
      //   form.title = data.name;
      //   form.details= data.details;
      //   form.dateio=data.date;
      //   form.timeio=data.time;
      });
    }
    
  }
})

// date-select 

const dateioContainer = document.querySelector('.dropdown-content');
dateioContainer.addEventListener('click', evt => {
  if(evt.target.tagName === 'LI'){
    const id = evt.target.getAttribute('date-id');
    // console.log(id);
    // console.log(document.getElementById("id").classList);
    classes.innerHTML = ``;
    document.getElementById("loading").classList.remove('hide');
    document.getElementById("addform").classList.add('hide');
    db.collection('classes').where('date','==',id).orderBy('details').get().then(snapshot => {
      // console.log(snapshot.docs);
      snapshot.docs.forEach(doc => {
        renderclasso(doc.data(),id);
            });
    });
  }
})

// edited form 
const forme = document.querySelector("#f2");
// console.log(forme.titleioe.value);
forme.addEventListener('submit', evt => {
  evt.preventDefault();
  const classio={
    name: forme.titleioe.value,
    details: forme.detailsioe.value,
    date: forme.dateioioe.value,
    time:forme.timeioioe.value
  };
  db.collection('classes').doc(forme.idioe.value).get().then(function(docset){
      console.log(docset.data());
      if(forme.titleioe.value===docset.data().name) delete classio.name;
      if(forme.detailsioe.value===docset.data().details) delete classio.details;
      if(forme.dateioioe.value===docset.data().date) delete classio.date;
      if(forme.timeioioe.value===docset.data().time) delete classio.time;
      console.log(classio); 
  })

  
  // db.collection('classes').doc(forme.idioe.value).set(classio)
  // .catch(err => console.log(err));
    forme.idioe.value='';
    forme.titleioe.value='';
    forme.detailsioe.value='';
    forme.dateioioe.value='';
    forme.timeioioe.value='';
});
