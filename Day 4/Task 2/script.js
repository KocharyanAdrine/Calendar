document.addEventListener('DOMContentLoaded',function(){
    let form = document.getElementById('myForm');
    let formFields = form.elements;
    function saveFunction(){
        let formData = {};
        for(let i=0; i<formFields.length; i++){
            if(formFields[i].type !=='submit'){
                formData[formFields[i].name] = formFields[i].value;
            }
        }
        localStorage.setItem('formData'JSON.stringify(formData));
    }
    function restoreFormData(){
        let saveData = localStorage.getItem('formData');
        if(saveData){
            let formData = JSON.parse(saveData);
            for(let i=0;i<formFields.length;i++){
                if(formFields[i].name in formData){
                    formFields[i].value=formData[formFields[i].name];
                }
            }
        }
    }
    function throttle(func,limit){
        let inThrottles;
        return function(){
            let args=arguments;
            let context=this;
            if(!inThrottle){
                func.apply(context,args);
                inThrottle=true;
                setTimeout(()=>inThrottle=false,limit);
            }
        }
    }
    form.addEventListener('input',throttle(saveFormData,1000));
    restoreFormData();
})