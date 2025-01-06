 const dateInput = document.getElementById('dob');
  dateInput.addEventListener('change', (event) => {
    const date = new Date(event.target.value);
    const formattedDate = date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
    dateInput.setAttribute('data-value', formattedDate);
  });

  // Set placeholder-like text (default)
  const defaultDate = new Date(1991, 0, 22); // Jan 22, 1991
  const defaultFormattedDate = defaultDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  dateInput.valueAsDate = defaultDate;