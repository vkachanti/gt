function openJobModal(title, description, imageSrc) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('jobModal').style.display = 'flex';
  }
  
  function closeJobModal() {
    document.getElementById('jobModal').style.display = 'none';
  }
  