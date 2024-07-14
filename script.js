//TIME
function updateTime() {
    const element = document.getElementById("Time");
    const now = new Date();

    const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Singapore',
        timeZoneName: 'short'
    };

    const formatter = new Intl.DateTimeFormat('en-US', options);
    const formattedTime = formatter.format(now);
    const formattedTimeWithUTC = formattedTime.replace('SGT', 'SGT UTC+8');
    
    element.textContent = formattedTimeWithUTC;
}

updateTime();
setInterval(updateTime, 60000); 