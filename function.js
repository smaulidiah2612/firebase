const userId=document.getElementById('userId');
const firstName=document.getElementById('firstName');
const lastName=document.getElementById('lastName');
const age=document.getElementById('age');
const addBtn=document.getElementById('addBtn');
const updateBtn=document.getElementById('updateBtn');
const removeBtn=document.getElementById('removeBtn');
const showBtn=document.getElementById('showBtn');
const database=firebase.database();
const db=firebase.firestore();
const usersRef=database.ref('/users');
addBtn.addEventListener('click',e=>{
e.preventDefault();
usersRef.child(userId.value).set({
    first_name:firstName.value,
    last_name:lastName.value,
    age:age.value
});

});

updateBtn.addEventListener('click',e=>{
    e.preventDefault();
    const newData={
        first_name:firstName.value,
        last_name:lastName.value,
        age:age.value
    };
    usersRef.child(userId.value).update(newData) ;

})

removeBtn.addEventListener('click', e=>{
    e.preventDefault();
    usersRef.child(userId.value).remove()
    .then(()=>{
        console.log('user deleted');
    })
    .catch(error=>{
        console.error(error);
    });
    }) ;


