// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyBIeHu7Y88tuntQHUZaWLWsTf_ywzpnZQ4",
    authDomain: "neonxbyte-course.firebaseapp.com",
    projectId: "neonxbyte-course",
    storageBucket: "neonxbyte-course.firebasestorage.app",
    messagingSenderId: "241445961152",
    appId: "1:241445961152:web:712fb8b717d0ffd84a5c25",
    measurementId: "G-QN3B7ZX4PN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
        await auth.signInWithEmailAndPassword(email, password);
        alert('Login successful');
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('logoutButton').style.display = 'block';
    } catch (error) {
        alert(error.message);
    }
});

document.getElementById('logoutButton').addEventListener('click', async () => {
    await auth.signOut();
    alert('Logged out');
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('logoutButton').style.display = 'none';
});

auth.onAuthStateChanged((user) => {
    if (user) {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('logoutButton').style.display = 'block';
    } else {
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('logoutButton').style.display = 'none';
    }
});

// আপনার পূর্বের স্ক্রিপ্ট
const playlistUrl = 'https://sultan-m3u-playlist-api.onrender.com/playlist.m3u8';
// Rest of the playlist parsing and channel management logic