function generateVoucher() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    const email = document.getElementById('email').value;
    const numVouchers = document.getElementById('numVouchers').value;

    if (!startDate || !endDate || !startTime || !endTime || !email || !numVouchers) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    let vouchers = [];
    for (let i = 0; i < numVouchers; i++) {
        vouchers.push(generateRandomNumber(10));
    }

    const voucherDetails = vouchers.map((voucher, index) => `
        Vale ${index + 1}: ${voucher}
        Fecha de Inicio: ${startDate}
        Fecha de Fin: ${endDate}
        Horario de Uso: De ${startTime} a ${endTime}
    `).join('\n\n');

    document.getElementById('voucherOutput').innerText = voucherDetails;

    simulateEmail(email, voucherDetails);
}

function generateRandomNumber(length) {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function simulateEmail(email, voucherDetails) {
    console.log(`Simulando envío de correo a ${email} con los siguientes detalles:`);
    console.log(voucherDetails);
    alert("Vales generados y registrados en la consola para revisión.");
}