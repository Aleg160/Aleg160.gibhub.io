document.addEventListener('DOMContentLoaded', function() {
    // Configura la fecha de cuenta regresiva
    const endDate = new Date('2024-09-28T00:00:00').getTime();
    
    // Actualiza la cuenta regresiva cada segundo
    const countdownElement = document.getElementById('countdown');
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance < 0) {
            countdownElement.innerHTML = "¡El Campamento ha comenzado!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    setInterval(updateCountdown, 1000);

    // Acciones de los botones (a definir más tarde)
    document.getElementById('confirmButton').addEventListener('click', function() {
        window.location.href = 'https://wa.link/evtcxq';
        alert('Confirmar participación');
    });

    document.getElementById('scheduleButton').addEventListener('click', function() {
        const eventTitle = encodeURIComponent('CAMPAMENTO ADN');
        const eventDate = new Date('2024-09-28T00:00:00');
        const eventEndDate = new Date('2024-09-29T23:59:59');

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            window.open(`calshow:${eventDate.getTime() / 1000}`, '_blank');
        } else {
            const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${eventDate.toISOString().replace(/-|:|\.\d\d\d/g,"")}Z/${eventEndDate.toISOString().replace(/-|:|\.\d\d\d/g,"")}Z`;
            window.open(calendarUrl, '_blank');
        alert('Guardar la fecha');
    }
    });
});
