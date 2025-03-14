# Konfigurasi Git (jika belum)
git config --global user.name "NamaAnda"
git config --global user.email "EmailAnda"

# Inisialisasi repository (jika belum)
git init

# Tambahkan remote repository
git remote add origin https://github.com/username/repository.git

# Tambahkan semua file dan folder
git add .

# Commit perubahan
git commit -m "Pesan commit"

# Push ke branch utama (misalnya main atau master)
git branch -M main
git push -u origin main