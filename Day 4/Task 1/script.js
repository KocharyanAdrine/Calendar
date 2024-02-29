let tabContent = {
    tab1:"Content for Tab 1",
    tab2:"Content for Tab 2",
    tab3:"Content for Tab 3",

}
function updateContent(tabId){
    let cotentContainer = document.getElementById('content-container');
    contentContainer.textContent = tabContent[tabId];
}
document.querrySelectorAll('.tab'). forEach(tab=>{
    tab.addEventListener('click', function(){
        document.querySelectorAll('.tab').forEach(tab =>{
            tab.classList.remove('active');
        });
        this.classList.add('active');
        updateContent(this.id);
    });
});
document.getElementById('tab1').click();