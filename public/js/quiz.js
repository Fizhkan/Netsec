// ===================== QUIZ ENGINE =====================
class QuizEngine {
  constructor(questions) {
    this.questions = [...questions].sort(() => Math.random() - 0.5).slice(0, 8);
    this.current = 0;
    this.score = 0;
    this.answered = false;
    this.completed = false;
  }

  getCurrentQuestion() { return this.questions[this.current]; }
  isLast() { return this.current >= this.questions.length - 1; }
  getProgress() { return ((this.current) / this.questions.length) * 100; }

  answer(idx) {
    if (this.answered) return null;
    this.answered = true;
    const correct = idx === this.questions[this.current].correct;
    if (correct) this.score++;
    return { correct, correctIdx: this.questions[this.current].correct };
  }

  next() {
    if (!this.isLast()) {
      this.current++;
      this.answered = false;
      return true;
    } else {
      this.completed = true;
      return false;
    }
  }

  getGrade() {
    const pct = (this.score / this.questions.length) * 100;
    if (pct >= 90) return { emoji: '🏆', label: 'Luar Biasa!', color: '#10b981' };
    if (pct >= 75) return { emoji: '🎉', label: 'Bagus sekali!', color: '#4f8ef7' };
    if (pct >= 60) return { emoji: '👍', label: 'Cukup baik', color: '#f59e0b' };
    return { emoji: '📚', label: 'Perlu belajar lagi', color: '#ef4444' };
  }
}

// ===================== QUIZ UI =====================
function renderQuiz() {
  const container = document.getElementById('quiz-main');
  if (!container) return;

  const quiz = new QuizEngine(window.QUIZ_QUESTIONS);
  window.currentQuiz = quiz;

  function render() {
    if (quiz.completed) {
      renderResult();
      return;
    }
    const q = quiz.getCurrentQuestion();
    const grade = null;
    const letters = ['A', 'B', 'C', 'D'];
    container.innerHTML = `
      <div class="quiz-container fade-in">
        <div class="quiz-progress-header">
          <span class="quiz-progress-text">Pertanyaan ${quiz.current + 1} dari ${quiz.questions.length}</span>
          <span class="quiz-score-badge">Skor: ${quiz.score}/${quiz.current}</span>
        </div>
        <div class="quiz-progress-track">
          <div class="quiz-progress-active" style="width:${quiz.getProgress()}%"></div>
        </div>
        <div class="quiz-question-card">
          <div class="quiz-q-num">Pertanyaan ${quiz.current + 1}</div>
          <div class="quiz-q-text">${q.q}</div>
        </div>
        <div class="quiz-options" id="quiz-opts">
          ${q.opts.map((opt, i) => `
            <div class="quiz-option" data-idx="${i}" id="opt-${i}">
              <span class="quiz-opt-letter">${letters[i]}</span>
              ${opt}
            </div>
          `).join('')}
        </div>
        <div class="quiz-feedback" id="quiz-feedback">
          💡 <strong>Penjelasan:</strong> ${q.explanation}
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center">
          <button class="btn btn-ghost" onclick="renderQuiz()">↺ Restart</button>
          <button class="btn btn-primary" id="quiz-next" style="display:none" onclick="nextQuestion()">
            ${quiz.isLast() ? '🏁 Lihat Hasil' : 'Lanjut →'}
          </button>
        </div>
      </div>
    `;

    document.querySelectorAll('.quiz-option').forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.dataset.idx);
        const result = quiz.answer(idx);
        if (!result) return;

        document.querySelectorAll('.quiz-option').forEach(opt => {
          opt.classList.add('disabled');
          const i = parseInt(opt.dataset.idx);
          if (i === result.correctIdx) opt.classList.add('correct');
          else if (i === idx && !result.correct) opt.classList.add('wrong');
        });

        document.getElementById('quiz-feedback').classList.add('show');
        const nextBtn = document.getElementById('quiz-next');
        if (nextBtn) nextBtn.style.display = 'inline-flex';
      });
    });
  }

  function renderResult() {
    const grade = quiz.getGrade();
    const pct = Math.round((quiz.score / quiz.questions.length) * 100);
    container.innerHTML = `
      <div class="quiz-container fade-in">
        <div class="quiz-result show">
          <div class="result-emoji">${grade.emoji}</div>
          <div class="result-score" style="color:${grade.color}">${quiz.score}/${quiz.questions.length}</div>
          <div class="result-label" style="margin-bottom:8px">${grade.label}</div>
          <div style="color:var(--text-muted);font-size:14px;margin-bottom:32px">${pct}% jawaban benar</div>
          <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
            <button class="btn btn-primary" onclick="renderQuiz()">🔁 Coba Lagi</button>
            <button class="btn btn-ghost" onclick="navigate('learn')">📚 Belajar Lagi</button>
          </div>
        </div>
      </div>
    `;
    // Update sidebar progress
    updateProgress(pct);
  }

  window.nextQuestion = function() {
    if (!quiz.next()) renderResult();
    else render();
  };

  render();
}

window.renderQuiz = renderQuiz;
