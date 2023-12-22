let komikData = JSON.parse(localStorage.getItem("komikData")) || [];

function tambahData() {
  const namaKomik = document.getElementById("namaKomik").value;
  const chapter = document.getElementById("chapter").value;

  if (namaKomik && chapter) {
    komikData.push({ namaKomik, chapter });
    updateData();
    resetForm();
    simpanDataLocal();
  }
}

function updateData() {
  const dataContainer = document.getElementById("dataContainer");
  dataContainer.innerHTML = "<h2>Data:</h2>";
  komikData.forEach((data, index) => {
    dataContainer.innerHTML += `<p>${data.namaKomik} - Chapter ${data.chapter} <button onclick="hapusData(${index})">Hapus</button></p>`;
  });
}

function hapusData(index) {
  komikData.splice(index, 1);
  updateData();
  simpanDataLocal();
}

function resetForm() {
  document.getElementById("namaKomik").value = "";
  document.getElementById("chapter").value = "";
}

function simpanDataLocal() {
  localStorage.setItem("komikData", JSON.stringify(komikData));
}
