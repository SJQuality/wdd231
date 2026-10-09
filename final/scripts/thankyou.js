// Get Form

const formData = new URLSearchParams(window.location.search);

document.querySelector('#thankYou').innerHTML = `
<p><strong>First Name:</strong> ${formData.get('fName')}</p>
<p><strong>Last Name:</strong> ${formData.get('lName')}</p>
<p><strong>Email:</strong> ${formData.get('email')}</p>
<p><strong>Phone:</strong> ${formData.get('mobile')}</p>
<p><strong>Comments:</strong> ${formData.get('comments')}</p>
<p><strong>Time Stamp:</strong> ${formData.get('timestamp')}</p>`;

