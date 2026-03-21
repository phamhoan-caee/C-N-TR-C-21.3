// --- 1. CẤU HÌNH WEB APP URL ---
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwxGySySYeE0wsg-41K5lTQUYgL_beTxmCGagDfwQO1AUxLs_l8K4iGMgz-jKE9sxc/exec";

// --- 2. BIẾN TRẠNG THÁI ---
let selectedQuestions = []; 
let studentAnswers = [];    
let currentQuestionIndex = 0; 
let timeLeft = 1200; // 20 phút
let timerInterval;
let isSubmitted = false; // Trạng thái khóa bài thi

// --- 3. HÀM BẮT ĐẦU THI ---
function startQuiz() {
    const name = document.getElementById('studentName').value.trim();
    const id = document.getElementById('studentID').value.trim();

    if (!name || !id) {
        alert("Vui lòng nhập đủ Họ tên và Khóa!");
        return;
    }

    if (typeof questionBank === 'undefined' || questionBank.length < 30) {
        alert("Lỗi: Không tìm thấy dữ liệu câu hỏi!");
        return;
    }

    // Reset trạng thái
    isSubmitted = false;
    selectedQuestions = [...questionBank].sort(() => 0.5 - Math.random()).slice(0, 30);
    studentAnswers = [];

    // Hiển thị giao diện
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('caee-header').style.display = 'flex';
    document.getElementById('quiz-screen').style.display = 'grid';

    document.getElementById('header-student-info').innerText = `Học viên: ${name}`;

    generateNavigationGrid();
    showQuestion(0);
    startTimer();
}

// --- 4. HÀM HIỂN THỊ CÂU HỎI ---
function showQuestion(index) {
    currentQuestionIndex = index;
    const q = selectedQuestions[index];
    const content = document.getElementById('quiz-content');
    const storedAnswer = studentAnswers.find(item => item.qIndex === index);

    let optionsHtml = "";
    q.options.forEach((opt) => {
        const isSelected = storedAnswer && storedAnswer.selectedAnswer === opt;
        optionsHtml += `
            <div class="option-item ${isSelected ? 'selected' : ''}" onclick="selectAnswer(this, ${index}, '${opt}')">
                <label class="option-label">${opt}</label>
            </div>`;
    });

    content.innerHTML = `
        <div class="question-header"> <span class="q-count">Câu ${index + 1}/30</span> </div>
        <div class="question-text">${q.question}</div>
        <div class="options-group">${optionsHtml}</div>
        <div class="navigation-btns">
            <button class="btn-nav btn-prev" onclick="prevQuestion()" ${index === 0 ? 'style="visibility:hidden;"' : ''}>‹ TRƯỚC</button>
            <button class="btn-nav btn-next" onclick="nextQuestion()">TIẾP ›</button>
        </div>
    `;
    updateGridStatus(index);
}

// --- 5. HÀM XỬ LÝ CHỌN ĐÁP ÁN (ĐÃ THÊM KHÓA) ---
function selectAnswer(element, qIndex, answer) {
    if (isSubmitted) {
        alert("Bài thi đã được nộp, bạn không thể thay đổi đáp án!");
        return;
    }

    const existingIndex = studentAnswers.findIndex(item => item.qIndex === qIndex);
    if (existingIndex !== -1) {
        studentAnswers[existingIndex].selectedAnswer = answer;
    } else {
        studentAnswers.push({ qIndex: qIndex, selectedAnswer: answer });
    }

    const options = element.parentElement.querySelectorAll('.option-item');
    options.forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');

    updateGridStatus(qIndex);
}

// --- 6. HÀM ĐIỀU HƯỚNG ---
function nextQuestion() {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
        showQuestion(currentQuestionIndex + 1);
    } else {
        alert("Bạn đã ở câu cuối cùng. Nhấn NỘP BÀI.");
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        showQuestion(currentQuestionIndex - 1);
    }
}

// --- 7. TẠO GRID (ĐA THÊM KHÓA CHUYỂN CÂU) ---
function generateNavigationGrid() {
    const grid = document.getElementById('nav-grid');
    grid.innerHTML = "";
    selectedQuestions.forEach((q, i) => {
        const item = document.createElement('div');
        item.classList.add('grid-item');
        item.id = `grid-item-${i}`;
        item.innerText = i + 1;
        item.onclick = () => {
            if (isSubmitted) return; // Khóa chuyển câu sau khi nộp
            showQuestion(i);
        };
        grid.appendChild(item);
    });
}

// --- 8. CẬP NHẬT MÀU GRID ---
function updateGridStatus(currentIndex) {
    for (let i = 0; i < 30; i++) {
        const item = document.getElementById(`grid-item-${i}`);
        if (!item) continue;
        item.classList.remove('active', 'answered');
        if (studentAnswers.some(ans => ans.qIndex === i)) item.classList.add('answered');
        if (i === currentIndex) item.classList.add('active');
    }
}

// --- 9. ĐỒNG HỒ ---
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        let min = Math.floor(timeLeft / 60);
        let sec = timeLeft % 60;
        document.getElementById('timer').innerText = `${min}:${sec < 10 ? '0' : ''}${sec}`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Hết giờ làm bài!");
            submitQuiz();
        }
    }, 1000);
}

// --- 10. NỘP BÀI (KHÓA VÀ QUAY VỀ MÀN HÌNH ĐẦU) ---
async function submitQuiz() {
    if (isSubmitted) return;
    if (!confirm("Bạn có chắc chắn muốn nộp bài?")) return;

    isSubmitted = true; 
    clearInterval(timerInterval);
    
    const submitBtn = document.querySelector('.btn-submit');
    if (submitBtn) submitBtn.style.display = 'none';

    let score = 0;
    studentAnswers.forEach(ans => {
        const originalQuestion = selectedQuestions[ans.qIndex];
        if (ans.selectedAnswer === originalQuestion.answer) score++;
    });

    const status = score >= 25 ? "ĐẠT" : "KHÔNG ĐẠT";
    alert(`Kết quả: ${score}/30 câu - Trạng thái: ${status}`);

    const payload = {
        name: document.getElementById('studentName').value,
        id: document.getElementById('studentID').value,
        score: score + "/30",
        status: status
    };

    fetch(WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(() => {
        alert("Dữ liệu đã lưu thành công! Hệ thống sẽ quay về màn hình chính.");
        location.reload(); 
    })
    .catch(error => {
        console.error('Lỗi:', error);
        location.reload(); 
    });
}
