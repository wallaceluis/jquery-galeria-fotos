$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
        
    })

    $('#cancelar-form').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const urlImagemNova = $('#endereco-imagem-nova').val();
        const novoitem = $('<li style="display:none"></li>');
        $(`<img src="${urlImagemNova}">).appendTo(novoitem);`).appendTo(novoitem);
        $(`
        <div class="overlay-imagem-link">
            <a href="${urlImagemNova}" target="_blank">Ver imagem completa</a>
        </div>`
    ).appendTo(novoitem);
    $(novoitem).appendTo('ul');
    $(novoitem).fadeIn(1000)
    $('#endereco-imagem-nova').val('');
    })
})