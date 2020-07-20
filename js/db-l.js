// const tid = evt.target.getAttribute('type-id');

// enable offline data
db.enablePersistence()
  .catch(function(err) {
    if (err.code == 'failed-precondition') {
      // probably multible tabs open at once
      console.log('persistance failed');
    } else if (err.code == 'unimplemented') {
      // lack of browser support for the feature
      console.log('persistance not available');
    }
  });

// 
    // const db = firebase.firestore();

// real-time listener
db.collection('classes').orderBy('date').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
      if(change.type === 'added'){
        renderdates(change.doc.data().date)
        renderclassoauth(change.doc.data(), change.doc.id);
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
  
  