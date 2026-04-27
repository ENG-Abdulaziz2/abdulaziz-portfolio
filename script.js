body {
  margin: 0;
  font-family: Arial;
}

/* NAVBAR */
.nav {
  position: fixed;
  width: 100%;
  top: 0;
  background: black;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  z-index: 1000;
}

/* القائمة */
.nav ul {
  display: flex;
  gap: 20px;
  list-style: none;
}

/* الروابط */
.nav a {
  color: white;
  text-decoration: none;
}

/* 🔥 زر المينيو (مخفي في اللابتوب) */
.menu-btn {
  display: none;
  font-size: 24px;
  cursor: pointer;
}

/* السكشن */
section {
  height: 100vh;
  padding-top: 80px;
}

/* ===================== */
/* 📱 الجوال */
/* ===================== */
@media (max-width: 768px) {

  /* يظهر زر ☰ */
  .menu-btn {
    display: block;
  }

  /* يخفي القائمة */
  .nav ul {
    display: none;
    position: absolute;
    top: 60px;
    right: 10px;
    background: black;
    flex-direction: column;
    padding: 15px;
    border-radius: 8px;
  }

  /* عند الضغط */
  .nav ul.show {
    display: flex;
  }
}
