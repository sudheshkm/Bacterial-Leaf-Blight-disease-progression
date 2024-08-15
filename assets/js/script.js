const form = document.getElementById('requestForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Replace 'your_email' with your actual email address
    const recipientEmail = 'your_email@example.com';

    // Create email body
    const emailBody = `
        Name: ${data.name}
        Project Name: ${data.projectName}
        University Name: ${data.universityName}
        Area of Research: ${data.area}
        Mobile Number: ${data.mobileNumber}
        Email: ${data.email}
    `;

    // Send email using your preferred email sending library or service
    // Replace with your email sending logic
    sendEmail(recipientEmail, 'Dataset Access Request', emailBody);

    // Display a success message or redirect to a confirmation page
    alert('Request submitted successfully!');
});

function sendEmail(recipient, subject, body) {
    // Your email sending logic here
    console.log('Sending email to:', recipient);
    console.log('Subject:', subject);
    console.log('Body:', body);
}
