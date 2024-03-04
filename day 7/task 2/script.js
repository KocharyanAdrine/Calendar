const fieldTypes = [
    { type: 'text', label: 'Text Input' },
    { type: 'email', label: 'Email Input' },
    { type: 'password', label: 'Password Input' },
    
  ];
 
  document.getElementById('addFieldBtn').addEventListener('click', addField);
  document.getElementById('exportBtn').addEventListener('click', exportForm);
  document.getElementById('importBtn').addEventListener('click', importForm);
 
  function addField() {
    
    const selectField = document.createElement('select');
    fieldTypes.forEach(field => {
      const option = document.createElement('option');
      option.value = field.type;
      option.textContent = field.label;
      selectField.appendChild(option);
    });
    
    const labelInput = document.createElement('input');
    labelInput.type = 'text';
    labelInput.placeholder = 'Enter Label';
    
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
      formFields.removeChild(fieldContainer);
    });
    
    const fieldContainer = document.createElement('div');
    fieldContainer.appendChild(selectField);
    fieldContainer.appendChild(labelInput);
    fieldContainer.appendChild(removeBtn);
    
    formFields.appendChild(fieldContainer);
  }
  
  function exportForm() {
    const fields = [];
    const fieldContainers = document.querySelectorAll('#formFields > div');
    fieldContainers.forEach(container => {
      const fieldType = container.querySelector('select').value;
      const label = container.querySelector('input[type="text"]').value;
      fields.push({ type: fieldType, label: label });
    });
    const formData = { fields: fields };
    const jsonData = JSON.stringify(formData);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'formConfig.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  
  function importForm() {
    const file = document.getElementById('importFile').files[0];
    if (!file) {
      alert('Please select a file to import.');
      return;
    }
    const reader = new FileReader();
    reader.onload = function(event) {
      const jsonData = event.target.result;
      try {
        const formData = JSON.parse(jsonData);
        formData.fields.forEach(field => {
          const { type, label } = field;
          const fieldContainer = document.createElement('div');
          const selectField = document.createElement('select');
          fieldTypes.forEach(fieldType => {
            const option = document.createElement('option');
            option.value = fieldType.type;
            option.textContent = fieldType.label;
            selectField.appendChild(option);
          });
          selectField.value = type;
          const labelInput = document.createElement('input');
          labelInput.type = 'text';
          labelInput.value = label;
          const removeBtn = document.createElement('button');
          removeBtn.textContent = 'Remove';
          removeBtn.addEventListener('click', () => {
            formFields.removeChild(fieldContainer);
          });
          fieldContainer.appendChild(selectField);
          fieldContainer.appendChild(labelInput);
          fieldContainer.appendChild(removeBtn);
          formFields.appendChild(fieldContainer);
        });
      } catch (error) {
        alert('Error importing form configuration. Please check the file format.');
      }
    };
    reader.readAsText(file);
  }
  
  

  
  
  
  
  
  
  
  
  
  