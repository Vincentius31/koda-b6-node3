import { convertTanggal } from "./lib/convert.js";

process.stdout.write("Masukkan tanggal: ");

process.stdin.on("data", function (data) {
    let input = data.toString().trim();
    let hasil = convertTanggal(input);

    console.log(hasil);
    process.exit();
});