          
          //FOR THE HELP FORM ADD STEP BUTTON
          $(document).ready(function() {
            $('#addStepBtn').on('click', function() {
              // Create a new container element for the step
              const newStepContainer = $('<div class="inline-input inline-input-2 mt-2 step-group"></div>');
              
              // Create and append the step description input
              newStepContainer.append(`<input type="text" class="form-control form-input" placeholder="Step description">`);
              
              // Create and append the step cost input with maximum value
              const costInput = $('<input type="number" class="form-control form-input input-ml" placeholder="Step cost" max="1000">');
              newStepContainer.append(costInput);
          
              // Create and append the remove button
              const removeButton = $('<button type="button" class="btn btn-danger remove-step-btn">Undo</button>');
              newStepContainer.append(removeButton);
          
              // Append the new step container to the existing container
              $('#stepContainer').append(newStepContainer);
          
              // Add click event listener to the remove button
              removeButton.on('click', function() {
                $(this).closest('.step-group').remove();
              });
            });
          });
          
          //ss
        //For setting popup

        document.getElementById('pay-showFormBtn').addEventListener('click', function() {
            document.getElementById('pay-modalOverlay').style.display = 'flex';
        });

        document.getElementById('pay-closeFormBtn').addEventListener('click', function() {
            document.getElementById('pay-modalOverlay').style.display = 'none';
        });
       

        // Close the modal when clicking outside the form
        document.getElementById('pay-modalOverlay').addEventListener('click', function(event) {
            if (event.target === this) {
                document.getElementById('pay-modalOverlay').style.display = 'none';
            }
        });
        //For setting popup in helper page offer free visit 2nd button
        document.getElementById('pay-showFormBtn1').addEventListener('click', function() {
            document.getElementById('pay-modalOverlay').style.display = 'flex';
        });
 


         //FOR THE faQ

        function toggleFaqContent(element) {
            const content = element.nextElementSibling;
            const icon = element.querySelector('.faq-btn-icon i');
            
            if (content.classList.contains('active')) {
                content.classList.remove('active');
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            } else {
                document.querySelectorAll('.faq-content').forEach(el => {
                    el.classList.remove('active');
                    el.previousElementSibling.querySelector('.faq-btn-icon i').classList.remove('fa-minus');
                    el.previousElementSibling.querySelector('.faq-btn-icon i').classList.add('fa-plus');
                });
                content.classList.add('active');
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            }
        }
         

      

     //FOR THE RADIO BTN
    document.getElementById('materialIncluded').addEventListener('click', function () {
        document.getElementById('onlyLabor').required = false;
        this.required = true;
    });
    
    document.getElementById('onlyLabor').addEventListener('click', function () {
        document.getElementById('materialIncluded').required = false;
        this.required = true;
    });

    //sidebar nav
 