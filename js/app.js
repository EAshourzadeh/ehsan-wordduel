/* ══════════════════════════════════════════════
   MULTI-LANGUAGE UI ENGINE
   Keeps the vocabulary deck in English while localizing the interface.
══════════════════════════════════════════════ */
const UI_LANG_KEY = 'ehsanUiLang';
const UI_LANG_META = {
  en:{label:'EN', dir:'ltr'},
  es:{label:'Español', dir:'ltr'},
  ru:{label:'Русский', dir:'ltr'},
  fa:{label:'فارسی', dir:'rtl'},
  tr:{label:'Türkçe', dir:'ltr'}
};
const UI_TEXT = {
  "es": {
    "Language": "Idioma",
    "🔒 Teacher Access": "🔒 Acceso docente",
    "Teacher Access": "Acceso docente",
    "Enter the teacher password to edit the word list": "Introduce la contraseña del profesor para editar la lista de palabras",
    "Enter the teacher password to view the leaderboard": "Introduce la contraseña del profesor para ver la clasificación",
    "Enter the password to continue": "Introduce la contraseña para continuar",
    "Incorrect password. Try again.": "Contraseña incorrecta. Inténtalo de nuevo.",
    "Password": "Contraseña",
    "Cancel": "Cancelar",
    "Enter": "Entrar",
    "🔑 Change Password": "🔑 Cambiar contraseña",
    "Change Password": "Cambiar contraseña",
    "Enter a new teacher password": "Introduce una nueva contraseña del profesor",
    "Current password": "Contraseña actual",
    "New password": "Nueva contraseña",
    "Confirm new password": "Confirmar nueva contraseña",
    "Save": "Guardar",
    "Current password is incorrect.": "La contraseña actual es incorrecta.",
    "New password must be at least 4 characters.": "La nueva contraseña debe tener al menos 4 caracteres.",
    "New passwords do not match.": "Las nuevas contraseñas no coinciden.",
    "✅ Password changed successfully!": "✅ ¡Contraseña cambiada correctamente!",
    "⚠️": "⚠️",
    "Delete All Words?": "¿Eliminar todas las palabras?",
    "This will permanently remove": "Esto eliminará permanentemente",
    "words from the list. This cannot be undone.": "palabras de la lista. Esta acción no se puede deshacer.",
    "Delete All": "Eliminar todo",
    "⬆️ Upload Word List": "⬆️ Subir lista de palabras",
    "Upload Word List": "Subir lista de palabras",
    "Upload a .txt file to replace the current word list.": "Sube un archivo .txt para reemplazar la lista de palabras actual.",
    "Format (one word per line):": "Formato (una palabra por línea):",
    "(fields separated by a TAB, semicolon after each)": "(campos separados por TAB y punto y coma después de cada uno)",
    "Choose .txt file…": "Elegir archivo .txt…",
    "Replace List": "Reemplazar lista",
    "Please choose a .txt file.": "Elige un archivo .txt.",
    "No valid words found. Check the file format.": "No se encontraron palabras válidas. Revisa el formato del archivo.",
    "Could not read that file. Please try again.": "No se pudo leer ese archivo. Inténtalo de nuevo.",
    "Background music: Off": "Música de fondo: desactivada",
    "Background music: On": "Música de fondo: activada",
    "Designed and developed for educational purposes by Ehsan A.": "Diseñado y desarrollado con fines educativos por Ehsan A.",
    "✏️ Edit Word List": "✏️ Editar lista de palabras",
    "Edit Word List": "Editar lista de palabras",
    "Word": "Palabra",
    "Synonym": "Sinónimo",
    "Antonym": "Antónimo",
    "Synonyms": "Sinónimos",
    "Antonyms": "Antónimos",
    "Definition (optional)": "Definición (opcional)",
    "+ Add Word": "+ Añadir palabra",
    "Save Changes": "Guardar cambios",
    "⬆️ Upload Word List (.txt)": "⬆️ Subir lista de palabras (.txt)",
    "🗑️ Delete All Words": "🗑️ Eliminar todas las palabras",
    "✅ Word list saved!": "✅ ¡Lista de palabras guardada!",
    "Optional definition…": "Definición opcional…",
    "Speak word": "Escuchar palabra",
    "Speak answer": "Escuchar respuesta",
    "← Back to Home": "← Volver al inicio",
    "← Home": "← Inicio",
    "Close": "Cerrar",
    "Got it!": "¡La sé!",
    "Easy": "Fácil",
    "Hard": "Difícil",
    "Again": "Otra vez",
    "Mastery": "Dominio",
    "Progress": "Progreso",
    "Score": "Puntuación",
    "Correct": "Correctas",
    "Incorrect": "Incorrectas",
    "Accuracy": "Precisión",
    "Play Again": "Jugar otra vez",
    "Study Again": "Estudiar otra vez",
    "Welcome!": "¡Bienvenido!",
    "Enter your name to personalise your experience,": "Introduce tu nombre para personalizar tu experiencia,",
    "or continue as a guest.": "o continúa como invitado.",
    "Enter your name…": "Escribe tu nombre…",
    "Let's Go →": "¡Vamos! →",
    "Continue as Guest": "Continuar como invitado",
    "Welcome back,": "Bienvenido de nuevo,",
    "📖 Choose Session Size": "📖 Elegir tamaño de sesión",
    "Choose Session Size": "Elegir tamaño de sesión",
    "How many cards do you want to study?": "¿Cuántas tarjetas quieres estudiar?",
    "⚡ Quick Review": "⚡ Repaso rápido",
    "Quick Review": "Repaso rápido",
    "~5 minutes": "~5 minutos",
    "10 cards": "10 tarjetas",
    "📘 Standard Session": "📘 Sesión estándar",
    "Standard Session": "Sesión estándar",
    "Standard": "Estándar",
    "~15 minutes": "~15 minutos",
    "25 cards": "25 tarjetas",
    "🏆 Full Deck": "🏆 Mazo completo",
    "Full Deck": "Mazo completo",
    "Full prep session": "Sesión completa de preparación",
    "All cards": "Todas las tarjetas",
    "⏱️ Timed Mode": "⏱️ Modo con tiempo",
    "Timed Mode": "Modo con tiempo",
    "(10s per card)": "(10 s por tarjeta)",
    "❓ How to Play": "❓ Cómo jugar",
    "How to Play": "Cómo jugar",
    "Flip the card": "Voltea la tarjeta",
    "— tap it (or press Space) to reveal the definition, synonym, and antonym on the back.": "— tócala (o pulsa Espacio) para ver la definición, el sinónimo y el antónimo al reverso.",
    "Judge yourself honestly": "Evalúate con honestidad",
    "— after flipping, pick": "— después de voltear, elige",
    ", or": "o",
    "based on how well you recalled the word.": "según qué tan bien recordaste la palabra.",
    "— only shows cards you marked": "— solo muestra las tarjetas que marcaste como",
    "or": "o",
    ". Use it to drill your weak spots.": ". Úsalo para practicar tus puntos débiles.",
    "Mastery bar": "Barra de dominio",
    "— fills up as you mark cards": "— se llena cuando marcas tarjetas como",
    ". Try to get it to 100%!": ". ¡Intenta llegar al 100%!",
    "Pronunciation": "Pronunciación",
    "— tap the 🔊 button on any card to hear the word spoken aloud.": "— toca el botón 🔊 en cualquier tarjeta para escuchar la palabra.",
    "Space / Enter": "Espacio / Enter",
    "— flip ·": "— voltear ·",
    "← →": "← →",
    "— navigate": "— navegar",
    "Again ·": "Otra vez ·",
    "Hard ·": "Difícil ·",
    "Easy (after flipping)": "Fácil (después de voltear)",
    "📱 Scan to Open": "📱 Escanear para abrir",
    "Scan to Open": "Escanear para abrir",
    "Point your phone's camera at this code to open EHSAN_FlipCards instantly.": "Apunta la cámara de tu teléfono a este código para abrir EHSAN_FlipCards al instante.",
    "📱 Open on Phone (QR)": "📱 Abrir en el teléfono (QR)",
    "SAT Vocab · Memory Cards": "Vocabulario SAT · Tarjetas de memoria",
    "Cards": "Tarjetas",
    "Mastered": "Dominadas",
    "Due": "Pendientes",
    "📖 Study Cards": "📖 Estudiar tarjetas",
    "Study Cards": "Estudiar tarjetas",
    "Choose 10, 25, or the full deck": "Elige 10, 25 o el mazo completo",
    "🎯 Focus Mode": "🎯 Modo enfoque",
    "Review only Hard & Again cards": "Repasa solo tarjetas Difícil y Otra vez",
    "🔄 Switch User": "🔄 Cambiar usuario",
    "This will clear your name and progress so another student can use this device. Continue?": "Esto borrará tu nombre y progreso para que otro estudiante use este dispositivo. ¿Continuar?",
    "Study All": "Estudiar todo",
    "Timed Mode — flip before time runs out": "Modo con tiempo — voltea antes de que se acabe el tiempo",
    "Card": "Tarjeta",
    "↕ Tap to flip": "↕ Toca para voltear",
    "Judgment": "Evaluación",
    "↩ Again": "↩ Otra vez",
    "Don't know it": "No la sé",
    "😓 Hard": "😓 Difícil",
    "Struggled a bit": "Me costó un poco",
    "✓ Easy": "✓ Fácil",
    "Nav": "Navegación",
    "⇄ Shuffle": "⇄ Mezclar",
    "↺ Reset": "↺ Reiniciar",
    "🎯 Nothing to Focus On Yet": "🎯 Aún no hay nada para enfocar",
    "Nothing to Focus On Yet": "Aún no hay nada para enfocar",
    "Study some cards first and mark any you find": "Primero estudia algunas tarjetas y marca las que te parezcan",
    "— they'll queue up here for drilling.": "— se guardarán aquí para practicar.",
    "📖 Start Studying": "📖 Empezar a estudiar",
    "🎉 All Clear!": "🎉 ¡Todo listo!",
    "All Clear!": "¡Todo listo!",
    "You've cleared every Hard & Again card.": "Has completado todas las tarjetas Difícil y Otra vez.",
    "Keep studying to find your next challenge.": "Sigue estudiando para encontrar tu próximo reto.",
    "📖 Study More Cards": "📖 Estudiar más tarjetas",
    "left": "restantes",
    "0 cleared": "0 completadas",
    "Retry this card": "Reintentar esta tarjeta",
    "Keep in queue": "Mantener en la cola",
    "Remove it!": "¡Quitarla!",
    "Deck Complete!": "¡Mazo completado!",
    "Here's how you did this round": "Así te fue en esta ronda",
    "🎯 Focus on Hard Cards": "🎯 Enfocarse en tarjetas difíciles",
    "Focus on Hard Cards": "Enfocarse en tarjetas difíciles",
    "Add, edit, or remove words. Changes are shared with EHSAN_WordDuel.": "Añade, edita o elimina palabras. Los cambios se comparten con EHSAN_WordDuel.",
    "Leave Definition blank and it will show \"—\" on the card back.": "Deja la definición en blanco y se mostrará \"—\" en el reverso de la tarjeta.",
    "SAT Vocab · Synonyms & Antonyms": "Vocabulario SAT · Sinónimos y antónimos",
    "Multiple Choice": "Opción múltiple",
    "Pick the right word": "Elige la palabra correcta",
    "Matching Pairs": "Pares coincidentes",
    "Connect words to their matches": "Conecta palabras con sus equivalentes",
    "Fill in the Blank": "Completar el espacio",
    "Fill in Blank": "Completar espacio",
    "Type the answer": "Escribe la respuesta",
    "Streak Mode": "Modo racha",
    "How long can you last?": "¿Cuánto puedes aguantar?",
    "🏆 Leaderboard": "🏆 Clasificación",
    "Leaderboard": "Clasificación",
    "📱 Scan to open on your phone": "📱 Escanea para abrir en tu teléfono",
    "SYNONYM": "SINÓNIMO",
    "ANTONYM": "ANTÓNIMO",
    "Next →": "Siguiente →",
    "Tap a word on the left, then its match on the right": "Toca una palabra a la izquierda y luego su pareja a la derecha",
    "Words": "Palabras",
    "Matches": "Parejas",
    "Check Answer": "Comprobar respuesta",
    "Your answer…": "Tu respuesta…",
    "Choose the best synonym": "Elige el mejor sinónimo",
    "Choose the best antonym": "Elige el mejor antónimo",
    "Type a synonym": "Escribe un sinónimo",
    "Type an antonym": "Escribe un antónimo",
    "✅ Correct! +100 pts": "✅ ¡Correcto! +100 pts",
    "👈 First select a word on the left": "👈 Primero selecciona una palabra de la izquierda",
    "✅ Matched! +100 pts": "✅ ¡Emparejado! +100 pts",
    "Well done!": "¡Bien hecho!",
    "Here's how you did": "Así te fue",
    "Best Streak": "Mejor racha",
    "💾 Save to Leaderboard": "💾 Guardar en clasificación",
    "✅ Score saved!": "✅ ¡Puntuación guardada!",
    "Your name (for leaderboard)": "Tu nombre (para la clasificación)",
    "Round Complete!": "¡Ronda completada!",
    "All Matched!": "¡Todo emparejado!",
    "Streak Over!": "¡Racha terminada!",
    "Done!": "¡Listo!",
    "No scores yet. Play a round!": "Aún no hay puntuaciones. ¡Juega una ronda!",
    "Clear All Scores": "Borrar todas las puntuaciones",
    "Clear all scores?": "¿Borrar todas las puntuaciones?",
    "Add, edit, or remove synonym/antonym pairs. Changes are saved in the browser and apply to all game modes.": "Añade, edita o elimina pares de sinónimos/antónimos. Los cambios se guardan en el navegador y se aplican a todos los modos de juego.",
    "Focus Mode": "Modo enfoque",
    "Upload rejected. Fix the listed line(s) and try again.": "Carga rechazada. Corrige las líneas indicadas e inténtalo de nuevo."
  },
  "ru": {
    "Language": "Язык",
    "🔒 Teacher Access": "🔒 Доступ для учителя",
    "Teacher Access": "Доступ для учителя",
    "Enter the teacher password to edit the word list": "Введите пароль учителя, чтобы редактировать список слов",
    "Enter the teacher password to view the leaderboard": "Введите пароль учителя, чтобы посмотреть таблицу лидеров",
    "Enter the password to continue": "Введите пароль, чтобы продолжить",
    "Incorrect password. Try again.": "Неверный пароль. Попробуйте еще раз.",
    "Password": "Пароль",
    "Cancel": "Отмена",
    "Enter": "Войти",
    "🔑 Change Password": "🔑 Изменить пароль",
    "Change Password": "Изменить пароль",
    "Enter a new teacher password": "Введите новый пароль учителя",
    "Current password": "Текущий пароль",
    "New password": "Новый пароль",
    "Confirm new password": "Подтвердите новый пароль",
    "Save": "Сохранить",
    "Current password is incorrect.": "Текущий пароль неверный.",
    "New password must be at least 4 characters.": "Новый пароль должен содержать не менее 4 символов.",
    "New passwords do not match.": "Новые пароли не совпадают.",
    "✅ Password changed successfully!": "✅ Пароль успешно изменен!",
    "⚠️": "⚠️",
    "Delete All Words?": "Удалить все слова?",
    "This will permanently remove": "Это безвозвратно удалит",
    "words from the list. This cannot be undone.": "слов из списка. Это действие нельзя отменить.",
    "Delete All": "Удалить все",
    "⬆️ Upload Word List": "⬆️ Загрузить список слов",
    "Upload Word List": "Загрузить список слов",
    "Upload a .txt file to replace the current word list.": "Загрузите файл .txt, чтобы заменить текущий список слов.",
    "Format (one word per line):": "Формат (одно слово на строку):",
    "(fields separated by a TAB, semicolon after each)": "(поля разделены TAB, после каждого стоит точка с запятой)",
    "Choose .txt file…": "Выбрать файл .txt…",
    "Replace List": "Заменить список",
    "Please choose a .txt file.": "Выберите файл .txt.",
    "No valid words found. Check the file format.": "Подходящие слова не найдены. Проверьте формат файла.",
    "Could not read that file. Please try again.": "Не удалось прочитать файл. Попробуйте еще раз.",
    "Background music: Off": "Фоновая музыка: выкл.",
    "Background music: On": "Фоновая музыка: вкл.",
    "Designed and developed for educational purposes by Ehsan A.": "Разработано Эхсаном А. для образовательных целей.",
    "✏️ Edit Word List": "✏️ Редактировать список слов",
    "Edit Word List": "Редактировать список слов",
    "Word": "Слово",
    "Synonym": "Синоним",
    "Antonym": "Антоним",
    "Synonyms": "Синонимы",
    "Antonyms": "Антонимы",
    "Definition (optional)": "Определение (необязательно)",
    "+ Add Word": "+ Добавить слово",
    "Save Changes": "Сохранить изменения",
    "⬆️ Upload Word List (.txt)": "⬆️ Загрузить список слов (.txt)",
    "🗑️ Delete All Words": "🗑️ Удалить все слова",
    "✅ Word list saved!": "✅ Список слов сохранен!",
    "Optional definition…": "Необязательное определение…",
    "Speak word": "Озвучить слово",
    "Speak answer": "Озвучить ответ",
    "← Back to Home": "← На главную",
    "← Home": "← Главная",
    "Close": "Закрыть",
    "Got it!": "Понял!",
    "Easy": "Легко",
    "Hard": "Сложно",
    "Again": "Еще раз",
    "Mastery": "Освоение",
    "Progress": "Прогресс",
    "Score": "Очки",
    "Correct": "Верно",
    "Incorrect": "Неверно",
    "Accuracy": "Точность",
    "Play Again": "Играть снова",
    "Study Again": "Учиться снова",
    "Welcome!": "Добро пожаловать!",
    "Enter your name to personalise your experience,": "Введите имя, чтобы персонализировать работу,",
    "or continue as a guest.": "или продолжите как гость.",
    "Enter your name…": "Введите имя…",
    "Let's Go →": "Начать →",
    "Continue as Guest": "Продолжить как гость",
    "Welcome back,": "С возвращением,",
    "📖 Choose Session Size": "📖 Выберите размер сессии",
    "Choose Session Size": "Выберите размер сессии",
    "How many cards do you want to study?": "Сколько карточек вы хотите изучать?",
    "⚡ Quick Review": "⚡ Быстрый повтор",
    "Quick Review": "Быстрый повтор",
    "~5 minutes": "~5 минут",
    "10 cards": "10 карточек",
    "📘 Standard Session": "📘 Стандартная сессия",
    "Standard Session": "Стандартная сессия",
    "Standard": "Стандарт",
    "~15 minutes": "~15 минут",
    "25 cards": "25 карточек",
    "🏆 Full Deck": "🏆 Вся колода",
    "Full Deck": "Вся колода",
    "Full prep session": "Полная подготовительная сессия",
    "All cards": "Все карточки",
    "⏱️ Timed Mode": "⏱️ Режим на время",
    "Timed Mode": "Режим на время",
    "(10s per card)": "(10 с на карточку)",
    "❓ How to Play": "❓ Как играть",
    "How to Play": "Как играть",
    "Flip the card": "Переверните карточку",
    "— tap it (or press Space) to reveal the definition, synonym, and antonym on the back.": "— нажмите на нее (или пробел), чтобы увидеть определение, синоним и антоним на обороте.",
    "Judge yourself honestly": "Оценивайте себя честно",
    "— after flipping, pick": "— после переворота выберите",
    ", or": "или",
    "based on how well you recalled the word.": "в зависимости от того, насколько хорошо вы вспомнили слово.",
    "— only shows cards you marked": "— показывает только карточки, отмеченные как",
    "or": "или",
    ". Use it to drill your weak spots.": ". Используйте его, чтобы проработать слабые места.",
    "Mastery bar": "Шкала освоения",
    "— fills up as you mark cards": "— заполняется, когда вы отмечаете карточки как",
    ". Try to get it to 100%!": ". Постарайтесь дойти до 100%!",
    "Pronunciation": "Произношение",
    "— tap the 🔊 button on any card to hear the word spoken aloud.": "— нажмите 🔊 на любой карточке, чтобы услышать произношение слова.",
    "Space / Enter": "Пробел / Enter",
    "— flip ·": "— перевернуть ·",
    "← →": "← →",
    "— navigate": "— навигация",
    "Again ·": "Еще раз ·",
    "Hard ·": "Сложно ·",
    "Easy (after flipping)": "Легко (после переворота)",
    "📱 Scan to Open": "📱 Сканировать для открытия",
    "Scan to Open": "Сканировать для открытия",
    "Point your phone's camera at this code to open EHSAN_FlipCards instantly.": "Наведите камеру телефона на этот код, чтобы сразу открыть EHSAN_FlipCards.",
    "📱 Open on Phone (QR)": "📱 Открыть на телефоне (QR)",
    "SAT Vocab · Memory Cards": "Лексика SAT · Карточки памяти",
    "Cards": "Карточки",
    "Mastered": "Освоено",
    "Due": "К повтору",
    "📖 Study Cards": "📖 Изучать карточки",
    "Study Cards": "Изучать карточки",
    "Choose 10, 25, or the full deck": "Выберите 10, 25 или всю колоду",
    "🎯 Focus Mode": "🎯 Режим фокуса",
    "Review only Hard & Again cards": "Повторять только карточки Сложно и Еще раз",
    "🔄 Switch User": "🔄 Сменить пользователя",
    "This will clear your name and progress so another student can use this device. Continue?": "Это удалит ваше имя и прогресс, чтобы устройством мог воспользоваться другой ученик. Продолжить?",
    "Study All": "Изучать все",
    "Timed Mode — flip before time runs out": "Режим на время — переверните до окончания времени",
    "Card": "Карточка",
    "↕ Tap to flip": "↕ Нажмите, чтобы перевернуть",
    "Judgment": "Оценка",
    "↩ Again": "↩ Еще раз",
    "Don't know it": "Не знаю",
    "😓 Hard": "😓 Сложно",
    "Struggled a bit": "Было трудно",
    "✓ Easy": "✓ Легко",
    "Nav": "Навигация",
    "⇄ Shuffle": "⇄ Перемешать",
    "↺ Reset": "↺ Сбросить",
    "🎯 Nothing to Focus On Yet": "🎯 Пока нечего повторять",
    "Nothing to Focus On Yet": "Пока нечего повторять",
    "Study some cards first and mark any you find": "Сначала изучите карточки и отметьте те, которые кажутся",
    "— they'll queue up here for drilling.": "— они появятся здесь для тренировки.",
    "📖 Start Studying": "📖 Начать изучение",
    "🎉 All Clear!": "🎉 Все чисто!",
    "All Clear!": "Все чисто!",
    "You've cleared every Hard & Again card.": "Вы прошли все карточки Сложно и Еще раз.",
    "Keep studying to find your next challenge.": "Продолжайте учиться, чтобы найти следующий вызов.",
    "📖 Study More Cards": "📖 Изучать еще карточки",
    "left": "осталось",
    "0 cleared": "0 пройдено",
    "Retry this card": "Повторить эту карточку",
    "Keep in queue": "Оставить в очереди",
    "Remove it!": "Убрать!",
    "Deck Complete!": "Колода завершена!",
    "Here's how you did this round": "Вот ваши результаты за раунд",
    "🎯 Focus on Hard Cards": "🎯 Повторить сложные карточки",
    "Focus on Hard Cards": "Повторить сложные карточки",
    "Add, edit, or remove words. Changes are shared with EHSAN_WordDuel.": "Добавляйте, редактируйте или удаляйте слова. Изменения синхронизируются с EHSAN_WordDuel.",
    "Leave Definition blank and it will show \"—\" on the card back.": "Оставьте поле определения пустым, и на обороте карточки будет показано \"—\".",
    "SAT Vocab · Synonyms & Antonyms": "Лексика SAT · Синонимы и антонимы",
    "Multiple Choice": "Выбор ответа",
    "Pick the right word": "Выберите правильное слово",
    "Matching Pairs": "Подбор пар",
    "Connect words to their matches": "Соедините слова с парами",
    "Fill in the Blank": "Заполнить пропуск",
    "Fill in Blank": "Заполнение пропуска",
    "Type the answer": "Введите ответ",
    "Streak Mode": "Режим серии",
    "How long can you last?": "Как долго вы продержитесь?",
    "🏆 Leaderboard": "🏆 Таблица лидеров",
    "Leaderboard": "Таблица лидеров",
    "📱 Scan to open on your phone": "📱 Сканируйте, чтобы открыть на телефоне",
    "SYNONYM": "СИНОНИМ",
    "ANTONYM": "АНТОНИМ",
    "Next →": "Далее →",
    "Tap a word on the left, then its match on the right": "Нажмите слово слева, затем его пару справа",
    "Words": "Слова",
    "Matches": "Пары",
    "Check Answer": "Проверить ответ",
    "Your answer…": "Ваш ответ…",
    "Choose the best synonym": "Выберите лучший синоним",
    "Choose the best antonym": "Выберите лучший антоним",
    "Type a synonym": "Введите синоним",
    "Type an antonym": "Введите антоним",
    "✅ Correct! +100 pts": "✅ Верно! +100 оч.",
    "👈 First select a word on the left": "👈 Сначала выберите слово слева",
    "✅ Matched! +100 pts": "✅ Пара найдена! +100 оч.",
    "Well done!": "Отличная работа!",
    "Here's how you did": "Вот ваши результаты",
    "Best Streak": "Лучшая серия",
    "💾 Save to Leaderboard": "💾 Сохранить в таблицу лидеров",
    "✅ Score saved!": "✅ Результат сохранен!",
    "Your name (for leaderboard)": "Ваше имя (для таблицы лидеров)",
    "Round Complete!": "Раунд завершен!",
    "All Matched!": "Все пары найдены!",
    "Streak Over!": "Серия закончена!",
    "Done!": "Готово!",
    "No scores yet. Play a round!": "Пока нет результатов. Сыграйте раунд!",
    "Clear All Scores": "Очистить все результаты",
    "Clear all scores?": "Очистить все результаты?",
    "Add, edit, or remove synonym/antonym pairs. Изменения сохраняются в браузере и применяются ко всем режимам игры.": "Добавляйте, редактируйте или удаляйте пары синонимов/антонимов. Изменения сохраняются в браузере и применяются ко всем режимам игры.",
    "Focus Mode": "Режим фокуса",
    "Upload rejected. Fix the listed line(s) and try again.": "Загрузка отклонена. Исправьте указанные строки и попробуйте снова."
  },
  "fa": {
    "Language": "زبان",
    "🔒 Teacher Access": "🔒 دسترسی معلم",
    "Teacher Access": "دسترسی معلم",
    "Enter the teacher password to edit the word list": "برای ویرایش فهرست واژگان، رمز عبور معلم را وارد کنید",
    "Enter the teacher password to view the leaderboard": "برای دیدن جدول امتیازها، رمز عبور معلم را وارد کنید",
    "Enter the password to continue": "برای ادامه رمز عبور را وارد کنید",
    "Incorrect password. Try again.": "رمز عبور نادرست است. دوباره تلاش کنید.",
    "Password": "رمز عبور",
    "Cancel": "لغو",
    "Enter": "ورود",
    "🔑 Change Password": "🔑 تغییر رمز عبور",
    "Change Password": "تغییر رمز عبور",
    "Enter a new teacher password": "رمز عبور جدید معلم را وارد کنید",
    "Current password": "رمز عبور فعلی",
    "New password": "رمز عبور جدید",
    "Confirm new password": "تأیید رمز عبور جدید",
    "Save": "ذخیره",
    "Current password is incorrect.": "رمز عبور فعلی نادرست است.",
    "New password must be at least 4 characters.": "رمز عبور جدید باید حداقل ۴ نویسه باشد.",
    "New passwords do not match.": "رمزهای عبور جدید یکسان نیستند.",
    "✅ Password changed successfully!": "✅ رمز عبور با موفقیت تغییر کرد!",
    "⚠️": "⚠️",
    "Delete All Words?": "همه واژگان حذف شوند؟",
    "This will permanently remove": "این کار به‌طور دائمی حذف می‌کند:",
    "words from the list. This cannot be undone.": "واژه از فهرست. این کار قابل بازگشت نیست.",
    "Delete All": "حذف همه",
    "⬆️ Upload Word List": "⬆️ بارگذاری فهرست واژگان",
    "Upload Word List": "بارگذاری فهرست واژگان",
    "Upload a .txt file to replace the current word list.": "برای جایگزینی فهرست فعلی واژگان، یک فایل .txt بارگذاری کنید.",
    "Format (one word per line):": "قالب (هر واژه در یک خط):",
    "(fields separated by a TAB, semicolon after each)": "(فیلدها با TAB جدا شوند و پس از هرکدام نقطه‌ویرگول بیاید)",
    "Choose .txt file…": "انتخاب فایل .txt…",
    "Replace List": "جایگزینی فهرست",
    "Please choose a .txt file.": "لطفاً یک فایل .txt انتخاب کنید.",
    "No valid words found. Check the file format.": "واژه معتبری پیدا نشد. قالب فایل را بررسی کنید.",
    "Could not read that file. Please try again.": "خواندن فایل ممکن نبود. دوباره تلاش کنید.",
    "Background music: Off": "موسیقی پس‌زمینه: خاموش",
    "Background music: On": "موسیقی پس‌زمینه: روشن",
    "Designed and developed for educational purposes by Ehsan A.": "طراحی و توسعه برای اهداف آموزشی توسط احسان A.",
    "✏️ Edit Word List": "✏️ ویرایش فهرست واژگان",
    "Edit Word List": "ویرایش فهرست واژگان",
    "Word": "واژه",
    "Synonym": "مترادف",
    "Antonym": "متضاد",
    "Synonyms": "مترادف‌ها",
    "Antonyms": "متضادها",
    "Definition (optional)": "تعریف (اختیاری)",
    "+ Add Word": "+ افزودن واژه",
    "Save Changes": "ذخیره تغییرات",
    "⬆️ Upload Word List (.txt)": "⬆️ بارگذاری فهرست واژگان (.txt)",
    "🗑️ Delete All Words": "🗑️ حذف همه واژگان",
    "✅ Word list saved!": "✅ فهرست واژگان ذخیره شد!",
    "Optional definition…": "تعریف اختیاری…",
    "Speak word": "پخش تلفظ واژه",
    "Speak answer": "پخش تلفظ پاسخ",
    "← Back to Home": "→ بازگشت به خانه",
    "← Home": "→ خانه",
    "←": "→",
    "Close": "بستن",
    "Got it!": "بلد بودم!",
    "Easy": "آسان",
    "Hard": "سخت",
    "Again": "دوباره",
    "Mastery": "تسلط",
    "Progress": "پیشرفت",
    "Score": "امتیاز",
    "Correct": "درست",
    "Incorrect": "نادرست",
    "Accuracy": "دقت",
    "Play Again": "بازی دوباره",
    "Study Again": "مطالعه دوباره",
    "Welcome!": "خوش آمدید!",
    "Enter your name to personalise your experience,": "برای شخصی‌سازی تجربه، نام خود را وارد کنید،",
    "or continue as a guest.": "یا به‌عنوان مهمان ادامه دهید.",
    "Enter your name…": "نام خود را وارد کنید…",
    "Let's Go →": "شروع کنیم ←",
    "Continue as Guest": "ادامه به‌عنوان مهمان",
    "Welcome back,": "خوش برگشتید،",
    "📖 Choose Session Size": "📖 انتخاب اندازه جلسه",
    "Choose Session Size": "انتخاب اندازه جلسه",
    "How many cards do you want to study?": "چند کارت می‌خواهید مطالعه کنید؟",
    "⚡ Quick Review": "⚡ مرور سریع",
    "Quick Review": "مرور سریع",
    "~5 minutes": "حدود ۵ دقیقه",
    "10 cards": "۱۰ کارت",
    "📘 Standard Session": "📘 جلسه استاندارد",
    "Standard Session": "جلسه استاندارد",
    "Standard": "استاندارد",
    "~15 minutes": "حدود ۱۵ دقیقه",
    "25 cards": "۲۵ کارت",
    "🏆 Full Deck": "🏆 کل دسته کارت",
    "Full Deck": "کل دسته کارت",
    "Full prep session": "جلسه کامل آمادگی",
    "All cards": "همه کارت‌ها",
    "⏱️ Timed Mode": "⏱️ حالت زمان‌دار",
    "Timed Mode": "حالت زمان‌دار",
    "(10s per card)": "(۱۰ ثانیه برای هر کارت)",
    "❓ How to Play": "❓ روش بازی",
    "How to Play": "روش بازی",
    "Flip the card": "کارت را برگردانید",
    "— tap it (or press Space) to reveal the definition, synonym, and antonym on the back.": "— روی آن بزنید (یا Space را فشار دهید) تا تعریف، مترادف و متضاد پشت کارت نمایش داده شود.",
    "Judge yourself honestly": "صادقانه خودتان را ارزیابی کنید",
    "— after flipping, pick": "— پس از برگرداندن، انتخاب کنید:",
    ", or": "یا",
    "based on how well you recalled the word.": "بر اساس اینکه واژه را چقدر خوب به یاد آوردید.",
    "— only shows cards you marked": "— فقط کارت‌هایی را نشان می‌دهد که علامت زده‌اید:",
    "or": "یا",
    ". Use it to drill your weak spots.": ". از آن برای تمرین نقاط ضعف خود استفاده کنید.",
    "Mastery bar": "نوار تسلط",
    "— fills up as you mark cards": "— با علامت‌زدن کارت‌ها به‌عنوان",
    ". Try to get it to 100%!": "پر می‌شود. تلاش کنید به ۱۰۰٪ برسید!",
    "Pronunciation": "تلفظ",
    "— tap the 🔊 button on any card to hear the word spoken aloud.": "— روی دکمه 🔊 هر کارت بزنید تا تلفظ واژه را بشنوید.",
    "Space / Enter": "Space / Enter",
    "— flip ·": "— برگرداندن ·",
    "← →": "→ ←",
    "— navigate": "— جابه‌جایی",
    "Again ·": "دوباره ·",
    "Hard ·": "سخت ·",
    "Easy (after flipping)": "آسان (پس از برگرداندن)",
    "📱 Scan to Open": "📱 اسکن برای باز کردن",
    "Scan to Open": "اسکن برای باز کردن",
    "Point your phone's camera at this code to open EHSAN_FlipCards instantly.": "دوربین گوشی را روی این کد بگیرید تا EHSAN_FlipCards فوراً باز شود.",
    "📱 Open on Phone (QR)": "📱 باز کردن روی گوشی (QR)",
    "SAT Vocab · Memory Cards": "واژگان SAT · کارت‌های حافظه",
    "Cards": "کارت‌ها",
    "Mastered": "مسلط‌شده",
    "Due": "نیازمند مرور",
    "📖 Study Cards": "📖 مطالعه کارت‌ها",
    "Study Cards": "مطالعه کارت‌ها",
    "Choose 10, 25, or the full deck": "۱۰، ۲۵ یا کل دسته را انتخاب کنید",
    "🎯 Focus Mode": "🎯 حالت تمرکز",
    "Review only Hard & Again cards": "فقط کارت‌های سخت و دوباره را مرور کنید",
    "🔄 Switch User": "🔄 تغییر کاربر",
    "This will clear your name and progress so another student can use this device. Continue?": "این کار نام و پیشرفت شما را پاک می‌کند تا دانش‌آموز دیگری از این دستگاه استفاده کند. ادامه می‌دهید؟",
    "Study All": "مطالعه همه",
    "Timed Mode — flip before time runs out": "حالت زمان‌دار — پیش از پایان زمان کارت را برگردانید",
    "Card": "کارت",
    "↕ Tap to flip": "↕ برای برگرداندن بزنید",
    "Judgment": "ارزیابی",
    "↩ Again": "↩ دوباره",
    "Don't know it": "نمی‌دانم",
    "😓 Hard": "😓 سخت",
    "Struggled a bit": "کمی سخت بود",
    "✓ Easy": "✓ آسان",
    "Nav": "جابه‌جایی",
    "⇄ Shuffle": "⇄ درهم‌سازی",
    "↺ Reset": "↺ بازنشانی",
    "🎯 Nothing to Focus On Yet": "🎯 هنوز موردی برای تمرکز نیست",
    "Nothing to Focus On Yet": "هنوز موردی برای تمرکز نیست",
    "Study some cards first and mark any you find": "ابتدا چند کارت مطالعه کنید و مواردی را که",
    "— they'll queue up here for drilling.": "علامت می‌زنید، برای تمرین اینجا قرار می‌گیرند.",
    "📖 Start Studying": "📖 شروع مطالعه",
    "🎉 All Clear!": "🎉 همه پاک شد!",
    "All Clear!": "همه پاک شد!",
    "You've cleared every Hard & Again card.": "همه کارت‌های سخت و دوباره را پاک کرده‌اید.",
    "Keep studying to find your next challenge.": "به مطالعه ادامه دهید تا چالش بعدی را پیدا کنید.",
    "📖 Study More Cards": "📖 مطالعه کارت‌های بیشتر",
    "left": "باقی‌مانده",
    "0 cleared": "۰ پاک‌شده",
    "Retry this card": "تلاش دوباره برای این کارت",
    "Keep in queue": "نگه‌داشتن در صف",
    "Remove it!": "حذف شود!",
    "Deck Complete!": "دسته کارت کامل شد!",
    "Here's how you did this round": "نتیجه شما در این دور",
    "🎯 Focus on Hard Cards": "🎯 تمرکز روی کارت‌های سخت",
    "Focus on Hard Cards": "تمرکز روی کارت‌های سخت",
    "Add, edit, or remove words. Changes are shared with EHSAN_WordDuel.": "واژگان را اضافه، ویرایش یا حذف کنید. تغییرات با EHSAN_WordDuel مشترک است.",
    "Leave Definition blank and it will show \"—\" on the card back.": "اگر تعریف را خالی بگذارید، پشت کارت \"—\" نمایش داده می‌شود.",
    "SAT Vocab · Synonyms & Antonyms": "واژگان SAT · مترادف‌ها و متضادها",
    "Multiple Choice": "چندگزینه‌ای",
    "Pick the right word": "واژه درست را انتخاب کنید",
    "Matching Pairs": "جفت‌سازی",
    "Connect words to their matches": "واژه‌ها را به جفت‌هایشان وصل کنید",
    "Fill in the Blank": "پر کردن جای خالی",
    "Fill in Blank": "پر کردن جای خالی",
    "Type the answer": "پاسخ را تایپ کنید",
    "Streak Mode": "حالت زنجیره‌ای",
    "How long can you last?": "تا کجا ادامه می‌دهید؟",
    "🏆 Leaderboard": "🏆 جدول امتیازها",
    "Leaderboard": "جدول امتیازها",
    "📱 Scan to open on your phone": "📱 برای باز کردن روی گوشی اسکن کنید",
    "SYNONYM": "مترادف",
    "ANTONYM": "متضاد",
    "Next →": "بعدی ←",
    "Tap a word on the left, then its match on the right": "یک واژه در ستون چپ و سپس جفت آن را در ستون راست بزنید",
    "Words": "واژه‌ها",
    "Matches": "جفت‌ها",
    "Check Answer": "بررسی پاسخ",
    "Your answer…": "پاسخ شما…",
    "Choose the best synonym": "بهترین مترادف را انتخاب کنید",
    "Choose the best antonym": "بهترین متضاد را انتخاب کنید",
    "Type a synonym": "یک مترادف تایپ کنید",
    "Type an antonym": "یک متضاد تایپ کنید",
    "✅ Correct! +100 pts": "✅ درست! +۱۰۰ امتیاز",
    "👈 First select a word on the left": "👈 ابتدا یک واژه از سمت چپ انتخاب کنید",
    "✅ Matched! +100 pts": "✅ جفت شد! +۱۰۰ امتیاز",
    "Well done!": "آفرین!",
    "Here's how you did": "نتیجه شما",
    "Best Streak": "بهترین زنجیره",
    "💾 Save to Leaderboard": "💾 ذخیره در جدول امتیازها",
    "✅ Score saved!": "✅ امتیاز ذخیره شد!",
    "Your name (for leaderboard)": "نام شما (برای جدول امتیازها)",
    "Round Complete!": "دور کامل شد!",
    "All Matched!": "همه جفت شدند!",
    "Streak Over!": "زنجیره پایان یافت!",
    "Done!": "تمام شد!",
    "No scores yet. Play a round!": "هنوز امتیازی ثبت نشده است. یک دور بازی کنید!",
    "Clear All Scores": "پاک کردن همه امتیازها",
    "Clear all scores?": "همه امتیازها پاک شوند؟",
    "Add, edit, or remove synonym/antonym pairs. Changes are saved in the browser and apply to all game modes.": "جفت‌های مترادف/متضاد را اضافه، ویرایش یا حذف کنید. تغییرات در مرورگر ذخیره می‌شوند و برای همه حالت‌های بازی اعمال می‌شوند.",
    "Focus Mode": "حالت تمرکز",
    "Upload rejected. Fix the listed line(s) and try again.": "بارگذاری رد شد. خط‌های فهرست‌شده را اصلاح کنید و دوباره تلاش کنید."
  },
  "tr": {
    "Language": "Dil",
    "🔒 Teacher Access": "🔒 Öğretmen Erişimi",
    "Teacher Access": "Öğretmen Erişimi",
    "Enter the teacher password to edit the word list": "Kelime listesini düzenlemek için öğretmen şifresini giriniz",
    "Enter the teacher password to view the leaderboard": "Liderlik tablosunu görüntülemek için öğretmen şifresini giriniz",
    "Enter the password to continue": "Devam etmek için şifreyi giriniz",
    "Incorrect password. Try again.": "Şifre yanlış. Lütfen tekrar deneyiniz.",
    "Password": "Şifre",
    "Cancel": "İptal",
    "Enter": "Giriş",
    "🔑 Change Password": "🔑 Şifreyi Değiştir",
    "Change Password": "Şifreyi Değiştir",
    "Enter a new teacher password": "Yeni öğretmen şifresini giriniz",
    "Current password": "Mevcut şifre",
    "New password": "Yeni şifre",
    "Confirm new password": "Yeni şifreyi onaylayınız",
    "Save": "Kaydet",
    "Current password is incorrect.": "Mevcut şifre yanlış.",
    "New password must be at least 4 characters.": "Yeni şifre en az 4 karakter olmalıdır.",
    "New passwords do not match.": "Yeni şifreler eşleşmiyor.",
    "✅ Password changed successfully!": "✅ Şifre başarıyla değiştirildi!",
    "⚠️": "⚠️",
    "Delete All Words?": "Tüm Kelimeler Silinsin mi?",
    "This will permanently remove": "Bu işlem listedeki",
    "words from the list. This cannot be undone.": "kelimeyi kalıcı olarak silecektir. Bu işlem geri alınamaz.",
    "Delete All": "Tümünü Sil",
    "⬆️ Upload Word List": "⬆️ Kelime Listesi Yükle",
    "Upload Word List": "Kelime Listesi Yükle",
    "Upload a .txt file to replace the current word list.": "Mevcut kelime listesini değiştirmek için bir .txt dosyası yükleyiniz.",
    "Format (one word per line):": "Biçim (her satırda bir kelime):",
    "(fields separated by a TAB, semicolon after each)": "(alanlar TAB ile ayrılmalı, her alan noktalı virgül ile bitmelidir)",
    "Choose .txt file…": ".txt dosyası seçiniz…",
    "Replace List": "Listeyi Değiştir",
    "Please choose a .txt file.": "Lütfen bir .txt dosyası seçiniz.",
    "No valid words found. Check the file format.": "Geçerli kelime bulunamadı. Lütfen dosya biçimini kontrol ediniz.",
    "Could not read that file. Please try again.": "Dosya okunamadı. Lütfen tekrar deneyiniz.",
    "Background music: Off": "Arka plan müziği: Kapalı",
    "Background music: On": "Arka plan müziği: Açık",
    "Designed and developed for educational purposes by Ehsan A.": "Eğitim amaçlı olarak Ehsan A. tarafından tasarlanıp geliştirilmiştir.",
    "✏️ Edit Word List": "✏️ Kelime Listesini Düzenle",
    "Edit Word List": "Kelime Listesini Düzenle",
    "Word": "Kelime",
    "Synonym": "Eş Anlamlı",
    "Antonym": "Zıt Anlamlı",
    "Synonyms": "Eş Anlamlılar",
    "Antonyms": "Zıt Anlamlılar",
    "Definition (optional)": "Tanım (isteğe bağlı)",
    "+ Add Word": "+ Kelime Ekle",
    "Save Changes": "Değişiklikleri Kaydet",
    "⬆️ Upload Word List (.txt)": "⬆️ Kelime Listesi Yükle (.txt)",
    "🗑️ Delete All Words": "🗑️ Tüm Kelimeleri Sil",
    "✅ Word list saved!": "✅ Kelime listesi kaydedildi!",
    "Optional definition…": "İsteğe bağlı tanım…",
    "Speak word": "Kelimeyi seslendir",
    "Speak answer": "Cevabı seslendir",
    "← Back to Home": "← Ana Sayfaya Dön",
    "← Home": "← Ana Sayfa",
    "Close": "Kapat",
    "Got it!": "Anladım!",
    "Easy": "Kolay",
    "Hard": "Zor",
    "Again": "Tekrar",
    "Mastery": "Hakimiyet",
    "Progress": "İlerleme",
    "Score": "Puan",
    "Correct": "Doğru",
    "Incorrect": "Yanlış",
    "Accuracy": "Doğruluk",
    "Play Again": "Tekrar Oyna",
    "Study Again": "Tekrar Çalış",
    "Welcome!": "Hoş Geldiniz!",
    "Enter your name to personalise your experience,": "Deneyiminizi kişiselleştirmek için adınızı giriniz,",
    "or continue as a guest.": "veya misafir olarak devam ediniz.",
    "Enter your name…": "Adınızı giriniz…",
    "Let's Go →": "Başla →",
    "Continue as Guest": "Misafir Olarak Devam Et",
    "Welcome back,": "Tekrar hoş geldiniz,",
    "📖 Choose Session Size": "📖 Oturum Boyutunu Seçiniz",
    "Choose Session Size": "Oturum Boyutunu Seçiniz",
    "How many cards do you want to study?": "Kaç kart çalışmak istiyorsunuz?",
    "⚡ Quick Review": "⚡ Hızlı Tekrar",
    "Quick Review": "Hızlı Tekrar",
    "~5 minutes": "~5 dakika",
    "10 cards": "10 kart",
    "📘 Standard Session": "📘 Standart Oturum",
    "Standard Session": "Standart Oturum",
    "Standard": "Standart",
    "~15 minutes": "~15 dakika",
    "25 cards": "25 kart",
    "🏆 Full Deck": "🏆 Tüm Deste",
    "Full Deck": "Tüm Deste",
    "Full prep session": "Tam hazırlık oturumu",
    "All cards": "Tüm kartlar",
    "⏱️ Timed Mode": "⏱️ Süreli Mod",
    "Timed Mode": "Süreli Mod",
    "(10s per card)": "(kart başına 10 sn)",
    "❓ How to Play": "❓ Nasıl Oynanır",
    "How to Play": "Nasıl Oynanır",
    "Flip the card": "Kartı çeviriniz",
    "— tap it (or press Space) to reveal the definition, synonym, and antonym on the back.": "— tanımı, eş anlamlıyı ve zıt anlamlıyı görmek için karta dokununuz (veya Space tuşuna basınız).",
    "Judge yourself honestly": "Kendinizi dürüstçe değerlendiriniz",
    "— after flipping, pick": "— kartı çevirdikten sonra",
    ", or": "veya",
    "based on how well you recalled the word.": "seçeneklerinden uygun olanı seçiniz.",
    "— only shows cards you marked": "— yalnızca işaretlediğiniz kartları gösterir:",
    "or": "veya",
    ". Use it to drill your weak spots.": ". Zayıf noktalarınızı çalışmak için kullanınız.",
    "Mastery bar": "Hakimiyet çubuğu",
    "— fills up as you mark cards": "— kartları işaretledikçe dolar:",
    ". Try to get it to 100%!": ". %100'e ulaşmaya çalışınız!",
    "Pronunciation": "Telaffuz",
    "— tap the 🔊 button on any card to hear the word spoken aloud.": "— kelimeyi sesli dinlemek için herhangi bir karttaki 🔊 düğmesine dokununuz.",
    "Space / Enter": "Space / Enter",
    "— flip ·": "— çevir ·",
    "← →": "← →",
    "— navigate": "— gezin",
    "Again ·": "Tekrar ·",
    "Hard ·": "Zor ·",
    "Easy (after flipping)": "Kolay (çevirdikten sonra)",
    "📱 Scan to Open": "📱 Açmak İçin Tarayınız",
    "Scan to Open": "Açmak İçin Tarayınız",
    "Point your phone's camera at this code to open EHSAN_FlipCards instantly.": "EHSAN_FlipCards'ı hemen açmak için telefonunuzun kamerasını bu koda tutunuz.",
    "📱 Open on Phone (QR)": "📱 Telefonda Aç (QR)",
    "SAT Vocab · Memory Cards": "SAT Kelime · Hafıza Kartları",
    "Cards": "Kartlar",
    "Mastered": "Hakim Olunan",
    "Due": "Tekrar Edilecek",
    "📖 Study Cards": "📖 Kart Çalış",
    "Study Cards": "Kart Çalış",
    "Choose 10, 25, or the full deck": "10, 25 veya tüm desteyi seçiniz",
    "🎯 Focus Mode": "🎯 Odak Modu",
    "Review only Hard & Again cards": "Yalnızca Zor ve Tekrar kartlarını çalışınız",
    "🔄 Switch User": "🔄 Kullanıcı Değiştir",
    "This will clear your name and progress so another student can use this device. Continue?": "Bu işlem adınızı ve ilerlemenizi temizler; böylece başka bir öğrenci bu cihazı kullanabilir. Devam edilsin mi?",
    "Study All": "Tümünü Çalış",
    "Timed Mode — flip before time runs out": "Süreli Mod — süre dolmadan kartı çeviriniz",
    "Card": "Kart",
    "↕ Tap to flip": "↕ Çevirmek için dokununuz",
    "Judgment": "Değerlendirme",
    "↩ Again": "↩ Tekrar",
    "Don't know it": "Bilmiyorum",
    "😓 Hard": "😓 Zor",
    "Struggled a bit": "Biraz zorlandım",
    "✓ Easy": "✓ Kolay",
    "Nav": "Gezinme",
    "⇄ Shuffle": "⇄ Karıştır",
    "↺ Reset": "↺ Sıfırla",
    "🎯 Nothing to Focus On Yet": "🎯 Henüz Odaklanılacak Kart Yok",
    "Nothing to Focus On Yet": "Henüz Odaklanılacak Kart Yok",
    "Study some cards first and mark any you find": "Önce birkaç kart çalışınız ve zor bulduklarınızı işaretleyiniz",
    "— they'll queue up here for drilling.": "— tekrar çalışmak için burada sıraya alınırlar.",
    "📖 Start Studying": "📖 Çalışmaya Başla",
    "🎉 All Clear!": "🎉 Hepsi Tamamlandı!",
    "All Clear!": "Hepsi Tamamlandı!",
    "You've cleared every Hard & Again card.": "Tüm Zor ve Tekrar kartlarını tamamladınız.",
    "Keep studying to find your next challenge.": "Sonraki hedefinizi bulmak için çalışmaya devam ediniz.",
    "📖 Study More Cards": "📖 Daha Fazla Kart Çalış",
    "left": "kaldı",
    "0 cleared": "0 tamamlandı",
    "Retry this card": "Bu kartı yeniden dene",
    "Keep in queue": "Sırada tut",
    "Remove it!": "Kaldır!",
    "Deck Complete!": "Deste Tamamlandı!",
    "Here's how you did this round": "Bu turdaki sonucunuz",
    "🎯 Focus on Hard Cards": "🎯 Zor Kartlara Odaklan",
    "Focus on Hard Cards": "Zor Kartlara Odaklan",
    "Add, edit, or remove words. Changes are shared with EHSAN_WordDuel.": "Kelimeleri ekleyin, düzenleyin veya silin. Değişiklikler EHSAN_WordDuel ile paylaşılır.",
    "Leave Definition blank and it will show \"—\" on the card back.": "Tanım alanını boş bırakırsanız kartın arkasında \"—\" gösterilir.",
    "SAT Vocab · Synonyms & Antonyms": "SAT Kelime · Eş ve Zıt Anlamlılar",
    "Multiple Choice": "Çoktan Seçmeli",
    "Pick the right word": "Doğru kelimeyi seçiniz",
    "Matching Pairs": "Eşleştirme",
    "Connect words to their matches": "Kelimeleri karşılıklarıyla eşleştiriniz",
    "Fill in the Blank": "Boşluk Doldurma",
    "Fill in Blank": "Boşluk Doldurma",
    "Type the answer": "Cevabı yazınız",
    "Streak Mode": "Seri Modu",
    "How long can you last?": "Ne kadar sürdürebilirsiniz?",
    "🏆 Leaderboard": "🏆 Liderlik Tablosu",
    "Leaderboard": "Liderlik Tablosu",
    "📱 Scan to open on your phone": "📱 Telefonda açmak için tarayınız",
    "SYNONYM": "EŞ ANLAMLI",
    "ANTONYM": "ZIT ANLAMLI",
    "Next →": "Sonraki →",
    "Tap a word on the left, then its match on the right": "Soldaki bir kelimeye, ardından sağdaki eşine dokununuz",
    "Words": "Kelimeler",
    "Matches": "Eşleşmeler",
    "Check Answer": "Cevabı Kontrol Et",
    "Your answer…": "Cevabınız…",
    "Choose the best synonym": "En uygun eş anlamlıyı seçiniz",
    "Choose the best antonym": "En uygun zıt anlamlıyı seçiniz",
    "Type a synonym": "Bir eş anlamlı yazınız",
    "Type an antonym": "Bir zıt anlamlı yazınız",
    "✅ Correct! +100 pts": "✅ Doğru! +100 puan",
    "👈 First select a word on the left": "👈 Önce soldan bir kelime seçiniz",
    "✅ Matched! +100 pts": "✅ Eşleşti! +100 puan",
    "Well done!": "Tebrikler!",
    "Here's how you did": "Sonucunuz",
    "Best Streak": "En İyi Seri",
    "💾 Save to Leaderboard": "💾 Liderlik Tablosuna Kaydet",
    "✅ Score saved!": "✅ Puan kaydedildi!",
    "Your name (for leaderboard)": "Adınız (liderlik tablosu için)",
    "Round Complete!": "Tur Tamamlandı!",
    "All Matched!": "Tümü Eşleşti!",
    "Streak Over!": "Seri Bitti!",
    "Done!": "Tamamlandı!",
    "No scores yet. Play a round!": "Henüz puan yok. Bir tur oynayınız!",
    "Clear All Scores": "Tüm Puanları Temizle",
    "Clear all scores?": "Tüm puanlar temizlensin mi?",
    "Add, edit, or remove synonym/antonym pairs. Changes are saved in the browser and apply to all game modes.": "Eş/zıt anlamlı kelime çiftlerini ekleyin, düzenleyin veya silin. Değişiklikler tarayıcıda kaydedilir ve tüm oyun modlarına uygulanır.",
    "Focus Mode": "Odak Modu",
    "Upload rejected. Fix the listed line(s) and try again.": "Yükleme reddedildi. Listelenen satırları düzeltip tekrar deneyiniz.",
    "←": "←"
  }
};
const UI_SKIP_SELECTOR = '.lang-selector,.no-i18n,.q-word,.opt-word,.m-card,.card-word,.back-word,.back-def,.chip,.qr-url,.logo-title,.scr-tile';
let currentUiLang = localStorage.getItem(UI_LANG_KEY) || 'en';
let i18nApplying = false;
let i18nDebounce = null;

function normalizeUiText(str){ return String(str).replace(/\s+/g,' ').trim(); }

function t(text, lang=currentUiLang){
  if(text === null || text === undefined) return text;
  const raw = String(text);
  const leading = (raw.match(/^\s*/) || [''])[0];
  const trailing = (raw.match(/\s*$/) || [''])[0];
  const core = normalizeUiText(raw);
  if(!core || lang === 'en') return raw;
  const direct = UI_TEXT[lang] && UI_TEXT[lang][core];
  if(direct) return leading + direct + trailing;
  const patterned = translatePattern(core, lang);
  return patterned ? leading + patterned + trailing : raw;
}

function translatePattern(core, lang){
  const packs = {
    es:[
      [/^All (\d+) cards$/,(_,n)=>`Las ${n} tarjetas`],
      [/^Quick Review · (\d+)( ⏱️)?$/,(_,n,t='')=>`Repaso rápido · ${n}${t}`],
      [/^Standard · (\d+)( ⏱️)?$/,(_,n,t='')=>`Estándar · ${n}${t}`],
      [/^Full Deck · (\d+)( ⏱️)?$/,(_,n,t='')=>`Mazo completo · ${n}${t}`],
      [/^(\d+) mastered$/,(_,n)=>`${n} dominadas`],
      [/^(\d+) cleared$/,(_,n)=>`${n} completadas`],
      [/^(\d+) \/ (\d+) matched$/,(_,a,b)=>`${a} / ${b} emparejados`],
      [/^🔥 (\d+) in a row!$/,(_,n)=>`🔥 ¡${n} seguidas!`],
      [/^❌ The answer was "(.+)"$/,(_,x)=>`❌ La respuesta era "${x}"`],
      [/^⏱ Time's up! Answer: "(.+)"$/,(_,x)=>`⏱ ¡Tiempo! Respuesta: "${x}"`],
      [/^⏱ Time's up! You matched (\d+) of (\d+)$/,(_,a,b)=>`⏱ ¡Tiempo! Emparejaste ${a} de ${b}`],
      [/^❌ Expected "(.+)"$/,(_,x)=>`❌ Se esperaba "${x}"`],
      [/^✅ Correct! Streak: (\d+) 🔥$/,(_,n)=>`✅ ¡Correcto! Racha: ${n} 🔥`],
      [/^❌ Answer: "(.+)" — Game over!$/,(_,x)=>`❌ Respuesta: "${x}" — ¡Fin del juego!`],
      [/^Best streak: (\d+)$/,(_,n)=>`Mejor racha: ${n}`],
      [/^(\d+) words found$/,(_,n)=>`${n} palabras encontradas`],
      [/^(\d+) word found$/,(_,n)=>`${n} palabra encontrada`],
      [/^\(of (\d+) lines\)$/,(_,n)=>`(de ${n} líneas)`],
      [/^…and (\d+) more$/,(_,n)=>`…y ${n} más`],
      [/^(\d+) line\(s\) skipped$/,(_,n)=>`${n} línea(s) omitida(s)`],
      [/^(\d+) pts$/,(_,n)=>`${n} pts`],
      [/^(Multiple Choice|Matching|Fill in Blank|Streak) · (.+)$/,(m,mode,date)=>`${t(mode,'es')} · ${date}`]
    ],
    ru:[
      [/^All (\d+) cards$/,(_,n)=>`Все ${n} карточек`],
      [/^Quick Review · (\d+)( ⏱️)?$/,(_,n,t='')=>`Быстрый повтор · ${n}${t}`],
      [/^Standard · (\d+)( ⏱️)?$/,(_,n,t='')=>`Стандарт · ${n}${t}`],
      [/^Full Deck · (\d+)( ⏱️)?$/,(_,n,t='')=>`Вся колода · ${n}${t}`],
      [/^(\d+) mastered$/,(_,n)=>`${n} освоено`],
      [/^(\d+) cleared$/,(_,n)=>`${n} пройдено`],
      [/^(\d+) \/ (\d+) matched$/,(_,a,b)=>`${a} / ${b} найдено`],
      [/^🔥 (\d+) in a row!$/,(_,n)=>`🔥 ${n} подряд!`],
      [/^❌ The answer was "(.+)"$/,(_,x)=>`❌ Ответ: "${x}"`],
      [/^⏱ Time's up! Answer: "(.+)"$/,(_,x)=>`⏱ Время вышло! Ответ: "${x}"`],
      [/^⏱ Time's up! You matched (\d+) of (\d+)$/,(_,a,b)=>`⏱ Время вышло! Найдено ${a} из ${b}`],
      [/^❌ Expected "(.+)"$/,(_,x)=>`❌ Ожидалось: "${x}"`],
      [/^✅ Correct! Streak: (\d+) 🔥$/,(_,n)=>`✅ Верно! Серия: ${n} 🔥`],
      [/^❌ Answer: "(.+)" — Game over!$/,(_,x)=>`❌ Ответ: "${x}" — игра окончена!`],
      [/^Best streak: (\d+)$/,(_,n)=>`Лучшая серия: ${n}`],
      [/^(\d+) words found$/,(_,n)=>`${n} слов найдено`],
      [/^(\d+) word found$/,(_,n)=>`${n} слово найдено`],
      [/^\(of (\d+) lines\)$/,(_,n)=>`(из ${n} строк)`],
      [/^…and (\d+) more$/,(_,n)=>`…и еще ${n}`],
      [/^(\d+) line\(s\) skipped$/,(_,n)=>`${n} строк(и) пропущено`],
      [/^(\d+) pts$/,(_,n)=>`${n} оч.`],
      [/^(Multiple Choice|Matching|Fill in Blank|Streak) · (.+)$/,(m,mode,date)=>`${t(mode,'ru')} · ${date}`]
    ],
    fa:[
      [/^All (\d+) cards$/,(_,n)=>`همه ${n} کارت`],
      [/^Quick Review · (\d+)( ⏱️)?$/,(_,n,t='')=>`مرور سریع · ${n}${t}`],
      [/^Standard · (\d+)( ⏱️)?$/,(_,n,t='')=>`استاندارد · ${n}${t}`],
      [/^Full Deck · (\d+)( ⏱️)?$/,(_,n,t='')=>`کل دسته · ${n}${t}`],
      [/^(\d+) mastered$/,(_,n)=>`${n} مسلط‌شده`],
      [/^(\d+) cleared$/,(_,n)=>`${n} پاک‌شده`],
      [/^(\d+) \/ (\d+) matched$/,(_,a,b)=>`${a} / ${b} جفت‌شده`],
      [/^🔥 (\d+) in a row!$/,(_,n)=>`🔥 ${n} پاسخ پیاپی!`],
      [/^❌ The answer was "(.+)"$/,(_,x)=>`❌ پاسخ درست "${x}" بود`],
      [/^⏱ Time's up! Answer: "(.+)"$/,(_,x)=>`⏱ زمان تمام شد! پاسخ: "${x}"`],
      [/^⏱ Time's up! You matched (\d+) of (\d+)$/,(_,a,b)=>`⏱ زمان تمام شد! ${a} از ${b} جفت شد`],
      [/^❌ Expected "(.+)"$/,(_,x)=>`❌ پاسخ مورد انتظار: "${x}"`],
      [/^✅ Correct! Streak: (\d+) 🔥$/,(_,n)=>`✅ درست! زنجیره: ${n} 🔥`],
      [/^❌ Answer: "(.+)" — Game over!$/,(_,x)=>`❌ پاسخ: "${x}" — بازی تمام شد!`],
      [/^Best streak: (\d+)$/,(_,n)=>`بهترین زنجیره: ${n}`],
      [/^(\d+) words found$/,(_,n)=>`${n} واژه پیدا شد`],
      [/^(\d+) word found$/,(_,n)=>`${n} واژه پیدا شد`],
      [/^\(of (\d+) lines\)$/,(_,n)=>`(از ${n} خط)`],
      [/^…and (\d+) more$/,(_,n)=>`…و ${n} مورد دیگر`],
      [/^(\d+) line\(s\) skipped$/,(_,n)=>`${n} خط نادیده گرفته شد`],
      [/^(\d+) pts$/,(_,n)=>`${n} امتیاز`],
      [/^(Multiple Choice|Matching|Fill in Blank|Streak) · (.+)$/,(m,mode,date)=>`${t(mode,'fa')} · ${date}`]
    ],
    tr:[
      [/^All (\d+) cards$/,(_,n)=>`Tüm ${n} kart`],
      [/^Quick Review · (\d+)( ⏱️)?$/,(_,n,t='')=>`Hızlı Tekrar · ${n}${t}`],
      [/^Standard · (\d+)( ⏱️)?$/,(_,n,t='')=>`Standart · ${n}${t}`],
      [/^Full Deck · (\d+)( ⏱️)?$/,(_,n,t='')=>`Tüm Deste · ${n}${t}`],
      [/^(\d+) mastered$/,(_,n)=>`${n} hakim olundu`],
      [/^(\d+) cleared$/,(_,n)=>`${n} tamamlandı`],
      [/^(\d+) \/ (\d+) matched$/,(_,a,b)=>`${a} / ${b} eşleşti`],
      [/^🔥 (\d+) in a row!$/,(_,n)=>`🔥 ${n} doğru seri!`],
      [/^❌ The answer was "(.+)"$/,(_,x)=>`❌ Doğru cevap "${x}" idi`],
      [/^⏱ Time's up! Answer: "(.+)"$/,(_,x)=>`⏱ Süre doldu! Cevap: "${x}"`],
      [/^⏱ Time's up! You matched (\d+) of (\d+)$/,(_,a,b)=>`⏱ Süre doldu! ${a}/${b} eşleştirdiniz`],
      [/^❌ Expected "(.+)"$/,(_,x)=>`❌ Beklenen cevap: "${x}"`],
      [/^✅ Correct! Streak: (\d+) 🔥$/,(_,n)=>`✅ Doğru! Seri: ${n} 🔥`],
      [/^❌ Answer: "(.+)" — Game over!$/,(_,x)=>`❌ Cevap: "${x}" — oyun bitti!`],
      [/^Best streak: (\d+)$/,(_,n)=>`En iyi seri: ${n}`],
      [/^(\d+) words found$/,(_,n)=>`${n} kelime bulundu`],
      [/^(\d+) word found$/,(_,n)=>`${n} kelime bulundu`],
      [/^\(of (\d+) lines\)$/,(_,n)=>`(${n} satırdan)`],
      [/^…and (\d+) more$/,(_,n)=>`…ve ${n} tane daha`],
      [/^(\d+) line\(s\) skipped$/,(_,n)=>`${n} satır atlandı`],
      [/^(\d+) pts$/,(_,n)=>`${n} puan`],
      [/^(Multiple Choice|Matching|Fill in Blank|Streak) · (.+)$/,(m,mode,date)=>`${t(mode,'tr')} · ${date}`]
    ]
  };
  for(const [rx, fn] of (packs[lang] || [])){
    const m = core.match(rx);
    if(m) return fn(...m);
  }
  return null;
}

function shouldSkipI18nNode(node){
  const el = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
  return !el || !!el.closest(UI_SKIP_SELECTOR);
}

function translateTextNode(node){
  if(node.nodeType !== Node.TEXT_NODE || shouldSkipI18nNode(node)) return;
  if(!normalizeUiText(node.nodeValue)) return;
  if(node.__i18nOriginal === undefined || (node.__i18nTranslated !== undefined && node.nodeValue !== node.__i18nTranslated && node.nodeValue !== node.__i18nOriginal)){
    node.__i18nOriginal = node.nodeValue;
  }
  const translated = t(node.__i18nOriginal);
  node.__i18nTranslated = translated;
  if(node.nodeValue !== translated) node.nodeValue = translated;
}

function translateElementAttrs(el){
  if(!el || el.nodeType !== Node.ELEMENT_NODE || el.closest('.lang-selector,.no-i18n')) return;
  ['placeholder','title','aria-label'].forEach(attr=>{
    if(!el.hasAttribute(attr)) return;
    el.__i18nAttrOriginal = el.__i18nAttrOriginal || {};
    el.__i18nAttrTranslated = el.__i18nAttrTranslated || {};
    const cur = el.getAttribute(attr);
    if(el.__i18nAttrOriginal[attr] === undefined || (el.__i18nAttrTranslated[attr] !== undefined && cur !== el.__i18nAttrTranslated[attr] && cur !== el.__i18nAttrOriginal[attr])){
      el.__i18nAttrOriginal[attr] = cur;
    }
    const translated = t(el.__i18nAttrOriginal[attr]);
    el.__i18nAttrTranslated[attr] = translated;
    if(cur !== translated) el.setAttribute(attr, translated);
  });
}

function applyI18n(root=document.body){
  if(!root || i18nApplying) return;
  i18nApplying = true;
  try{
    const textRoot = root.nodeType === Node.TEXT_NODE ? root.parentElement : root;
    if(root.nodeType === Node.TEXT_NODE){
      translateTextNode(root);
    } else if(textRoot){
      const walker = document.createTreeWalker(textRoot, NodeFilter.SHOW_TEXT);
      let node;
      while((node = walker.nextNode())) translateTextNode(node);
    }
    const elRoot = root.nodeType === Node.ELEMENT_NODE ? root : document.body;
    if(elRoot){
      translateElementAttrs(elRoot);
      elRoot.querySelectorAll && elRoot.querySelectorAll('[placeholder],[title],[aria-label]').forEach(translateElementAttrs);
    }
    document.querySelectorAll('.lang-btn').forEach(btn=>btn.classList.toggle('active', btn.dataset.lang === currentUiLang));
  } finally {
    i18nApplying = false;
  }
}

function scheduleI18n(){
  if(i18nApplying) return;
  clearTimeout(i18nDebounce);
  i18nDebounce = setTimeout(()=>applyI18n(document.body), 0);
}

function setLang(lang){
  if(!UI_LANG_META[lang]) lang = 'en';
  currentUiLang = lang;
  localStorage.setItem(UI_LANG_KEY, lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = UI_LANG_META[lang].dir;
  document.body && document.body.classList.toggle('rtl-ui', UI_LANG_META[lang].dir === 'rtl');
  applyI18n(document.body);
}

(function initMultilingualUI(){
  const nativeAlert = window.alert.bind(window);
  const nativeConfirm = window.confirm.bind(window);
  window.alert = (msg)=>nativeAlert(t(msg));
  window.confirm = (msg)=>nativeConfirm(t(msg));
  function boot(){
    setLang(currentUiLang);
    const observer = new MutationObserver(scheduleI18n);
    observer.observe(document.body, {childList:true, subtree:true, characterData:true, attributes:true, attributeFilter:['placeholder','title','aria-label']});
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();

/* ══════════════════════════════════════════════
   WORD DATA
══════════════════════════════════════════════ */
const DEFAULT_WORDS=[
  {word:"Abundant",   syn:"Plentiful",    ant:"Scarce"},
  {word:"Acrimony",   syn:"Bitterness",   ant:"Goodwill"},
  {word:"Adept",      syn:"Proficient",   ant:"Inept"},
  {word:"Alleviate",  syn:"Mitigate",     ant:"Aggravate"},
  {word:"Ambiguous",  syn:"Vague",        ant:"Clear"},
  {word:"Amiable",    syn:"Affable",      ant:"Hostile"},
  {word:"Apathy",     syn:"Indifference", ant:"Passion"},
  {word:"Arduous",    syn:"Strenuous",    ant:"Effortless"},
  {word:"Astute",     syn:"Shrewd",       ant:"Naive"},
  {word:"Audacious",  syn:"Daring",       ant:"Timid"},
  {word:"Benevolent", syn:"Charitable",   ant:"Malevolent"},
  {word:"Brevity",    syn:"Conciseness",  ant:"Verbosity"},
  {word:"Candid",     syn:"Frank",        ant:"Evasive"},
  {word:"Capricious", syn:"Fickle",       ant:"Steadfast"},
  {word:"Cogent",     syn:"Compelling",   ant:"Weak"},
  {word:"Complacent", syn:"Smug",         ant:"Discontented"},
  {word:"Conciliate", syn:"Placate",      ant:"Antagonize"},
  {word:"Convoluted", syn:"Intricate",    ant:"Simple"},
  {word:"Cynical",    syn:"Skeptical",    ant:"Idealistic"},
  {word:"Dauntless",  syn:"Fearless",     ant:"Cowardly"},
  {word:"Debilitate", syn:"Weaken",       ant:"Strengthen"},
  {word:"Deference",  syn:"Respect",      ant:"Contempt"},
  {word:"Diffident",  syn:"Timid",        ant:"Assertive"},
  {word:"Diligent",   syn:"Industrious",  ant:"Lazy"},
  {word:"Disparate",  syn:"Distinct",     ant:"Similar"},
  {word:"Ebullient",  syn:"Exuberant",    ant:"Gloomy"},
  {word:"Egregious",  syn:"Flagrant",     ant:"Minor"},
  {word:"Elusive",    syn:"Evasive",      ant:"Accessible"},
  {word:"Eminent",    syn:"Prominent",    ant:"Obscure"},
  {word:"Enervate",   syn:"Exhaust",      ant:"Invigorate"},
  {word:"Ephemeral",  syn:"Fleeting",     ant:"Permanent"},
  {word:"Equivocal",  syn:"Ambiguous",    ant:"Definite"},
  {word:"Esoteric",   syn:"Obscure",      ant:"Common"},
  {word:"Exacerbate", syn:"Worsen",       ant:"Improve"},
  {word:"Fastidious", syn:"Meticulous",   ant:"Sloppy"},
  {word:"Fervent",    syn:"Passionate",   ant:"Indifferent"},
  {word:"Fortuitous", syn:"Fortunate",    ant:"Disastrous"},
  {word:"Frugal",     syn:"Thrifty",      ant:"Extravagant"},
  {word:"Garrulous",  syn:"Talkative",    ant:"Taciturn"},
  {word:"Gregarious", syn:"Sociable",     ant:"Reclusive"},
  {word:"Hackneyed",  syn:"Clichéd",      ant:"Original"},
  {word:"Haughty",    syn:"Arrogant",     ant:"Humble"},
  {word:"Impetuous",  syn:"Rash",         ant:"Cautious"},
  {word:"Incisive",   syn:"Sharp",        ant:"Dull"},
  {word:"Indolent",   syn:"Lazy",         ant:"Diligent"},
  {word:"Ingenuous",  syn:"Naïve",        ant:"Cunning"},
  {word:"Insolent",   syn:"Impudent",     ant:"Respectful"},
  {word:"Intrepid",   syn:"Courageous",   ant:"Fearful"},
  {word:"Laconic",    syn:"Terse",        ant:"Verbose"},
  {word:"Loquacious", syn:"Verbose",      ant:"Laconic"},
  {word:"Magnanimous",syn:"Generous",     ant:"Petty"},
  {word:"Malleable",  syn:"Flexible",     ant:"Rigid"},
  {word:"Meticulous", syn:"Precise",      ant:"Careless"},
  {word:"Mundane",    syn:"Ordinary",     ant:"Extraordinary"},
  {word:"Nefarious",  syn:"Wicked",       ant:"Virtuous"},
  {word:"Obdurate",   syn:"Stubborn",     ant:"Compliant"},
  {word:"Obsequious", syn:"Servile",      ant:"Assertive"},
  {word:"Obstinate",  syn:"Headstrong",   ant:"Flexible"},
  {word:"Opulent",    syn:"Lavish",       ant:"Austere"},
  {word:"Ostentatious",syn:"Showy",       ant:"Modest"},
  {word:"Parsimonious",syn:"Stingy",      ant:"Generous"},
  {word:"Pedantic",   syn:"Dogmatic",     ant:"Broad-minded"},
  {word:"Pensive",    syn:"Contemplative",ant:"Carefree"},
  {word:"Perfidious", syn:"Treacherous",  ant:"Loyal"},
  {word:"Phlegmatic", syn:"Stoic",        ant:"Excitable"},
  {word:"Placid",     syn:"Serene",       ant:"Agitated"},
  {word:"Pragmatic",  syn:"Practical",    ant:"Idealistic"},
  {word:"Prodigal",   syn:"Wasteful",     ant:"Frugal"},
  {word:"Prolific",   syn:"Productive",   ant:"Barren"},
  {word:"Prudent",    syn:"Judicious",    ant:"Reckless"},
  {word:"Querulous",  syn:"Complaining",  ant:"Content"},
  {word:"Recalcitrant",syn:"Unruly",      ant:"Compliant"},
  {word:"Reclusive",  syn:"Solitary",     ant:"Sociable"},
  {word:"Reticent",   syn:"Reserved",     ant:"Forthcoming"},
  {word:"Sagacious",  syn:"Wise",         ant:"Foolish"},
  {word:"Sanguine",   syn:"Optimistic",   ant:"Pessimistic"},
  {word:"Sardonic",   syn:"Mocking",      ant:"Sincere"},
  {word:"Sedulous",   syn:"Diligent",     ant:"Negligent"},
  {word:"Soporific",  syn:"Drowsy",       ant:"Invigorating"},
  {word:"Spurious",   syn:"Fake",         ant:"Authentic"},
  {word:"Stolid",     syn:"Impassive",    ant:"Emotional"},
  {word:"Stringent",  syn:"Strict",       ant:"Lenient"},
  {word:"Succinct",   syn:"Concise",      ant:"Lengthy"},
  {word:"Superficial",syn:"Shallow",      ant:"Profound"},
  {word:"Superfluous",syn:"Excessive",    ant:"Essential"},
  {word:"Taciturn",   syn:"Silent",       ant:"Talkative"},
  {word:"Tenacious",  syn:"Persistent",   ant:"Yielding"},
  {word:"Transient",  syn:"Temporary",    ant:"Permanent"},
  {word:"Trepidation",syn:"Dread",        ant:"Confidence"},
  {word:"Truculent",  syn:"Aggressive",   ant:"Peaceful"},
  {word:"Turbulent",  syn:"Chaotic",      ant:"Calm"},
  {word:"Ubiquitous", syn:"Pervasive",    ant:"Rare"},
  {word:"Vacillate",  syn:"Waver",        ant:"Decide"},
  {word:"Venerate",   syn:"Revere",       ant:"Despise"},
  {word:"Verbose",    syn:"Wordy",        ant:"Concise"},
  {word:"Vociferous", syn:"Clamorous",    ant:"Quiet"},
  {word:"Volatile",   syn:"Unstable",     ant:"Stable"},
  {word:"Wary",       syn:"Cautious",     ant:"Reckless"},
  {word:"Zealous",    syn:"Fervent",      ant:"Apathetic"},
];

/* ══════════════════════════════════════════════
   PASSWORD SYSTEM
══════════════════════════════════════════════ */
const DEFAULT_PW = 'Ehsan2026';
function getPw(){ return localStorage.getItem('teacherPw')||DEFAULT_PW; }
function setPw(p){ localStorage.setItem('teacherPw',p); }

let pwTarget='';
function requirePw(target){
  pwTarget=target;
  document.getElementById('pw-modal-sub').textContent=
    target==='leaderboard'?'Enter the teacher password to view the leaderboard':'Enter the teacher password to edit the word list';
  document.getElementById('pw-input').value='';
  document.getElementById('pw-input').className='modal-input';
  document.getElementById('pw-err').className='modal-err';
  document.getElementById('pw-modal').className='modal-overlay show';
  setTimeout(()=>document.getElementById('pw-input').focus(),100);
}
function closePwModal(){ document.getElementById('pw-modal').className='modal-overlay'; }
function submitPw(){
  const val=document.getElementById('pw-input').value;
  if(val===getPw()){
    closePwModal();
    showScreen(pwTarget);
  } else {
    document.getElementById('pw-input').className='modal-input err';
    document.getElementById('pw-err').className='modal-err show';
    playSfx('wrong');
  }
}
document.getElementById('pw-input').addEventListener('keydown',e=>{ if(e.key==='Enter') submitPw(); });

// Generate QR code for home screen
(function(){
  function tryQR(){
    const el = document.getElementById('qr-canvas');
    if(!el || typeof QRCode === 'undefined'){ setTimeout(tryQR, 100); return; }
    new QRCode(el, {
      text: 'https://ehsan-wordduel.netlify.app/',
      width: 128, height: 128,
      colorDark: '#1a1a2e', colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.M
    });
  }
  tryQR();
})();

function openCpwModal(){
  ['cpw-old','cpw-new','cpw-new2'].forEach(id=>{ document.getElementById(id).value=''; document.getElementById(id).className='modal-input'; });
  document.getElementById('cpw-err').className='modal-err';
  document.getElementById('cpw-modal').className='modal-overlay show';
  setTimeout(()=>document.getElementById('cpw-old').focus(),100);
}
function closeCpwModal(){ document.getElementById('cpw-modal').className='modal-overlay'; }
function submitCpw(){
  const old=document.getElementById('cpw-old').value;
  const n1=document.getElementById('cpw-new').value;
  const n2=document.getElementById('cpw-new2').value;
  const err=document.getElementById('cpw-err');
  if(old!==getPw()){ err.textContent='Current password is incorrect.'; err.className='modal-err show'; return; }
  if(n1.length<4){ err.textContent='New password must be at least 4 characters.'; err.className='modal-err show'; return; }
  if(n1!==n2){ err.textContent='New passwords do not match.'; err.className='modal-err show'; return; }
  setPw(n1);
  closeCpwModal();
  alert('✅ Password changed successfully!');
}

/* ══════════════════════════════════════════════
   AUDIO ENGINE (Web Audio API — clean sine pads)
══════════════════════════════════════════════ */
let audioCtx = null;
let bgNodes = [];
let bgMaster = null; 
let soundOn = false;
let sfxEnabled = true;
let arpTimerId = null;
let arpRunId = 0;    

function ensureCtx(){
  if(!audioCtx) audioCtx = new(window.AudioContext||window.webkitAudioContext)();
  if(audioCtx.state === 'suspended') audioCtx.resume();
}

function startBgMusic(){
  ensureCtx();
  stopBgMusic();
  arpRunId++;
  const myRunId = arpRunId;
  const now = audioCtx.currentTime;

  bgMaster = audioCtx.createGain();
  bgMaster.gain.setValueAtTime(0, now);
  bgMaster.gain.linearRampToValueAtTime(0.72, now + 5);
  bgMaster.connect(audioCtx.destination);
  bgNodes.push(bgMaster);

  const lpf = audioCtx.createBiquadFilter();
  lpf.type = 'lowpass';
  lpf.frequency.value = 2800;
  lpf.Q.value = 0.6;
  lpf.connect(bgMaster);
  bgNodes.push(lpf);

  const crackleGain = audioCtx.createGain();
  crackleGain.gain.value = 0.018;
  crackleGain.connect(lpf);
  bgNodes.push(crackleGain);

  function spawnCrackle(){
    if(!soundOn || myRunId !== arpRunId) return;
    const bufLen = audioCtx.sampleRate * 0.04;
    const buf = audioCtx.createBuffer(1, bufLen, audioCtx.sampleRate);
    const data = buf.getChannelData(0);
    for(let i = 0; i < bufLen; i++){
      data[i] = Math.random() < 0.03 ? (Math.random() * 2 - 1) * 0.9 : 0;
    }
    const src = audioCtx.createBufferSource();
    src.buffer = buf;
    src.connect(crackleGain);
    src.start();
    bgNodes.push(src);
    arpTimerId = setTimeout(spawnCrackle, 200 + Math.random() * 700);
  }

  const CHORDS = [
    [130.81, 164.81, 196.00, 246.94],
    [110.00, 130.81, 164.81, 196.00],
    [174.61, 220.00, 261.63, 329.63],
    [98.00,  123.47, 146.83, 174.61],
  ];
  const CHORD_DUR = 4.0;   
  let chordStep = 0;

  const playChord = () => {
    if(!soundOn || myRunId !== arpRunId) return;
    const t = audioCtx.currentTime;
    const freqs = CHORDS[chordStep % CHORDS.length];
    chordStep++;

    freqs.forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.value = freq * (1 + (i % 2 === 0 ? 0.0008 : -0.0008));

      const vib = audioCtx.createOscillator();
      vib.type = 'sine';
      vib.frequency.value = 4.5 + i * 0.3;
      const vibAmt = audioCtx.createGain();
      vibAmt.gain.value = freq * 0.002;
      vib.connect(vibAmt);
      vibAmt.connect(osc.frequency);

      const g = audioCtx.createGain();
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.13 - i * 0.018, t + 0.55);   
      g.gain.linearRampToValueAtTime(0.10 - i * 0.014, t + CHORD_DUR - 0.6); 
      g.gain.linearRampToValueAtTime(0, t + CHORD_DUR + 0.1);        

      osc.connect(g);
      vib.start(t);
      g.connect(lpf);
      osc.start(t);
      osc.stop(t + CHORD_DUR + 0.2);
      vib.stop(t + CHORD_DUR + 0.2);
      bgNodes.push(osc, vib, vibAmt, g);
    });

    arpTimerId = setTimeout(playChord, CHORD_DUR * 1000);
  };

  const playBass = () => {
    if(!soundOn || myRunId !== arpRunId) return;
    const t = audioCtx.currentTime;
    const rootFreq = CHORDS[(chordStep - 1) % CHORDS.length][0];
    const bassFreq = rootFreq * 0.5; 

    const osc = audioCtx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = bassFreq;

    const g = audioCtx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.22, t + 0.08);
    g.gain.linearRampToValueAtTime(0.10, t + 1.2);
    g.gain.linearRampToValueAtTime(0, t + CHORD_DUR - 0.3);

    osc.connect(g);
    g.connect(lpf);
    osc.start(t);
    osc.stop(t + CHORD_DUR);
    bgNodes.push(osc, g);

    setTimeout(playBass, CHORD_DUR * 1000);
  };

  const MELODY = [523.25, 587.33, 659.25, 783.99, 880.00, 783.99, 659.25];
  let melStep = 0;
  let melChordCount = 0;

  const scheduleMelody = () => {
    if(!soundOn || myRunId !== arpRunId) return;
    melChordCount++;
    if(melChordCount % 2 === 0){
      const t = audioCtx.currentTime + 0.6; 
      const freq = MELODY[melStep % MELODY.length];
      melStep++;

      const o = audioCtx.createOscillator();
      o.type = 'sine';
      o.frequency.value = freq;

      const g = audioCtx.createGain();
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.028, t + 0.12);
      g.gain.linearRampToValueAtTime(0.018, t + 1.2);
      g.gain.linearRampToValueAtTime(0, t + 2.8);

      o.connect(g);
      g.connect(lpf);
      o.start(t);
      o.stop(t + 3.0);
      bgNodes.push(o, g);
    }
    setTimeout(scheduleMelody, CHORD_DUR * 1000);
  };

  setTimeout(()=>{ playChord(); playBass(); scheduleMelody(); }, 1000);
  setTimeout(spawnCrackle, 300);
}

function stopBgMusic(){
  arpRunId++;  
  if(arpTimerId){ clearTimeout(arpTimerId); arpTimerId = null; }
  const now = audioCtx ? audioCtx.currentTime : 0;
  
  if(bgMaster){
    try{
      bgMaster.gain.cancelScheduledValues(now);
      bgMaster.gain.setValueAtTime(bgMaster.gain.value, now);
      bgMaster.gain.linearRampToValueAtTime(0, now + 0.25);
    }catch(e){}
  }

  const nodesToKill = bgNodes;
  bgNodes = [];
  bgMaster = null;

  setTimeout(()=>{
    nodesToKill.forEach(n=>{
      try{ if(n.stop) n.stop(); }catch(e){}
      try{ n.disconnect(); }catch(e){}
    });
  }, 300);
}

function toggleSound(){
  ensureCtx();
  soundOn = !soundOn;
  const tog = document.getElementById('sound-toggle');
  const lbl = document.getElementById('sound-label');
  if(soundOn){ 
    tog.classList.add('on'); 
    lbl.textContent = 'Background music: On'; 
    startBgMusic(); 
  } else { 
    tog.classList.remove('on'); 
    lbl.textContent = 'Background music: Off'; 
    stopBgMusic(); 
  }
}

/* SFX */
function playSfx(type){
  if(!sfxEnabled)return;
  ensureCtx();
  const t=audioCtx.currentTime;
  if(type==='correct'){
    [[523.25,0],[659.25,0.1],[783.99,0.2]].forEach(([f,d])=>{
      const o=audioCtx.createOscillator(),g=audioCtx.createGain();
      o.type='sine'; o.frequency.value=f;
      g.gain.setValueAtTime(0,t+d);
      g.gain.linearRampToValueAtTime(0.18,t+d+0.03);
      g.gain.exponentialRampToValueAtTime(0.001,t+d+0.35);
      o.connect(g);g.connect(audioCtx.destination);
      o.start(t+d);o.stop(t+d+0.4);
    });
  } else if(type==='wrong'){
    [[180,0],[160,0.1]].forEach(([f,d])=>{
      const o=audioCtx.createOscillator(),g=audioCtx.createGain();
      o.type='sawtooth'; o.frequency.value=f;
      g.gain.setValueAtTime(0,t+d);
      g.gain.linearRampToValueAtTime(0.12,t+d+0.02);
      g.gain.exponentialRampToValueAtTime(0.001,t+d+0.25);
      o.connect(g);g.connect(audioCtx.destination);
      o.start(t+d);o.stop(t+d+0.3);
    });
  } else if(type==='click'){
    const o=audioCtx.createOscillator(),g=audioCtx.createGain();
    o.type='sine';o.frequency.value=880;
    g.gain.setValueAtTime(0.07,t);
    g.gain.exponentialRampToValueAtTime(0.001,t+0.08);
    o.connect(g);g.connect(audioCtx.destination);
    o.start(t);o.stop(t+0.1);
  } else if(type==='streak'){
    [523,659,784,1047].forEach((f,i)=>{
      const o=audioCtx.createOscillator(),g=audioCtx.createGain();
      o.type='triangle';o.frequency.value=f;
      const d=i*0.08;
      g.gain.setValueAtTime(0,t+d);
      g.gain.linearRampToValueAtTime(0.15,t+d+0.04);
      g.gain.exponentialRampToValueAtTime(0.001,t+d+0.3);
      o.connect(g);g.connect(audioCtx.destination);
      o.start(t+d);o.stop(t+d+0.35);
    });
  } else if(type==='timeout'){
    const o=audioCtx.createOscillator(),g=audioCtx.createGain();
    o.type='sawtooth';o.frequency.setValueAtTime(300,t);
    o.frequency.linearRampToValueAtTime(100,t+0.4);
    g.gain.setValueAtTime(0.1,t);
    g.gain.linearRampToValueAtTime(0,t+0.4);
    o.connect(g);g.connect(audioCtx.destination);
    o.start(t);o.stop(t+0.45);
  } else if(type==='complete'){
    [523,659,784,659,1047].forEach((f,i)=>{
      const o=audioCtx.createOscillator(),g=audioCtx.createGain();
      o.type='sine';o.frequency.value=f;
      const d=i*0.12;
      g.gain.setValueAtTime(0,t+d);
      g.gain.linearRampToValueAtTime(0.2,t+d+0.04);
      g.gain.exponentialRampToValueAtTime(0.001,t+d+0.4);
      o.connect(g);g.connect(audioCtx.destination);
      o.start(t+d);o.stop(t+d+0.45);
    });
  }
}

/* ══════════════════════════════════════════════
   STATE & UTILITIES
══════════════════════════════════════════════ */
let words=loadWords();
let currentMode='';
let vocabMode='syn'; 
let gameState={};

function loadWords(){ try{const s=localStorage.getItem('wordlist');if(s)return JSON.parse(s);}catch(e){} return DEFAULT_WORDS.map(w=>({...w})); }
function saveWords(list){ localStorage.setItem('wordlist',JSON.stringify(list)); words=list; }

function setVMode(m){
  vocabMode=m;
  ['syn','ant'].forEach(k=>{
    document.getElementById('vmode-'+k).className='vocab-mode-btn'+(m===k?' active':'');
  });
  playSfx('click');
}

function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if(id==='leaderboard') renderLB();
  if(id==='editor'){ words=loadWords(); renderEditor(); }
}
function goHome(){ clearTimers(); showScreen('home'); }

function shuffle(arr){ return [...arr].sort(()=>Math.random()-.5); }
function rand(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
let timers=[];
function clearTimers(){ timers.forEach(clearInterval); timers=[]; }

function popBurst(el,emoji){
  el.textContent=emoji; el.classList.remove('pop');
  void el.offsetWidth; el.classList.add('pop');
}

function showStreakBanner(n){
  document.querySelectorAll('.streak-banner').forEach(e=>e.remove());
  if(n<3)return;
  const msgs={3:'🔥 3 in a row!',5:'⚡ 5 Streak!',10:'💥 10 Streak!',15:'🚀 15! On fire!',20:'👑 20! Legend!'};
  const b=document.createElement('div'); b.className='streak-banner';
  b.textContent=msgs[n]||`🔥 ${n} in a row!`;
  document.body.appendChild(b);
  playSfx('streak');
  setTimeout(()=>b.remove(),2200);
}

function pickType(){ return vocabMode; }

function makeQuestion(pool){
  const entry=rand(pool);
  const type=pickType();
  const correct=type==='syn'?entry.syn:entry.ant;
  const others=shuffle(pool.filter(e=>e!==entry)).map(e=>type==='syn'?e.syn:e.ant).filter(v=>v&&v!==correct);
  const opts=shuffle([correct,...others.slice(0,3)]);
  return {entry,type,correct,opts};
}

/* ══════════════════════════════════════════════
   MODE: MULTIPLE CHOICE
══════════════════════════════════════════════ */
const MC_TOTAL=15,MC_TIME=15;

function startGame(mode){
  currentMode=mode; words=loadWords(); playSfx('click');
  if(mode==='mc') startMC();
  else if(mode==='match') startMatch();
  else if(mode==='fill') startFill();
  else if(mode==='streak') startStreak();
  else if(mode==='scramble') startScramble();
}

function startMC(){
  gameState={pool:shuffle(words).slice(0,MC_TOTAL),idx:0,score:0,correct:0,bestStreak:0,streak:0,answered:false};
  showScreen('mc'); mcRender();
}

function mcRender(){
  const s=gameState;
  if(s.idx>=s.pool.length){endGame('mc');return;}
  s.answered=false;
  const q=makeQuestion(s.pool); s.q=q;
  document.getElementById('mc-prog').style.width=`${(s.idx/MC_TOTAL)*100}%`;
  document.getElementById('mc-score').textContent=s.score;
  const badge=document.getElementById('mc-badge');
  badge.textContent=q.type==='syn'?'SYNONYM':'ANTONYM';
  badge.className='q-type-badge '+(q.type==='syn'?'badge-syn':'badge-ant');
  document.getElementById('mc-word').textContent=q.entry.word;
  document.getElementById('mc-instr').textContent=q.type==='syn'?'Choose the best synonym':'Choose the best antonym';
  const grid=document.getElementById('mc-opts'); grid.innerHTML='';
  q.opts.forEach(opt=>{
    const b=document.createElement('button'); b.className='opt-btn';
    const w=document.createElement('span'); w.className='opt-word'; w.textContent=opt;
    const t=document.createElement('button'); t.className='opt-tts'; t.textContent='🔊'; t.title='Speak answer';
    t.onclick=(e)=>{ e.stopPropagation(); ttsSpeak(opt,t); };
    b.appendChild(w); b.appendChild(t);
    b.onclick=(e)=>{ if(e.target===t||e.target.className==='opt-tts')return; mcAnswer(b,opt,q); };
    grid.appendChild(b);
  });
  document.getElementById('mc-fb').className='feedback-bar';
  document.getElementById('mc-next').className='next-btn';
  clearTimers(); mcTimer(MC_TIME,q);
}

function mcTimer(secs,q){
  let t=secs;
  const arc=document.getElementById('mc-arc'),num=document.getElementById('mc-time'),total=150.8;
  arc.style.stroke='var(--cyan)'; num.style.color='var(--cyan)';
  num.textContent=t;
  const id=setInterval(()=>{
    if(gameState.answered){clearInterval(id);return;}
    t--;
    arc.style.strokeDashoffset=total*(1-t/secs);
    num.textContent=t;
    if(t<=5){arc.style.stroke='var(--red)';num.style.color='var(--red)';}
    if(t<=0){clearInterval(id);if(!gameState.answered)mcTimeout(q);}
  },1000);
  timers=[id];
}

function mcAnswer(btn,opt,q){
  if(gameState.answered)return; gameState.answered=true; clearTimers();
  const ok=opt===q.correct;
  document.querySelectorAll('#mc-opts .opt-btn').forEach(b=>{
    b.disabled=true;
    if(b.textContent===q.correct)b.classList.add('correct');
    else if(b===btn&&!ok)b.classList.add('wrong');
  });
  const fb=document.getElementById('mc-fb');
  if(ok){
    gameState.score+=100; gameState.correct++; gameState.streak++;
    if(gameState.streak>gameState.bestStreak)gameState.bestStreak=gameState.streak;
    showStreakBanner(gameState.streak);
    popBurst(document.getElementById('mc-burst'),'✨');
    fb.textContent='✅ Correct! +100 pts'; fb.className='feedback-bar show ok';
    playSfx('correct');
  } else {
    gameState.streak=0;
    fb.textContent=`❌ The answer was "${q.correct}"`; fb.className='feedback-bar show bad';
    playSfx('wrong');
  }
  document.getElementById('mc-next').className='next-btn show';
}

function mcTimeout(q){
  gameState.answered=true; gameState.streak=0;
  document.querySelectorAll('#mc-opts .opt-btn').forEach(b=>{
    b.disabled=true;
    if(b.textContent===q.correct)b.classList.add('correct');
  });
  const fb=document.getElementById('mc-fb');
  fb.textContent=`⏱ Time's up! Answer: "${q.correct}"`; fb.className='feedback-bar show bad';
  document.getElementById('mc-next').className='next-btn show';
  playSfx('timeout');
}

function mcNext(){ gameState.idx++; mcRender(); playSfx('click'); }

/* ══════════════════════════════════════════════
   MODE: MATCHING 
══════════════════════════════════════════════ */
const MATCH_PAIRS=6, MATCH_TIME=90;
let matchSelLeft=null; 

function startMatch(){
  const picked=shuffle(words).slice(0,MATCH_PAIRS);
  const pairs=picked.map(e=>{
    const type=pickType();
    return {word:e.word, match:type==='syn'?e.syn:e.ant, type, done:false, id:Math.random()};
  });
  gameState={pairs, matched:0, score:0, bestStreak:0, streak:0, totalPairs:MATCH_PAIRS};
  matchSelLeft=null;
  showScreen('match');
  matchRender();
  clearTimers();
  matchTimer(MATCH_TIME);
}

function matchTimer(secs){
  let t=secs;
  const arc=document.getElementById('match-arc');
  const num=document.getElementById('match-time');
  const total=150.8;
  arc.style.stroke='var(--cyan)'; num.style.color='var(--cyan)'; num.textContent=t;
  const id=setInterval(()=>{
    if(gameState.matched>=gameState.totalPairs){clearInterval(id);return;}
    t--;
    arc.style.strokeDashoffset=total*(1-t/secs);
    num.textContent=t;
    if(t<=15){arc.style.stroke='var(--red)';num.style.color='var(--red)';}
    if(t<=0){clearInterval(id); matchTimeout();}
  },1000);
  timers=[id];
}

function matchTimeout(){
  document.querySelectorAll('#match-left .m-card:not(.matched), #match-right .m-card:not(.matched)')
    .forEach(c=>{c.onclick=null; c.classList.add('disabled');});
  const fb=document.getElementById('match-fb');
  fb.textContent=`⏱ Time\'s up! You matched ${gameState.matched} of ${gameState.totalPairs}`;
  fb.className='feedback-bar show bad';
  playSfx('timeout');
  setTimeout(()=>endGame('match'), 2000);
}

function matchRender(){
  const s=gameState;
  document.getElementById('match-score').textContent=s.score;
  document.getElementById('match-prog').style.width=`${(s.matched/s.totalPairs)*100}%`;
  document.getElementById('match-progress-text').textContent=`${s.matched} / ${s.totalPairs} matched`;

  const left=document.getElementById('match-left');
  const right=document.getElementById('match-right');
  left.innerHTML=''; right.innerHTML='';

  s.pairs.forEach((p,i)=>{
    const c=document.createElement('div');
    c.className='m-card'+(p.done?' matched':'');
    c.textContent=p.word;
    c.dataset.idx=i;
    if(!p.done) c.onclick=()=>matchClickLeft(i,c);
    left.appendChild(c);
  });

  if(!s.rightOrder){
    s.rightOrder=shuffle(s.pairs.map((_,i)=>i));
  }
  s.rightOrder.forEach(pi=>{
    const p=s.pairs[pi];
    const c=document.createElement('div');
    c.className='m-card'+(p.done?' matched':'');
    c.textContent=p.match;
    c.dataset.pairidx=pi;
    if(!p.done) c.onclick=()=>matchClickRight(pi,c);
    right.appendChild(c);
  });
}

function matchClickLeft(idx,el){
  playSfx('click');
  document.querySelectorAll('#match-left .m-card.selected').forEach(c=>c.classList.remove('selected'));
  matchSelLeft={idx,el};
  el.classList.add('selected');
}

function matchClickRight(pairIdx,el){
  if(!matchSelLeft){ 
    const fb=document.getElementById('match-fb');
    fb.textContent='👈 First select a word on the left'; fb.className='feedback-bar show bad';
    setTimeout(()=>fb.className='feedback-bar',1500);
    playSfx('wrong'); return;
  }
  const s=gameState;
  const correct=matchSelLeft.idx===pairIdx;
  const fb=document.getElementById('match-fb');

  if(correct){
    s.pairs[pairIdx].done=true; s.matched++; s.score+=100; s.streak++;
    if(s.streak>s.bestStreak)s.bestStreak=s.streak;
    showStreakBanner(s.streak);
    playSfx('correct');
    matchSelLeft.el.classList.remove('selected');
    matchSelLeft.el.classList.add('matched');
    el.classList.add('matched');
    matchSelLeft=null;
    fb.textContent=`✅ Matched! +100 pts`; fb.className='feedback-bar show ok';
    if(s.matched>=s.totalPairs){ setTimeout(()=>endGame('match'),800); return; }
    setTimeout(()=>{ fb.className='feedback-bar'; },1200);
  } else {
    s.streak=0;
    playSfx('wrong');
    matchSelLeft.el.classList.add('wrong-flash');
    el.classList.add('wrong-flash');
    fb.textContent=`❌ "${s.pairs[matchSelLeft.idx].word}" → "${s.pairs[matchSelLeft.idx].match}"`; 
    fb.className='feedback-bar show bad';
    const prevLeft=matchSelLeft.el;
    matchSelLeft=null;
    setTimeout(()=>{
      prevLeft.classList.remove('wrong-flash','selected');
      el.classList.remove('wrong-flash');
      fb.className='feedback-bar';
    },900);
  }
}

/* ══════════════════════════════════════════════
   MODE: FILL IN THE BLANK
══════════════════════════════════════════════ */
const FILL_TOTAL=12,FILL_TIME=20;

function startFill(){
  gameState={pool:shuffle(words).slice(0,FILL_TOTAL),idx:0,score:0,correct:0,bestStreak:0,streak:0,answered:false};
  showScreen('fill'); fillRender();
}

function fillRender(){
  const s=gameState;
  if(s.idx>=s.pool.length){endGame('fill');return;}
  s.answered=false;
  const entry=s.pool[s.idx]; const type=pickType();
  s.entry=entry; s.type=type; s.correct=(type==='syn'?entry.syn:entry.ant).toLowerCase();
  document.getElementById('fill-prog').style.width=`${(s.idx/FILL_TOTAL)*100}%`;
  document.getElementById('fill-score').textContent=s.score;
  const badge=document.getElementById('fill-badge');
  badge.textContent=type==='syn'?'SYNONYM':'ANTONYM';
  badge.className='q-type-badge '+(type==='syn'?'badge-syn':'badge-ant');
  document.getElementById('fill-word').textContent=entry.word;
  document.getElementById('fill-instr').textContent=type==='syn'?'Type a synonym':'Type an antonym';
  const inp=document.getElementById('fill-input');
  inp.value=''; inp.className='fill-input'; inp.disabled=false;
  inp.onkeydown=e=>{ if(e.key==='Enter')fillCheck(); };
  setTimeout(()=>inp.focus(),80);
  document.getElementById('fill-submit').disabled=false;
  document.getElementById('fill-ans-tts').style.display='none';
  document.getElementById('fill-fb').className='feedback-bar';
  document.getElementById('fill-next').className='next-btn';
  clearTimers(); fillTimer(FILL_TIME);
}

function fillTimer(secs){
  let t=secs;
  const arc=document.getElementById('fill-arc'),num=document.getElementById('fill-time'),total=150.8;
  arc.style.stroke='var(--cyan)'; num.style.color='var(--cyan)'; num.textContent=t;
  const id=setInterval(()=>{
    if(gameState.answered){clearInterval(id);return;}
    t--; arc.style.strokeDashoffset=total*(1-t/secs); num.textContent=t;
    if(t<=5){arc.style.stroke='var(--red)';num.style.color='var(--red)';}
    if(t<=0){clearInterval(id);if(!gameState.answered)fillForceCheck();}
  },1000);
  timers=[id];
}

function fillCheck(){
  const s=gameState; if(s.answered)return;
  const val=document.getElementById('fill-input').value.trim().toLowerCase();
  if(!val)return;
  s.answered=true; clearTimers();
  const inp=document.getElementById('fill-input');
  inp.disabled=true; document.getElementById('fill-submit').disabled=true;
  const ok=val===s.correct;
  if(ok){
    inp.className='fill-input correct'; s.score+=100; s.correct++; s.streak++;
    if(s.streak>s.bestStreak)s.bestStreak=s.streak;
    showStreakBanner(s.streak);
    popBurst(document.getElementById('fill-burst'),'✨');
    document.getElementById('fill-fb').textContent='✅ Correct! +100 pts';
    document.getElementById('fill-fb').className='feedback-bar show ok';
    playSfx('correct');
  } else {
    inp.className='fill-input wrong'; s.streak=0;
    document.getElementById('fill-fb').textContent=`❌ Expected "${s.correct}"`;
    document.getElementById('fill-fb').className='feedback-bar show bad';
    playSfx('wrong');
  }
  document.getElementById('fill-next').className='next-btn show';
  document.getElementById('fill-ans-tts').style.display='inline-flex';
}

function fillForceCheck(){
  gameState.answered=true; gameState.streak=0;
  document.getElementById('fill-input').disabled=true;
  document.getElementById('fill-submit').disabled=true;
  document.getElementById('fill-fb').textContent=`⏱ Time's up! Answer: "${gameState.correct}"`;
  document.getElementById('fill-fb').className='feedback-bar show bad';
  document.getElementById('fill-next').className='next-btn show';
  playSfx('timeout');
}

function fillNext(){ gameState.idx++; fillRender(); playSfx('click'); }

/* ══════════════════════════════════════════════
   MODE: STREAK
══════════════════════════════════════════════ */
function startStreak(){
  gameState={streak:0,bestStreak:0,score:0,answered:false};
  showScreen('streak'); streakRender();
}

function streakRender(){
  const s=gameState; s.answered=false;
  const q=makeQuestion(words); s.q=q;
  document.getElementById('streak-count').textContent=s.streak;
  const badge=document.getElementById('streak-badge');
  badge.textContent=q.type==='syn'?'SYNONYM':'ANTONYM';
  badge.className='q-type-badge '+(q.type==='syn'?'badge-syn':'badge-ant');
  document.getElementById('streak-word').textContent=q.entry.word;
  document.getElementById('streak-instr').textContent=q.type==='syn'?'Choose the best synonym':'Choose the best antonym';
  const grid=document.getElementById('streak-opts'); grid.innerHTML='';
  q.opts.forEach(opt=>{
    const b=document.createElement('button'); b.className='opt-btn';
    const w=document.createElement('span'); w.className='opt-word'; w.textContent=opt;
    const t=document.createElement('button'); t.className='opt-tts'; t.textContent='🔊'; t.title='Speak answer';
    t.onclick=(e)=>{ e.stopPropagation(); ttsSpeak(opt,t); };
    b.appendChild(w); b.appendChild(t);
    b.onclick=(e)=>{ if(e.target===t||e.target.className==='opt-tts')return; streakAnswer(b,opt,q); };
    grid.appendChild(b);
  });
  document.getElementById('streak-fb').className='feedback-bar';
}

function streakAnswer(btn,opt,q){
  const s=gameState; if(s.answered)return; s.answered=true;
  const ok=opt===q.correct;
  document.querySelectorAll('#streak-opts .opt-btn').forEach(b=>{
    b.disabled=true;
    if(b.textContent===q.correct)b.classList.add('correct');
    else if(b===btn&&!ok)b.classList.add('wrong');
  });
  if(ok){
    s.streak++; s.score+=100;
    if(s.streak>s.bestStreak)s.bestStreak=s.streak;
    showStreakBanner(s.streak);
    popBurst(document.getElementById('streak-burst'),'✨');
    document.getElementById('streak-fb').textContent=`✅ Correct! Streak: ${s.streak} 🔥`;
    document.getElementById('streak-fb').className='feedback-bar show ok';
    playSfx('correct');
    setTimeout(()=>streakRender(),900);
  } else {
    s.streak=0;
    document.getElementById('streak-fb').textContent=`❌ Answer: "${q.correct}" — Game over!`;
    document.getElementById('streak-fb').className='feedback-bar show bad';
    playSfx('wrong');
    setTimeout(()=>endGame('streak'),1800);
  }
}

/* ══════════════════════════════════════════════
   MODE: UNSCRAMBLE
══════════════════════════════════════════════ */
const SCR_TOTAL=12;

function scrBuildTiles(word){
  const tiles={}; const ids=[];
  word.split('').forEach((ch,i)=>{
    const id='st'+i+'_'+Math.random().toString(36).slice(2,8);
    tiles[id]={ch,used:false}; ids.push(id);
  });
  let bankOrder=shuffle(ids);
  const origSeq=word.toLowerCase();
  let tries=0;
  while(ids.length>1 && bankOrder.map(id=>tiles[id].ch).join('').toLowerCase()===origSeq && tries<15){
    bankOrder=shuffle(ids); tries++;
  }
  return {tiles,bankOrder,answer:[]};
}

function startScramble(){
  const pool=shuffle(words.filter(w=>w.word && w.word.trim().length>=3)).slice(0,SCR_TOTAL);
  gameState={pool,idx:0,score:0,correct:0,bestStreak:0,streak:0,answered:false};
  showScreen('scramble'); scrRender();
}

function scrRender(){
  const s=gameState;
  if(s.idx>=s.pool.length){endGame('scramble');return;}
  s.answered=false; s.hintUsed=false;
  const entry=s.pool[s.idx]; s.entry=entry;
  s.canHint=!!(vocabMode==='ant'?entry.ant:entry.syn);
  s.scr=scrBuildTiles(entry.word);
  document.getElementById('scr-prog').style.width=`${(s.idx/SCR_TOTAL)*100}%`;
  document.getElementById('scr-score').textContent=s.score;
  document.getElementById('scr-hint-box').textContent='';
  document.getElementById('scr-fb').className='feedback-bar';
  document.getElementById('scr-next').className='next-btn';
  document.getElementById('scr-tts-btn').style.display='none';
  scrRenderTiles();
  const secs=Math.max(16,Math.min(34,entry.word.length*2+4));
  clearTimers(); scrTimer(secs);
}

function scrRenderTiles(){
  const s=gameState.scr;
  const answerEl=document.getElementById('scr-answer');
  const bankEl=document.getElementById('scr-bank');
  answerEl.innerHTML=''; bankEl.innerHTML='';
  s.answer.forEach(id=>{
    const tile=s.tiles[id];
    const b=document.createElement('button');
    b.className='scr-tile'; b.type='button'; b.textContent=tile.ch;
    b.onclick=()=>scrRemoveTile(id);
    answerEl.appendChild(b);
  });
  const remaining=Object.keys(s.tiles).length-s.answer.length;
  for(let i=0;i<remaining;i++){
    const slot=document.createElement('div');
    slot.className='scr-tile slot-empty';
    answerEl.appendChild(slot);
  }
  s.bankOrder.forEach(id=>{
    const tile=s.tiles[id];
    if(tile.used)return;
    const b=document.createElement('button');
    b.className='scr-tile'; b.type='button'; b.textContent=tile.ch;
    b.onclick=()=>scrPlaceTile(id);
    bankEl.appendChild(b);
  });
  scrUpdateControls();
}

function scrUpdateControls(){
  const s=gameState;
  const answered=s.answered;
  const hasAnswer=!!(s.scr && s.scr.answer.length);
  document.getElementById('scr-shuffle-btn').disabled=answered;
  document.getElementById('scr-clear-btn').disabled=answered||!hasAnswer;
  document.getElementById('scr-hint-btn').disabled=answered||s.hintUsed||!s.canHint;
}

function scrPlaceTile(id){
  const s=gameState; if(s.answered)return;
  const tile=s.scr.tiles[id]; if(!tile||tile.used)return;
  tile.used=true; s.scr.answer.push(id);
  playSfx('click');
  scrRenderTiles();
  if(s.scr.answer.length===Object.keys(s.scr.tiles).length) scrCheck();
}

function scrPlaceLetter(letter){
  const s=gameState; if(!s||s.answered||!s.scr)return;
  const id=s.scr.bankOrder.find(id=>!s.scr.tiles[id].used && s.scr.tiles[id].ch.toLowerCase()===letter);
  if(id) scrPlaceTile(id);
}

function scrRemoveTile(id){
  const s=gameState; if(s.answered)return;
  const idx=s.scr.answer.indexOf(id); if(idx===-1)return;
  s.scr.answer.splice(idx,1);
  s.scr.tiles[id].used=false;
  playSfx('click');
  scrRenderTiles();
}

function scrRemoveLast(){
  const s=gameState; if(!s||s.answered||!s.scr||!s.scr.answer.length)return;
  scrRemoveTile(s.scr.answer[s.scr.answer.length-1]);
}

function scrClearAnswer(){
  const s=gameState; if(!s||s.answered||!s.scr||!s.scr.answer.length)return;
  s.scr.answer.forEach(id=>s.scr.tiles[id].used=false);
  s.scr.answer=[];
  playSfx('click');
  scrRenderTiles();
}

function scrShuffleBank(){
  const s=gameState; if(!s||s.answered||!s.scr)return;
  s.scr.bankOrder=shuffle(s.scr.bankOrder);
  playSfx('click');
  scrRenderTiles();
}

function scrRevealHint(){
  const s=gameState; if(!s||s.answered||s.hintUsed||!s.canHint)return;
  s.hintUsed=true;
  const isAnt=vocabMode==='ant';
  const hintWord=isAnt?s.entry.ant:s.entry.syn;
  const box=document.getElementById('scr-hint-box');
  box.innerHTML='';
  const label=document.createElement('span');
  label.textContent=isAnt?'💡 Hint (antonym):':'💡 Hint (synonym):';
  const val=document.createElement('span');
  val.className='no-i18n'; val.style.marginLeft='6px'; val.style.color='var(--text)'; val.style.fontWeight='800';
  val.textContent=hintWord;
  box.appendChild(label); box.appendChild(val);
  playSfx('click');
  scrUpdateControls();
}

function scrTimer(secs){
  let t=secs;
  const arc=document.getElementById('scr-arc'),num=document.getElementById('scr-time'),total=150.8;
  arc.style.stroke='var(--cyan)'; num.style.color='var(--cyan)'; num.textContent=t;
  const id=setInterval(()=>{
    if(gameState.answered){clearInterval(id);return;}
    t--; arc.style.strokeDashoffset=total*(1-t/secs); num.textContent=t;
    if(t<=5){arc.style.stroke='var(--red)';num.style.color='var(--red)';}
    if(t<=0){clearInterval(id); if(!gameState.answered) scrTimeout();}
  },1000);
  timers=[id];
}

function scrCheck(){
  const s=gameState; if(s.answered)return;
  s.answered=true; clearTimers();
  const seq=s.scr.answer.map(id=>s.scr.tiles[id].ch).join('').toLowerCase();
  const ok=seq===s.entry.word.toLowerCase();
  document.querySelectorAll('#scr-answer .scr-tile:not(.slot-empty)').forEach(b=>{b.disabled=true;b.classList.add(ok?'correct':'wrong');});
  document.querySelectorAll('#scr-bank .scr-tile').forEach(b=>b.disabled=true);
  const fb=document.getElementById('scr-fb');
  if(ok){
    const pts=s.hintUsed?50:100;
    s.score+=pts; s.correct++; s.streak++;
    if(s.streak>s.bestStreak)s.bestStreak=s.streak;
    showStreakBanner(s.streak);
    popBurst(document.getElementById('scr-burst'),'✨');
    fb.textContent=`✅ Correct! +${pts} pts`;
    fb.className='feedback-bar show ok';
    playSfx('correct');
  } else {
    s.streak=0;
    fb.textContent=`❌ Expected "${s.entry.word}"`;
    fb.className='feedback-bar show bad';
    playSfx('wrong');
  }
  document.getElementById('scr-next').className='next-btn show';
  document.getElementById('scr-tts-btn').style.display='block';
  scrUpdateControls();
}

function scrTimeout(){
  const s=gameState; if(s.answered)return;
  s.answered=true; s.streak=0; clearTimers();
  document.querySelectorAll('#scr-answer .scr-tile:not(.slot-empty), #scr-bank .scr-tile').forEach(b=>b.disabled=true);
  const fb=document.getElementById('scr-fb');
  fb.textContent=`⏱ Time's up! Answer: "${s.entry.word}"`;
  fb.className='feedback-bar show bad';
  document.getElementById('scr-next').className='next-btn show';
  document.getElementById('scr-tts-btn').style.display='block';
  playSfx('timeout');
  scrUpdateControls();
}

function scrNext(){ gameState.idx++; scrRender(); playSfx('click'); }

document.addEventListener('keydown', (e)=>{
  if(currentMode!=='scramble')return;
  const scr=document.getElementById('scramble');
  if(!scr||!scr.classList.contains('active'))return;
  const s=gameState; if(!s||s.answered)return;
  if(e.key==='Backspace'){ e.preventDefault(); scrRemoveLast(); return; }
  if(/^[a-zA-Z]$/.test(e.key)) scrPlaceLetter(e.key.toLowerCase());
});

/* ══════════════════════════════════════════════
   END GAME
══════════════════════════════════════════════ */
function endGame(mode){
  clearTimers(); playSfx('complete');
  const s=gameState;
  const total=mode==='mc'?MC_TOTAL:mode==='fill'?FILL_TOTAL:mode==='match'?s.totalPairs:mode==='scramble'?SCR_TOTAL:null;
  const correctCount=s.correct??s.matched??s.bestStreak??0;
  const acc=total?Math.round((correctCount/total)*100):null;
  const icons={mc:'🎯',match:'🔗',fill:'✍️',streak:'🔥',scramble:'🔀'};
  const titles={mc:'Round Complete!',match:'All Matched!',fill:'Round Complete!',streak:'Streak Over!',scramble:'Round Complete!'};
  document.getElementById('res-icon').textContent=icons[mode]||'🎉';
  document.getElementById('res-title').textContent=titles[mode]||'Done!';
  document.getElementById('res-sub').textContent=mode==='streak'?`Best streak: ${s.bestStreak}`:'Here\'s how you did';
  const incorrectCount=total!==null?total-correctCount:null;
  document.getElementById('res-score').textContent=s.score;
  document.getElementById('res-correct').textContent=correctCount;
  document.getElementById('res-incorrect').textContent=incorrectCount!==null?incorrectCount:'—';
  document.getElementById('res-streak').textContent=s.bestStreak||0;
  document.getElementById('res-acc').textContent=acc!==null?acc+'%':s.score+' pts';
  document.getElementById('res-name').value='';
  document.getElementById('save-toast').className='save-toast';
  gameState._mode=mode; gameState._total=total; gameState._acc=acc;
  showScreen('results');
}

function playAgain(){ startGame(gameState._mode||currentMode); }

/* ══════════════════════════════════════════════
   LEADERBOARD
══════════════════════════════════════════════ */
function getLB(){ try{return JSON.parse(localStorage.getItem('leaderboard')||'[]');}catch(e){return[];} }
function setLB(d){ localStorage.setItem('leaderboard',JSON.stringify(d)); }

function saveScore(){
  const name=document.getElementById('res-name').value.trim()||'Anonymous';
  const lb=getLB();
  lb.push({name,score:gameState.score,mode:gameState._mode,acc:gameState._acc,date:Date.now()});
  lb.sort((a,b)=>b.score-a.score);
  setLB(lb.slice(0,20));
  document.getElementById('save-toast').className='save-toast show';
  playSfx('correct');
}

function renderLB(){
  const lb=getLB();
  const list=document.getElementById('lb-list');
  if(!lb.length){list.innerHTML='<div class="lb-empty">No scores yet. Play a round!</div>';return;}
  const ml={mc:'Multiple Choice',match:'Matching',fill:'Fill in Blank',streak:'Streak',scramble:'Unscramble'};
  list.innerHTML=lb.map((e,i)=>{
    const rc=i===0?'gold':i===1?'silver':i===2?'bronze':'';
    const medal=i===0?'🥇':i===1?'🥈':i===2?'🥉':i+1;
    return `<div class="lb-row">
      <div class="lb-rank ${rc}">${medal}</div>
      <div class="lb-name">${e.name}<div class="lb-mode">${ml[e.mode]||e.mode} · ${new Date(e.date).toLocaleDateString()}</div></div>
      <div class="lb-score">${e.score}</div>
    </div>`;
  }).join('');
}

function clearLB(){ if(confirm('Clear all scores?')){localStorage.removeItem('leaderboard');renderLB();} }

/* ══════════════════════════════════════════════
   WORD EDITOR
══════════════════════════════════════════════ */
function renderEditor(){
  const list=loadWords();
  document.getElementById('editor-body').innerHTML=list.map((w,i)=>`
    <tr data-idx="${i}">
      <td><input value="${escHtml(w.word)}" onchange="editorChange(${i},'word',this.value)"/></td>
      <td><input value="${escHtml(w.syn)}"  onchange="editorChange(${i},'syn', this.value)"/></td>
      <td><input value="${escHtml(w.ant)}"  onchange="editorChange(${i},'ant', this.value)"/></td>
      <td><button class="del-row-btn" onclick="editorDel(${i})">🗑</button></td>
    </tr>`).join('');
  document.getElementById('editor-toast').className='save-toast';
}

function escHtml(s){ return (s||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;'); }

function editorChange(i,field,val){
  const d=loadWords(); d[i][field]=val; saveWords(d);
}
function editorDel(i){
  const d=loadWords(); d.splice(i,1); saveWords(d); renderEditor();
}
function editorAddRow(){
  const d=loadWords(); d.push({word:'',syn:'',ant:''}); saveWords(d); renderEditor();
  setTimeout(()=>{ const rows=document.querySelectorAll('#editor-body tr');
    const last=rows[rows.length-1]; if(last)last.querySelector('input').focus(); },50);
}
function editorSave(){
  const rows=document.querySelectorAll('#editor-body tr'); const d=[];
  rows.forEach(row=>{
    const ins=row.querySelectorAll('input');
    const word=ins[0].value.trim(),syn=ins[1].value.trim(),ant=ins[2].value.trim();
    if(word)d.push({word,syn,ant});
  });
  saveWords(d);
  document.getElementById('editor-toast').className='save-toast show';
  setTimeout(()=>document.getElementById('editor-toast').className='save-toast',2200);
  playSfx('correct');
}

/* ── DELETE ALL WORDS ── */
function openDeleteAllModal(){
  const list=loadWords();
  document.getElementById('delete-count-label').textContent=list.length;
  document.getElementById('confirm-delete-modal').className='modal-overlay show';
}
function closeDeleteAllModal(){
  document.getElementById('confirm-delete-modal').className='modal-overlay';
}
function confirmDeleteAll(){
  saveWords([]);
  closeDeleteAllModal();
  renderEditor();
  playSfx('wrong');
}

/* ── UPLOAD WORD LIST (.txt) ── */
let pendingUploadWords=null;

function openUploadModal(){
  document.getElementById('upload-file-name').textContent='Choose .txt file…';
  document.getElementById('upload-preview').style.display='none';
  document.getElementById('upload-err').className='modal-err';
  document.getElementById('upload-confirm-btn').style.opacity='.4';
  document.getElementById('upload-confirm-btn').style.pointerEvents='none';
  document.getElementById('upload-file-input').value='';
  pendingUploadWords=null;
  document.getElementById('confirm-upload-modal').className='modal-overlay show';
}
function closeUploadModal(){
  document.getElementById('confirm-upload-modal').className='modal-overlay';
}

function parseWordTxt(text, expectFields){
  const normalized = String(text || '').replace(/^\uFEFF/, '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const rawLines = normalized.split('\n');
  if(rawLines.length && rawLines[rawLines.length - 1].trim() === '') rawLines.pop();
  const results = [];
  const errors = [];
  rawLines.forEach((rawLine, idx)=>{
    const lineNo = idx + 1;
    const line = rawLine.trim();
    if(!line){
      errors.push(`Line ${lineNo}: blank lines are not allowed`);
      return;
    }
    const parts = line.split('\t');
    if(parts.length !== expectFields){
      errors.push(`Line ${lineNo}: expected exactly ${expectFields} TAB-separated fields`);
      return;
    }
    const values = [];
    for(let i = 0; i < parts.length; i++){
      const field = parts[i].trim();
      if(!field.endsWith(';')){
        errors.push(`Line ${lineNo}: field ${i+1} must end with a semicolon`);
        return;
      }
      const value = field.slice(0, -1).trim();
      if(value.includes(';')){
        errors.push(`Line ${lineNo}: field ${i+1} contains an extra semicolon`);
        return;
      }
      if(i < 3 && !value){
        errors.push(`Line ${lineNo}: word, synonym, and antonym are required`);
        return;
      }
      values.push(value);
    }
    const entry = { word: values[0], syn: values[1], ant: values[2] };
    if(expectFields === 4) entry.def = values[3] || '';
    results.push(entry);
  });
  return { results: errors.length ? [] : results, errors, totalLines: rawLines.length };
}

function handleUploadFile(input){
  const file=input.files&&input.files[0];
  const errEl=document.getElementById('upload-err');
  errEl.className='modal-err';
  if(!file)return;
  if(!file.name.toLowerCase().endsWith('.txt')){
    errEl.textContent='Please choose a .txt file.';
    errEl.className='modal-err show';
    return;
  }
  document.getElementById('upload-file-name').textContent=file.name;
  const reader=new FileReader();
  reader.onload=(e)=>{
    const {results,errors,totalLines}=parseWordTxt(e.target.result,3);
    const preview=document.getElementById('upload-preview');
    const btn=document.getElementById('upload-confirm-btn');
    preview.style.display='none';
    btn.style.opacity='.4';btn.style.pointerEvents='none';
    pendingUploadWords=null;
    if(errors.length){
      errEl.textContent='Upload rejected. Fix the listed line(s) and try again.';
      errEl.className='modal-err show';
      preview.innerHTML=errors.slice(0,8).map(escHtml).join('<br>')+(errors.length>8?'<br>…and '+(errors.length-8)+' more':'');
      preview.style.display='block';
      return;
    }
    if(!results.length){
      errEl.textContent='No valid words found. Check the file format.';
      errEl.className='modal-err show';
      return;
    }
    errEl.className='modal-err';
    pendingUploadWords=results;
    let html=`<strong>${results.length} word${results.length===1?'':'s'} found</strong> (of ${totalLines} lines)<br><br>`;
    html+=results.slice(0,5).map(w=>`${escHtml(w.word)} — ${escHtml(w.syn)} / ${escHtml(w.ant)}`).join('<br>');
    if(results.length>5)html+=`<br>…and ${results.length-5} more`;
    preview.innerHTML=html;
    preview.style.display='block';
    btn.style.opacity='1';btn.style.pointerEvents='auto';
  };
  reader.onerror=()=>{
    errEl.textContent='Could not read that file. Please try again.';
    errEl.className='modal-err show';
  };
  reader.readAsText(file);
}

function confirmUpload(){
  if(!pendingUploadWords||!pendingUploadWords.length)return;
  saveWords(pendingUploadWords);
  pendingUploadWords=null;
  closeUploadModal();
  renderEditor();
  playSfx('correct');
}

/* ══════════════════════════════════════════════
   TEXT-TO-SPEECH
══════════════════════════════════════════════ */
function ttsSpeak(text, btnEl){
  if(!text || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  document.querySelectorAll('.tts-btn.speaking, .opt-tts.speaking').forEach(b=>{
    b.classList.remove('speaking');
  });

  const utt = new SpeechSynthesisUtterance(text.trim());
  utt.lang = 'en-US';
  utt.rate = 0.85;   
  utt.pitch = 1.0;

  if(btnEl){
    btnEl.classList.add('speaking');
    utt.onend = () => btnEl.classList.remove('speaking');
    utt.onerror = () => btnEl.classList.remove('speaking');
  }

  window.speechSynthesis.speak(utt);
}