ocument.getElementById('emailForm').addEventListener('submit,function') {
    Event.preventDefault();
        
         let emailinput=document.getElementById('email').value;
         fetch()
         method: 'POST',
         headers: {
            'Content-Type':'application/json'
         }
         body:JSON.stringify([email:emailinput])
         .then(response=>{
            if(response.ok){
                alert('Thank you for submitting');
            }else{
                alert('Error:failed');
            }
         })
         .catch(error=>{
            console.log.error('Error:error');
            alert('Error:failed');
         });
        }
         
