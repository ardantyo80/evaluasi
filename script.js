var attempts = 0;

function calculateScore() {
    var answers = {
        q1: 'a',
        q2: 'a', 
        q3: 'c', 
        q4: 'b', 
        q5: 'b', 
        q6: 'c', 
        q7: 'b', 
        q8: 'a', 
        q9: 'b', 
        q10: 'c',
        q11: 'b',
        q12: 'a', 
        q13: 'a', 
        q14: 'b', 
        q15: 'a', 
        q16: 'd', 
        q17: 'a', 
        q18: 'a', 
        q19: 'a',   
        q20: 'b'
        // tambahkan jawaban yang benar di sini
    };

    var score = 0;
        var form = document.getElementById('quizForm');
        
        // Loop untuk mengecek jawaban yang benar
        for (var key in answers) {
            var answer = form.querySelector('input[name="'+key+'"]:checked');
            if (answer && answer.value === answers[key]) {
                score += 5; // Setiap jawaban benar bernilai 5 poin
            }
        }

        
        var resultDiv = document.getElementById('result');
        resultDiv.style.display = 'block';

        if (score >= 60) {
            resultDiv.textContent = "Selamat! Anda lulus dengan nilai " + score + ".";
            resultDiv.className = 'result success';
            form.reset();  // Reset form jika pengguna lulus
            attempts = 0;  // Reset percobaan jika lulus
        } else {
            attempts++;  // Menambah jumlah percobaan jika gagal
            resultDiv.textContent = "Anda Gagal. Nilai Anda: " + score + ". Percobaan ke-" + attempts + ".";
            resultDiv.className = 'result fail';

            if (attempts >= 3) {
                alert("Anda sudah gagal 3 kali. Halaman akan ditutup.");
                window.close();  // Menutup halaman jika percobaan >= 3
            } else {
                alert("Nilai Anda kurang dari 60. Silakan coba lagi.");
            }

            form.reset();  // Reset form untuk percobaan berikutnya
        }
    
    }