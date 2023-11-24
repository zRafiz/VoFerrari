document.getElementById('whatsapp_button').addEventListener('click', function () {
    var phoneNumber = '+55 (11)99974-8641'; // Replace with the desired phone number, including the country code
    var message = 'Olá, estou entrando em contato através do site.'; // Replace with the desired message

    // Creates the WhatsApp link URL
    var whatsappLink = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);

    // Opens the WhatsApp link in a new window
    window.open(whatsappLink, '_blank');
});
