if (localStorage.getItem("login") !== "true") {
    window.location.href = "index.html";
}

let data = JSON.parse(localStorage.getItem("pemeriksaan")) || [];

function tampilData() {
    const tabel = document.getElementById("tabelData");
    tabel.innerHTML = "";

    data.forEach((item, index) => {
        tabel.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.instansi}</td>
                <td>${item.jenis}</td>
                <td>${item.status}</td>
                <td><button onclick="hapus(${index})">Hapus</button></td>
            </tr>
        `;
    });
}

function tambahData() {
    const instansi = document.getElementById("instansi").value;
    const jenis = document.getElementById("jenis").value;
    const status = document.getElementById("status").value;

    data.push({ instansi, jenis, status });
    localStorage.setItem("pemeriksaan", JSON.stringify(data));
    tampilData();
}

function hapus(index) {
    data.splice(index, 1);
    localStorage.setItem("pemeriksaan", JSON.stringify(data));
    tampilData();
}

function logout() {
    localStorage.removeItem("login");
    window.location.href = "index.html";
}

tampilData();
