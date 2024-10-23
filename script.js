$(document).ready(function() {
    
    $('#task-form').submit(function(event) {
        event.preventDefault(); 
        
     
        const taskName = $('#task-name').val().trim();
        
        if (taskName !== '') {
            
            $('#task-list').append(`<li>${taskName}</li>`);
            
            
            $('#task-name').val('');
        }
    });
    
    
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
