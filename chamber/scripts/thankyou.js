// Get Form

const formData = new URLSearchParams(window.location.search);

document.querySelector('#thankYou').innerHTML = `
<p><strong>First Name:</strong> ${formData.get('fName')}</p>
<p><strong>Last Name:</strong> ${formData.get('lName')}</p>
<p><strong>Title:</strong> ${formData.get('orgTitle')}</p>
<p><strong>Email:</strong> ${formData.get('email')}</p>
<p><strong>Phone:</strong> ${formData.get('mobile')}</p>
<p><strong>Organization Name:</strong> ${formData.get('orgName')}</p>
<p><strong>Organization Description:</strong> ${formData.get('description')}</p>
<p><strong>Member Level:</strong> ${formData.get('level').toUpperCase()}</p>
<p><strong>Time Stamp:</strong> ${formData.get('timestamp')}</p>`;

